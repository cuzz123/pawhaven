import { NextRequest, NextResponse } from "next/server";
const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test";
const SECRET = process.env.PAYPAL_SECRET || "test";
const API = "https://api-m.sandbox.paypal.com";
async function token() {
  const auth = Buffer.from(CLIENT_ID + ":" + SECRET).toString("base64");
  const r = await fetch(API+"/v1/oauth2/token",{method:"POST",headers:{Authorization:"Basic "+auth,"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials"});
  return (await r.json()).access_token;
}
export async function POST(req: NextRequest) {
  try {
    const { total, items } = await req.json();
    if (!total || Number(total) <= 0 || Number(total) > 9999) return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    const t = await token();
    const r = await fetch(API+"/v2/checkout/orders",{method:"POST",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},body:JSON.stringify({intent:"CAPTURE",purchase_units:[{amount:{currency_code:"USD",value:total}}]})});
    const o = await r.json();
    return NextResponse.json({id:o.id});
  } catch(e:any) { return NextResponse.json({error:e.message},{status:500}); }
}