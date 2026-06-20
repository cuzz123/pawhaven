import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Service - PawHaven" };
export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose max-w-none text-[var(--text-secondary)] leading-relaxed text-lg">
        <p>By using PawHaven, you agree to these terms. All product prices are in USD. We reserve the right to modify prices and product availability. Promotional codes cannot be combined.</p>
      </div>
    </div>
  );
}
