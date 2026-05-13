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

  // Update existing site by ID (allows changing the domain itself)
  if (body.id) {
    try {
      const site = await prisma.site.update({
        where: { id: body.id },
        data: {
          domain: body.domain,
          practiceArea: body.practiceArea ?? "Personal Injury",
          city: body.city ?? "",
          state: body.state ?? "",
          formFillPrice: body.formFillPrice ?? 0,
          aiCallPrice: body.aiCallPrice ?? 0,
          hotTransferPrice: body.hotTransferPrice ?? 0,
          attorneyId: body.attorneyId ?? null,
        },
      });
      return NextResponse.json(site);
    } catch (e: any) {
      if (e?.code === "P2002") {
        return NextResponse.json({ error: "That domain is already used by another site" }, { status: 409 });
      }
      return NextResponse.json({ error: "Failed to update site" }, { status: 500 });
    }
  }

  // Create or upsert by domain
  const site = await prisma.site.upsert({
    where: { domain: body.domain },
    update: {
      formFillPrice: body.formFillPrice ?? 0,
      aiCallPrice: body.aiCallPrice ?? 0,
      hotTransferPrice: body.hotTransferPrice ?? 0,
      attorneyId: body.attorneyId ?? null,
    },
    create: {
      domain: body.domain,
      practiceArea: body.practiceArea ?? "Personal Injury",
      city: body.city ?? "",
      state: body.state ?? "",
      formFillPrice: body.formFillPrice ?? 0,
      aiCallPrice: body.aiCallPrice ?? 0,
      hotTransferPrice: body.hotTransferPrice ?? 0,
      attorneyId: body.attorneyId ?? null,
    },
  });
  return NextResponse.json(site);
}
