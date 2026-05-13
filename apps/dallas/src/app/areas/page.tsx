import type { Metadata } from "next";
import { HeroSection, NeighborhoodCard, CTABox } from "@injury/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dallas Personal Injury Service Areas | Dallas Injury Law Group",
  description:
    "Dallas Injury Law Group serves injury victims throughout Dallas, Plano, Irving, Arlington, Garland, and all of the DFW Metroplex. Call (214) 555-0183 for a free consultation.",
  alternates: {
    canonical: "https://dallastexasinjurylawyer.com/areas",
  },
};

const NEIGHBORHOODS = [
  { name: "Downtown Dallas", slug: "downtown-dallas", description: "Serving the Dallas CBD, Arts District, Deep Ellum, and surrounding downtown corridor." },
  { name: "Uptown", slug: "uptown", description: "Dense pedestrian and nightlife environment with frequent slip-and-fall and rideshare injury claims." },
  { name: "Oak Cliff", slug: "oak-cliff", description: "Car crashes, truck accidents, and premises liability cases throughout this diverse South Dallas community." },
  { name: "Plano", slug: "plano", description: "Serving Plano residents injured on the Dallas North Tollway, US-75, and throughout Collin County." },
  { name: "Irving", slug: "irving", description: "Vehicle and workplace accidents near DFW Airport and Irving's dense commercial corridors." },
  { name: "Arlington", slug: "arlington", description: "Injury claims from AT&T Stadium, Six Flags, and I-30 throughout Arlington." },
  { name: "Garland", slug: "garland", description: "Industrial zones and busy intersections on I-30 and Beltline Road." },
  { name: "Mesquite", slug: "mesquite", description: "Car crashes, truck accidents, and workplace incidents throughout East Dallas." },
  { name: "Frisco", slug: "frisco", description: "Construction accidents and vehicle crashes along the rapidly growing Dallas North Tollway corridor." },
  { name: "McKinney", slug: "mckinney", description: "Growing Collin County community with expanding highway accident risks on US-75 and SH-121." },
  { name: "Richardson", slug: "richardson", description: "Serving the Telecom Corridor along US-75 and Campbell Road." },
  { name: "Grand Prairie", slug: "grand-prairie", description: "Injury claims from I-20, SH-360, and throughout this DFW heart city." },
  { name: "Denton", slug: "denton", description: "Serving Denton County injury victims on I-35E, I-35W, and Loop 288." },
  { name: "Carrollton", slug: "carrollton", description: "Industrial park accidents and highway injuries along I-35E and PGBT." },
  { name: "Lewisville", slug: "lewisville", description: "Serving injury victims on I-35E, SH-121, and throughout Denton County." },
];

export default function AreasPage() {
  return (
    <>
      <HeroSection
        config={siteConfig}
        headline="Dallas Injury Law — Service Areas"
        subheadline="Dallas Injury Law Group serves injury victims throughout the DFW Metroplex — from downtown Dallas to the surrounding suburbs. No fee unless we win."
        compact
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              All Dallas Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We represent injury victims throughout Dallas County, Collin County, Denton
              County, Tarrant County, and the entire DFW Metroplex.
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
              body="Call (214) 555-0183 — we serve all of DFW and surrounding North Texas communities."
              variant="red"
            />
          </div>
        </div>
      </section>
    </>
  );
}
