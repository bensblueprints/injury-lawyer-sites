import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isBusinessHours } from "@/lib/businessHours";

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY ?? "";
const ELEVENLABS_PHONE_NUMBER_ID = process.env.ELEVENLABS_PHONE_NUMBER_ID ?? "";
const ELEVENLABS_NOTIFY_AGENT_ID = process.env.ELEVENLABS_NOTIFY_AGENT_ID ?? "";

async function triggerAttorneyCall(
  attorneyPhone: string,
  clientName: string,
  clientPhone: string,
  caseType: string,
  firmName: string
) {
  if (!ELEVENLABS_API_KEY || !ELEVENLABS_PHONE_NUMBER_ID || !ELEVENLABS_NOTIFY_AGENT_ID) {
    console.warn("ElevenLabs phone env vars not set — skipping outbound call");
    return false;
  }

  const res = await fetch("https://api.elevenlabs.io/v1/convai/twilio/outbound-call", {
    method: "POST",
    headers: {
      "xi-api-key": ELEVENLABS_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      agent_id: ELEVENLABS_NOTIFY_AGENT_ID,
      agent_phone_number_id: ELEVENLABS_PHONE_NUMBER_ID,
      to_number: attorneyPhone,
      conversation_initiation_client_data: {
        dynamic_variables: {
          client_name: clientName,
          client_phone: clientPhone,
          case_type: caseType,
          firm_name: firmName,
        },
      },
    }),
  });

  return res.ok;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, caseType, message, domain } = body;

    if (!name || !phone || !domain) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log the lead
    const site = await prisma.site.findFirst({
      where: { domain },
      include: { attorney: true },
    });

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

    // Check business hours
    if (!isBusinessHours(domain)) {
      return NextResponse.json({
        status: "after_hours",
        message:
          "Our office is currently closed. An attorney will call you back during business hours — Monday through Friday, 8am to 8pm, or Saturday, 9am to 5pm.",
      });
    }

    // Find assigned attorney and call them
    const attorney = site?.attorney;
    if (!attorney) {
      return NextResponse.json({
        status: "no_attorney",
        message:
          "Your information has been received. An attorney from our team will call you shortly.",
      });
    }

    const firmName = site?.city
      ? `${site.city} Injury Law Group`
      : "our law firm";

    const called = await triggerAttorneyCall(
      attorney.phone,
      name,
      phone,
      caseType ?? "personal injury",
      firmName
    );

    return NextResponse.json({
      status: called ? "connecting" : "logged",
      message: called
        ? "I'm notifying an attorney right now. They'll call you at the number you provided within the next few minutes. Is there anything else you'd like to share while you wait?"
        : "Your information has been received and logged. An attorney will call you at the number you provided very soon.",
    });
  } catch (e) {
    console.error("ElevenLabs transfer error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
