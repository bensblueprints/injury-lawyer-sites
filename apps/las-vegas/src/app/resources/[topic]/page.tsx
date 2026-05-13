import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs, CTABox, Sidebar, RelatedPages, PageHeroSection } from "@injury/ui";
import { siteConfig } from "@/config/site";
import {
  RESOURCE_SLUGS,
  getResourceContent,
  resourceContent,
} from "@/content/resources";

interface Props {
  params: { topic: string };
}

export async function generateStaticParams() {
  return RESOURCE_SLUGS.map((slug) => ({ topic: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = getResourceContent(params.topic);
  if (!content) return { title: "Not Found" };

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://lasvegasnevadainjurylawyer.com/resources/${content.slug}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://lasvegasnevadainjurylawyer.com/resources/${content.slug}`,
    },
  };
}

export default function ResourcePage({ params }: Props) {
  const content = getResourceContent(params.topic);
  if (!content) notFound();

  const breadcrumbs = [
    { label: "Resources", href: "/resources" },
    { label: content.title },
  ];

  const relatedResources = Object.values(resourceContent)
    .filter((c) => c.slug !== params.topic)
    .map((c) => ({
      label: c.title,
      href: `/resources/${c.slug}`,
    }));

  return (
    <>
      {/* Header */}
      <PageHeroSection imageSrc="/images/attorney-consultation.webp" imageAlt="Legal resources">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">{content.intro}</p>
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
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {section.body}
                    </p>
                  </div>
                </section>

                {i === 0 && (
                  <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/free-consultation.webp"
                      alt="Free legal consultation"
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

            <div className="mt-10">
              <CTABox
                config={siteConfig}
                headline="Need Legal Help After an Injury in Las Vegas?"
                body="Free consultation with an experienced injury attorney. No fee unless we win."
              />
            </div>

            {relatedResources.length > 0 && (
              <section className="mt-10">
                <h2 className="text-xl font-black text-gray-900 mb-4">
                  More Injury Law Resources
                </h2>
                <RelatedPages
                  pages={relatedResources.map((p) => ({
                    title: p.label,
                    href: p.href,
                    excerpt: `Helpful guidance for Nevada injury victims on ${p.label.toLowerCase()}.`,
                  }))}
                />
              </section>
            )}
          </article>

          <div className="lg:col-span-1">
            <Sidebar
              config={siteConfig}
              relatedLinks={relatedResources.slice(0, 5)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
