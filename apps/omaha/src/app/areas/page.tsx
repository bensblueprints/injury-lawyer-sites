import type { Metadata } from "next";
import { HeroSection, NeighborhoodCard, CTABox } from "@injury/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Omaha Personal Injury Service Areas | Omaha Injury Law Group",
  description:
    "Omaha Injury Law Group serves injury victims throughout Omaha, Bellevue, Papillion, La Vista, and all of Eastern Nebraska. Call (402) 555-0167 for a free consultation.",
  alternates: {
    canonical: "https://omahanebraskainjurylawyer.com/areas",
  },
};

const NEIGHBORHOODS = [
  { name: "Bellevue", slug: "bellevue", description: "Serving Bellevue injury victims near Offutt AFB and throughout Nebraska's second-largest city." },
  { name: "Papillion", slug: "papillion", description: "Growing Sarpy County commercial corridors along US-370 and Cornhusker Road." },
  { name: "La Vista", slug: "la-vista", description: "Serving injury victims along 84th Street, I-80, and throughout Sarpy County." },
  { name: "Elkhorn", slug: "elkhorn", description: "Rapidly developing West Omaha community along Dodge Street and West Maple Road." },
  { name: "Millard", slug: "millard", description: "Southwest Omaha's largest neighborhood along Millard Avenue and Q Street." },
  { name: "Midtown", slug: "midtown", description: "Busy Dodge Street corridor and UNMC medical campus accident claims." },
  { name: "Dundee", slug: "dundee", description: "Historic Underwood Avenue retail district and residential neighborhood." },
  { name: "Benson", slug: "benson", description: "Nightlife district and industrial corridors on Military Avenue." },
  { name: "South Omaha", slug: "south-omaha", description: "Industrial zones, meatpacking facilities, and workplace injury claims." },
  { name: "North Omaha", slug: "north-omaha", description: "Serving injury victims along 30th Street, Ames Avenue, and North Omaha communities." },
  { name: "Council Bluffs", slug: "council-bluffs", description: "Iowa side of the metro — I-80/I-29 crashes and casino premises liability." },
  { name: "Chalco", slug: "chalco", description: "Southwest Omaha unincorporated communities along 84th Street and Q Street." },
  { name: "Ralston", slug: "ralston", description: "Serving Ralston residents along Q Street and Cornhusker Road in Sarpy County." },
  { name: "Boys Town", slug: "boys-town", description: "West Omaha communities along West Dodge Road and I-680." },
  { name: "Aksarben", slug: "aksarben", description: "Aksarben Village mixed-use development and UNMC area injury claims." },
];

export default function AreasPage() {
  return (
    <>
      <HeroSection
        config={siteConfig}
        headline="Omaha Injury Law — Service Areas"
        subheadline="Omaha Injury Law Group serves injury victims throughout Eastern Nebraska and Southwest Iowa — from downtown Omaha to the surrounding communities. No fee unless we win."
        compact
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              All Omaha Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We represent injury victims throughout Douglas County, Sarpy County, and
              Eastern Nebraska. We also serve the Council Bluffs, Iowa area.
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
              body="Call (402) 555-0167 — we serve all of Eastern Nebraska and Southwest Iowa communities."
              variant="red"
            />
          </div>
        </div>
      </section>
    </>
  );
}
