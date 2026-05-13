import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PageHeroSection,
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
    slug: "bellevue",
    name: "Bellevue",
    description:
      "Serving Bellevue injury victims near Offutt Air Force Base and throughout Nebraska's second-largest city.",
    extra:
      "Bellevue's Offutt Air Force Base, busy Cornhusker Road corridor, and Mission Avenue intersections create vehicle accidents, workplace injuries, and premises liability claims our attorneys handle throughout Sarpy County.",
  },
  {
    slug: "papillion",
    name: "Papillion",
    description:
      "Papillion's growing commercial corridors along US-370 and Cornhusker Road generate frequent accident cases we handle.",
    extra:
      "Papillion's Summit Mall area, US-370 corridor, and growing commercial development create vehicle accidents, slip-and-fall claims, and premises liability cases our Omaha attorneys handle.",
  },
  {
    slug: "la-vista",
    name: "La Vista",
    description:
      "We represent La Vista injury victims along 84th Street, I-80, and throughout Sarpy County's thriving suburban community.",
    extra:
      "La Vista's dense commercial development along 84th Street and I-80 creates vehicle crashes, pedestrian accidents, and slip-and-fall claims our attorneys manage regularly throughout Sarpy County.",
  },
  {
    slug: "elkhorn",
    name: "Elkhorn",
    description:
      "Elkhorn's rapid development in West Omaha brings new roads and increased accident rates — we serve all local injury victims.",
    extra:
      "Elkhorn's rapidly growing West Omaha neighborhoods and expanding road network along Dodge Street and West Maple Road create vehicle accidents and construction site injuries our attorneys handle.",
  },
  {
    slug: "millard",
    name: "Millard",
    description:
      "Serving Millard residents injured on Cornhusker Road, US-6, and throughout Southwest Omaha's largest neighborhood.",
    extra:
      "Millard is one of Omaha's largest residential areas. Busy commercial corridors along Millard Avenue and Q Street generate vehicle crashes, slip-and-fall claims, and workplace injuries.",
  },
  {
    slug: "midtown",
    name: "Midtown",
    description:
      "Midtown Omaha's busy Dodge Street corridor sees frequent car accidents, pedestrian injuries, and slip-and-fall claims.",
    extra:
      "Midtown's UNMC medical campus, busy Dodge Street corridor, and commercial establishments generate pedestrian accidents, vehicle crashes, and medical malpractice claims our attorneys handle.",
  },
  {
    slug: "dundee",
    name: "Dundee",
    description:
      "We represent Dundee injury victims in accidents along Underwood Avenue and throughout this historic Omaha neighborhood.",
    extra:
      "Dundee's historic retail district along Underwood Avenue and its dense residential streets create slip-and-fall claims, vehicle accidents, and premises liability cases our attorneys handle.",
  },
  {
    slug: "benson",
    name: "Benson",
    description:
      "Benson's nightlife district and busy intersections on Military Avenue generate injury claims our attorneys handle regularly.",
    extra:
      "Benson's entertainment venues along Military Avenue, industrial corridors, and residential areas create a variety of personal injury claims including negligent security, vehicle accidents, and slip-and-fall cases.",
  },
  {
    slug: "south-omaha",
    name: "South Omaha",
    description:
      "South Omaha's industrial zones and meatpacking industry create significant workplace injury and premises liability cases.",
    extra:
      "South Omaha's meatpacking plants, warehouses, and industrial facilities along Q Street and 24th Street generate serious workplace injuries, vehicle accidents, and workers' compensation claims our attorneys handle.",
  },
  {
    slug: "north-omaha",
    name: "North Omaha",
    description:
      "We serve North Omaha injury victims along 30th Street, Ames Avenue, and throughout this historic community.",
    extra:
      "North Omaha's residential neighborhoods and commercial corridors along 30th Street and Ames Avenue generate vehicle accidents, premises liability claims, and slip-and-fall cases our attorneys handle.",
  },
  {
    slug: "council-bluffs",
    name: "Council Bluffs",
    description:
      "Just across the Missouri River in Iowa — we represent Council Bluffs injury victims in car crashes and workplace accidents.",
    extra:
      "Council Bluffs, Iowa, sits directly across the Missouri River from Omaha. I-80 and I-29 intersect here, creating significant truck accidents, vehicle crashes, and casino premises liability claims.",
  },
  {
    slug: "chalco",
    name: "Chalco",
    description:
      "Serving Chalco injury victims along 84th Street, Q Street, and throughout Southwest Omaha's unincorporated communities.",
    extra:
      "Chalco's unincorporated Sarpy County communities and busy 84th Street corridor create vehicle accidents, premises liability claims, and workplace injuries our attorneys handle throughout the area.",
  },
  {
    slug: "ralston",
    name: "Ralston",
    description:
      "We represent Ralston residents injured on Q Street, Cornhusker Road, and throughout this Sarpy County community.",
    extra:
      "Ralston's commercial corridors and proximity to Offutt Air Force Base create vehicle accidents, premises liability claims, and workplace injuries our Omaha attorneys handle throughout Sarpy County.",
  },
  {
    slug: "boys-town",
    name: "Boys Town",
    description:
      "Serving Boys Town and the surrounding West Omaha communities along West Dodge Road and I-680.",
    extra:
      "Boys Town and the surrounding West Omaha communities along Dodge Street and I-680 generate vehicle accidents, slip-and-fall claims, and premises liability cases our attorneys handle.",
  },
  {
    slug: "aksarben",
    name: "Aksarben",
    description:
      "The Aksarben Village development and nearby University of Nebraska Medical Center area generate injury claims we handle.",
    extra:
      "Aksarben Village's mixed-use development and the nearby UNMC campus create pedestrian accidents, premises liability claims, and medical malpractice cases our Omaha attorneys handle regularly.",
  },
];

