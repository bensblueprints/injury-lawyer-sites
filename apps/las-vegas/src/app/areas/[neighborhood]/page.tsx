import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs, CTABox, Sidebar, PageHeroSection } from "@injury/ui";
import { siteConfig } from "@/config/site";
import {
  NEIGHBORHOOD_SLUGS,
  getNeighborhoodContent,
} from "@/content/neighborhoods";

interface Props {
  params: { neighborhood: string };
}

export async function generateStaticParams() {
  return NEIGHBORHOOD_SLUGS.map((slug) => ({ neighborhood: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = getNeighborhoodContent(params.neighborhood);
  if (!content) return { title: "Not Found" };

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://lasvegasnevadainjurylawyer.com/areas/${content.slug}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://lasvegasnevadainjurylawyer.com/areas/${content.slug}`,
    },
  };
}

export default function NeighborhoodPage({ params }: Props) {
  const content = getNeighborhoodContent(params.neighborhood);
  if (!content) notFound();

  const breadcrumbs = [
    { label: "Service Areas", href: "/areas" },
    { label: content.name },
  ];

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `Personal Injury Lawyer in ${content.name} – ${siteConfig.firmName}`,
    description: content.metaDescription,
    url: `https://lasvegasnevadainjurylawyer.com/areas/${content.slug}`,
    telephone: siteConfig.phone,
    areaServed: `${content.name}, NV`,
    serviceType: "Personal Injury Law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* Header */}
      <PageHeroSection imageSrc="/images/hero.webp" imageAlt="Personal injury lawyer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            Personal Injury Lawyer in{" "}
            <span className="text-red-400">{content.name}</span>, Nevada
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

                {i === 0 && (
                  <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/attorney-consultation.webp"
                      alt="Personal injury attorney"
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

            {/* All practice areas */}
            <section className="mt-10">
              <h2 className="text-2xl font-black text-gray-900 mb-6">
                Practice Areas Serving {content.name}
              </h2>
              <p className="text-gray-600 mb-5">
                Our attorneys handle all types of personal injury cases for{" "}
                {content.name} residents and visitors. Click any practice area
                below to learn more.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {content.practiceAreaLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:text-red-700 transition-all"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                    {link.label}
                  </a>
                ))}
              </div>
            </section>

            <div className="mt-10">
              <CTABox
                config={siteConfig}
                headline={`Injured in ${content.name}? Call Las Vegas Injury Law Group`}
                body="We serve all of Southern Nevada. Free consultation. No fee unless we win."
              />
            </div>
          </article>

          <div className="lg:col-span-1">
            <Sidebar
              config={siteConfig}
              relatedLinks={content.practiceAreaLinks.slice(0, 8)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
