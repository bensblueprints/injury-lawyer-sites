import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, CTABox, Sidebar, PageHeroSection } from "@injury/ui";
import { siteConfig } from "@/config/site";
import {
  ABOUT_PAGE_SLUGS,
  getAboutContent,
} from "@/content/about";

interface Props {
  params: { page: string };
}

export async function generateStaticParams() {
  return ABOUT_PAGE_SLUGS.map((slug) => ({ page: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = getAboutContent(params.page);
  if (!content) return { title: "Not Found" };

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://lasvegasnevadainjurylawyer.com/about/${content.slug}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://lasvegasnevadainjurylawyer.com/about/${content.slug}`,
    },
  };
}

export default function AboutPage({ params }: Props) {
  const content = getAboutContent(params.page);
  if (!content) notFound();

  const breadcrumbs = [
    { label: "About", href: "/about" },
    { label: content.title },
  ];

  const aboutLinks = [
    { label: "About Us", href: "/about/about-us" },
    { label: "Why Choose Us", href: "/about/why-choose-us" },
    { label: "Case Results", href: "/about/case-results" },
    { label: "Free Consultation", href: "/free-consultation" },
    { label: "Contact Us", href: "/contact" },
  ].filter((link) => !link.href.endsWith(params.page));

  return (
    <>
      {/* Header */}
      <PageHeroSection imageSrc="/images/about-team.webp" imageAlt="Personal injury law team">
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
                    <p className="text-gray-700 leading-relaxed">{section.body}</p>
                  </div>
                </section>

                {(i + 1) % 2 === 0 && i < content.sections.length - 1 && (
                  <CTABox config={siteConfig} variant="outline" />
                )}
              </div>
            ))}

            {/* Firm stats */}
            {params.page === "about-us" || params.page === "why-choose-us" ? (
              <section className="mt-10 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-6">
                  By the Numbers
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { stat: "$50M+", label: "Recovered for Clients" },
                    { stat: "500+", label: "Cases Handled" },
                    { stat: "4.9★", label: "Average Client Rating" },
                  ].map((item) => (
                    <div key={item.stat} className="text-center">
                      <div className="text-4xl font-black text-red-700 mb-1">
                        {item.stat}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="mt-10">
              <CTABox
                config={siteConfig}
                headline="Ready to Get Started? We're Ready to Fight for You."
                body="Call or contact us today for a free, confidential consultation with an experienced Las Vegas personal injury attorney."
              />
            </div>
          </article>

          <div className="lg:col-span-1">
            <Sidebar config={siteConfig} relatedLinks={aboutLinks} />
          </div>
        </div>
      </div>
    </>
  );
}
