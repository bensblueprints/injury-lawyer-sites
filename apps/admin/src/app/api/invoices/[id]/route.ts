import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const data: Record<string, unknown> = {};
  if (body.status !== undefined) {
    data.status = body.status;
    if (body.status === "PAID") {
      data.paidAt = new Date();
    }
  }
  const invoice = await prisma.invoice.update({
    where: { id: params.id },
    data,
    include: { attorney: true, leads: true },
  });
  return NextResponse.json(invoice);
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const invoice = await prisma.invoice.findUniqueOrThrow({
    where: { id: params.id },
    include: { attorney: true, leads: true },
  });
  return NextResponse.json(invoice);
}
