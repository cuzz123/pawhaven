const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function main() {
  const categories = [
    { name: "Calming & Anxiety", slug: "calming" },
    { name: "Safety & Tracking", slug: "safety" },
    { name: "Feeding & Hydration", slug: "feeding" },
    { name: "Health & Grooming", slug: "health" },
    { name: "Travel & Outdoor", slug: "travel" },
    { name: "Memorial & Keepsakes", slug: "memorial" },
  ];

  for (const c of categories) {
    await db.category.upsert({ where: { slug: c.slug }, update: c, create: c });
  }
  console.log("Categories seeded.");

  const catMap = {};
  for (const c of await db.category.findMany()) catMap[c.slug] = c.id;

  const products = [
    { name:"Weighted Calming Mat", slug:"calming-mat", desc:"Deep pressure therapy for anxious pets. Evenly distributed glass beads.", price:89, image:"/images/calming-mat.png", tag:"Bestseller", cat:"calming", features:["Plush microfiber cover","Glass bead filling","Non-slip bottom","3 sizes","Vet recommended"] },
    { name:"Premium Calming Bed", slug:"calming-bed", desc:"Orthopedic memory foam with raised bolster edges.", price:129, image:"/images/calming-bed.png", tag:"New", cat:"calming", features:["Memory foam base","Bolster edges","Washable cover","3 sizes"] },
    { name:"Anxiety Relief Vest", slug:"anxiety-vest", desc:"Gentle compression wrap for storms and fireworks.", price:49, image:"/images/anxiety-vest.png", cat:"calming", features:["Adjustable velcro","Breathable fabric","5 sizes","30-day guarantee"] },
    { name:"Thunder Shirt Pro", slug:"thunder-shirt", desc:"Dual-layer pressure garment. Vet recommended.", price:59, image:"/images/thunder-shirt.png", cat:"calming", features:["Dual-layer compression","Moisture-wicking","Reflective strip","5 sizes"] },
    { name:"Calming Pheromone Spray", slug:"calming-spray", desc:"Natural lavender & chamomile. 120ml.", price:29, image:"/images/calming-spray.png", cat:"calming", features:["Natural ingredients","120ml","Safe for cats & dogs","Lasts 4-6 hours"] },
    { name:"Calming Chew Toy Set", slug:"chew-toys", desc:"3 textured rubber toys for anxious chewers.", price:35, image:"/images/chew-toys.png", cat:"calming", features:["3 toys","Food-grade rubber","Dishwasher safe"] },
    { name:"GPS Pet Tracker Pro", slug:"gps-tracker", desc:"Real-time GPS. Geofence alerts. 7-day battery.", price:149, image:"/images/gps-tracker.png", tag:"Tech", cat:"safety", features:["Real-time GPS","Geofence zones","7-day battery","IP68 waterproof","Free app"] },
    { name:"LED Safety Collar", slug:"led-collar", desc:"USB rechargeable. Visible at 500m.", price:39, image:"/images/led-collar.png", cat:"safety", features:["USB-C rechargeable","500m visibility","3 modes","Water-resistant"] },
    { name:"Smart ID Tag", slug:"smart-tag", desc:"QR code + NFC. Free profile hosting.", price:25, image:"/images/smart-tag.png", cat:"safety", features:["QR code + NFC","Free profile","Medical notes","Stainless steel"] },
    { name:"Pet Camera Monitor", slug:"pet-camera", desc:"1080p with treat dispenser and two-way audio.", price:99, image:"/images/pet-camera.png", tag:"Popular", cat:"safety", features:["1080p HD","Treat dispenser","Two-way audio","Night vision","Free app"] },
    { name:"Door/Window Pet Sensor", slug:"pet-sensor", desc:"Smart sensor alerts your phone when opened.", price:45, image:"/images/pet-sensor.png", cat:"safety", features:["Instant alerts","Peel-and-stick","1-year battery"] },
    { name:"Smart Slow Feeder Bowl", slug:"slow-feeder", desc:"Maze pattern slows eating by 4x. Ceramic.", price:69, image:"/images/slow-feeder.png", tag:"Popular", cat:"feeding", features:["Food-grade ceramic","4x slower eating","Non-slip base","Dishwasher safe"] },
    { name:"Auto Water Fountain", slug:"water-fountain", desc:"Circulating filtered water. 2L. Silent pump.", price:79, image:"/images/water-fountain.png", cat:"feeding", features:["2L capacity","Triple filtration","Ultra-quiet","LED indicator"] },
    { name:"Portion Control Feeder", slug:"portion-feeder", desc:"App-controlled. 4L hopper. Scheduled portions.", price:99, image:"/images/portion-feeder.png", cat:"feeding", features:["App-controlled","4L capacity","Portion control","Backup battery"] },
    { name:"Elevated Feeding Stand", slug:"elevated-feeder", desc:"Bamboo stand with 2 stainless bowls.", price:59, image:"/images/elevated-feeder.png", cat:"feeding", features:["Natural bamboo","2 stainless bowls","15-degree tilt","3 heights"] },
    { name:"Travel Food Container", slug:"food-container", desc:"Airtight silicone. 2kg. Stackable.", price:29, image:"/images/food-container.png", cat:"feeding", features:["Airtight seal","2kg capacity","Stackable","Carabiner clip"] },
    { name:"Pet Water Filter Pitcher", slug:"water-filter", desc:"Ceramic filter. Removes impurities.", price:39, image:"/images/water-filter.png", cat:"feeding", features:["Ceramic filter","1.5L","Removes chlorine","BPA-free"] },
    { name:"Smart Scale & Health Tracker", slug:"pet-scale", desc:"Bluetooth sync. Vet-share reports.", price:89, image:"/images/pet-scale.png", cat:"health", features:["Bluetooth sync","Weight trends","Vet reports","50kg capacity"] },
    { name:"Sonic Toothbrush Kit", slug:"toothbrush-kit", desc:"3 brush heads. Quiet motor.", price:49, image:"/images/toothbrush-kit.png", cat:"health", features:["3 heads","Sonic cleaning","USB recharge","Quiet motor"] },
    { name:"Deshedding Brush Pro", slug:"deshedding-brush", desc:"Stainless steel teeth. All coat types.", price:39, image:"/images/deshedding-brush.png", cat:"health", features:["Stainless steel","Ergonomic grip","All coats","Lifetime warranty"] },
    { name:"Pet Nail Grinder", slug:"nail-grinder", desc:"LED light. Quiet. 2-speed.", price:35, image:"/images/nail-grinder.png", cat:"health", features:["2-speed","LED light","Quiet motor","USB recharge"] },
    { name:"Pet Travel Carrier", slug:"travel-carrier", desc:"Airline-approved. Calming mat base.", price:149, image:"/images/travel-carrier.png", cat:"travel", features:["Airline-approved","Calming mat base","Mesh windows","Collapsible"] },
    { name:"Portable Water Bottle", slug:"water-bottle", desc:"One-hand operation. Leak-proof. 500ml.", price:29, image:"/images/water-bottle.png", cat:"travel", features:["One-hand flip","Built-in bowl","Leak-proof","500ml"] },
    { name:"Car Seat Cover", slug:"car-seat-cover", desc:"Waterproof quilted. Universal fit.", price:69, image:"/images/car-seat-cover.png", cat:"travel", features:["Waterproof","Universal fit","Non-slip","Machine washable"] },
    { name:"Foldable Travel Bowl", slug:"travel-bowl", desc:"Collapsible silicone. Carabiner clip.", price:19, image:"/images/travel-bowl.png", cat:"travel", features:["Food-grade silicone","Folds flat","Carabiner clip","500ml"] },
    { name:"Pet Life Jacket", slug:"life-jacket", desc:"Reflective strips. Rescue handle.", price:59, image:"/images/life-jacket.png", cat:"travel", features:["Buoyant foam","Rescue handle","Reflective strips","5 sizes"] },
    { name:"Paw Print Memorial Necklace", slug:"paw-necklace", desc:"Sterling silver. Custom-etched paw print.", price:129, image:"/images/paw-necklace.png", tag:"Emotional", cat:"memorial", features:["Sterling silver","Custom etching","Inkless kit","Adjustable chain"] },
    { name:"Custom Pet Portrait", slug:"pet-portrait", desc:"Hand-illustrated watercolor. Oak frame.", price:89, image:"/images/pet-portrait.png", cat:"memorial", features:["Hand-illustrated","From your photo","Oak frame","3 sizes"] },
    { name:"Memory Keepsake Box", slug:"keepsake-box", desc:"Walnut wood. Brass nameplate.", price:59, image:"/images/keepsake-box.png", cat:"memorial", features:["Solid walnut","Brass nameplate","Photo slot","Velvet-lined"] },
  ];

  for (const p of products) {
    await db.product.upsert({
      where: { slug: p.slug },
      update: { name:p.name, description:p.desc, price:p.price, image:p.image, tag:p.tag||null, features:p.features, categoryId: catMap[p.cat] },
      create: { name:p.name, slug:p.slug, description:p.desc, price:p.price, image:p.image, tag:p.tag||null, features:p.features, categoryId: catMap[p.cat] },
    });
  }
  console.log(`${products.length} products seeded.`);
}

main().then(() => db.$disconnect()).catch(e => { console.error(e); db.$disconnect(); process.exit(1); });
