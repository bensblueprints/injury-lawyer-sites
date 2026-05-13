import type { SiteConfig } from "./types";

export function legalServiceSchema(
  config: SiteConfig,
  practiceArea: string,
  pageUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${config.firmName} — ${practiceArea}`,
    description: `Experienced ${practiceArea} attorneys in ${config.city}, ${config.stateAbbr}. Free consultation. No fee unless we win.`,
    url: pageUrl,
    telephone: config.phone,
    email: config.email,
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
    openingHours: config.hours,
    priceRange: "Free Consultation",
    areaServed: {
      "@type": "City",
      name: config.city,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Personal Injury Legal Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Case Evaluation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "No Fee Unless We Win" } },
      ],
    },
  };
}
