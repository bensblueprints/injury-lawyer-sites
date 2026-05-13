import type { Metadata } from "next";
import { HeroSection, LeadForm } from "@injury/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us | Austin Injury Law Group",
  description:
    "Contact Austin Injury Law Group for a free personal injury consultation. Call (512) 555-0219 or submit our online form. Available 24/7.",
  alternates: {
    canonical: "https://austintexasinjurylawyer.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        config={siteConfig}
        headline="Contact Austin Injury Law Group"
        subheadline="We're available 24/7. Call us now or submit the form below — an Austin injury attorney will respond within 15 minutes."
        compact
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">
                Reach Us Directly
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-bold text-gray-900">Phone</p>
                    <a href="tel:(512) 555-0219" className="text-red-700 text-xl font-black hover:text-red-800">
                      (512) 555-0219
                    </a>
                    <p className="text-gray-500 text-sm">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <a href="mailto:contact@austintexasinjurylawyer.com" className="text-red-700 hover:text-red-800">
                      contact@austintexasinjurylawyer.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-bold text-gray-900">Office Address</p>
                    <p className="text-gray-700">301 Congress Ave, Suite 1400</p>
                    <p className="text-gray-700">Austin, TX 78701</p>
                    <a
                      href="https://maps.google.com/?q=301+Congress+Ave+Austin+TX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-700 hover:text-red-800 text-sm font-semibold mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="font-bold text-gray-900">Hours</p>
                    <p className="text-gray-700">Monday–Friday: 8am–8pm</p>
                    <p className="text-gray-700">Saturday: 9am–5pm</p>
                    <p className="text-gray-700">Sunday: Emergency Only</p>
                    <p className="text-red-700 font-bold text-sm mt-1">24/7 Phone & Online</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <LeadForm config={siteConfig} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
