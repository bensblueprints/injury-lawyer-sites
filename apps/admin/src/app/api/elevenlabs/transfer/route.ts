import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isBusinessHours } from "@/lib/businessHours";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, caseType, message, domain } = body;

    if (!name || !phone || !domain) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Look up the site and its assigned attorney
    const site = await prisma.site.findFirst({
      where: { domain },
      include: { attorney: true },
    });

    // Save the lead
    await prisma.lead.create({
      data: {
        domain,
        siteId: site?.id ?? null,
        name,
        phone,
        email: email ?? "",
        caseType: caseType ?? "General Inquiry",
        message: message ?? null,
        leadType: "HOT_TRANSFER",
      },
    });

    const attorney = site?.attorney;

    // After hours — lead saved, attorney will follow up
    if (!isBusinessHours(domain)) {
      return NextResponse.json({
        status: "after_hours",
        instruction:
          "Lead saved. Tell the caller: our office is currently closed but an attorney will call them back during business hours — Monday through Friday 8am to 8pm, or Saturday 9am to 5pm. Then say goodbye and end the call.",
      });
    }

    // No attorney assigned — lead saved
    if (!attorney) {
      return NextResponse.json({
        status: "logged",
        instruction:
          "Lead saved. Tell the caller an attorney will call them back shortly, say goodbye, and end the call.",
      });
    }

    // Attorney assigned — instruct agent to do live transfer using transfer_to_number built-in tool
    return NextResponse.json({
      status: "transfer",
      instruction: `Lead saved. Say "Please hold while I connect you with ${attorney.name}" then immediately call the transfer_to_number tool.`,
    });
  } catch (e) {
    console.error("ElevenLabs transfer error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
