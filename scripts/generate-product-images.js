const fs = require("fs");
const path = require("path");

const AGNES_KEY = "sk-N6xBOlG5L3XFU7blmlkdOSGawJo6D6kUpNcMd6QqbNHxDbDx";
const BASE = "https://apihub.agnes-ai.com/v1";

const OUTPUT_DIR = path.join(__dirname, "../public/images/products");

// Product -> lifestyle photo prompt
const PRODUCTS = [
  "calming-mat|A happy golden retriever resting on a soft grey weighted calming mat on a cozy living room rug, warm sunlight through window, serene home atmosphere",
  "calming-bed|A small dog curled up on a plush beige orthopedic calming bed with bolster edges, cozy bedroom corner, soft morning light, peaceful vibe",
  "anxiety-vest|A nervous dog wearing a snug blue anxiety relief compression vest, sitting calmly on a sofa, gentle lighting, reassuring home setting",
  "thunder-shirt|A relaxed labrador wearing a grey thunder shirt pro, lying peacefully during a rainy day, cozy indoor, warm lamp light",
  "calming-spray|A calming pheromone spray bottle on a wooden nightstand next to a sleeping cat, lavender sprigs beside it, soft candlelight, tranquil bedroom scene",
  "chew-toys|Three colorful textured rubber chew toys scattered on a bright kitchen floor, a puppy paw reaching toward them, playful morning light",
  "gps-tracker|A sleek black GPS pet tracker attached to a dog collar on an adventure hike, mountains in background, golden hour sunlight",
  "led-collar|A dog wearing a glowing LED safety collar walking at dusk in a park, collar visibly illuminated, safe evening walk scene",
  "smart-tag|A shiny stainless steel smart ID tag dangling from a leather dog collar, close-up shot on rustic wooden surface, natural light",
  "pet-camera|A modern white pet camera monitor on a shelf, screen showing a happy cat, treat dispenser mechanism visible, clean contemporary home",
  "pet-sensor|A small white door sensor device mounted on a window frame, morning light streaming in, modern minimalist interior",
  "slow-feeder|A cat eating from a sage green ceramic maze slow feeder bowl on a kitchen floor, natural sunlight, healthy eating lifestyle",
  "water-fountain|A sleek auto water fountain with cascading water, a cat drinking from it, clean modern kitchen counter, refreshing atmosphere",
  "portion-feeder|A modern automatic portion control pet feeder in a bright kitchen, app screen visible on phone beside it showing feeding schedule",
  "elevated-feeder|A bamboo elevated feeding stand with two stainless steel bowls, a large dog eating comfortably, modern home kitchen, ergonomic design",
  "food-container|An airtight silicone travel food container clipped to a backpack with carabiner, outdoor park scene, adventure ready",
  "water-filter|A pet water filter pitcher on a kitchen counter, fresh clean water pouring, natural light, healthy hydration concept",
  "pet-scale|A small dog standing on a smart digital pet scale, phone beside it showing health tracking app, bright bathroom, veterinary wellness",
  "toothbrush-kit|A sonic pet toothbrush kit with three brush heads laid out on a bathroom counter, a happy clean-toothed dog nearby, fresh morning",
  "deshedding-brush|A deshedding brush being used on a fluffy husky, fur being gently removed, outdoor sunny backyard, grooming care",
  "nail-grinder|A quiet electric pet nail grinder with LED light, close-up of gentle use on a relaxed dog paw, safe grooming moment",
  "travel-carrier|An airline-approved pet travel carrier with mesh windows, a calm cat peeking out, airport terminal background, ready for adventure",
  "water-bottle|A portable pet water bottle with built-in drinking bowl, one-hand operation shown on a hiking trail, active outdoor lifestyle",
  "car-seat-cover|A waterproof quilted car seat cover protecting a back seat, a happy dog sitting on it, car window view, road trip vibe",
  "travel-bowl|A collapsible silicone travel bowl clipped to a hiking backpack, forest trail in background, compact and portable design",
  "life-jacket|A dog wearing a bright orange pet life jacket with rescue handle, swimming in calm lake water, summer safety, joyful expression",
  "paw-necklace|An elegant sterling silver paw print memorial necklace displayed on a velvet cloth, soft candlelight, emotional keepsake mood, gentle and precious",
  "pet-portrait|A hand-painted watercolor custom pet portrait in an oak frame hanging on a wall, artistic and heartfelt, warm home gallery feel",
  "keepsake-box|A solid walnut wood memory keepsake box with brass nameplate, open revealing velvet interior with a collar inside, emotional memorial piece, warm lighting",
];

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function generateImage(prompt) {
  const res = await fetch(`${BASE}/images/generations`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${AGNES_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "agnes-image-2.1-flash",
      prompt,
      n: 1,
      size: "1024x1024",
    }),
  });
  const data = await res.json();
  return data.data?.[0]?.url || null;
}

async function downloadImage(url, filepath) {
  const res = await fetch(url);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(filepath, buffer);
  console.log(`  Saved: ${path.basename(filepath)}`);
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const args = process.argv.slice(2);
  const targetSlugs = args.length > 0 ? args : null;

  const todo = PRODUCTS.filter(p => {
    const slug = p.split("|")[0];
    if (targetSlugs) return targetSlugs.includes(slug);
    // Skip if already exists
    return !fs.existsSync(path.join(OUTPUT_DIR, `${slug}-lifestyle.png`));
  });

  console.log(`Generating ${todo.length} product lifestyle images...\n`);

  for (const item of todo) {
    const [slug, prompt] = item.split("|");
    console.log(`[${slug}] Generating...`);

    try {
      const url = await generateImage(prompt);
      if (!url) {
        console.log(`  FAILED: No URL returned`);
        continue;
      }
      await downloadImage(url, path.join(OUTPUT_DIR, `${slug}-lifestyle.png`));
    } catch (e) {
      console.log(`  ERROR: ${e.message}`);
    }

    // Rate limit: 1 per 3 seconds
    await sleep(3000);
  }

  console.log(`\nDone. Images saved to ${OUTPUT_DIR}`);
}

main().catch(console.error);
