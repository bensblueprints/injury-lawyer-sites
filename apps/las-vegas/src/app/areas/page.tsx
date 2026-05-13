import type { Metadata } from "next";
import { Breadcrumbs, NeighborhoodCard, CTABox } from "@injury/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Service Areas – Las Vegas Personal Injury Lawyer",
  description:
    "Las Vegas Injury Law Group serves injury victims throughout Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, and all of Southern Nevada.",
  alternates: {
    canonical: "https://lasvegasnevadainjurylawyer.com/areas",
  },
  openGraph: {
    title: "Service Areas – Las Vegas Injury Law Group",
    description:
      "We represent personal injury victims throughout all of Southern Nevada. Find your neighborhood and learn how we can help.",
    url: "https://lasvegasnevadainjurylawyer.com/areas",
  },
};

const neighborhoods = [
  {
    name: "Downtown Las Vegas",
    slug: "downtown-las-vegas",
    description:
      "Serving injury victims throughout the Downtown Arts District, Fremont Street, and the government center corridor.",
  },
  {
    name: "The Strip",
    slug: "the-strip",
    description:
      "Tourist-heavy Las Vegas Boulevard sees high rates of pedestrian accidents, hotel injuries, and rideshare crashes.",
  },
  {
    name: "Summerlin",
    slug: "summerlin",
    description:
      "Las Vegas's largest master-planned community — we serve Summerlin North, South, and the Red Rock corridor.",
  },
  {
    name: "Henderson",
    slug: "henderson",
    description:
      "Nevada's second-largest city. We represent Henderson residents injured in car crashes, slip and falls, and on-the-job accidents.",
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    description:
      "Industrial corridors and busy intersections in North Las Vegas see frequent truck and commercial vehicle accidents.",
  },
  {
    name: "Spring Valley",
    slug: "spring-valley",
    description:
      "One of the most populous unincorporated communities in the US — high-traffic roads demand aggressive injury representation.",
  },
  {
    name: "Enterprise",
    slug: "enterprise",
    description:
      "Rapidly growing southwest Las Vegas suburb with busy commercial corridors where accidents occur daily.",
  },
  {
    name: "Paradise",
    slug: "paradise",
    description:
      "Home to the Strip, McCarran Airport, and UNLV — we handle accidents throughout this densely populated unincorporated area.",
  },
  {
    name: "Whitney",
    slug: "whitney",
    description:
      "East Las Vegas community where freeway on-ramps and cross-street collisions are a regular occurrence.",
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    description:
      "Serving Green Valley and Green Valley Ranch residents injured in Henderson's premier suburban neighborhoods.",
  },
  {
    name: "Boulder City",
    slug: "boulder-city",
    description:
      "Accidents on US-93 connecting Boulder City to Las Vegas are common — we represent victims throughout Clark County.",
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    description:
      "Fast-growing northwest Las Vegas neighborhood with new commercial development and high construction accident rates.",
  },
  {
    name: "Nellis AFB Area",
    slug: "nellis-afb-area",
    description:
      "Serving the northeast Las Vegas Valley communities surrounding Nellis Air Force Base and the Speedway corridor.",
  },
  {
    name: "Winchester",
    slug: "winchester",
    description:
      "Central unincorporated community near the Strip where casino workers and residents frequently need injury representation.",
  },
  {
    name: "Laughlin",
    slug: "laughlin",
    description:
      "River town 90 miles south of Las Vegas — we serve Laughlin casino and resort accident victims throughout Mohave County.",
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
            Personal Injury Lawyers Serving All of Southern Nevada
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Las Vegas Injury Law Group represents injury victims throughout Las Vegas,
            Henderson, North Las Vegas, Summerlin, and every community across Clark County
            and Southern Nevada.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900 mb-3">
              Las Vegas Valley Neighborhoods We Serve
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
            Las Vegas Injury Law Group represents clients throughout all of Clark County,
            Nye County, Mohave County, and surrounding Southern Nevada jurisdictions.
            If your injury occurred in Nevada, we can help.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Las Vegas",
              "Henderson",
              "North Las Vegas",
              "Summerlin",
              "Spring Valley",
              "Enterprise",
              "Paradise",
              "Whitney",
              "Green Valley",
              "Centennial Hills",
              "Boulder City",
              "Laughlin",
              "Mesquite",
              "Pahrump",
              "Searchlight",
              "Primm",
              "Jean",
              "Nellis AFB Area",
              "Winchester",
              "Blue Diamond",
            ].map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                {city}, NV
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CTABox
          config={siteConfig}
          headline="Injured Anywhere in Southern Nevada? We Can Help."
          body="Our attorneys serve clients throughout Clark County and beyond. Free consultation, no fee unless we win."
        />
      </section>
    </>
  );
}
