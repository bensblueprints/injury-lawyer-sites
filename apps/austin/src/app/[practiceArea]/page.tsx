import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  HeroSection,
  CTABox,
  FAQAccordion,
  Breadcrumbs,
  Sidebar,
  RelatedPages,
  PRACTICE_AREA_IMAGE_MAP,
} from "@injury/ui";
import { siteConfig } from "@/config/site";
import {
  getPracticeAreaContent,
  PRACTICE_AREA_SLUGS,
} from "@/content/practice-areas";

interface Props {
  params: { practiceArea: string };
}

export async function generateStaticParams() {
  return PRACTICE_AREA_SLUGS.map((slug) => ({ practiceArea: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = getPracticeAreaContent(params.practiceArea);
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://austintexasinjurylawyer.com/${content.slug}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://austintexasinjurylawyer.com/${content.slug}`,
    },
  };
}

export default function PracticeAreaPage({ params }: Props) {
  const content = getPracticeAreaContent(params.practiceArea);
  if (!content) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: content.title, href: `/${content.slug}` },
  ];

  const sidebarLinks = content.relatedAreas.map((area) => ({
    label: area.label,
    href: area.href,
  }));

  return (
    <>
      <HeroSection
        config={siteConfig}
        headline={content.heroHeadline}
        subheadline={content.heroSubheadline}
        compact
        imageSrc={PRACTICE_AREA_IMAGE_MAP[params.practiceArea] ?? "/images/hero.webp"}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <article className="lg:col-span-2 prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8 not-prose">
              {content.intro}
            </p>

            {content.sections.map((section) => (
              <div key={section.heading} className="mb-8">
                <h2 className="text-2xl font-black text-gray-900 mb-3">
                  {section.heading}
                </h2>
                <p className="text-gray-700 leading-relaxed">{section.body}</p>
              </div>
            ))}

            {/* Inline CTA */}
            <div className="not-prose my-10">
              <CTABox
                config={siteConfig}
                headline={`Speak to an Austin ${content.title} Now`}
                body="Free consultation — no obligation, no upfront fees. We respond within 15 minutes."
                variant="red"
              />
            </div>

            {/* FAQ */}
            {content.faqs.length > 0 && (
              <div className="not-prose">
                <h2 className="text-2xl font-black text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={content.faqs} />
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Sidebar
              config={siteConfig}
              links={sidebarLinks}
              heading="Related Practice Areas"
            />
          </aside>
        </div>

        {/* Related Pages */}
        {content.relatedAreas.length > 0 && (
          <div className="mt-16">
            <RelatedPages
              heading="Other Austin Injury Practice Areas"
              pages={content.relatedAreas}
            />
          </div>
        )}
      </div>
    </>
  );
}
