"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

const CATS = ["all","calming","safety","feeding","health","travel","memorial"];
const CAT_LABELS:Record<string,string> = {all:"All",calming:"Calming & Anxiety",safety:"Safety & Tracking",feeding:"Feeding & Hydration",health:"Health & Grooming",travel:"Travel & Outdoor",memorial:"Memorial & Keepsakes"};

const PRODUCTS = [
  {slug:"calming-mat",name:"Weighted Calming Mat",price:89,image:"/images/calming-mat.png",tag:"Bestseller",cat:"calming",catName:"Calming & Anxiety",desc:"Deep pressure therapy for anxious pets."},
  {slug:"calming-bed",name:"Premium Calming Bed",price:129,image:"/images/calming-bed.png",tag:"New",cat:"calming",catName:"Calming & Anxiety",desc:"Orthopedic memory foam with bolster edges."},
  {slug:"anxiety-vest",name:"Anxiety Relief Vest",price:49,image:"/images/anxiety-vest.png",cat:"calming",catName:"Calming & Anxiety",desc:"Gentle compression wrap for storms & fireworks."},
  {slug:"thunder-shirt",name:"Thunder Shirt Pro",price:59,image:"/images/thunder-shirt.png",cat:"calming",catName:"Calming & Anxiety",desc:"Dual-layer pressure garment. Vet recommended."},
  {slug:"calming-spray",name:"Calming Pheromone Spray",price:29,image:"/images/calming-spray.png",cat:"calming",catName:"Calming & Anxiety",desc:"Natural lavender & chamomile. 120ml."},
  {slug:"chew-toys",name:"Calming Chew Toy Set",price:35,image:"/images/chew-toys.png",cat:"calming",catName:"Calming & Anxiety",desc:"3 textured rubber toys for anxious chewers."},
  {slug:"gps-tracker",name:"GPS Pet Tracker Pro",price:149,image:"/images/gps-tracker.png",tag:"Tech",cat:"safety",catName:"Safety & Tracking",desc:"Real-time GPS. Geofence. 7-day battery."},
  {slug:"led-collar",name:"LED Safety Collar",price:39,image:"/images/led-collar.png",cat:"safety",catName:"Safety & Tracking",desc:"USB rechargeable. Visible at 500m."},
  {slug:"smart-tag",name:"Smart ID Tag",price:25,image:"/images/smart-tag.png",cat:"safety",catName:"Safety & Tracking",desc:"QR code + NFC. Free profile hosting."},
  {slug:"pet-camera",name:"Pet Camera Monitor",price:99,image:"/images/pet-camera.png",tag:"Popular",cat:"safety",catName:"Safety & Tracking",desc:"1080p cam with treat dispenser."},
  {slug:"pet-sensor",name:"Door/Window Pet Sensor",price:45,image:"/images/pet-sensor.png",cat:"safety",catName:"Safety & Tracking",desc:"Instant phone alerts when opened."},
  {slug:"slow-feeder",name:"Smart Slow Feeder Bowl",price:69,image:"/images/slow-feeder.png",tag:"Popular",cat:"feeding",catName:"Feeding & Hydration",desc:"Maze pattern. Slows eating by 4x."},
  {slug:"water-fountain",name:"Auto Water Fountain",price:79,image:"/images/water-fountain.png",cat:"feeding",catName:"Feeding & Hydration",desc:"Circulating filtered water. 2L."},
  {slug:"portion-feeder",name:"Portion Control Feeder",price:99,image:"/images/portion-feeder.png",cat:"feeding",catName:"Feeding & Hydration",desc:"App-controlled scheduling. 4L."},
  {slug:"elevated-feeder",name:"Elevated Feeding Stand",price:59,image:"/images/elevated-feeder.png",cat:"feeding",catName:"Feeding & Hydration",desc:"Bamboo stand with 2 stainless bowls."},
  {slug:"food-container",name:"Travel Food Container",price:29,image:"/images/food-container.png",cat:"feeding",catName:"Feeding & Hydration",desc:"Airtight silicone. 2kg. Stackable."},
  {slug:"water-filter",name:"Pet Water Filter Pitcher",price:39,image:"/images/water-filter.png",cat:"feeding",catName:"Feeding & Hydration",desc:"Ceramic filter. Removes impurities."},
  {slug:"pet-scale",name:"Smart Scale & Health Tracker",price:89,image:"/images/pet-scale.png",cat:"health",catName:"Health & Grooming",desc:"Bluetooth sync. Vet-share reports."},
  {slug:"toothbrush-kit",name:"Sonic Toothbrush Kit",price:49,image:"/images/toothbrush-kit.png",cat:"health",catName:"Health & Grooming",desc:"3 heads. Quiet motor. USB charge."},
  {slug:"deshedding-brush",name:"Deshedding Brush Pro",price:39,image:"/images/deshedding-brush.png",cat:"health",catName:"Health & Grooming",desc:"Stainless steel teeth. All coat types."},
  {slug:"nail-grinder",name:"Pet Nail Grinder",price:35,image:"/images/nail-grinder.png",cat:"health",catName:"Health & Grooming",desc:"LED light. Quiet. 2-speed."},
  {slug:"travel-carrier",name:"Pet Travel Carrier",price:149,image:"/images/travel-carrier.png",cat:"travel",catName:"Travel & Outdoor",desc:"Airline-approved. Calming mat base."},
  {slug:"water-bottle",name:"Portable Water Bottle",price:29,image:"/images/water-bottle.png",cat:"travel",catName:"Travel & Outdoor",desc:"One-hand operation. Leak-proof."},
  {slug:"car-seat-cover",name:"Car Seat Cover",price:69,image:"/images/car-seat-cover.png",cat:"travel",catName:"Travel & Outdoor",desc:"Waterproof quilted. Universal fit."},
  {slug:"travel-bowl",name:"Foldable Travel Bowl",price:19,image:"/images/travel-bowl.png",cat:"travel",catName:"Travel & Outdoor",desc:"Collapsible silicone. Carabiner clip."},
  {slug:"life-jacket",name:"Pet Life Jacket",price:59,image:"/images/life-jacket.png",cat:"travel",catName:"Travel & Outdoor",desc:"Reflective strips. Rescue handle."},
  {slug:"paw-necklace",name:"Paw Print Memorial Necklace",price:129,image:"/images/paw-necklace.png",tag:"Emotional",cat:"memorial",catName:"Memorial & Keepsakes",desc:"Sterling silver. Custom paw print."},
  {slug:"pet-portrait",name:"Custom Pet Portrait",price:89,image:"/images/pet-portrait.png",cat:"memorial",catName:"Memorial & Keepsakes",desc:"Hand-illustrated watercolor. Framed."},
  {slug:"keepsake-box",name:"Memory Keepsake Box",price:59,image:"/images/keepsake-box.png",cat:"memorial",catName:"Memorial & Keepsakes",desc:"Walnut wood. Brass nameplate."},
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [cat,setCat]=useState(searchParams.get("cat") || "all");
  const [q,setQ]=useState(searchParams.get("q") || "");
  let items=PRODUCTS.filter(p=>cat==="all"||p.cat===cat);
  if(q) items=items.filter(p=>p.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">All Products</h1>
      <p className="text-[var(--text-muted)] mb-8">30 products across 7 categories.</p>
      <div className="flex gap-3 mb-6 flex-wrap">
        <div className="relative flex-1 min-w-[200px] max-w-[320px]"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"/><input placeholder="Search..." value={q} onChange={e=>setQ(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border)] bg-white text-sm focus:outline-none focus:border-[var(--accent)]"/></div>
      </div>
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {CATS.map(c=>(<button key={c} onClick={()=>setCat(c)} className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${cat===c?"bg-[var(--text)] text-white":"bg-white border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)]"}`}>{CAT_LABELS[c]}{c!=="all"&&<span className="ml-1.5 text-xs opacity-60">({PRODUCTS.filter(p=>p.cat===c).length})</span>}</button>))}
      </div>
      <p className="text-sm text-[var(--text-muted)] mb-6">{items.length} product{items.length!==1?"s":""}</p>
      {items.length===0&&<div className="text-center py-20"><p className="text-lg text-[var(--text-muted)] mb-4">No products match</p><button onClick={()=>{setQ("");setCat("all")}} className="px-6 py-3 rounded-full bg-[var(--text)] text-white font-semibold text-sm">Clear Filters</button></div>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {items.map(p=>(<Link key={p.slug} href={`/products/${p.slug}`} className="group bg-white border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"><div className="relative aspect-square overflow-hidden bg-[var(--border-light)]"><Image src={p.image} alt={p.name} fill sizes="25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />{p.tag&&<span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-[var(--text)] text-white">{p.tag}</span>}</div><div className="p-4"><span className="text-xs text-[var(--text-muted)]">{p.catName}</span><h3 className="font-semibold mt-0.5 mb-1">{p.name}</h3><p className="text-xs text-[var(--text-muted)] mb-3 line-clamp-1">{p.desc}</p><span className="text-lg font-bold">${p.price}</span></div></Link>))}
      </div>
    </div>
  );
}
