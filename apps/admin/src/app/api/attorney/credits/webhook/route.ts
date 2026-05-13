import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Airwallex webhook: payment.intent.updated events
    const eventType = body?.name ?? body?.event_type ?? body?.type;
    const intentData = body?.data?.object ?? body?.data ?? body?.payment_intent;

    if (!intentData) {
      return NextResponse.json({ received: true });
    }

    if (eventType === "payment_intent.created" || eventType === "payment.intent.updated" || eventType === "payment_intent.succeeded") {
      const intentId = intentData.id;
      const status = intentData.status;

      if (status === "SUCCEEDED" && intentId) {
        await prisma.leadCreditPurchase.updateMany({
          where: { paymentIntentId: intentId },
          data: { status: "PAID" },
        });
      } else if ((status === "FAILED" || status === "CANCELLED") && intentId) {
        await prisma.leadCreditPurchase.updateMany({
          where: { paymentIntentId: intentId, status: "PENDING" },
          data: { status: "FAILED" },
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Airwallex webhook error:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
