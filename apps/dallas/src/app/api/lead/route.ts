import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const CLIENT_EMAIL = process.env.CLIENT_EMAIL ?? "contact@dallastexasinjurylawyer.com";
const SITE_NAME = "Dallas Injury Law Group";
const SITE_URL = "https://dallastexasinjurylawyer.com";

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

    const emailHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"/><style>body{font-family:Arial,sans-serif;color:#111;background:#f9fafb}
    .wrapper{max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08)}
    .header{background:#be123c;padding:24px 28px}.header h1{color:#fff;margin:0;font-size:22px}.header p{color:#fecdd3;margin:4px 0 0;font-size:14px}
    .body{padding:28px}.field{margin-bottom:18px}.label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#9ca3af;margin-bottom:4px}
    .value{font-size:16px;color:#111827;font-weight:500}.divider{border:none;border-top:1px solid #f3f4f6;margin:20px 0}
    .urgent{background:#fef2f2;border:1px solid #fecdd3;border-radius:8px;padding:12px 16px;margin-bottom:20px}.urgent p{margin:0;font-size:14px;color:#be123c;font-weight:600}
    </style></head><body><div class="wrapper">
    <div class="header"><h1>🚨 New Lead — ${SITE_NAME}</h1><p>Received: ${submittedAt} (Central Time)</p></div>
    <div class="body">
    <div class="urgent"><p>⚡ Respond within 15 minutes for best conversion rate.</p></div>
    <div class="field"><div class="label">Full Name</div><div class="value">${escapeHtml(name)}</div></div><hr class="divider"/>
    <div class="field"><div class="label">Phone</div><div class="value"><a href="tel:${escapeHtml(phone)}" style="color:#be123c">${escapeHtml(phone)}</a></div></div><hr class="divider"/>
    <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${escapeHtml(email)}" style="color:#be123c">${escapeHtml(email)}</a></div></div><hr class="divider"/>
    <div class="field"><div class="label">Case Type</div><div class="value">${escapeHtml(caseType ?? "Not specified")}</div></div><hr class="divider"/>
    <div class="field"><div class="label">Description</div><div class="value" style="white-space:pre-wrap;font-size:14px">${escapeHtml(description ?? "None")}</div></div><hr class="divider"/>
    <div class="field"><div class="label">Source</div><div class="value">${escapeHtml(source ?? SITE_URL)}</div></div>
    </div><div style="background:#f9fafb;padding:16px 28px;border-top:1px solid #f3f4f6;font-size:12px;color:#6b7280">Submitted via ${SITE_URL}</div>
    </div></body></html>`;

    const { error } = await resend.emails.send({
      from: `${SITE_NAME} <leads@dallastexasinjurylawyer.com>`,
      to: [CLIENT_EMAIL],
      replyTo: email,
      subject: `🚨 New Injury Lead: ${name} — ${caseType ?? "Personal Injury"}`,
      html: emailHtml,
      text: `NEW LEAD — ${SITE_NAME}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCase: ${caseType ?? "N/A"}\nDesc: ${description ?? "N/A"}`,
    });

    if (error) {
      console.error("Resend error:", error);
    }

    // Forward lead to central admin DB (fire and forget)
    if (process.env.ADMIN_API_URL) {
      fetch(`${process.env.ADMIN_API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          domain: "dallastexasinjurylawyer.com",
          name, phone, email,
          caseType: caseType || "Personal Injury",
          message: description || null,
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead route error:", err);
    return NextResponse.json({ success: false, error: "Unexpected error." }, { status: 500 });
  }
}
