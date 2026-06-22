import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { applyRateLimit } from "@/lib/server/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const rateLimitResponse = await applyRateLimit(req, { windowMs: 60_000, maxRequests: 3 });
    if (rateLimitResponse) return rateLimitResponse;

    const { name, email, message } = await req.json();
    if (!email || !message) return NextResponse.json({ error: "Email and message required" }, { status: 400 });

    const sanitize = (s: string) => s.replace(/<[^>]*>/g, "").slice(0, 1000);
    const safeName = sanitize(name || "");
    const safeEmail = sanitize(email).slice(0, 200);
    const safeMsg = sanitize(message).slice(0, 5000);

    const resend = new Resend(process.env.RESEND_API_KEY);
    if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "Not configured", sent: false });

    await resend.emails.send({
      from: "PawHaven <hello@pawhaven.vercel.app>",
      to: "hello@pawhaven.vercel.app",
      subject: `Contact from ${safeName || safeEmail}`,
      html: `<p><b>Name:</b> ${safeName || "N/A"}</p><p><b>Email:</b> ${safeEmail}</p><p>${safeMsg}</p>`,
    });
    return NextResponse.json({ sent: true });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
