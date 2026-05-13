import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.userId || session.user.role !== "attorney") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const attorneyId = session.user.userId;

  const attorney = await prisma.attorney.findUnique({
    where: { id: attorneyId },
    select: { name: true, firmName: true },
  });

  if (!attorney) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Get all PAID credit purchases
  const purchases = await prisma.leadCreditPurchase.findMany({
    where: { attorneyId },
    orderBy: { createdAt: "desc" },
  });

  // Get leads received by type
  const leads = await prisma.lead.findMany({
    where: {
      site: { attorneyId },
      leadType: { not: null },
    },
    select: { leadType: true },
  });

  const leadTypeCounts: Record<string, number> = {};
  for (const lead of leads) {
    if (lead.leadType) {
      leadTypeCounts[lead.leadType] = (leadTypeCounts[lead.leadType] ?? 0) + 1;
    }
  }

  const leadTypes = ["FORM_FILL", "AI_CALL", "HOT_TRANSFER"] as const;

  const summary = leadTypes.map((lt) => {
    const paidPurchases = purchases.filter((p) => p.leadType === lt && p.status === "PAID");
    const purchased = paidPurchases.reduce((sum, p) => sum + p.quantity, 0);
    const received = leadTypeCounts[lt] ?? 0;
    return {
      leadType: lt,
      purchased,
      received,
      available: Math.max(0, purchased - received),
    };
  });

  // Recent purchases (pending/failed/paid) for display
  const pending = purchases.slice(0, 20).map((p) => ({
    id: p.id,
    leadType: p.leadType,
    quantity: p.quantity,
    totalCharged: p.totalCharged,
    status: p.status,
    createdAt: p.createdAt,
  }));

  return NextResponse.json({
    summary,
    pending,
    attorneyName: attorney.name,
    firmName: attorney.firmName,
  });
}
