import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Admin-only: manually record a prepaid credit purchase as PAID
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { attorneyId, leadType, quantity, unitPrice, notes } = body;

  if (!attorneyId || !leadType || !quantity || unitPrice == null) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!["FORM_FILL", "AI_CALL", "HOT_TRANSFER"].includes(leadType)) {
    return NextResponse.json({ error: "Invalid lead type" }, { status: 400 });
  }

  const qty = parseInt(quantity, 10);
  const price = parseFloat(unitPrice);
  if (isNaN(qty) || qty < 1) return NextResponse.json({ error: "Invalid quantity" }, { status: 400 });
  if (isNaN(price) || price < 0) return NextResponse.json({ error: "Invalid price" }, { status: 400 });

  const subtotal = Math.round(price * qty * 100) / 100;

  const purchase = await prisma.leadCreditPurchase.create({
    data: {
      attorneyId,
      leadType: leadType as any,
      quantity: qty,
      unitPrice: price,
      subtotal,
      processingFee: 0,
      totalCharged: subtotal,
      status: "PAID",
      paymentIntentId: notes ? `admin-credit: ${notes}` : "admin-credit",
    },
  });

  return NextResponse.json({ success: true, purchase });
}
