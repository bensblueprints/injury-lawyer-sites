import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface LeadBody {
  name: string;
  phone: string;
  email: string;
  caseType: string;
  description: string;
  source?: string;
}

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body: LeadBody = await request.json();

    const { name, phone, email, caseType, description, source } = body;

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    const clientEmail = process.env.CLIENT_EMAIL;
    if (!clientEmail) {
      console.error("CLIENT_EMAIL environment variable is not set.");
      return NextResponse.json(
        { success: false, error: "Server configuration error." },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      dateStyle: "full",
      timeStyle: "short",
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, sans-serif; color: #111; background: #f9fafb; margin: 0; padding: 0; }
          .wrapper { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
          .header { background: #be123c; padding: 24px 28px; }
          .header h1 { color: white; margin: 0; font-size: 22px; }
          .header p { color: #fecdd3; margin: 4px 0 0; font-size: 14px; }
          .body { padding: 28px; }
          .field { margin-bottom: 18px; }
          .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af; margin-bottom: 4px; }
          .value { font-size: 16px; color: #111827; font-weight: 500; }
          .divider { border: none; border-top: 1px solid #f3f4f6; margin: 20px 0; }
          .footer { background: #f9fafb; padding: 16px 28px; border-top: 1px solid #f3f4f6; font-size: 12px; color: #6b7280; }
          .urgent { background: #fef2f2; border: 1px solid #fecdd3; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px; }
          .urgent p { margin: 0; font-size: 14px; color: #be123c; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <h1>🚨 New Lead — Las Vegas Injury Law Group</h1>
            <p>Received: ${submittedAt} (Pacific Time)</p>
          </div>
          <div class="body">
            <div class="urgent">
              <p>⚡ Respond within 15 minutes for best conversion rate.</p>
            </div>

            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${escapeHtml(name)}</div>
            </div>
            <hr class="divider" />
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value">
                <a href="tel:${escapeHtml(phone)}" style="color:#be123c;">${escapeHtml(phone)}</a>
              </div>
            </div>
            <hr class="divider" />
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value">
                <a href="mailto:${escapeHtml(email)}" style="color:#be123c;">${escapeHtml(email)}</a>
              </div>
            </div>
            <hr class="divider" />
            <div class="field">
              <div class="label">Case Type</div>
              <div class="value">${escapeHtml(caseType || "Not specified")}</div>
            </div>
            <hr class="divider" />
            <div class="field">
              <div class="label">Case Description</div>
              <div class="value" style="white-space: pre-wrap; font-size: 14px;">${escapeHtml(description || "No description provided")}</div>
            </div>
            <hr class="divider" />
            <div class="field">
              <div class="label">Lead Source</div>
              <div class="value">${escapeHtml(source || "lasvegasnevadainjurylawyer.com")}</div>
            </div>
          </div>
          <div class="footer">
            This lead was submitted via lasvegasnevadainjurylawyer.com
          </div>
        </div>
      </body>
      </html>
    `;

    const emailText = [
      "NEW LEAD — Las Vegas Injury Law Group",
      `Received: ${submittedAt}`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Case Type: ${caseType || "Not specified"}`,
      `Description: ${description || "None"}`,
      `Source: ${source || "lasvegasnevadainjurylawyer.com"}`,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: "Las Vegas Injury Law Group <leads@lasvegasnevadainjurylawyer.com>",
      to: [clientEmail],
      replyTo: email,
      subject: `🚨 New Injury Lead: ${name} – ${caseType || "Personal Injury"} – (702) 555-0147`,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    // Forward lead to central admin DB (fire and forget)
    if (process.env.ADMIN_API_URL) {
      fetch(`${process.env.ADMIN_API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          domain: "lasvegasnevadainjurylawyer.com",
          name,
          phone,
          email,
          caseType: caseType || "Personal Injury",
          message: description || null,
          leadType: "FORM_FILL",
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead route error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
