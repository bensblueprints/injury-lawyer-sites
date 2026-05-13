import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  HeroSection,
  CTABox,
  FAQAccordion,
  Breadcrumbs,
  Sidebar,
  PracticeAreaCard,
} from "@injury/ui";
import { siteConfig } from "@/config/site";

interface Props {
  params: { neighborhood: string };
}

const NEIGHBORHOODS = [
  {
    slug: "downtown-dallas",
    name: "Downtown Dallas",
    description:
      "Serving injury victims in the Dallas CBD, the Arts District, Deep Ellum, and the surrounding downtown corridor.",
    extra:
      "Downtown Dallas is home to major corporate offices, entertainment venues, and busy pedestrian zones. Common injury claims include slip and falls in commercial buildings, vehicle-pedestrian collisions, and rideshare accidents.",
  },
  {
    slug: "uptown",
    name: "Uptown",
    description:
      "Uptown Dallas's dense pedestrian and nightlife environment sees frequent slip-and-fall, rideshare, and vehicle accident claims.",
    extra:
      "Uptown's McKinney Avenue corridor and vibrant bar scene make it one of Dallas's busiest areas for personal injury cases. Negligent security, alcohol-related accidents, and vehicle crashes are frequent claim types.",
  },
  {
    slug: "oak-cliff",
    name: "Oak Cliff",
    description:
      "We represent Oak Cliff injury victims in car crashes, truck accidents, and premises liability cases throughout this diverse community.",
    extra:
      "Oak Cliff spans a large area of South Dallas with busy corridors along Jefferson Boulevard, Zang Boulevard, and I-35E. Traffic accidents, workplace injuries, and slip-and-fall cases are common.",
  },
  {
    slug: "plano",
    name: "Plano",
    description:
      "Serving Plano residents injured on the Dallas North Tollway, US-75, and throughout Collin County's largest city.",
    extra:
      "Plano is home to numerous corporate headquarters and dense commercial development. High-speed collisions on US-75 and the Tollway, workplace accidents, and premises liability claims are frequent in this area.",
  },
  {
    slug: "irving",
    name: "Irving",
    description:
      "Irving's proximity to DFW Airport and dense commercial corridors creates high rates of vehicle and workplace accidents.",
    extra:
      "Irving is a hub for transportation, hospitality, and corporate activity near DFW Airport. Truck and vehicle accidents on SH-114 and Loop 12, hotel slip-and-falls, and airport transportation injuries are common.",
  },
  {
    slug: "arlington",
    name: "Arlington",
    description:
      "From AT&T Stadium to Six Flags, Arlington's entertainment districts and highways generate significant injury claims we handle every day.",
    extra:
      "Arlington's major entertainment venues and I-30 corridor create a steady flow of personal injury cases including pedestrian accidents, premises liability at sports venues, and highway crashes.",
  },
  {
    slug: "garland",
    name: "Garland",
    description:
      "Garland's industrial zones and busy intersections on I-30 and Beltline Road are frequent accident locations we cover.",
    extra:
      "Garland's manufacturing base and dense residential areas generate workplace injuries, truck accidents, and vehicle collisions that our attorneys handle throughout Dallas County and Rockwall County.",
  },
  {
    slug: "mesquite",
    name: "Mesquite",
    description:
      "Serving Mesquite residents injured in car crashes, truck accidents, and workplace incidents throughout East Dallas.",
    extra:
      "Mesquite's industrial corridors along I-30 and US-80, combined with its working-class neighborhoods, create significant workers' compensation claims, vehicle accidents, and premises liability cases.",
  },
  {
    slug: "frisco",
    name: "Frisco",
    description:
      "One of the fastest-growing cities in Texas — Frisco's construction boom and new roads generate serious injury cases daily.",
    extra:
      "Frisco's explosive growth along the Dallas North Tollway and SH-121 has created numerous construction accidents, new-road collision risks, and commercial premises liability claims.",
  },
  {
    slug: "mckinney",
    name: "McKinney",
    description:
      "McKinney's rapidly growing population and expanding highway network create new accident risks we're ready to address.",
    extra:
      "McKinney's historic downtown and expanding suburban corridors along US-75 and SH-121 generate pedestrian accidents, vehicle crashes, and slip-and-fall claims our attorneys handle throughout Collin County.",
  },
  {
    slug: "richardson",
    name: "Richardson",
    description:
      "We represent Richardson injury victims along US-75, Campbell Road, and throughout the Telecom Corridor.",
    extra:
      "Richardson's dense tech employment corridor and major intersections on US-75 and Campbell Road create vehicle accidents, workplace injuries, and premises liability cases our team handles regularly.",
  },
  {
    slug: "grand-prairie",
    name: "Grand Prairie",
    description:
      "Grand Prairie sits at the heart of DFW — we handle injury claims from I-20, SH-360, and local roads throughout the city.",
    extra:
      "Grand Prairie's location between Dallas and Fort Worth, along with its entertainment venues and industrial base, generates a wide range of personal injury claims our attorneys manage.",
  },
  {
    slug: "denton",
    name: "Denton",
    description:
      "Serving Denton County injury victims on I-35E, I-35W, Loop 288, and throughout this growing North Texas community.",
    extra:
      "Denton's college-town atmosphere and rapidly growing suburbs create pedestrian accidents, vehicle crashes, and premises liability claims. Our attorneys serve all of Denton County.",
  },
  {
    slug: "carrollton",
    name: "Carrollton",
    description:
      "Carrollton's industrial parks and busy transit corridors along I-35E and President George Bush Turnpike see frequent accidents.",
    extra:
      "Carrollton's industrial zones and high-traffic highways generate truck accidents, workplace injuries, and vehicle collisions our Dallas attorneys handle throughout Denton and Dallas counties.",
  },
  {
    slug: "lewisville",
    name: "Lewisville",
    description:
      "We represent Lewisville residents injured on I-35E, SH-121, and throughout Denton County's second-largest city.",
    extra:
      "Lewisville's busy commercial strips, major highways, and growing population create vehicle accidents, slip-and-fall claims, and workplace injuries our attorneys handle throughout the area.",
  },
];

