import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, CTABox, FAQAccordion, PageHeroSection } from "@injury/ui";
import { siteConfig } from "@/config/site";
import { FAQ_TOPIC_SLUGS, getFAQContent } from "@/content/faqs";

interface Props {
  params: { topic: string };
}

export async function generateStaticParams() {
  return FAQ_TOPIC_SLUGS.map((slug) => ({ topic: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = getFAQContent(params.topic);
  if (!content) return { title: "Not Found" };

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://denvercoloradoinjurylawyer.com/faq/${content.slug}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://denvercoloradoinjurylawyer.com/faq/${content.slug}`,
    },
  };
}

export default function FAQTopicPage({ params }: Props) {
  const content = getFAQContent(params.topic);
  if (!content) notFound();

  const breadcrumbs = [
    { label: "FAQ", href: "/faq" },
    { label: content.title },
  ];

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://denvercoloradoinjurylawyer.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://denvercoloradoinjurylawyer.com/faq",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.title,
        item: `https://denvercoloradoinjurylawyer.com/faq/${content.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <PageHeroSection imageSrc="/images/courtroom.webp" imageAlt="Legal FAQ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-300">{content.intro}</p>
        </div>
      </PageHeroSection>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FAQAccordion faqs={content.faqs} />

        <div className="mt-12">
          <CTABox
            config={siteConfig}
            headline="Still Have Questions? Talk to a Denver Injury Attorney."
            body="Our Colorado attorneys provide free consultations — no obligation, no pressure, just honest advice about your case."
          />
        </div>

        {/* More FAQ topics */}
        <section className="mt-12">
          <h2 className="text-xl font-black text-gray-900 mb-4">
            More Denver Injury Law FAQs
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "General Personal Injury", href: "/faq/general-personal-injury" },
              { label: "Car Accidents", href: "/faq/car-accidents" },
              { label: "Truck Accidents", href: "/faq/truck-accidents" },
              { label: "Slip & Fall", href: "/faq/slip-and-fall" },
              { label: "Medical Malpractice", href: "/faq/medical-malpractice" },
              { label: "Workers' Compensation", href: "/faq/workers-compensation" },
              { label: "Wrongful Death", href: "/faq/wrongful-death" },
              { label: "Insurance Claims", href: "/faq/insurance-claims" },
              { label: "Settlement Process", href: "/faq/settlement-process" },
              { label: "Colorado Injury Law", href: "/faq/colorado-injury-law" },
            ]
              .filter((item) => !item.href.endsWith(params.topic))
              .map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:text-red-700 transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                  {item.label}
                </a>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
