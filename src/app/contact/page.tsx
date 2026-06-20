import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - PawHaven",
  description: "Get in touch with PawHaven. We're here to help with any questions about our pet products.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-[var(--text-secondary)] mb-10 leading-relaxed">
        Have a question about our products, need help choosing the right item for your pet, or want to talk about
        a custom keepsake? We&apos;d love to hear from you.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
          <Mail size={24} className="text-[var(--accent)] mb-3" />
          <h3 className="font-semibold mb-1">Email Us</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-2">We respond within 24 hours</p>
          <a href="mailto:support@pawhaven.com" className="text-[var(--accent)] text-sm font-medium hover:underline">
            support@pawhaven.com
          </a>
        </div>
        <div className="p-6 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
          <MessageCircle size={24} className="text-[var(--accent)] mb-3" />
          <h3 className="font-semibold mb-1">Quick Answers</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-2">Check our FAQ for common questions</p>
          <Link href="/faq" className="text-[var(--accent)] text-sm font-medium hover:underline">
            View FAQ
          </Link>
        </div>
      </div>

      <form className="space-y-4" action="/api/contact" method="POST">
        <div className="grid sm:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Your name" required className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 focus:border-[var(--accent)]" />
          <input type="email" name="email" placeholder="Your email" required className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 focus:border-[var(--accent)]" />
        </div>
        <input type="text" name="subject" placeholder="Subject" required className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 focus:border-[var(--accent)]" />
        <textarea name="message" placeholder="Tell us how we can help..." rows={5} required className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 focus:border-[var(--accent)] resize-y" />
        <button type="submit" className="px-8 py-3 rounded-full bg-[var(--text)] text-white font-semibold hover:opacity-90 transition-opacity">
          Send Message
        </button>
      </form>
    </div>
  );
}
