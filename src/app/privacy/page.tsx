import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy - PawHaven" };
export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose max-w-none text-[var(--text-secondary)] leading-relaxed text-lg">
        <p>We collect only the information needed to process your order (name, email, shipping address). Payment information is processed securely by PayPal and never stored on our servers. We do not sell or share your personal data with third parties.</p>
      </div>
    </div>
  );
}
