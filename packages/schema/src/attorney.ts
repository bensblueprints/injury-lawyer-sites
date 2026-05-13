import type { SiteConfig } from "./types";

export function attorneySchema(config: SiteConfig, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: config.lawyerName,
    description: `Personal injury attorney in ${config.city}, ${config.stateAbbr}. Serving accident victims with aggressive representation and a no-fee guarantee.`,
    url: pageUrl,
    telephone: config.phone,
    email: config.email,
    image: config.lawyerPhoto,
    worksFor: {
      "@type": "LegalService",
      name: config.firmName,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: config.addressStreet,
      addressLocality: config.addressCity,
      addressRegion: config.addressState,
      postalCode: config.addressZip,
      addressCountry: "US",
    },
    knowsAbout: [
      "Personal Injury Law",
      "Car Accident Claims",
      "Medical Malpractice",
      "Workers Compensation",
      "Wrongful Death",
    ],
  };
}
