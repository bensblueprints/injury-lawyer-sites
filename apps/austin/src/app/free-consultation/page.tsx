import type { Metadata } from "next";
import { HeroSection, LeadForm } from "@injury/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Free Consultation | Austin Injury Law Group",
  description:
    "Request your free case consultation with Austin Injury Law Group. No obligation. No upfront fees. We respond within 15 minutes. Call (512) 555-0219.",
  alternates: {
    canonical: "https://austintexasinjurylawyer.com/free-consultation",
  },
};

export default function FreeConsultationPage() {
  return (
    <>
      <HeroSection
        config={siteConfig}
        headline="Get Your Free Case Consultation"
        subheadline="No obligation, no upfront fees. An Austin injury attorney will review your case personally and explain your options. We respond within 15 minutes."
        compact
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">
                Tell Us About Your Case
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and an Austin injury attorney will contact you within
                15 minutes, day or night.
              </p>
              <LeadForm config={siteConfig} />
            </div>

            {/* Trust signals */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-black text-gray-900 text-lg mb-4">
                  What Happens Next
                </h3>
                <ol className="space-y-4">
                  {[
                    "We receive your inquiry and assign a senior attorney to your case",
                    "An attorney calls you within 15 minutes to listen to your story",
                    "We give you an honest assessment of your case and legal options",
                    "If we take your case, we handle everything — you pay nothing upfront",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-700 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-red-700 rounded-2xl p-6 text-white">
                <h3 className="font-black text-lg mb-2">Prefer to Call?</h3>
                <a
                  href="tel:(512) 555-0219"
                  className="text-3xl font-black hover:text-red-200 transition-colors"
                >
                  (512) 555-0219
                </a>
                <p className="text-red-200 text-sm mt-1">Available 24/7</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-black text-gray-900 text-lg mb-3">Our Guarantee</h3>
                <ul className="space-y-2">
                  {[
                    "100% free consultation — no obligation",
                    "No fee unless we win your case",
                    "We handle all paperwork and insurance communications",
                    "You pay nothing out of pocket",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-red-700 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
