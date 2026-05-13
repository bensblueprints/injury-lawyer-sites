import type { Metadata } from "next";
import { Breadcrumbs, NeighborhoodCard, CTABox } from "@injury/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Service Areas – Denver Personal Injury Lawyer",
  description:
    "Denver Injury Law Group serves injury victims throughout Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, and all of Metro Denver and Colorado.",
  alternates: {
    canonical: "https://devnercoloradoinjurylawyer.com/areas",
  },
  openGraph: {
    title: "Service Areas – Denver Injury Law Group",
    description:
      "We represent personal injury victims throughout all of Metro Denver and Colorado. Find your neighborhood and learn how we can help.",
    url: "https://devnercoloradoinjurylawyer.com/areas",
  },
};

const neighborhoods = [
  {
    name: "Aurora",
    slug: "aurora",
    description:
      "Colorado's third-largest city — we represent Aurora residents injured in car crashes on I-225, slip and falls, and workplace accidents throughout Arapahoe, Adams, and Douglas counties.",
  },
  {
    name: "Lakewood",
    slug: "lakewood",
    description:
      "Jefferson County's largest city. We serve Lakewood residents injured on US-6, Wadsworth Blvd, and commercial corridors throughout West Denver.",
  },
  {
    name: "Arvada",
    slug: "arvada",
    description:
      "A fast-growing northwest Denver suburb — we handle car accidents, slip and falls, and personal injury cases for Arvada residents and visitors.",
  },
  {
    name: "Westminster",
    slug: "westminster",
    description:
      "Busy US-36 corridors and dense commercial development make Westminster a frequent site of car accidents and slip and fall injuries.",
  },
  {
    name: "Thornton",
    slug: "thornton",
    description:
      "One of Colorado's fastest-growing cities — we represent Thornton residents injured in I-25 crashes, workplace accidents, and premises liability incidents.",
  },
  {
    name: "Centennial",
    slug: "centennial",
    description:
      "Arapahoe County's largest city — we handle injury cases for Centennial residents and visitors along Arapahoe Road and I-25.",
  },
  {
    name: "Highlands Ranch",
    slug: "highlands-ranch",
    description:
      "Douglas County's premier planned community — we represent Highlands Ranch residents injured on C-470, Santa Fe Drive, and in local commercial areas.",
  },
  {
    name: "Englewood",
    slug: "englewood",
    description:
      "Immediately south of Denver along Broadway — we handle injury cases for Englewood residents near the Swedish Medical Center corridor.",
  },
  {
    name: "Littleton",
    slug: "littleton",
    description:
      "Arapahoe County's historic county seat southwest of Denver — we serve Littleton residents injured in C-470 accidents, slip and falls, and more.",
  },
  {
    name: "Commerce City",
    slug: "commerce-city",
    description:
      "Heavy commercial truck traffic on I-76 and US-85 means frequent serious accidents — we represent Commerce City workers and residents.",
  },
  {
    name: "Parker",
    slug: "parker",
    description:
      "A fast-growing Douglas County town along E-470 — we represent Parker residents in highway accidents, slip and falls, and construction incidents.",
  },
  {
    name: "Brighton",
    slug: "brighton",
    description:
      "The Adams County seat north of Denver along I-76 — we serve Brighton residents injured in highway crashes and workplace incidents.",
  },
  {
    name: "Boulder",
    slug: "boulder",
    description:
      "Home to CU Boulder — we handle personal injury cases for Boulder residents on US-36, Canyon Blvd, and throughout Boulder County.",
  },
  {
    name: "Broomfield",
    slug: "broomfield",
    description:
      "Colorado's newest county on US-36 — we represent Broomfield residents injured in commuter corridors and commercial areas.",
  },
  {
    name: "Castle Rock",
    slug: "castle-rock",
    description:
      "Douglas County's growing county seat on I-25 — we serve Castle Rock residents injured in highway accidents and slip and fall incidents.",
  },
  {
    name: "Downtown Denver",
    slug: "downtown-denver",
    description:
      "The urban core of Colorado — pedestrian accidents, rideshare crashes, and slip and falls in downtown Denver's busy streets.",
  },
  {
    name: "LoDo",
    slug: "lodo",
    description:
      "Denver's Lower Downtown entertainment district — we handle rideshare accidents, bar injuries, and pedestrian cases near Coors Field and Union Station.",
  },
];

export default function AreasPage() {
  const breadcrumbs = [{ label: "Service Areas" }];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            Personal Injury Lawyers Serving All of Metro Denver
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Denver Injury Law Group represents injury victims throughout Denver,
            Aurora, Lakewood, Arvada, Westminster, Thornton, and every community across
            Metro Denver and the Colorado Front Range.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900 mb-3">
              Metro Denver Communities We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click any neighborhood below to learn about injury representation in that area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {neighborhoods.map((hood, i) => (
              <NeighborhoodCard
                key={hood.slug}
                name={hood.name}
                slug={hood.slug}
                description={hood.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Broader coverage */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-4 text-center">
            Don't See Your Area? We Likely Cover It.
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Denver Injury Law Group represents clients throughout all of Metro Denver,
            the Colorado Front Range, and surrounding Colorado jurisdictions.
            If your injury occurred in Colorado, we can help.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Denver",
              "Aurora",
              "Lakewood",
              "Arvada",
              "Westminster",
              "Thornton",
              "Centennial",
              "Highlands Ranch",
              "Englewood",
              "Littleton",
              "Commerce City",
              "Parker",
              "Brighton",
              "Boulder",
              "Broomfield",
              "Castle Rock",
              "Wheat Ridge",
              "Golden",
              "Longmont",
              "Fort Collins",
            ].map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                {city}, CO
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CTABox
          config={siteConfig}
          headline="Injured Anywhere in Metro Denver? We Can Help."
          body="Our attorneys serve clients throughout Denver and Colorado. Free consultation, no fee unless we win."
        />
      </section>
    </>
  );
}
