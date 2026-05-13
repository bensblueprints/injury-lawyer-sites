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
  metadataBase: new URL("https://austintexasinjurylawyer.com"),
  title: {
    default: "Austin Injury Lawyer | Austin Injury Law Group",
    template: "%s | Austin Injury Lawyer",
  },
  description: siteConfig.description,
  keywords: [
    "Austin personal injury lawyer",
    "Austin injury attorney",
    "car accident attorney Austin",
    "slip and fall lawyer Austin",
    "Texas personal injury law",
    "Round Rock injury lawyer",
    "Cedar Park injury attorney",
    "Georgetown personal injury lawyer",
    "Central Texas injury attorney",
    "no fee unless we win Austin",
  ],
  authors: [{ name: siteConfig.firmName }],
  creator: siteConfig.firmName,
  publisher: siteConfig.firmName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://austintexasinjurylawyer.com",
    siteName: siteConfig.firmName,
    title: "Austin Injury Lawyer | Austin Injury Law Group",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Austin Injury Law Group – Aggressive Personal Injury Attorneys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Injury Lawyer | Austin Injury Law Group",
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
    canonical: "https://austintexasinjurylawyer.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteConfig.firmName,
  description: siteConfig.description,
  url: "https://austintexasinjurylawyer.com",
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
    "Austin, TX",
    "Round Rock, TX",
    "Cedar Park, TX",
    "Georgetown, TX",
    "Pflugerville, TX",
    "Central Texas",
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
  image: "https://austintexasinjurylawyer.com/og-image.jpg",
  sameAs: [
    "https://www.facebook.com/austininjurylawgroup",
    "https://www.instagram.com/austininjurylawgroup",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "118",
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

        <StickyBar />
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
