import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const sites = await prisma.site.findMany({
    orderBy: { createdAt: "desc" },
    include: { attorney: true, _count: { select: { leads: true } } },
  });
  return NextResponse.json(sites);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const site = await prisma.site.upsert({
    where: { domain: body.domain },
    update: {
      costPerLead: body.costPerLead,
      attorneyId: body.attorneyId ?? null,
    },
    create: {
      domain: body.domain,
      practiceArea: body.practiceArea ?? "Personal Injury",
      city: body.city ?? "",
      state: body.state ?? "",
      costPerLead: body.costPerLead ?? 0,
      attorneyId: body.attorneyId ?? null,
    },
  });
  return NextResponse.json(site);
}
