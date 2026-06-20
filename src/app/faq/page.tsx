import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "FAQ - PawHaven", description: "Frequently asked questions about PawHaven smart pet products." };

const faqs = [
  { q: "How does the Weighted Calming Mat work?", a: "The calming mat uses deep pressure therapy (DPT) — gentle, even pressure that triggers serotonin and melatonin release while reducing cortisol. It works like a comforting hug for your pet, ideal for thunderstorm anxiety, separation stress, and travel." },
  { q: "Is the GPS Pet Tracker waterproof?", a: "Yes. The PawHaven GPS Tracker Pro is IP68 rated — fully waterproof and submersible up to 1.5 meters. Your pet can swim, play in rain, or roll in mud without affecting the tracker." },
  { q: "How long does the Slow Feeder Bowl extend mealtime?", a: "Our maze pattern design slows eating by approximately 4x compared to standard bowls. A dog that normally finishes in 30 seconds will take 2+ minutes. This reduces bloat risk and improves digestion." },
  { q: "What is the Paw Print Necklace made of?", a: "Sterling silver (925). We provide an inkless capture kit — you take your pet's paw print at home, send us a photo, and we custom-etch it onto the pendant. Optional 18K gold plating available." },
  { q: "What is your return policy?", a: "30-day happiness guarantee. If your pet doesn't love it, return it for a full refund. No questions asked. We'd rather you both be happy." },
  { q: "Do you ship internationally?", a: "Yes. We ship to US, Canada, UK, Australia, Japan, and EU countries. Free shipping on orders over $50." },
  { q: "How does the 1% for Paws program work?", a: "1% of every purchase is donated to animal shelters and rescue organizations. Since launching, we've supported over 200 shelters with food, medical care, and adoption funding." },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
      <p className="text-[var(--text-muted)] mb-10">Everything you need to know about PawHaven products.</p>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="bg-white border border-[var(--border)] rounded-xl p-5 cursor-pointer group">
            <summary className="font-semibold text-lg list-none flex justify-between items-center">{f.q}<span className="text-[var(--text-muted)] group-open:rotate-45 transition-transform text-xl">+</span></summary>
            <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-[var(--text-muted)] mb-4">Can't find what you're looking for?</p>
        <Link href="/contact" className="inline-flex px-6 py-3 rounded-full bg-[var(--text)] text-white font-semibold hover:opacity-90">Contact Us</Link>
      </div>
    </div>
  );
}
