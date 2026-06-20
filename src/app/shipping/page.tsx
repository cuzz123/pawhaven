import type { Metadata } from "next";
export const metadata: Metadata = { title: "Shipping Policy - PawHaven" };
export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Shipping Policy</h1>
      <div className="prose max-w-none text-[var(--text-secondary)] leading-relaxed text-lg">
        <p>Free shipping on all orders over $50 within the US. International shipping available to Canada, UK, Australia, Japan, and EU countries. Orders typically ship within 1-2 business days. Delivery time: 3-7 business days domestic, 7-14 days international.</p>
      </div>
    </div>
  );
}
