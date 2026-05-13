import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { domain, name, phone, email, caseType, message, conversationId, leadType } = body;
    if (!domain || !name || !phone || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Auto-detect lead type: explicit > AI call (has conversationId) > form fill
    const resolvedLeadType = leadType ?? (conversationId ? "AI_CALL" : "FORM_FILL");

    const site = await prisma.site.findFirst({
      where: { domain },
      include: { attorney: true },
    });

    const lead = await prisma.lead.create({
      data: {
        domain,
        siteId: site?.id ?? null,
        name,
        phone,
        email,
        caseType: caseType ?? "General",
        message: message ?? null,
        conversationId: conversationId ?? null,
        leadType: resolvedLeadType,
      },
    });

    // Smart routing: trigger outbound call for HOT_TRANSFER leads
    if (resolvedLeadType === "HOT_TRANSFER" && site?.attorney) {
      await triggerAttorneyNotification(site.attorney.phone, name, phone, caseType ?? "personal injury", site.city);
    }

    return NextResponse.json({ success: true, id: lead.id });
  } catch (e) {
    console.error("Lead creation error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

async function triggerAttorneyNotification(
  attorneyPhone: string,
  clientName: string,
  clientPhone: string,
  caseType: string,
  city: string
) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const phoneNumberId = process.env.ELEVENLABS_PHONE_NUMBER_ID;
  const agentId = process.env.ELEVENLABS_NOTIFY_AGENT_ID;
  if (!apiKey || !phoneNumberId || !agentId) return;

  await fetch("https://api.elevenlabs.io/v1/convai/twilio/outbound-call", {
    method: "POST",
    headers: { "xi-api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      agent_id: agentId,
      agent_phone_number_id: phoneNumberId,
      to_number: attorneyPhone,
      conversation_initiation_client_data: {
        dynamic_variables: {
          client_name: clientName,
          client_phone: clientPhone,
          case_type: caseType,
          firm_name: `${city} Injury Law Group`,
        },
      },
    }),
  }).catch(() => {});
}

export async function GET() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      site: {
        select: {
          domain: true,
          practiceArea: true,
          city: true,
          state: true,
          attorney: { select: { name: true } },
        },
      },
    },
  });
  return NextResponse.json(leads);
}
