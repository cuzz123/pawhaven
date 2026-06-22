// JSON-LD Structured Data for SEO Rich Snippets

interface ProductSchemaProps {
  name: string;
  description: string;
  images: string[];
  price: number;
  comparePrice?: number | null;
  currency?: string;
  sku?: string;
  availability?: "InStock" | "OutOfStock";
  ratingValue?: number;
  reviewCount?: number;
  url: string;
  brand?: string;
  category?: string;
}

export function ProductJsonLd({
  name, description, images, price, comparePrice, currency = "USD",
  sku, availability = "InStock", ratingValue = 4.9, reviewCount = 200,
  url, brand = "PawHaven", category,
}: ProductSchemaProps) {
  const data: any = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name,
    description: description.slice(0, 500),
    image: images.filter(Boolean),
    sku,
    brand: { "@type": "Brand", name: brand },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: currency,
      price: price.toFixed(2),
      availability: `https://schema.org/${availability}`,
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  if (comparePrice) {
    data.offers.priceSpecification = {
      "@type": "PriceSpecification",
      price: price.toFixed(2),
      priceCurrency: currency,
    };
  }

  if (ratingValue && reviewCount) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: (Math.round(ratingValue * 10) / 10).toFixed(1),
      reviewCount,
    };
  }

  if (category) {
    data.category = category;
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbSchemaProps) {
  const data = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    name: "PawHaven",
    url: "https://pawhaven.com",
    description: "Premium smart pet products for modern pet parents. Weighted calming mats, GPS trackers, memorial jewelry, and slow feeders designed with love.",
    sameAs: [
      "https://instagram.com/pawhaven",
      "https://pinterest.com/pawhaven",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@pawhaven.com",
      contactType: "customer service",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
