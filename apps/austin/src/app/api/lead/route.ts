import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const CLIENT_EMAIL = process.env.CLIENT_EMAIL ?? "contact@austintexasinjurylawyer.com";
const SITE_NAME = "Austin Injury Law Group";
const SITE_URL = "https://austintexasinjurylawyer.com";

interface LeadBody {
  name: string;
  phone: string;
  email: string;
  caseType?: string;
  description?: string;
  source?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body: LeadBody = await request.json();
    const { name, phone, email, caseType, description, source } = body;

    if (!name || !phone || !email) {
      return NextResponse.json({ success: false, error: "Name, phone, and email are required." }, { status: 400 });
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "full",
      timeStyle: "short",
    });

    const { error } = await resend.emails.send({
      from: `${SITE_NAME} <leads@austintexasinjurylawyer.com>`,
      to: [CLIENT_EMAIL],
      replyTo: email,
      subject: `New Injury Lead: ${name} — ${caseType ?? "Personal Injury"}`,
      text: `NEW LEAD — ${SITE_NAME}\nReceived: ${submittedAt}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCase: ${caseType ?? "N/A"}\nDescription: ${description ?? "None"}\nSource: ${source ?? SITE_URL}`,
      html: `<h2>New Lead — ${escapeHtml(SITE_NAME)}</h2><p><b>Name:</b> ${escapeHtml(name)}</p><p><b>Phone:</b> <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></p><p><b>Email:</b> ${escapeHtml(email)}</p><p><b>Case:</b> ${escapeHtml(caseType ?? "N/A")}</p><p><b>Desc:</b> ${escapeHtml(description ?? "None")}</p>`,
    });

    if (error) console.error("Resend error:", error);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead route error:", err);
    return NextResponse.json({ success: false, error: "Unexpected error." }, { status: 500 });
  }
}
