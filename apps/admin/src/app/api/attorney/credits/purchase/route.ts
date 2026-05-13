import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { LEAD_PRICING, getPriceWithFee } from "@/lib/leadPricing";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.userId || session.user.role !== "attorney") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const attorneyId = session.user.userId;

  try {
    const body = await req.json();
    const { leadType, quantity } = body;

    if (!leadType || !quantity) {
      return NextResponse.json({ error: "leadType and quantity are required" }, { status: 400 });
    }

    if (!["FORM_FILL", "AI_CALL", "HOT_TRANSFER"].includes(leadType)) {
      return NextResponse.json({ error: "Invalid lead type" }, { status: 400 });
    }

    const qty = parseInt(quantity, 10);
    if (isNaN(qty) || qty < 1 || qty > 50) {
      return NextResponse.json({ error: "Quantity must be between 1 and 50" }, { status: 400 });
    }

    const pricing = LEAD_PRICING[leadType as keyof typeof LEAD_PRICING];
    const { subtotal: unitSubtotal, processingFee: unitFee, total: unitTotal } = getPriceWithFee(pricing.basePrice);

    const subtotal = unitSubtotal * qty;
    const processingFee = Math.round(unitFee * qty * 100) / 100;
    const totalCharged = Math.round(unitTotal * qty * 100) / 100;

    // Create purchase record
    const purchase = await prisma.leadCreditPurchase.create({
      data: {
        attorneyId,
        leadType: leadType as any,
        quantity: qty,
        unitPrice: unitTotal,
        subtotal,
        processingFee,
        totalCharged,
        status: "PENDING",
      },
    });

    // Call Airwallex — two-step: authenticate then create payment intent
    const clientId = process.env.AIRWALLEX_CLIENT_ID;
    const apiKey = process.env.AIRWALLEX_API_KEY;
    const airwallexBase = "https://api.airwallex.com";

    if (!clientId || !apiKey) {
      return NextResponse.json({
        clientSecret: null,
        purchaseId: purchase.id,
        error: "Payment not configured",
      });
    }

    try {
      // Step 1: Get access token
      const authRes = await fetch(`${airwallexBase}/api/v1/authentication/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-client-id": clientId,
          "x-api-key": apiKey,
        },
      });

      const authData = await authRes.json();

      if (!authRes.ok || !authData.token) {
        console.error("Airwallex auth error:", authData);
        return NextResponse.json({
          clientSecret: null,
          purchaseId: purchase.id,
          error: "Payment gateway authentication failed",
        });
      }

      const accessToken: string = authData.token;

      // Step 2: Create payment intent
      const intentRes = await fetch(`${airwallexBase}/api/v1/pa/payment_intents/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          amount: totalCharged,
          currency: "USD",
          merchant_order_id: purchase.id,
          descriptor: "Lead Credits - GetLegalLeads",
        }),
      });

      const intentData = await intentRes.json();

      if (!intentRes.ok) {
        console.error("Airwallex intent error:", intentData);
        return NextResponse.json({
          clientSecret: null,
          purchaseId: purchase.id,
          error: "Payment gateway error",
        });
      }

      // Update purchase with payment intent ID
      await prisma.leadCreditPurchase.update({
        where: { id: purchase.id },
        data: { paymentIntentId: intentData.id ?? null },
      });

      // Return client_secret for Airwallex.js on the frontend
      return NextResponse.json({
        clientSecret: intentData.client_secret,
        intentId: intentData.id,
        purchaseId: purchase.id,
      });
    } catch (awErr) {
      console.error("Airwallex error:", awErr);
      return NextResponse.json({
        clientSecret: null,
        purchaseId: purchase.id,
        error: "Payment gateway error",
      });
    }
  } catch (err) {
    console.error("Credits purchase error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
