import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
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
      <head><meta name="theme-color" content="#FDF8F4" /><link rel="icon" href="/favicon.svg" /></head>
      <body className="antialiased">
        <Providers>
          <AnnouncementBar /><Header /><CartDrawer />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
