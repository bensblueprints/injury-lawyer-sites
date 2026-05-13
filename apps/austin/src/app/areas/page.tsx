import type { Metadata } from "next";
import { HeroSection, NeighborhoodCard, CTABox } from "@injury/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Austin Personal Injury Service Areas | Austin Injury Law Group",
  description:
    "Austin Injury Law Group serves injury victims throughout Austin, Round Rock, Cedar Park, Georgetown, and all of Central Texas. Call (512) 555-0219 for a free consultation.",
  alternates: {
    canonical: "https://austintexasinjurylawyer.com/areas",
  },
};

const NEIGHBORHOODS = [
  { name: "Round Rock", slug: "round-rock", description: "Serving Round Rock injury victims on I-35, US-79, and throughout Williamson County." },
  { name: "Cedar Park", slug: "cedar-park", description: "Rapid growth along US-183A and Whitestone Boulevard with increasing accident rates." },
  { name: "Georgetown", slug: "georgetown", description: "Williamson County seat — serving injury victims on I-35 and Inner Loop Road." },
  { name: "Kyle", slug: "kyle", description: "Explosive I-35 corridor growth brings increased traffic and accident risks." },
  { name: "Pflugerville", slug: "pflugerville", description: "Serving injury victims on SH-130, FM-1825, and Northeast Austin suburbs." },
  { name: "Leander", slug: "leander", description: "Rapid development along US-183 and the Capital Metro Rail corridor." },
  { name: "Buda", slug: "buda", description: "High-speed I-35 corridor accidents and Hays County injury claims." },
  { name: "Manor", slug: "manor", description: "Serving Travis County eastern communities along US-290 and SH-130." },
  { name: "San Marcos", slug: "san-marcos", description: "I-35 corridor and Texas State University area injury claims." },
  { name: "Hutto", slug: "hutto", description: "Fast-growing Williamson County community with expanding road network." },
  { name: "Taylor", slug: "taylor", description: "Williamson County semiconductor corridor with new residents and road hazards." },
  { name: "Lakeway", slug: "lakeway", description: "Winding Hill Country roads and Lake Travis corridor accident claims." },
  { name: "Dripping Springs", slug: "dripping-springs", description: "Hill Country roads and US-290 corridor in Hays County." },
  { name: "Bastrop", slug: "bastrop", description: "Serving Bastrop County victims along SH-71 and SH-21." },
  { name: "Westlake", slug: "westlake", description: "Winding Hill Country roads and MoPac proximity in Travis County." },
];

export default function AreasPage() {
  return (
    <>
      <HeroSection
        config={siteConfig}
        headline="Austin Injury Law — Service Areas"
        subheadline="Austin Injury Law Group serves injury victims throughout Central Texas — from downtown Austin to the surrounding suburbs and Hill Country. No fee unless we win."
        compact
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              All Austin Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We represent injury victims throughout Travis County, Williamson County, Hays
              County, and all of Central Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEIGHBORHOODS.map((hood, i) => (
              <NeighborhoodCard
                key={hood.slug}
                name={hood.name}
                slug={hood.slug}
                description={hood.description}
                index={i}
              />
            ))}
          </div>

          <div className="mt-12">
            <CTABox
              config={siteConfig}
              headline="Don't See Your Area? We Probably Serve It."
              body="Call (512) 555-0219 — we serve all of Central Texas and surrounding communities."
              variant="red"
            />
          </div>
        </div>
      </section>
    </>
  );
}
