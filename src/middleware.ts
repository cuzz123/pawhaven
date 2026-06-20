import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function generateCsrfToken() { return Math.random().toString(36).slice(2) + Date.now().toString(36); }

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  // CSRF: set token cookie for same-origin POST requests
  if (!request.cookies.get("csrf_token")) {
    response.cookies.set("csrf_token", generateCsrfToken(), { httpOnly: true, sameSite: "strict", path: "/" });
  }
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.paypal.com https://www.paypalobjects.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api-m.sandbox.paypal.com https://api-m.paypal.com; frame-src https://www.paypal.com;");
  return response;
}

export const config = { matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)" };