export async function generateStaticParams() {
  return NEIGHBORHOODS.map((n) => ({ neighborhood: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hood = NEIGHBORHOODS.find((n) => n.slug === params.neighborhood);
  if (!hood) return {};
  return {
    title: `Personal Injury Lawyer in ${hood.name} | Omaha Injury Law Group`,
    description: `Injured in ${hood.name}? Omaha Injury Law Group serves ${hood.name} injury victims with aggressive representation. Free consultation. No fee unless we win. Call (402) 555-0167.`,
    alternates: {
      canonical: `https://omahanebraskainjurylawyer.com/areas/${hood.slug}`,
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
      <PageHeroSection imageSrc="/images/hero.webp" imageAlt="Personal injury lawyer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            {`Personal Injury Lawyer in ${hood.name}`}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">{`Omaha Injury Law Group serves ${hood.name} injury victims with aggressive, results-driven representation. Free consultation — no fee unless we win.`}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="/free-consultation" className="bg-red-700 hover:bg-red-600 text-white font-black px-6 py-3 rounded-xl transition-colors shadow-lg">Free Case Review →</a>
            <a href={`tel:${siteConfig.phone}`} className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/20 transition-colors">Call {siteConfig.phoneFormatted}</a>
          </div>
        </div>
      </PageHeroSection>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2">
            <p className="text-xl text-gray-700 mb-8">
              {hood.description} Omaha Injury Law Group has experience handling personal
              injury cases throughout {hood.name} and the surrounding Eastern Nebraska area.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Personal Injury Cases in {hood.name}
              </h2>
              <p className="text-gray-700 leading-relaxed">{hood.extra}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Why Choose Omaha Injury Law Group for Your {hood.name} Case
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our attorneys are deeply familiar with the roads, courts, and insurance
                adjusters in {hood.name} and throughout Douglas and Sarpy counties. We
                handle every case on a contingency basis — you pay nothing unless we win.
                From the first call to your final settlement, we fight aggressively for
                maximum compensation.
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
                    answer: `Yes. Omaha Injury Law Group serves clients throughout ${hood.name} and Eastern Nebraska. We offer free in-home or office consultations and are available 24/7. Call (402) 555-0167.`,
                  },
                  {
                    question: `How long does a personal injury case take in ${hood.name}, Nebraska?`,
                    answer: `Most cases resolve in six to eighteen months, depending on injury severity and whether liability is disputed. We keep you informed throughout the process.`,
                  },
                  {
                    question: `What is the statute of limitations for injury cases in ${hood.name}?`,
                    answer: `Nebraska generally allows four years from the date of injury for most personal injury claims. Claims against government entities have shorter deadlines. Do not wait — call us at (402) 555-0167 today.`,
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
