import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Truck, Shield, Heart } from "lucide-react";

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

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center bg-[var(--bg)] pt-[72px]">
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse at 70% 50%, rgba(200,149,108,0.08) 0%, transparent 50%)"}}/>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-[var(--border)] bg-white text-sm text-[var(--primary)] font-semibold">Smart Pet Wellness</span>
            <h1 className="text-[clamp(2.4rem,5vw,3.6rem)] font-bold text-[var(--text)] leading-[1.12] mb-6">Because they give us<br/><span className="text-[var(--accent)]">everything</span>.</h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-[520px] mb-8">Premium smart pet products for modern pet parents. Calming, safety, feeding, and keepsakes.</p>
            <div className="flex gap-4"><Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--text)] text-white font-semibold hover:opacity-90">Shop All <ArrowRight size={18}/></Link></div>
            <div className="flex gap-8 mt-10 pt-8 border-t border-[var(--border)]">{features.map(f=>(<div key={f.title} className="flex items-center gap-2"><f.icon size={18} className="text-[var(--accent)]"/><div><div className="text-sm font-semibold">{f.title}</div><div className="text-xs text-[var(--text-muted)]">{f.desc}</div></div></div>))}</div>
          </div>
          <div className="relative"><Image src="/images/hero-banner.png" alt="Pets with PawHaven" width={800} height={600} className="rounded-2xl shadow-xl" priority unoptimized/></div>
        </div>
      </section>
      <section className="py-24 bg-white"><div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14"><h2 className="text-3xl font-bold mb-4">Smart Products, Happier Pets</h2></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p=>(
            <Link key={p.slug} href={`/products/${p.slug}`} className="group bg-[var(--bg)] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-square overflow-hidden bg-[var(--border-light)]"><Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="25vw" unoptimized/>{p.tag&&<span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[var(--primary)] shadow-sm">{p.tag}</span>}</div>
              <div className="p-5"><span className="text-xs text-[var(--text-muted)]">{p.cat}</span><h3 className="font-semibold mb-1">{p.name}</h3><p className="text-xs text-[var(--text-muted)] mb-3">{p.desc}</p><span className="text-lg font-bold">${p.price}</span></div>
            </Link>
          ))}
        </div>
      </div></section>
      <section className="py-24 bg-[var(--text)] text-white text-center"><div className="max-w-2xl mx-auto px-6"><h2 className="text-3xl font-bold mb-4">Smart Products, Happier Pets</h2><p className="text-[var(--announcement-text)] mb-8">Every product designed with one question: would your pet choose it?</p><Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent)] text-white font-semibold text-lg hover:opacity-90">Browse All Products <ArrowRight size={20}/></Link></div></section>
    </>
  );
}
