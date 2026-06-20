import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Star, Truck, Shield, ArrowLeft } from "lucide-react";

const PRODUCTS: Record<string, any> = {
  "calming-mat": { name:"Weighted Calming Mat", price:89, image:"/images/calming-mat.png", tag:"Bestseller", cat:"Calming & Anxiety", desc:"Deep pressure therapy for anxious pets. Evenly distributed glass beads provide gentle, constant pressure.", features:["Plush microfiber cover","Glass bead filling","Non-slip bottom","3 sizes","Vet recommended"] },
  "calming-bed": { name:"Premium Calming Bed", price:129, image:"/images/calming-bed.png", tag:"New", cat:"Calming & Anxiety", desc:"Orthopedic memory foam with raised bolster edges.", features:["Memory foam base","Bolster edges","Washable cover","Non-slip","3 sizes"] },
  "gps-tracker": { name:"GPS Pet Tracker Pro", price:149, image:"/images/gps-tracker.png", tag:"Tech", cat:"Safety & Tracking", desc:"Real-time GPS. Geofence alerts. 7-day battery.", features:["Real-time GPS","Geofence zones","7-day battery","IP68 waterproof","Free app"] },
  "slow-feeder": { name:"Smart Slow Feeder Bowl", price:69, image:"/images/slow-feeder.png", tag:"Popular", cat:"Feeding & Hydration", desc:"Maze pattern slows eating by 4x. Premium ceramic.", features:["Food-grade ceramic","Maze pattern","Non-slip base","Dishwasher safe","2 colors"] },
  "paw-necklace": { name:"Paw Print Memorial Necklace", price:129, image:"/images/paw-necklace.png", tag:"Emotional", cat:"Memorial & Keepsakes", desc:"Sterling silver. Custom-etched from your pet's actual paw print.", features:["Sterling silver","Custom paw print","Inkless capture kit","Adjustable chain","Optional engraving"] },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PRODUCTS[slug];
  if (!p) return { title:"Not Found" };
  return { title:`${p.name} - PawHaven`, description:p.desc.slice(0,155) };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PRODUCTS[slug];
  if (!p) notFound();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link href="/products" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] mb-8"><ArrowLeft size={16} /> Back to Shop</Link>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-[var(--border-light)]"><Image src={p.image} alt={p.name} fill className="object-cover" sizes="50vw" priority unoptimized />{p.tag&&<span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[var(--primary)] shadow-sm">{p.tag}</span>}</div>
        <div>
          <span className="text-sm text-[var(--text-muted)] mb-2 block">{p.cat}</span>
          <h1 className="text-3xl font-bold mb-4">{p.name}</h1>
          <div className="flex items-center gap-2 mb-4">{[...Array(5)].map((_,i)=><Star key={i} size={16} className="text-[var(--accent)] fill-[var(--accent)]"/>)}<span className="text-sm text-[var(--text-muted)]">4.9 (200+ reviews)</span></div>
          <p className="text-2xl font-bold mb-6">${p.price}</p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">{p.desc}</p>
          <div className="mb-8"><h3 className="font-semibold mb-3">Features</h3><ul className="space-y-2">{p.features.map((f:string)=><li key={f} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"><span className="text-[var(--primary)] font-bold">+</span>{f}</li>)}</ul></div>
          <div className="flex gap-4 mb-6"><div className="flex items-center gap-2 text-sm text-[var(--text-muted)]"><Truck size={16}/>Free Shipping</div><div className="flex items-center gap-2 text-sm text-[var(--text-muted)]"><Shield size={16}/>30-Day Trial</div></div>
          <button className="w-full py-4 rounded-full bg-[var(--text)] text-white font-semibold text-lg hover:opacity-90">Add to Cart - ${p.price}</button>
        </div>
      </div>
    </div>
  );
}
