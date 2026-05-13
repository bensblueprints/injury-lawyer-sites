import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Breadcrumbs, LeadForm } from "@injury/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us – Las Vegas Injury Law Group",
  description:
    "Contact Las Vegas Injury Law Group for a free case consultation. Call (702) 555-0147, email us, or visit our office at 300 S 4th St, Suite 900, Las Vegas, NV 89101.",
  alternates: {
    canonical: "https://lasvegasnevadainjurylawyer.com/contact",
  },
  openGraph: {
    title: "Contact Las Vegas Injury Law Group",
    description:
      "Reach our Las Vegas personal injury attorneys 24/7. Free consultations — no fee unless we win.",
    url: "https://lasvegasnevadainjurylawyer.com/contact",
  },
};

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5 text-red-700" />,
    label: "Phone",
    value: siteConfig.phoneFormatted,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: <Mail className="w-5 h-5 text-red-700" />,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: <MapPin className="w-5 h-5 text-red-700" />,
    label: "Address",
    value: siteConfig.address,
    href: siteConfig.googleMapsUrl,
  },
  {
    icon: <Clock className="w-5 h-5 text-red-700" />,
    label: "Hours",
    value: siteConfig.hours,
    href: null,
  },
];

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact Us" }];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            Contact Las Vegas Injury Law Group
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            We're available 24/7. Reach us by phone, email, or the form below —
            we respond within 15 minutes.
          </p>
        </div>
      </section>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-5 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-gray-900 font-semibold hover:text-red-700 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
              <div className="bg-gray-100 h-72 flex items-center justify-center relative">
                <div className="text-center p-6">
                  <MapPin className="w-10 h-10 text-red-700 mx-auto mb-3" />
                  <p className="font-bold text-gray-900 mb-1">{siteConfig.firmName}</p>
                  <p className="text-sm text-gray-600 mb-4">{siteConfig.address}</p>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
                {/* Actual embed — uncomment when Google Maps API key is available */}
                {/* <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(siteConfig.address)}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                /> */}
              </div>
            </div>

            {/* Quick phone CTA */}
            <div className="mt-8 bg-red-700 rounded-2xl p-6 text-center">
              <p className="text-red-200 text-sm mb-2">Available 24/7 — Call us now</p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-white font-black text-3xl hover:text-yellow-300 transition-colors"
              >
                {siteConfig.phoneFormatted}
              </a>
              <p className="text-red-200 text-xs mt-2">
                Free consultation. No fee unless we win.
              </p>
            </div>
          </div>

          {/* Right: Lead form */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the form below and a member of our team will contact you within
              15 minutes. All information is kept strictly confidential.
            </p>
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <LeadForm config={siteConfig} variant="hero" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
