import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
const SECRET = process.env.PAYPAL_SECRET || "";
const API = process.env.PAYPAL_API || "https://api-m.sandbox.paypal.com";

async function token() {
  if (!CLIENT_ID || !SECRET) throw new Error("PayPal not configured");
  const auth = Buffer.from(CLIENT_ID + ":" + SECRET).toString("base64");
  const r = await fetch(API + "/v1/oauth2/token", {
    method: "POST",
    headers: { Authorization: "Basic " + auth, "Content-Type": "application/x-www-form-urlencoded" },
    body: "grant_type=client_credentials",
  });
  return (await r.json()).access_token;
}

export async function POST(req: NextRequest) {
  try {
    const { orderID, items, total } = await req.json();
    const t = await token();
    const r = await fetch(API + "/v2/checkout/orders/" + orderID + "/capture", {
      method: "POST",
      headers: { Authorization: "Bearer " + t, "Content-Type": "application/json" },
    });
    const d = await r.json();

    // Persist order to database
    const session = await auth();
    if (session?.user?.id && items?.length > 0) {
      const capturedAmount = d.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.value
        ? parseFloat(d.purchase_units[0].payments.captures[0].amount.value)
        : total;

      await db.order.create({
        data: {
          userId: session.user.id,
          total: capturedAmount,
          status: d.status === "COMPLETED" ? "paid" : "pending",
          items: {
            create: items.map((item: { productId: string; quantity: number; price: number }) => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
            })),
          },
        },
      });
    }

    return NextResponse.json({ status: d.status, id: d.id });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
