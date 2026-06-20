import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Heart, Sparkles } from "lucide-react";

export const dynamic = "force-dynamic";

const products = [
  { slug:"calming-mat", name:"Weighted Calming Mat", price:89, image:"/images/calming-mat.png", lifestyle:"/images/products/calming-mat-lifestyle.png", rating:4.9, sold:320, tag:"Bestseller", cat:"Calming" },
  { slug:"calming-bed", name:"Premium Calming Bed", price:129, image:"/images/calming-bed.png", lifestyle:"/images/products/calming-bed-lifestyle.png", rating:4.8, sold:156, tag:"New", cat:"Calming" },
  { slug:"anxiety-vest", name:"Anxiety Relief Vest", price:49, image:"/images/anxiety-vest.png", lifestyle:"/images/products/anxiety-vest-lifestyle.png", rating:4.7, sold:280, cat:"Calming" },
  { slug:"gps-tracker", name:"GPS Pet Tracker Pro", price:149, image:"/images/gps-tracker.png", lifestyle:"/images/products/gps-tracker-lifestyle.png", rating:4.9, sold:410, tag:"Tech", cat:"Safety" },
  { slug:"slow-feeder", name:"Smart Slow Feeder Bowl", price:69, image:"/images/slow-feeder.png", lifestyle:"/images/products/slow-feeder-lifestyle.png", rating:4.8, sold:195, tag:"Popular", cat:"Feeding" },
  { slug:"water-fountain", name:"Auto Water Fountain", price:79, image:"/images/water-fountain.png", lifestyle:"/images/products/water-fountain-lifestyle.png", rating:4.7, sold:168, cat:"Feeding" },
  { slug:"paw-necklace", name:"Paw Print Memorial Necklace", price:129, image:"/images/paw-necklace.png", lifestyle:"/images/products/paw-necklace-lifestyle.png", rating:5.0, sold:92, tag:"Emotional", cat:"Memorial" },
  { slug:"travel-carrier", name:"Pet Travel Carrier", price:149, image:"/images/travel-carrier.png", lifestyle:"/images/products/travel-carrier-lifestyle.png", rating:4.8, sold:134, cat:"Travel" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center bg-[var(--bg)] pt-[72px] overflow-hidden">
        {/* Warm copper glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 75% 40%, rgba(200,149,108,0.10) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 25% 60%, rgba(74,122,73,0.04) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <div className="py-12 lg:py-20">
            <p className="text-sm font-medium tracking-wide text-[var(--accent)] mb-6 uppercase">
              Because they give us everything
            </p>
            <h1 className="font-serif text-[clamp(3rem,6.5vw,5rem)] font-semibold text-[var(--text)] leading-[1.06] mb-6 text-balance">
              Smart products for<br />
              <span className="text-[var(--accent)]">happier</span> pets.
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-[480px] mb-10 leading-relaxed">
              Premium calming, safety, feeding, and keepsake products — designed with love and backed by veterinarians.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--text)] text-white font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                Shop Best Sellers
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/products?cat=memorial"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)]/6 hover:-translate-y-0.5 transition-all duration-200"
              >
                Memorial &amp; Keepsakes
                <Sparkles size={18} />
              </Link>
            </div>
            {/* Trust line — subtle, not a bar */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-[var(--accent)] fill-[var(--accent)]" />
                ))}
                4.9 from 2,000+ reviews
              </span>
              <span className="text-[var(--border)] hidden sm:inline">|</span>
              <span>Free shipping over $50</span>
              <span className="text-[var(--border)] hidden sm:inline">|</span>
              <span className="flex items-center gap-1"><Heart size={14} className="text-[var(--accent)]" /> 1% donated to shelters</span>
            </div>
          </div>
          {/* Right — hero image */}
          <div className="relative lg:py-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-banner.png"
                alt="Happy pets with PawHaven products"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
                unoptimized
              />
              {/* Subtle overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg">
                <p className="text-xs text-[var(--text-muted)]">Top pick</p>
                <p className="text-sm font-bold text-[var(--text)]">Weighted Calming Mat</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-[var(--accent)] fill-[var(--accent)]" />
                  ))}
                  <span className="text-[11px] text-[var(--text-muted)] ml-0.5">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Sellers ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-wide mb-2">
                Best Sellers
              </p>
              <h2 className="text-3xl font-bold text-[var(--text)]">
                Loved by pets &amp; their parents
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group bg-[var(--bg)] rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[var(--accent)]/30"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-[var(--border-light)]">
                  <Image
                    src={p.lifestyle || p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                    unoptimized
                  />
                  {p.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white text-[var(--primary)] shadow-sm">
                      {p.tag}
                    </span>
                  )}
                </div>
                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-[var(--text)] mb-2 leading-snug">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={
                          i < Math.floor(p.rating)
                            ? "text-[var(--accent)] fill-[var(--accent)]"
                            : "text-[var(--border)] fill-[var(--border)]"
                        }
                      />
                    ))}
                    <span className="text-[11px] text-[var(--text-muted)] ml-0.5">
                      {p.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[var(--text)]">${p.price}</span>
                    <span className="text-[11px] text-[var(--text-muted)]">
                      {p.sold}+ sold
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Mobile "view all" */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]"
            >
              View all products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why PawHaven ── */}
      <section className="py-20 bg-[var(--border-light)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-wide mb-2">
              Why PawHaven
            </p>
            <h2 className="text-3xl font-bold text-[var(--text)]">
              Because they deserve the best
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "Vet-Reviewed",
                desc: "Every product is tested and approved by practicing veterinarians.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                ),
              },
              {
                title: "30-Day Free Returns",
                desc: "If your pet doesn't love it, send it back. No questions asked.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16"/>
                  </svg>
                ),
              },
              {
                title: "1% for Shelters",
                desc: "Every purchase helps feed and care for animals waiting for their forever home.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-[var(--accent)] shadow-sm mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[var(--text)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-28 text-white text-center overflow-hidden">
        {/* Warm dark background with copper glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,149,108,0.15) 0%, transparent 60%), #1E1A17",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-semibold mb-4 text-balance">
            Ready to make them happier?
          </h2>
          <p className="text-[var(--announcement-text)] mb-10 text-lg leading-relaxed">
            Every product is designed with one question in mind: would your pet choose it?
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent)] text-white font-semibold text-lg hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
          >
            Browse All Products
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
