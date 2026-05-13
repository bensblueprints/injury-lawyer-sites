import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs, CTABox, Sidebar, RelatedPages, PageHeroSection } from "@injury/ui";
import { siteConfig } from "@/config/site";
import {
  SUBTOPIC_ENTRIES,
  getSubtopicContent,
  getSubtopicsForParent,
} from "@/content/subtopics";
import { getPracticeAreaContent } from "@/content/practice-areas";

interface Props {
  params: { practiceArea: string; subtopic: string };
}

export async function generateStaticParams() {
  return SUBTOPIC_ENTRIES.map((entry) => ({
    practiceArea: entry.parentSlug,
    subtopic: entry.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = getSubtopicContent(params.practiceArea, params.subtopic);
  if (!content) return { title: "Not Found" };

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://lasvegasnevadainjurylawyer.com/${params.practiceArea}/${params.subtopic}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://lasvegasnevadainjurylawyer.com/${params.practiceArea}/${params.subtopic}`,
    },
  };
}

export default function SubtopicPage({ params }: Props) {
  const content = getSubtopicContent(params.practiceArea, params.subtopic);
  if (!content) notFound();

  const parentContent = getPracticeAreaContent(params.practiceArea);
  const siblingsInParent = getSubtopicsForParent(params.practiceArea).filter(
    (s) => s.slug !== params.subtopic
  );

  const parentTitle = parentContent?.title ?? params.practiceArea
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const breadcrumbs = [
    { label: "Practice Areas", href: "/practice-areas" },
    { label: parentTitle, href: `/${params.practiceArea}` },
    { label: content.title },
  ];

  const relatedLinks = siblingsInParent.map((s) => ({
    label: s.label,
    href: `/${params.practiceArea}/${s.slug}`,
  }));

  const subtopicSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${content.title} – ${siteConfig.firmName}`,
    description: content.metaDescription,
    url: `https://lasvegasnevadainjurylawyer.com/${params.practiceArea}/${params.subtopic}`,
    telephone: siteConfig.phone,
    areaServed: "Las Vegas, NV",
    serviceType: content.title,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subtopicSchema) }}
      />

      {/* Header */}
      <PageHeroSection practiceAreaSlug={params.practiceArea} imageAlt={`${content.title} lawyer Las Vegas`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            {content.title}
            <span className="block text-2xl text-red-400 font-semibold mt-2">
              Las Vegas, Nevada
            </span>
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
          {/* Article */}
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

                {i === 0 && (
                  <div className="my-8 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={`/images/${params.practiceArea}.webp`}
                      alt={`${content.title} attorney in Las Vegas`}
                      width={1536}
                      height={1024}
                      className="w-full h-64 sm:h-72 object-cover"
                    />
                  </div>
                )}

                {(i + 1) % 2 === 0 && i < content.sections.length - 1 && (
                  <CTABox config={siteConfig} />
                )}
              </div>
            ))}

            {/* FAQ */}
            {content.faqs.length > 0 && (
              <section className="mt-10">
                <h2 className="text-2xl font-black text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                {content.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-gray-100 rounded-xl p-5 mb-3 bg-gray-50"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </section>
            )}

            {/* Final CTA */}
            <div className="mt-10">
              <CTABox
                config={siteConfig}
                headline={`Injured in Las Vegas? Get a Free ${content.title} Consultation`}
                body="No fee unless we win. Available 24/7. Call us now or use our online form."
              />
            </div>

            {/* Related pages in this practice area */}
            {siblingsInParent.length > 0 && (
              <section className="mt-10">
                <h2 className="text-xl font-black text-gray-900 mb-4">
                  More {parentTitle} Resources
                </h2>
                <RelatedPages
                  pages={siblingsInParent.map((s) => ({
                    title: s.label,
                    href: `/${params.practiceArea}/${s.slug}`,
                    excerpt: `Learn about ${s.label.toLowerCase()} cases in Las Vegas, Nevada.`,
                  }))}
                />
              </section>
            )}
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