export async function generateStaticParams() {
  return NEIGHBORHOODS.map((n) => ({ neighborhood: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hood = NEIGHBORHOODS.find((n) => n.slug === params.neighborhood);
  if (!hood) return {};
  return {
    title: `Personal Injury Lawyer in ${hood.name}, TX | Dallas Injury Law Group`,
    description: `Injured in ${hood.name}? Dallas Injury Law Group serves ${hood.name} injury victims with aggressive representation. Free consultation. No fee unless we win. Call (214) 555-0183.`,
    alternates: {
      canonical: `https://dallastexasinjurylawyer.com/areas/${hood.slug}`,
    },
  };
}

const practiceAreaLinks = [
  { icon: "🚗", title: "Car Accidents", slug: "car-accident-lawyer", excerpt: "Maximum compensation for vehicle crash victims." },
  { icon: "🚚", title: "Truck Accidents", slug: "truck-accident-lawyer", excerpt: "Taking on large carriers and their insurers." },
  { icon: "🏢", title: "Slip & Fall", slug: "slip-and-fall-lawyer", excerpt: "Holding negligent property owners accountable." },
  { icon: "⚖️", title: "Wrongful Death", slug: "wrongful-death-lawyer", excerpt: "Justice for families who lost a loved one." },
  { icon: "👷", title: "Workers' Comp", slug: "workers-compensation-lawyer", excerpt: "Protecting injured workers' rights." },
  { icon: "🌀", title: "Rideshare Accidents", slug: "rideshare-accident-lawyer", excerpt: "Navigating Uber and Lyft insurance claims." },
];

export default function NeighborhoodPage({ params }: Props) {
  const hood = NEIGHBORHOODS.find((n) => n.slug === params.neighborhood);
  if (!hood) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/areas" },
    { label: hood.name, href: `/areas/${hood.slug}` },
  ];

  const sidebarLinks = NEIGHBORHOODS.filter((n) => n.slug !== hood.slug)
    .slice(0, 8)
    .map((n) => ({ label: n.name, href: `/areas/${n.slug}` }));

  return (
    <>
      <HeroSection
        config={siteConfig}
        headline={`Personal Injury Lawyer in ${hood.name}`}
        subheadline={`Dallas Injury Law Group serves ${hood.name} injury victims with aggressive, results-driven representation. Free consultation — no fee unless we win.`}
        compact
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2">
            <p className="text-xl text-gray-700 mb-8">
              {hood.description} Dallas Injury Law Group has experience handling personal
              injury cases throughout {hood.name} and the surrounding DFW area.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Personal Injury Cases in {hood.name}
              </h2>
              <p className="text-gray-700 leading-relaxed">{hood.extra}</p>
            </div>

            <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/attorney-consultation.webp"
                alt="Personal injury attorney"
                width={1536}
                height={1024}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Why Choose Dallas Injury Law Group for Your {hood.name} Case
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our attorneys are deeply familiar with the roads, courts, and insurance
                adjusters in {hood.name} and throughout Dallas County. We handle every case
                on a contingency basis — you pay nothing unless we win. From the first call
                to your final settlement, we fight aggressively for maximum compensation.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-black text-gray-900 mb-5">
                Practice Areas We Handle in {hood.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {practiceAreaLinks.map((area, i) => (
                  <PracticeAreaCard
                    key={area.slug}
                    icon={area.icon}
                    title={area.title}
                    excerpt={area.excerpt}
                    slug={area.slug}
                    index={i}
                  />
                ))}
              </div>
            </div>

            <CTABox
              config={siteConfig}
              headline={`Injured in ${hood.name}? Call Us Now.`}
              body="Free consultation. No fee unless we win. We respond within 15 minutes."
              variant="red"
            />

            <div className="mt-10">
              <h2 className="text-2xl font-black text-gray-900 mb-6">
                Frequently Asked Questions — {hood.name} Injury Law
              </h2>
              <FAQAccordion
                faqs={[
                  {
                    question: `Is there a personal injury lawyer near ${hood.name}?`,
                    answer: `Yes. Dallas Injury Law Group serves clients throughout ${hood.name} and the DFW Metroplex. We offer free in-home or office consultations and are available 24/7. Call (214) 555-0183.`,
                  },
                  {
                    question: `How long does a personal injury case take in ${hood.name}, Texas?`,
                    answer: `Most cases resolve in six to eighteen months, depending on injury severity and whether liability is disputed. We keep you informed throughout the process.`,
                  },
                  {
                    question: `What is the statute of limitations for injury cases in ${hood.name}?`,
                    answer: `Texas generally allows two years from the date of injury. Claims against government entities have shorter deadlines. Do not wait — call us at (214) 555-0183 today.`,
                  },
                ]}
              />
            </div>
          </article>

          <aside className="lg:col-span-1">
            <Sidebar
              config={siteConfig}
              links={sidebarLinks}
              heading="Other Service Areas"
            />
          </aside>
        </div>
      </div>
    </>
  );
}
