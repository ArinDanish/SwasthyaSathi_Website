import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Where you want to receive submissions
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "you@yourdomain.com";
// Must be a verified sender on your Resend account/domain.
// Use "onboarding@resend.dev" while testing before you verify a domain.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;
    const { name, email, phone, company, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="color:#0e2540;">New contact form submission</h2>
        <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
          <tbody>
            <tr><td style="padding:8px 0; color:#5a7a96; width:140px;">Name</td><td style="padding:8px 0; color:#0e2540;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0; color:#5a7a96;">Email</td><td style="padding:8px 0; color:#0e2540;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px 0; color:#5a7a96;">Phone</td><td style="padding:8px 0; color:#0e2540;">${escapeHtml(phone || "-")}</td></tr>
            <tr><td style="padding:8px 0; color:#5a7a96;">Clinic / company</td><td style="padding:8px 0; color:#0e2540;">${escapeHtml(company || "-")}</td></tr>
            <tr><td style="padding:8px 0; color:#5a7a96;">Subject</td><td style="padding:8px 0; color:#0e2540;">${escapeHtml(subject)}</td></tr>
          </tbody>
        </table>
        <div style="margin-top:16px;">
          <p style="color:#5a7a96; margin-bottom:6px;">Message</p>
          <p style="color:#0e2540; white-space:pre-wrap; background:#f5f9fd; padding:14px; border-radius:8px;">${escapeHtml(message)}</p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: `SwasthyaSathi Website <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry: ${subject} - ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}