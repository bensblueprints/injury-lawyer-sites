import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, CTABox, Sidebar, RelatedPages, PageHeroSection } from "@injury/ui";
import { siteConfig } from "@/config/site";
import {
  LEGAL_PROCESS_SLUGS,
  getLegalProcessContent,
  legalProcessContent,
} from "@/content/legal-process";

interface Props {
  params: { topic: string };
}

export async function generateStaticParams() {
  return LEGAL_PROCESS_SLUGS.map((slug) => ({ topic: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = getLegalProcessContent(params.topic);
  if (!content) return { title: "Not Found" };

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://devnercoloradoinjurylawyer.com/legal-process/${content.slug}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://devnercoloradoinjurylawyer.com/legal-process/${content.slug}`,
    },
  };
}

export default function LegalProcessPage({ params }: Props) {
  const content = getLegalProcessContent(params.topic);
  if (!content) notFound();

  const breadcrumbs = [
    { label: "Legal Process", href: "/legal-process" },
    { label: content.title },
  ];

  const relatedTopics = Object.values(legalProcessContent)
    .filter((c) => c.slug !== params.topic)
    .map((c) => ({
      label: c.title,
      href: `/legal-process/${c.slug}`,
    }));

  const sidebarLinks = relatedTopics.slice(0, 6);

  return (
    <>
      {/* Header */}
      <PageHeroSection imageSrc="/images/legal-process.webp" imageAlt="Legal process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">{content.intro}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="/free-consultation"
              className="bg-red-700 hover:bg-red-600 text-white font-black px-6 py-3 rounded-xl transition-colors shadow-lg"
            >
              Free Case Review →
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/20 transition-colors"
            >
              Call {siteConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </PageHeroSection>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2">
            {content.sections.map((section, i) => (
              <div key={i}>
                <section id={`section-${i}`} className="mb-8 scroll-mt-24">
                  <h2 className="text-2xl font-black text-gray-900 mb-4">
                    {section.heading}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">{section.body}</p>
                  </div>
                </section>

                {(i + 1) % 2 === 0 && i < content.sections.length - 1 && (
                  <CTABox config={siteConfig} />
                )}
              </div>
            ))}

            <div className="mt-10">
              <CTABox
                config={siteConfig}
                headline="Have Questions About the Colorado Legal Process?"
                body="Our Denver attorneys explain your options clearly and guide you every step of the way. Free consultation, no obligation."
              />
            </div>

            {relatedTopics.length > 0 && (
              <section className="mt-10">
                <h2 className="text-xl font-black text-gray-900 mb-4">
                  More Colorado Legal Process Guides
                </h2>
                <RelatedPages
                  pages={relatedTopics.slice(0, 8).map((p) => ({
                    title: p.label,
                    href: p.href,
                    excerpt: `A guide to understanding ${p.label.toLowerCase()} in Colorado personal injury cases.`,
                  }))}
                />
              </section>
            )}
          </article>

          <div className="lg:col-span-1">
            <Sidebar config={siteConfig} relatedLinks={sidebarLinks} />
          </div>
        </div>
      </div>
    </>
  );
}
