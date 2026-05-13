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
    slug: "round-rock",
    name: "Round Rock",
    description:
      "Serving Round Rock injury victims on I-35, US-79, and throughout Williamson County's largest city.",
    extra:
      "Round Rock's major retail corridors, the Dell Diamond area, and heavy I-35 traffic create vehicle crashes, workplace injuries, and premises liability claims our attorneys handle throughout Williamson County.",
  },
  {
    slug: "cedar-park",
    name: "Cedar Park",
    description:
      "Cedar Park's rapid growth along US-183A and Whitestone Boulevard creates new accident risks we handle every day.",
    extra:
      "Cedar Park's rapidly expanding commercial zones and new residential developments generate construction accidents, vehicle crashes, and slip-and-fall claims our attorneys manage throughout the area.",
  },
  {
    slug: "georgetown",
    name: "Georgetown",
    description:
      "We represent Georgetown residents injured on I-35, Inner Loop Road, and throughout Williamson County's seat.",
    extra:
      "Georgetown's historic downtown, Sun City retirement community, and I-35 corridor create pedestrian accidents, vehicle crashes, and nursing home injury claims our attorneys handle.",
  },
  {
    slug: "kyle",
    name: "Kyle",
    description:
      "Kyle's explosive growth along I-35 has brought increased traffic and accidents — we're here to fight for local victims.",
    extra:
      "Kyle is one of the fastest-growing cities in Texas. Rapid development along I-35 and FM-1626 creates construction accidents, high-speed vehicle crashes, and premises liability claims.",
  },
  {
    slug: "pflugerville",
    name: "Pflugerville",
    description:
      "Serving Pflugerville injury victims on SH-130, FM-1825, and throughout this growing Northeast Austin suburb.",
    extra:
      "Pflugerville's growing industrial and residential base along SH-130 and FM-1825 generates vehicle accidents, workplace injuries, and premises liability claims our attorneys handle regularly.",
  },
  {
    slug: "leander",
    name: "Leander",
    description:
      "Leander's rapid development along US-183 and the Metro Rail corridor brings new traffic and accident risks.",
    extra:
      "Leander's explosive suburban growth and busy US-183 corridor create vehicle accidents, construction site injuries, and slip-and-fall claims throughout Williamson County.",
  },
  {
    slug: "buda",
    name: "Buda",
    description:
      "We serve Buda injury victims along I-35 and FM-967, where high-speed collisions occur regularly.",
    extra:
      "Buda's location on the I-35 corridor makes it a hotspot for truck accidents, vehicle crashes, and highway injury claims our Austin attorneys handle throughout Hays County.",
  },
  {
    slug: "manor",
    name: "Manor",
    description:
      "Serving Manor residents injured on US-290, SH-130, and throughout Travis County's eastern communities.",
    extra:
      "Manor's growing eastern Austin communities and proximity to the SH-130 toll road create vehicle accidents and workplace injuries our attorneys manage throughout Travis County.",
  },
  {
    slug: "san-marcos",
    name: "San Marcos",
    description:
      "San Marcos sits on the I-35 corridor — we handle injury claims from university-area crashes and highway accidents.",
    extra:
      "San Marcos's Texas State University population, heavy I-35 traffic, and entertainment venues create pedestrian accidents, vehicle crashes, and premises liability claims our attorneys handle.",
  },
  {
    slug: "hutto",
    name: "Hutto",
    description:
      "Hutto's fast-growing neighborhoods and expanding road network create new personal injury cases we're ready to handle.",
    extra:
      "Hutto is experiencing rapid growth in Williamson County. New construction, expanding roads, and increased traffic generate injuries our Austin attorneys handle throughout the area.",
  },
  {
    slug: "taylor",
    name: "Taylor",
    description:
      "We represent Taylor injury victims as Williamson County's semiconductor corridor brings new residents and road hazards.",
    extra:
      "Taylor's Samsung chip plant and surrounding development have transformed the local road network. Construction accidents, vehicle crashes, and workplace injuries are increasing throughout the area.",
  },
  {
    slug: "lakeway",
    name: "Lakeway",
    description:
      "Serving Lakeway residents injured in accidents along RR 620, FM 2222, and the Lake Travis corridor.",
    extra:
      "Lakeway's affluent communities along Lake Travis and its winding Hill Country roads create vehicle accidents, boat accidents, and premises liability claims our attorneys handle throughout Travis County.",
  },
  {
    slug: "dripping-springs",
    name: "Dripping Springs",
    description:
      "Dripping Springs' scenic Hill Country roads and US-290 corridor see frequent accidents — we represent victims throughout the area.",
    extra:
      "Dripping Springs' winding Hill Country roads and growing wine and event venue industry create vehicle accidents and premises liability claims our Austin attorneys handle throughout Hays County.",
  },
  {
    slug: "bastrop",
    name: "Bastrop",
    description:
      "Serving Bastrop County injury victims along SH-71, SH-21, and throughout this historic Central Texas community.",
    extra:
      "Bastrop County's rural highways and growing communities along SH-71 create vehicle accidents, timber industry workplace injuries, and premises liability claims our attorneys handle.",
  },
  {
    slug: "westlake",
    name: "Westlake",
    description:
      "Westlake's winding Hill Country roads and proximity to MoPac generate significant injury claims we handle for local residents.",
    extra:
      "Westlake Hills and Rollingwood's narrow, winding roads and proximity to Austin's major arteries create vehicle accidents and pedestrian injury claims our attorneys handle throughout Travis County.",
  },
];

export async function generateStaticParams() {
  return NEIGHBORHOODS.map((n) => ({ neighborhood: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hood = NEIGHBORHOODS.find((n) => n.slug === params.neighborhood);
  if (!hood) return {};
  return {
    title: `Personal Injury Lawyer in ${hood.name}, TX | Austin Injury Law Group`,
    description: `Injured in ${hood.name}? Austin Injury Law Group serves ${hood.name} injury victims with aggressive representation. Free consultation. No fee unless we win. Call (512) 555-0219.`,
    alternates: {
      canonical: `https://austintexasinjurylawyer.com/areas/${hood.slug}`,
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
          <p className="text-lg text-gray-300 max-w-3xl">{`Austin Injury Law Group serves ${hood.name} injury victims with aggressive, results-driven representation. Free consultation — no fee unless we win.`}</p>
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
              {hood.description} Austin Injury Law Group has experience handling personal
              injury cases throughout {hood.name} and the surrounding Central Texas area.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Personal Injury Cases in {hood.name}
              </h2>
              <p className="text-gray-700 leading-relaxed">{hood.extra}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Why Choose Austin Injury Law Group for Your {hood.name} Case
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our attorneys are deeply familiar with the roads, courts, and insurance
                adjusters in {hood.name} and throughout Travis and Williamson counties. We
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
                    answer: `Yes. Austin Injury Law Group serves clients throughout ${hood.name} and Central Texas. We offer free in-home or office consultations and are available 24/7. Call (512) 555-0219.`,
                  },
                  {
                    question: `How long does a personal injury case take in ${hood.name}, Texas?`,
                    answer: `Most cases resolve in six to eighteen months, depending on injury severity and whether liability is disputed. We keep you informed throughout the process.`,
                  },
                  {
                    question: `What is the statute of limitations for injury cases in ${hood.name}?`,
                    answer: `Texas generally allows two years from the date of injury. Claims against government entities have shorter deadlines. Do not wait — call us at (512) 555-0219 today.`,
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
