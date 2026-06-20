import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Truck, Shield, Heart } from "lucide-react";
import { WishlistButton } from "@/components/product/WishlistButton";
import { RecentViews } from "@/components/product/RecentViews";

export const dynamic = "force-dynamic";

const products = [
  { slug:"calming-mat", name:"Weighted Calming Mat", price:89, image:"/images/calming-mat.png", tag:"Bestseller", cat:"Calming", desc:"Deep pressure therapy for anxious pets." },
  { slug:"calming-bed", name:"Premium Calming Bed", price:129, image:"/images/calming-bed.png", tag:"New", cat:"Calming", desc:"Orthopedic memory foam with bolster edges." },
  { slug:"anxiety-vest", name:"Anxiety Relief Vest", price:49, image:"/images/anxiety-vest.png", cat:"Calming", desc:"Gentle compression for thunder & fireworks." },
  { slug:"gps-tracker", name:"GPS Pet Tracker Pro", price:149, image:"/images/gps-tracker.png", tag:"Tech", cat:"Safety", desc:"Real-time GPS, geofence, 7-day battery." },
  { slug:"slow-feeder", name:"Smart Slow Feeder Bowl", price:69, image:"/images/slow-feeder.png", tag:"Popular", cat:"Feeding", desc:"Maze pattern slows eating by 4x." },
  { slug:"water-fountain", name:"Auto Water Fountain", price:79, image:"/images/water-fountain.png", cat:"Feeding", desc:"Filtered circulating water. 2L." },
  { slug:"paw-necklace", name:"Paw Print Memorial Necklace", price:129, image:"/images/paw-necklace.png", tag:"Emotional", cat:"Memorial", desc:"Sterling silver. Your pet's actual paw print." },
  { slug:"travel-carrier", name:"Pet Travel Carrier", price:149, image:"/images/travel-carrier.png", cat:"Travel", desc:"Airline-approved. Built-in calming base." },
];

const features = [
  { icon:Truck, title:"Free Shipping", desc:"On orders over $50" },
  { icon:Shield, title:"30-Day Trial", desc:"Love it or return it" },
  { icon:Heart, title:"1% for Paws", desc:"We donate to shelters" },
  { icon:Star, title:"4.9 Rating", desc:"From 2,000+ pet parents" },
];

const categories = [
  { name:"Calming", emoji:"😌", slug:"calming" },
  { name:"Safety", emoji:"🛡️", slug:"safety" },
  { name:"Feeding", emoji:"🍽️", slug:"feeding" },
  { name:"Health", emoji:"💚", slug:"health" },
  { name:"Travel", emoji:"🧳", slug:"travel" },
  { name:"Memorial", emoji:"🕯️", slug:"memorial" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — typography-led, warm, boutique feel */}
      <section className="relative min-h-[90vh] flex items-center pt-[72px]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="py-16 lg:py-24">
            <p className="text-sm font-medium text-[var(--accent)] mb-6 tracking-wide">
              Premium pet wellness, curated with care
            </p>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,4.8rem)] font-semibold text-[var(--text)] leading-[1.08] mb-8 text-balance">
              Because they give us<br/>
              <span className="text-[var(--accent)]">everything</span>.
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-[480px] mb-10 leading-relaxed">
              Thoughtfully designed products for the pets who make our lives whole.
              Calming, safety, feeding, and keepsakes — backed by science, made with love.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--text)] text-white font-semibold text-lg hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4"
              >
                Explore the Collection
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/products?cat=memorial"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--accent)] text-[var(--accent)] font-semibold text-lg hover:bg-[var(--accent)]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4"
              >
                Memorial &amp; Keepsakes
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/hero-banner.png"
              alt="A happy dog resting on a PawHaven calming mat, looking content and peaceful"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl"
              priority
              loading="eager"
            />
            {/* Subtle brand mark */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-[var(--accent)] fill-[var(--accent)]" />
                ))}
              </div>
              <span className="text-sm font-semibold text-[var(--text)]">4.9</span>
              <span className="text-xs text-[var(--text-muted)]">2,000+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Quick Nav */}
      <section className="py-8 bg-white border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/products?cat=${c.slug}`}
                className="flex-shrink-0 px-5 py-4 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--accent)] hover:shadow-sm transition-all text-center min-w-[100px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              >
                <div className="text-lg mb-1">{c.emoji}</div>
                <div className="text-xs font-semibold text-[var(--text)]">{c.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4 text-balance">Designed for happier, healthier pets</h2>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto">Every product is chosen with one question in mind: would your pet choose it?</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group bg-[var(--bg)] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4"
              >
                <div className="relative aspect-square overflow-hidden bg-[var(--border-light)]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                  {p.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[var(--primary)] shadow-sm">
                      {p.tag}
                    </span>
                  )}
                  <div className="absolute top-2 right-2 z-10">
                    <WishlistButton product={{ id: p.slug, name: p.name, slug: p.slug, image: p.image, price: p.price }} />
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs text-[var(--text-muted)]">{p.cat}</span>
                  <h3 className="font-semibold mb-1 text-[var(--text)]">{p.name}</h3>
                  <p className="text-xs text-[var(--text-muted)] mb-3">{p.desc}</p>
                  <span className="text-lg font-bold text-[var(--text)]">${p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar — below products, supporting purchase decisions */}
      <section className="py-16 bg-[var(--bg)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                  <f.icon size={18} className="text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--text)]">{f.title}</div>
                  <div className="text-xs text-[var(--text-muted)]">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[var(--text)] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold mb-4 text-balance">Ready to give them the best?</h2>
          <p className="text-[var(--announcement-text)] mb-8 text-lg">From calming comfort to lasting keepsakes — find what your pet deserves.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent)] text-white font-semibold text-lg hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--text)]"
          >
            Browse All Products
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
