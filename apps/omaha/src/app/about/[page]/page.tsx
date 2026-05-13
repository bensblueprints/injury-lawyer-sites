import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageHeroSection, CTABox, Breadcrumbs, Sidebar } from "@injury/ui";
import { siteConfig } from "@/config/site";

interface Props {
  params: { page: string };
}

const ABOUT_PAGES = [
  { slug: "our-firm", title: "About Omaha Injury Law Group" },
  { slug: "our-attorneys", title: "Our Omaha Injury Attorneys" },
  { slug: "our-results", title: "Our Results for Omaha Clients" },
  { slug: "client-reviews", title: "Client Reviews & Testimonials" },
  { slug: "community", title: "Our Omaha Community Commitment" },
  { slug: "no-fee-guarantee", title: "Our No-Fee-Unless-We-Win Guarantee" },
  { slug: "about-us", title: "About Omaha Injury Law Group" },
  { slug: "why-choose-us", title: "Why Choose Omaha Injury Law Group" },
  { slug: "case-results", title: "Our Case Results" },
];

export async function generateStaticParams() {
  return ABOUT_PAGES.map((p) => ({ page: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = ABOUT_PAGES.find((p) => p.slug === params.page);
  if (!page) return {};
  return {
    title: `${page.title} | Omaha Injury Law Group`,
    description: `${page.title} — Omaha Injury Law Group. Aggressive personal injury representation throughout Eastern Nebraska. Call (402) 555-0167.`,
    alternates: { canonical: `https://omahanebraskainjurylawyer.com/about/${params.page}` },
  };
}

export default function AboutPage({ params }: Props) {
  const page = ABOUT_PAGES.find((p) => p.slug === params.page);
  if (!page) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/our-firm" },
    { label: page.title, href: `/about/${params.page}` },
  ];

  const sidebarLinks = ABOUT_PAGES.filter((p) => p.slug !== params.page).map((p) => ({
    label: p.title,
    href: `/about/${p.slug}`,
  }));

  return (
    <>
      <PageHeroSection imageSrc="/images/about-team.webp" imageAlt="Personal injury law team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            {page.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">Omaha Injury Law Group — aggressive personal injury attorneys serving Omaha and all of Eastern Nebraska. No fee unless we win.</p>
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
              Omaha Injury Law Group is a personal injury firm dedicated to fighting for
              accident victims throughout Omaha, Bellevue, Papillion, La Vista, and all of
              Eastern Nebraska. We handle every case on a contingency fee basis — you pay
              nothing unless we win.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is simple: give every injured Nebraskan access to the same quality
                of legal representation that was previously only available to the wealthy. We
                level the playing field against billion-dollar insurance companies by bringing
                the same resources, aggression, and expertise to every case we take — whether
                it&apos;s a minor car accident or a catastrophic injury claim.
              </p>
            </div>

            <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/attorney-consultation.webp"
                alt="Personal injury attorney consultation"
                width={1536}
                height={1024}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Our Commitment to Omaha Injury Victims
              </h2>
              <p className="text-gray-700 leading-relaxed">
                When you hire Omaha Injury Law Group, you get a team that&apos;s genuinely
                invested in your outcome. We respond to calls within 15 minutes, 24 hours a
                day. We personally manage your case — you&apos;re never passed off to a
                paralegal or case manager. And we don&apos;t take a dime until we secure
                compensation for you.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Why Eastern Nebraska Injury Victims Choose Us
              </h2>
              <ul className="space-y-3">
                {[
                  "Contingency fee — no payment unless we win",
                  "24/7 availability and 15-minute response time",
                  "Deep knowledge of Nebraska personal injury law",
                  "Trial-ready approach that maximizes settlements",
                  "Transparent communication throughout your case",
                  "4.9-star average client rating",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-700 font-bold mt-0.5">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <CTABox
              config={siteConfig}
              headline="Ready to Fight for You"
              body="Free consultation — no obligation, no upfront fees. Call (402) 555-0167 or submit our online form."
              variant="red"
            />
          </article>

          <aside className="lg:col-span-1">
            <Sidebar config={siteConfig} links={sidebarLinks} heading="About Us" />
          </aside>
        </div>
      </div>
    </>
  );
}
