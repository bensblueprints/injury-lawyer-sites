import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const invoices = await prisma.invoice.findMany({
    orderBy: { createdAt: "desc" },
    include: { attorney: true, leads: true },
  });
  return NextResponse.json(invoices);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const attorney = await prisma.attorney.findUniqueOrThrow({
    where: { id: body.attorneyId },
  });
  const sites = await prisma.site.findMany({
    where: { attorneyId: attorney.id },
  });
  const leads = await prisma.lead.findMany({
    where: { id: { in: body.leadIds } },
  });

  // Calculate amount using per-lead-type pricing
  let amount = 0;
  for (const lead of leads) {
    const site = sites.find((s) => s.domain === lead.domain);
    if (!site) continue;
    const type = lead.leadType;
    if (type === "HOT_TRANSFER") amount += site.hotTransferPrice;
    else if (type === "AI_CALL") amount += site.aiCallPrice;
    else amount += site.formFillPrice;
  }

  const invoice = await prisma.invoice.create({
    data: {
      attorneyId: attorney.id,
      amount,
      notes: body.notes ?? null,
      leads: { connect: body.leadIds.map((id: string) => ({ id })) },
    },
    include: { leads: true, attorney: true },
  });
  await prisma.lead.updateMany({
    where: { id: { in: body.leadIds } },
    data: { status: "SOLD" },
  });
  return NextResponse.json(invoice);
}
