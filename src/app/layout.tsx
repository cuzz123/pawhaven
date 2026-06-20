import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { EmailPopup } from "@/components/layout/EmailPopup";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "PawHaven — Smart Pet Wellness & Emotional Care",
  description: "Premium smart pet products for modern pet parents. Weighted calming mats, GPS trackers, memorial jewelry, and slow feeders.",
  keywords: ["smart pet products", "pet calming mat", "dog gps tracker", "pet memorial jewelry", "slow feeder bowl"],
  openGraph: { title: "PawHaven — Smart Pet Wellness", description: "Premium smart pet products designed for the modern pet parent.", type: "website", siteName: "PawHaven" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"PawHaven","url":"https://pawhaven.vercel.app"})}}/><meta name="theme-color" content="#FDF8F4" /><link rel="icon" href="/favicon.svg" /><link rel="canonical" href="https://pawhaven.vercel.app" />
  </head>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[var(--text)] focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">Skip to content</a>
        <Providers>
          <AnnouncementBar /><Header /><CartDrawer />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
        <EmailPopup />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
