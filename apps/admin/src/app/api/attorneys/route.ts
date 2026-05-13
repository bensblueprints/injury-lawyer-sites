import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const attorneys = await prisma.attorney.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      sites: { include: { _count: { select: { leads: true } } } },
      _count: { select: { invoices: true } },
    },
  });
  return NextResponse.json(attorneys);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const attorney = await prisma.attorney.create({
    data: {
      name: body.name,
      firmName: body.firmName,
      email: body.email,
      phone: body.phone,
      notes: body.notes ?? null,
    },
  });
  return NextResponse.json(attorney);
}
