import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeroSection, CTABox, Breadcrumbs, Sidebar } from "@injury/ui";
import { siteConfig } from "@/config/site";

interface Props {
  params: { topic: string };
}

const RESOURCE_TOPICS = [
  { slug: "what-to-do-after-car-accident", title: "What to Do After a Car Accident in Austin" },
  { slug: "how-insurance-companies-work", title: "How Insurance Companies Work Against You" },
  { slug: "documenting-your-injuries", title: "Documenting Your Injuries" },
  { slug: "medical-treatment-guide", title: "Medical Treatment Guide for Injury Victims" },
  { slug: "understanding-your-settlement", title: "Understanding Your Settlement Offer" },
  { slug: "texas-traffic-laws", title: "Texas Traffic Laws and Your Rights" },
  { slug: "workplace-safety-rights", title: "Workplace Safety Rights in Texas" },
  { slug: "finding-a-doctor-after-injury", title: "Finding a Doctor After an Injury" },
  { slug: "local-resources", title: "Local Resources" },
  { slug: "accident-reports", title: "Accident Reports" },
  { slug: "hospitals", title: "Local Hospitals & Medical Centers" },
  { slug: "accident-statistics", title: "Accident Statistics" },
  { slug: "court-system", title: "Local Court System" },
  { slug: "insurance-companies", title: "Insurance Companies" },
];

export async function generateStaticParams() {
  return RESOURCE_TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = RESOURCE_TOPICS.find((t) => t.slug === params.topic);
  if (!topic) return {};
  return {
    title: `${topic.title} | Austin Injury Law Group`,
    description: `${topic.title} — Free resource from Austin Injury Law Group. Call (512) 555-0219 for a free case consultation.`,
    alternates: { canonical: `https://austintexasinjurylawyer.com/resources/${params.topic}` },
  };
}

export default function ResourcePage({ params }: Props) {
  const topic = RESOURCE_TOPICS.find((t) => t.slug === params.topic);
  if (!topic) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources/what-to-do-after-car-accident" },
    { label: topic.title, href: `/resources/${params.topic}` },
  ];

  const sidebarLinks = RESOURCE_TOPICS.filter((t) => t.slug !== params.topic).map((t) => ({
    label: t.title,
    href: `/resources/${t.slug}`,
  }));

  return (
    <>
      <PageHeroSection imageSrc="/images/attorney-consultation.webp" imageAlt="Legal resources">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            {topic.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">Free resource from Austin Injury Law Group — helping Central Texas injury victims understand their rights and options.</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="/free-consultation" className="bg-red-700 hover:bg-red-600 text-white font-black px-6 py-3 rounded-xl transition-colors shadow-lg">Free Case Review →</a>
            <a href={`tel:${siteConfig.phone}`} className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/20 transition-colors">Call {siteConfig.phoneFormatted}</a>
          </div>
        </div>
      </PageHeroSection>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 not-prose">
              Austin Injury Law Group provides this free resource to help injury victims
              throughout Central Texas understand their rights and navigate the claims
              process. Knowledge is power — the more you know, the better positioned you
              are to recover fair compensation.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                {topic.title}: What You Need to Know
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Texas injury victims face unique challenges when pursuing compensation. Insurance
                companies employ teams of adjusters, lawyers, and investigators whose goal is to
                minimize your claim. Understanding {topic.title.toLowerCase()} puts you in a
                stronger position to protect your rights and advocate for fair treatment.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                How Austin Injury Law Group Can Help
              </h2>
              <p className="text-gray-700 leading-relaxed">
                While these resources provide general guidance, every case is unique. Our Austin
                attorneys offer free, personalized consultations to evaluate your specific
                situation and explain your legal options. We work on contingency — you pay
                nothing unless we win.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Take Action Today
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Time matters in personal injury cases. Evidence fades, witnesses become harder
                to locate, and deadlines approach. If you&apos;ve been injured in Austin or
                anywhere in Central Texas, contact us today for a free consultation.
                We respond within 15 minutes, 24/7.
              </p>
            </div>

            <div className="not-prose mt-10">
              <CTABox
                config={siteConfig}
                headline="Ready to Talk to an Austin Attorney?"
                body="Free consultation — no obligation, no upfront fees. Call (512) 555-0219 or submit our online form."
                variant="red"
              />
            </div>
          </article>

          <aside className="lg:col-span-1">
            <Sidebar config={siteConfig} links={sidebarLinks} heading="More Resources" />
          </aside>
        </div>
      </div>
    </>
  );
}
