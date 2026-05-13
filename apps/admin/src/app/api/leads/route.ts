import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { domain, name, phone, email, caseType, message } = body;
    if (!domain || !name || !phone || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const site = await prisma.site.findFirst({ where: { domain } });
    const lead = await prisma.lead.create({
      data: {
        domain,
        siteId: site?.id ?? null,
        name,
        phone,
        email,
        caseType: caseType ?? "General",
        message: message ?? null,
      },
    });
    return NextResponse.json({ success: true, id: lead.id });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      site: {
        select: {
          domain: true,
          practiceArea: true,
          attorney: { select: { name: true } },
        },
      },
    },
  });
  return NextResponse.json(leads);
}
