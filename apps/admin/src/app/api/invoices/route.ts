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
  // body: { attorneyId, leadIds, notes }
  const attorney = await prisma.attorney.findUniqueOrThrow({
    where: { id: body.attorneyId },
  });
  // Find cost per lead from their sites
  const sites = await prisma.site.findMany({
    where: { attorneyId: attorney.id },
  });
  // Calculate amount: for each lead, find site cost per lead
  const leads = await prisma.lead.findMany({
    where: { id: { in: body.leadIds } },
  });
  let amount = 0;
  for (const lead of leads) {
    const site = sites.find((s) => s.domain === lead.domain);
    amount += site?.costPerLead ?? 0;
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
  // Mark leads as SOLD
  await prisma.lead.updateMany({
    where: { id: { in: body.leadIds } },
    data: { status: "SOLD" },
  });
  return NextResponse.json(invoice);
}
