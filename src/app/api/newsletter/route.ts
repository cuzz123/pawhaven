import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    if (!process.env.RESEND_API_KEY) return NextResponse.json({ subscribed: false });
    
    await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID || "" });
    return NextResponse.json({ subscribed: true });
  } catch {
    return NextResponse.json({ subscribed: false });
  }
}
