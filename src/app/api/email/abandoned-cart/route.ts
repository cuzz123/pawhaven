import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { email, items } = await req.json();
    if (!email || !items?.length) return NextResponse.json({ error: "Email and items required" }, { status: 400 });
    const resend = new Resend(process.env.RESEND_API_KEY);
    if (!process.env.RESEND_API_KEY) return NextResponse.json({ sent: false });

    const itemList = items.map((i: any) => `<tr><td style="padding:8px">${i.name}</td><td style="padding:8px">x${i.quantity}</td><td style="padding:8px;text-align:right">$${(i.price * i.quantity).toFixed(2)}</td></tr>`).join("");
    const total = items.reduce((sum: number, i: any) => sum + i.price * i.quantity, 0).toFixed(2);

    await resend.emails.send({
      from: "PawHaven <hello@pawhaven.vercel.app>",
      to: email,
      subject: "You left something behind! Complete your PawHaven order",
      html: `<div style="max-width:600px;margin:0 auto;font-family:sans-serif"><h1 style="color:#2D2420">Your cart is waiting</h1><p style="color:#6B5E58">You left these items in your cart. Complete your order now and enjoy free shipping on orders over $50.</p><table style="width:100%;border-collapse:collapse;margin:20px 0">${itemList}<tr style="border-top:2px solid #E8E0D8"><td style="padding:8px;font-weight:bold">Total</td><td></td><td style="padding:8px;text-align:right;font-weight:bold">$${total}</td></tr></table><a href="https://pawhaven.vercel.app/cart" style="display:inline-block;padding:14px 32px;background:#2D2420;color:#fff;text-decoration:none;border-radius:999px;font-weight:bold">Complete Your Order</a></div>`,
    });
    return NextResponse.json({ sent: true });
  } catch { return NextResponse.json({ sent: false }); }
}
