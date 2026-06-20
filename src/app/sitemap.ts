import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pawhaven.vercel.app";
  const slugs = ["calming-mat", "calming-bed", "anxiety-vest", "thunder-shirt", "calming-spray", "chew-toys", "gps-tracker", "led-collar", "smart-tag", "pet-camera", "pet-sensor", "slow-feeder", "water-fountain", "portion-feeder", "elevated-feeder", "food-container", "water-filter", "pet-scale", "toothbrush-kit", "deshedding-brush", "nail-grinder", "travel-carrier", "water-bottle", "car-seat-cover", "travel-bowl", "life-jacket", "paw-necklace", "pet-portrait", "keepsake-box"];
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: base + "/products", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    ...slugs.map(s => ({ url: base + "/products/" + s, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
  ];
}
