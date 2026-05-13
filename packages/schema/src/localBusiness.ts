import type { SiteConfig } from "./types";

export function localBusinessSchema(config: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: config.firmName,
    description: config.description,
    url: `https://${config.domain}`,
    telephone: config.phone,
    email: config.email,
    image: config.lawyerPhoto,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.addressStreet,
      addressLocality: config.addressCity,
      addressRegion: config.addressState,
      postalCode: config.addressZip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: config.latitude,
      longitude: config.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
    },
    priceRange: "Free Consultation — No Fee Unless We Win",
  };
}
