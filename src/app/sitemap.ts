import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://pawhaven.vercel.app';
  return [{url:base,lastModified:new Date(),changeFrequency:'weekly',priority:1},{url:base+'/products',lastModified:new Date(),changeFrequency:'weekly',priority:0.9}];
}