import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header, Footer, StickyBar, ExitIntentPopup, AIReceptionist } from "@injury/ui";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omahanebraskainjurylawyer.com"),
  title: {
    default: "Omaha Injury Lawyer | Omaha Injury Law Group",
    template: "%s | Omaha Injury Lawyer",
  },
  description: siteConfig.description,
  keywords: [
    "Omaha personal injury lawyer",
    "Omaha injury attorney",
    "car accident attorney Omaha",
    "slip and fall lawyer Omaha",
    "Nebraska personal injury law",
    "Bellevue injury lawyer",
    "Papillion injury attorney",
    "La Vista personal injury lawyer",
    "Eastern Nebraska injury attorney",
    "no fee unless we win Omaha",
  ],
  authors: [{ name: siteConfig.firmName }],
  creator: siteConfig.firmName,
  publisher: siteConfig.firmName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omahanebraskainjurylawyer.com",
    siteName: siteConfig.firmName,
    title: "Omaha Injury Lawyer | Omaha Injury Law Group",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Omaha Injury Law Group – Aggressive Personal Injury Attorneys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omaha Injury Lawyer | Omaha Injury Law Group",
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://omahanebraskainjurylawyer.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteConfig.firmName,
  description: siteConfig.description,
  url: "https://omahanebraskainjurylawyer.com",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressStreet,
    addressLocality: siteConfig.addressCity,
    addressRegion: siteConfig.stateAbbr,
    postalCode: siteConfig.addressZip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.latitude,
    longitude: siteConfig.longitude,
  },
  openingHours: ["Mo-Fr 08:00-20:00", "Sa 09:00-17:00"],
  priceRange: "Free Consultation – No Fee Unless We Win",
  areaServed: [
    "Omaha, NE",
    "Bellevue, NE",
    "Papillion, NE",
    "La Vista, NE",
    "Elkhorn, NE",
    "Eastern Nebraska",
  ],
  serviceType: [
    "Personal Injury Law",
    "Car Accident Attorney",
    "Truck Accident Attorney",
    "Slip and Fall Attorney",
    "Workers Compensation",
    "Wrongful Death Attorney",
  ],
  hasMap: siteConfig.googleMapsUrl,
  image: "https://omahanebraskainjurylawyer.com/og-image.jpg",
  sameAs: [
    "https://www.facebook.com/omahainjurylawgroup",
    "https://www.instagram.com/omahainjurylawgroup",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "97",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for screen readers */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <StickyBar config={siteConfig} />
        <Header config={siteConfig} />

        <main id="main-content">{children}</main>

        <Footer config={siteConfig} />
        <ExitIntentPopup config={siteConfig} />
        {siteConfig.elevenLabsAgentId && (
          <AIReceptionist agentId={siteConfig.elevenLabsAgentId} />
        )}

        {/* Local Business JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
