import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Star, Truck, Shield, ArrowLeft, Check } from "lucide-react";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { WishlistButton } from "@/components/product/WishlistButton";
import { ProductLightbox } from "@/components/product/ProductLightbox";
import { RecentViews } from "@/components/product/RecentViews";

const PRODUCTS: Record<string, any> = {
  "calming-mat": { name:"Weighted Calming Mat", price:89, image:"/images/calming-mat.png", tag:"Bestseller", cat:"Calming & Anxiety", desc:"Deep pressure therapy for anxious pets. Evenly distributed glass beads provide gentle, constant pressure.", features:["Plush microfiber cover (machine washable)","Glass bead filling","Non-slip bottom","3 sizes: S/M/L","Veterinarian recommended"] },
  "calming-bed": { name:"Premium Calming Bed", price:129, image:"/images/calming-bed.png", tag:"New", cat:"Calming & Anxiety", desc:"Orthopedic memory foam with raised bolster edges for head and neck support.", features:["Memory foam orthopedic base","Raised bolster edges","Machine-washable cover","Non-slip bottom","3 sizes"] },
  "anxiety-vest": { name:"Anxiety Relief Vest", price:49, image:"/images/anxiety-vest.png", cat:"Calming & Anxiety", desc:"Gentle compression wrap for thunderstorms, fireworks, separation anxiety.", features:["Adjustable velcro straps","Breathable soft fabric","Machine washable","5 sizes","30-day guarantee"] },
  "thunder-shirt": { name:"Thunder Shirt Pro", price:59, image:"/images/thunder-shirt.png", cat:"Calming & Anxiety", desc:"Dual-layer pressure garment. Vet recommended for severe anxiety.", features:["Dual-layer compression","Moisture-wicking inner","Reflective strip","Quick-release buckles","5 sizes"] },
  "calming-spray": { name:"Calming Pheromone Spray", price:29, image:"/images/calming-spray.png", cat:"Calming & Anxiety", desc:"Natural lavender & chamomile. Spray on bedding 15 min before stress.", features:["Natural ingredients","120ml bottle","Safe for cats & dogs","Lasts 4-6 hours","No synthetic chemicals"] },
  "chew-toys": { name:"Calming Chew Toy Set", price:35, image:"/images/chew-toys.png", cat:"Calming & Anxiety", desc:"3 textured rubber toys designed to soothe anxious chewers.", features:["3 toys per set","Food-grade rubber","Different textures","Dishwasher safe","All dog sizes"] },
  "gps-tracker": { name:"GPS Pet Tracker Pro", price:149, image:"/images/gps-tracker.png", tag:"Tech", cat:"Safety & Tracking", desc:"Real-time GPS tracking. Geofence alerts. 7-day battery.", features:["Real-time GPS (10s updates)","Geofence safe zones","7-day battery (USB-C)","IP68 waterproof","Free iOS/Android app"] },
  "led-collar": { name:"LED Safety Collar", price:39, image:"/images/led-collar.png", cat:"Safety & Tracking", desc:"USB rechargeable LED collar visible at 500 meters. 3 lighting modes.", features:["USB-C rechargeable (30h)","Visible at 500m","3 lighting modes","Water-resistant IPX5","Adjustable fit"] },
  "smart-tag": { name:"Smart ID Tag", price:25, image:"/images/smart-tag.png", cat:"Safety & Tracking", desc:"QR code + NFC tag links to your pet's profile. No subscription.", features:["Free profile hosting","QR code + NFC","Medical notes section","Vet contact field","Stainless steel"] },
  "pet-camera": { name:"Pet Camera Monitor", price:99, image:"/images/pet-camera.png", tag:"Popular", cat:"Safety & Tracking", desc:"1080p camera with treat dispenser and two-way audio.", features:["1080p HD night vision","Treat dispenser","Two-way audio","Motion/sound alerts","Free app"] },
  "pet-sensor": { name:"Door/Window Pet Sensor", price:45, image:"/images/pet-sensor.png", cat:"Safety & Tracking", desc:"Smart sensor alerts your phone when doors/windows open.", features:["Instant phone alerts","Peel-and-stick install","1-year battery","Pairs with Pet Camera","Up to 10 sensors"] },
  "slow-feeder": { name:"Smart Slow Feeder Bowl", price:69, image:"/images/slow-feeder.png", tag:"Popular", cat:"Feeding & Hydration", desc:"Maze pattern slows eating by 4x. Food-grade ceramic.", features:["Food-grade ceramic","Maze pattern (4x slower)","Non-slip base","Dishwasher safe","Sage Green & Cream"] },
  "water-fountain": { name:"Auto Water Fountain", price:79, image:"/images/water-fountain.png", cat:"Feeding & Hydration", desc:"Circulating filtered water. 2L capacity. Ultra-quiet pump.", features:["2L capacity","Triple filtration","Ultra-quiet (<30dB)","LED water indicator","Dishwasher-safe parts"] },
  "portion-feeder": { name:"Portion Control Feeder", price:99, image:"/images/portion-feeder.png", cat:"Feeding & Hydration", desc:"App-controlled automatic feeder. 4L hopper. Scheduled portions.", features:["App-controlled scheduling","4L capacity","Portion control (10g steps)","Backup battery","Voice recording"] },
  "elevated-feeder": { name:"Elevated Feeding Stand", price:59, image:"/images/elevated-feeder.png", cat:"Feeding & Hydration", desc:"Natural bamboo stand with 2 stainless bowls. Reduces neck strain.", features:["Natural bamboo","2 stainless bowls","15-degree tilt","Non-slip feet","3 height levels"] },
  "food-container": { name:"Travel Food Container", price:29, image:"/images/food-container.png", cat:"Feeding & Hydration", desc:"Airtight silicone. 2kg capacity. Stackable. Carabiner clip.", features:["Airtight silicone seal","2kg capacity","Stackable design","Carabiner clip","Dishwasher safe"] },
  "water-filter": { name:"Pet Water Filter Pitcher", price:39, image:"/images/water-filter.png", cat:"Feeding & Hydration", desc:"Ceramic filter removes chlorine, heavy metals, odors.", features:["Ceramic filter (3mo life)","1.5L capacity","Removes chlorine","BPA-free","Dishwasher safe"] },
  "pet-scale": { name:"Smart Scale & Health Tracker", price:89, image:"/images/pet-scale.png", cat:"Health & Grooming", desc:"Bluetooth scale. Track weight trends. Share reports with vet.", features:["Bluetooth sync to app","Weight tracking & trends","Vet-share reports","Holds up to 50kg","Non-slip platform"] },
  "toothbrush-kit": { name:"Sonic Toothbrush Kit", price:49, image:"/images/toothbrush-kit.png", cat:"Health & Grooming", desc:"Sonic cleaning with 3 brush heads. Quiet motor won't startle pets.", features:["3 brush heads (S/M/L)","Sonic 31,000 strokes/min","USB rechargeable","Quiet motor (<40dB)","IPX7 waterproof"] },
  "deshedding-brush": { name:"Deshedding Brush Pro", price:39, image:"/images/deshedding-brush.png", cat:"Health & Grooming", desc:"Stainless steel teeth. Removes undercoat without damaging top coat.", features:["Stainless steel teeth","Ergonomic grip","All coat types","Easy-clean eject","Lifetime warranty"] },
  "nail-grinder": { name:"Pet Nail Grinder", price:35, image:"/images/nail-grinder.png", cat:"Health & Grooming", desc:"Quiet electric grinder with LED light. Safer than clippers.", features:["2-speed settings","Built-in LED light","Quiet motor","USB rechargeable","2 grinding ports"] },
  "travel-carrier": { name:"Pet Travel Carrier", price:149, image:"/images/travel-carrier.png", cat:"Travel & Outdoor", desc:"Airline-approved. Built-in calming mat base. Mesh windows.", features:["Airline-approved","Calming mat base","Mesh windows (3 sides)","Padded shoulder strap","Collapsible"] },
  "water-bottle": { name:"Portable Water Bottle", price:29, image:"/images/water-bottle.png", cat:"Travel & Outdoor", desc:"One-hand operation. Built-in bowl. Leak-proof. 500ml.", features:["One-hand flip lid","Built-in drinking bowl","Leak-proof seal","500ml capacity","BPA-free Tritan"] },
  "car-seat-cover": { name:"Car Seat Cover", price:69, image:"/images/car-seat-cover.png", cat:"Travel & Outdoor", desc:"Waterproof quilted fabric. Universal fit. Protects from fur and mud.", features:["Waterproof quilted","Universal fit","Non-slip backing","Seat belt openings","Machine washable"] },
  "travel-bowl": { name:"Foldable Travel Bowl", price:19, image:"/images/travel-bowl.png", cat:"Travel & Outdoor", desc:"Collapsible silicone. Carabiner clip. Folds flat for storage.", features:["Food-grade silicone","Folds flat (2cm)","Carabiner clip","500ml capacity","Dishwasher safe"] },
  "life-jacket": { name:"Pet Life Jacket", price:59, image:"/images/life-jacket.png", cat:"Travel & Outdoor", desc:"High-visibility with rescue handle. Buoyant foam keeps pets safe.", features:["Buoyant foam panels","Rescue grab handle","Reflective strips","3-point adjustable","5 sizes"] },
  "paw-necklace": { name:"Paw Print Memorial Necklace", price:129, image:"/images/paw-necklace.png", tag:"Emotional", cat:"Memorial & Keepsakes", desc:"Sterling silver. Custom-etched from your pet's actual paw print.", features:["Sterling silver pendant","Custom paw print etching","Inkless capture kit","18-22 inch chain","Optional engraving"] },
  "pet-portrait": { name:"Custom Pet Portrait", price:89, image:"/images/pet-portrait.png", cat:"Memorial & Keepsakes", desc:"Hand-illustrated watercolor from your photo. Natural oak frame.", features:["Hand-illustrated","From your photo","Oak frame included","3 sizes available","2-3 week delivery"] },
  "keepsake-box": { name:"Memory Keepsake Box", price:59, image:"/images/keepsake-box.png", cat:"Memorial & Keepsakes", desc:"Walnut wood with brass nameplate, photo slot, collar hook.", features:["Solid walnut wood","Custom brass nameplate","Photo frame slot","Interior collar hook","Velvet-lined"] },
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

  const isMemorial = p.cat === "Memorial & Keepsakes";

  return (
    <>
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-4" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[var(--text)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products" className="hover:text-[var(--text)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded">Products</Link>
        <span aria-hidden="true">/</span>
        <span className="text-[var(--text)]">{p.name}</span>
      </nav>

      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] mb-8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
      >
        <ArrowLeft size={16} /> Back to Shop
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-[var(--border-light)]">
          <Image src={p.image} alt={p.name} fill className="object-cover" sizes="50vw" priority loading="eager" />
          {p.tag && (
            <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${p.tag === "Emotional" ? "bg-[var(--accent)]/10 text-[var(--accent)]" : "bg-white text-[var(--primary)]"}`}>
              {p.tag}
            </span>
          )}
        </div>

        {/* Product info */}
        <div>
          <span className="text-sm text-[var(--text-muted)] mb-2 block">{p.cat}</span>
          <h1 className="text-3xl font-bold mb-4 text-[var(--text)]">{p.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-[var(--accent)] fill-[var(--accent)]" />
            ))}
            <span className="text-sm text-[var(--text-muted)]">4.9 (200+ reviews)</span>
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-2xl font-bold text-[var(--text)]">${p.price}</p>
            <WishlistButton product={{ id: slug, name: p.name, slug, image: p.image, price: p.price }} />
          </div>

          {/* Memorial warm intro */}
          {isMemorial && (
            <div className="mb-6 p-4 rounded-xl bg-[var(--accent)]/5 border border-[var(--accent)]/20">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                <span className="font-semibold text-[var(--accent)]">Made to honor a bond.</span>{" "}
                Each keepsake is crafted with care because we know what it carries. If you have questions or want to talk through a custom piece, reach out anytime.
              </p>
            </div>
          )}

          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">{p.desc}</p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="font-semibold text-[var(--text)] mb-3">Features</h3>
            <ul className="space-y-2">
              {p.features.map((f: string) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <Check size={16} className="text-[var(--primary)] flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Trust badges */}
          <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Truck size={16} className="text-[var(--accent)]" /> Free Shipping
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Shield size={16} className="text-[var(--accent)]" /> 30-Day Trial
            </div>
          </div>

          {/* CTA — memorial gets a different label */}
          <AddToCartButton
            product={{ slug, name: p.name, price: p.price, image: p.image }}
            label={isMemorial ? `Begin Your Keepsake — $${p.price}` : undefined}
          />

          {/* Trust info */}
          <div className="mt-6 p-4 bg-[var(--border-light)] rounded-xl space-y-3 text-sm">
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="23 7 16 12 23 17"/></svg>
              Free shipping over $50 · Delivered in 3-7 days
            </div>
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              30-Day Money Back Guarantee
            </div>
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              Secure checkout · PayPal encrypted
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile sticky CTA */}
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--border)] p-4 lg:hidden z-30 flex items-center gap-3">
      <div className="flex-1">
        <p className="text-sm font-semibold line-clamp-1 text-[var(--text)]">{p.name}</p>
        <p className="text-lg font-bold text-[var(--text)]">${p.price}</p>
      </div>
      <AddToCartButton
        product={{ slug, name: p.name, price: p.price, image: p.image }}
        label={isMemorial ? `Begin Your Keepsake — $${p.price}` : `Add — $${p.price}`}
      />
    </div>

    <RecentViews />
    </>
  );
}
