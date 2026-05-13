import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Breadcrumbs,
  CTABox,
  Sidebar,
  TableOfContents,
  FAQAccordion,
} from "@injury/ui";
import { siteConfig } from "@/config/site";
import {
  PRACTICE_AREA_SLUGS,
  getPracticeAreaContent,
} from "@/content/practice-areas";
import { getSubtopicsForParent } from "@/content/subtopics";

interface Props {
  params: { practiceArea: string };
}

export async function generateStaticParams() {
  return PRACTICE_AREA_SLUGS.map((slug) => ({ practiceArea: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = getPracticeAreaContent(params.practiceArea);
  if (!content) return { title: "Not Found" };

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://devnercoloradoinjurylawyer.com/${content.slug}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://devnercoloradoinjurylawyer.com/${content.slug}`,
    },
  };
}

export default function PracticeAreaPage({ params }: Props) {
  const content = getPracticeAreaContent(params.practiceArea);
  if (!content) notFound();

  const subtopics = getSubtopicsForParent(params.practiceArea);

  const breadcrumbs = [
    { label: "Practice Areas", href: "/practice-areas" },
    { label: content.title },
  ];

  const tocItems = content.sections.map((s, i) => ({
    id: `section-${i}`,
    label: s.heading,
  }));

  const relatedLinks = [
    ...content.relatedAreas,
    ...(subtopics.length > 0
      ? subtopics.map((s) => ({
          label: s.label,
          href: `/${content.slug}/${s.slug}`,
        }))
      : []),
  ];

  const practiceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${content.title} – ${siteConfig.firmName}`,
    description: content.metaDescription,
    url: `https://devnercoloradoinjurylawyer.com/${content.slug}`,
    telephone: siteConfig.phone,
    areaServed: "Denver, CO",
    serviceType: content.title,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceAreaSchema) }}
      />

      {/* Page header */}
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            {content.heroHeadline}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">{content.heroSubheadline}</p>
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
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Article */}
          <article className="lg:col-span-2">
            {/* Table of Contents */}
            <TableOfContents items={tocItems} />

            {/* Intro */}
            <div className="prose prose-lg max-w-none mt-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">{content.intro}</p>
            </div>

            {/* Sections */}
            {content.sections.map((section, i) => (
              <div key={i}>
                <section id={`section-${i}`} className="mb-8">
                  <h2 className="text-2xl font-black text-gray-900 mb-4 scroll-mt-24">
                    {section.heading}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">{section.body}</p>
                  </div>
                </section>

                {/* Insert CTA every 2 sections */}
                {(i + 1) % 2 === 0 && i < content.sections.length - 1 && (
                  <CTABox config={siteConfig} />
                )}
              </div>
            ))}

            {/* Subtopics */}
            {subtopics.length > 0 && (
              <section className="mt-10 mb-8">
                <h2 className="text-2xl font-black text-gray-900 mb-4">
                  Related {content.title} Topics
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {subtopics.map((sub) => (
                    <a
                      key={sub.slug}
                      href={`/${content.slug}/${sub.slug}`}
                      className="flex items-center gap-2 bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:text-red-700 transition-all"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                      {sub.label}
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ */}
            {content.faqs.length > 0 && (
              <section className="mt-10">
                <h2 className="text-2xl font-black text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={content.faqs} />
              </section>
            )}

            {/* Final CTA */}
            <div className="mt-10">
              <CTABox
                config={siteConfig}
                headline={`Need a ${content.title} in Denver?`}
                body="Free consultation. No fee unless we win. Available 24/7."
              />
            </div>
          </article>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar config={siteConfig} relatedLinks={relatedLinks} />
          </div>
        </div>
      </div>
    </>
  );
}
