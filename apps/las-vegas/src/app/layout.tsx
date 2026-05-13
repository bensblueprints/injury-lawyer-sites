import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header, Footer, StickyBar, ExitIntentPopup } from "@injury/ui";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lasvegasnevadainjurylawyer.com"),
  title: {
    default: "Las Vegas Injury Lawyer | Las Vegas Injury Law Group",
    template: "%s | Las Vegas Injury Lawyer",
  },
  description: siteConfig.description,
  keywords: [
    "Las Vegas personal injury lawyer",
    "Las Vegas injury attorney",
    "car accident attorney Las Vegas",
    "slip and fall lawyer Las Vegas",
    "Nevada personal injury law",
    "Henderson injury lawyer",
    "North Las Vegas attorney",
    "no fee unless we win Las Vegas",
  ],
  authors: [{ name: siteConfig.firmName }],
  creator: siteConfig.firmName,
  publisher: siteConfig.firmName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lasvegasnevadainjurylawyer.com",
    siteName: siteConfig.firmName,
    title: "Las Vegas Injury Lawyer | Las Vegas Injury Law Group",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Las Vegas Injury Law Group – Aggressive Personal Injury Attorneys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas Injury Lawyer | Las Vegas Injury Law Group",
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
    canonical: "https://lasvegasnevadainjurylawyer.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteConfig.firmName,
  description: siteConfig.description,
  url: "https://lasvegasnevadainjurylawyer.com",
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
  priceRange: "Free Consultation — No Fee Unless We Win",
  areaServed: [
    "Las Vegas, NV",
    "Henderson, NV",
    "North Las Vegas, NV",
    "Boulder City, NV",
    "Summerlin, NV",
    "Southern Nevada",
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
  image: "https://lasvegasnevadainjurylawyer.com/og-image.jpg",
  sameAs: [
    "https://www.facebook.com/lasvegasinjurylawgroup",
    "https://www.instagram.com/lasvegasinjurylawgroup",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
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

        {/* Local Business JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
