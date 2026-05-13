import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection, CTABox, Breadcrumbs, Sidebar } from "@injury/ui";
import { siteConfig } from "@/config/site";

interface Props {
  params: { page: string };
}

const ABOUT_PAGES = [
  { slug: "our-firm", title: "About Austin Injury Law Group" },
  { slug: "our-attorneys", title: "Our Austin Injury Attorneys" },
  { slug: "our-results", title: "Our Results for Austin Clients" },
  { slug: "client-reviews", title: "Client Reviews & Testimonials" },
  { slug: "community", title: "Our Austin Community Commitment" },
  { slug: "no-fee-guarantee", title: "Our No-Fee-Unless-We-Win Guarantee" },
  { slug: "about-us", title: "About Austin Injury Law Group" },
  { slug: "why-choose-us", title: "Why Choose Austin Injury Law Group" },
  { slug: "case-results", title: "Our Case Results" },
];

export async function generateStaticParams() {
  return ABOUT_PAGES.map((p) => ({ page: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = ABOUT_PAGES.find((p) => p.slug === params.page);
  if (!page) return {};
  return {
    title: `${page.title} | Austin Injury Law Group`,
    description: `${page.title} — Austin Injury Law Group. Aggressive personal injury representation throughout Central Texas. Call (512) 555-0219.`,
    alternates: { canonical: `https://austintexasinjurylawyer.com/about/${params.page}` },
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
      <HeroSection
        config={siteConfig}
        headline={page.title}
        subheadline="Austin Injury Law Group — aggressive personal injury attorneys serving Austin and all of Central Texas. No fee unless we win."
        compact
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2">
            <p className="text-xl text-gray-700 mb-8">
              Austin Injury Law Group is a personal injury firm dedicated to fighting for
              accident victims throughout Austin, Round Rock, Cedar Park, Georgetown, and
              all of Central Texas. We handle every case on a contingency fee basis — you
              pay nothing unless we win.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is simple: give every injured Texan access to the same quality of
                legal representation that was previously only available to the wealthy. We
                level the playing field against billion-dollar insurance companies by bringing
                the same resources, aggression, and expertise to every case we take — whether
                it&apos;s a minor car accident or a catastrophic injury claim.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Our Commitment to Austin Injury Victims
              </h2>
              <p className="text-gray-700 leading-relaxed">
                When you hire Austin Injury Law Group, you get a team that&apos;s genuinely
                invested in your outcome. We respond to calls within 15 minutes, 24 hours a
                day. We personally manage your case — you&apos;re never passed off to a
                paralegal or case manager. And we don&apos;t take a dime until we secure
                compensation for you.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Why Central Texas Injury Victims Choose Us
              </h2>
              <ul className="space-y-3">
                {[
                  "Contingency fee — no payment unless we win",
                  "24/7 availability and 15-minute response time",
                  "Deep knowledge of Texas personal injury law",
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
              body="Free consultation — no obligation, no upfront fees. Call (512) 555-0219 or submit our online form."
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
