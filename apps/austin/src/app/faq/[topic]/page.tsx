import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageHeroSection, CTABox, FAQAccordion, Breadcrumbs, Sidebar } from "@injury/ui";
import { siteConfig } from "@/config/site";

interface Props {
  params: { topic: string };
}

const FAQ_TOPICS = [
  { slug: "general-personal-injury", title: "General Personal Injury FAQ" },
  { slug: "car-accident-faq", title: "Car Accident FAQ" },
  { slug: "truck-accident-faq", title: "Truck Accident FAQ" },
  { slug: "slip-and-fall-faq", title: "Slip & Fall FAQ" },
  { slug: "workers-compensation-faq", title: "Workers' Compensation FAQ" },
  { slug: "wrongful-death-faq", title: "Wrongful Death FAQ" },
  { slug: "medical-malpractice-faq", title: "Medical Malpractice FAQ" },
  { slug: "motorcycle-accident-faq", title: "Motorcycle Accident FAQ" },
  { slug: "insurance-claims-faq", title: "Insurance Claims FAQ" },
  { slug: "statute-of-limitations-faq", title: "Statute of Limitations FAQ" },
  { slug: "car-accidents", title: "Car Accidents FAQ" },
  { slug: "settlement-process", title: "Settlement Process FAQ" },
];

export async function generateStaticParams() {
  return FAQ_TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = FAQ_TOPICS.find((t) => t.slug === params.topic);
  if (!topic) return {};
  return {
    title: `Austin ${topic.title} | Austin Injury Law Group`,
    description: `Answers to the most common questions about ${topic.title.toLowerCase()} from Austin Injury Law Group. Call (512) 555-0219 for a free consultation.`,
    alternates: { canonical: `https://austintexasinjurylawyer.com/faq/${params.topic}` },
  };
}

const BASE_FAQS = [
  {
    question: "How much does it cost to hire an Austin personal injury lawyer?",
    answer:
      "Nothing upfront. Austin Injury Law Group works on contingency — you pay nothing unless we win your case. Our fee is a percentage of your recovery.",
  },
  {
    question: "How long do I have to file a personal injury claim in Texas?",
    answer:
      "Texas generally allows two years from the date of injury for most personal injury claims. Government entity claims may have shorter deadlines. Contact us immediately at (512) 555-0219.",
  },
  {
    question: "What should I do immediately after an accident in Austin?",
    answer:
      "Call 911, seek medical attention, document the scene with photos, collect witness information, and do not give recorded statements to insurers. Then call us at (512) 555-0219.",
  },
  {
    question: "Can I still recover compensation if I was partially at fault in Texas?",
    answer:
      "Yes. Texas follows modified comparative fault rules. You can recover damages as long as your fault does not exceed 51%. Your recovery is reduced by your percentage of fault.",
  },
  {
    question: "What types of damages can I recover in an Austin personal injury case?",
    answer:
      "You may be entitled to past and future medical bills, lost wages, loss of earning capacity, pain and suffering, emotional distress, property damage, and loss of consortium.",
  },
  {
    question: "Do I have to go to court for a personal injury case in Austin?",
    answer:
      "Most cases settle out of court. However, we prepare every case as if it will go to trial, which pressures insurance companies to offer fair settlements. If needed, we take cases to court.",
  },
  {
    question: "How do I choose the right Austin personal injury attorney?",
    answer:
      "Look for attorneys who specialize in personal injury, work on contingency, have verifiable client reviews, and demonstrate a track record of results. Austin Injury Law Group offers free consultations.",
  },
];

export default function FAQTopicPage({ params }: Props) {
  const topic = FAQ_TOPICS.find((t) => t.slug === params.topic);
  if (!topic) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "FAQ", href: "/faq/general-personal-injury" },
    { label: topic.title, href: `/faq/${params.topic}` },
  ];

  const sidebarLinks = FAQ_TOPICS.filter((t) => t.slug !== params.topic).map((t) => ({
    label: t.title,
    href: `/faq/${t.slug}`,
  }));

  return (
    <>
      <PageHeroSection imageSrc="/images/courtroom.webp" imageAlt="Legal FAQ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            {`Austin ${topic.title}`}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">Get clear, honest answers about Austin personal injury law from experienced attorneys who fight for injury victims throughout Central Texas.</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="/free-consultation" className="bg-red-700 hover:bg-red-600 text-white font-black px-6 py-3 rounded-xl transition-colors shadow-lg">Free Case Review →</a>
            <a href={`tel:${siteConfig.phone}`} className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/20 transition-colors">Call {siteConfig.phoneFormatted}</a>
          </div>
        </div>
      </PageHeroSection>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2">
            <p className="text-xl text-gray-700 mb-8">
              These are the most common questions we receive at Austin Injury Law Group. If
              you don&apos;t see your question answered here, call us at (512) 555-0219 for a
              free consultation with an Austin injury attorney.
            </p>

            <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/courtroom.webp"
                alt="Personal injury law courtroom"
                width={1536}
                height={1024}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>

            <FAQAccordion faqs={BASE_FAQS} />

            <div className="mt-10">
              <CTABox
                config={siteConfig}
                headline="Still Have Questions? Call Us Free."
                body="Our Austin injury attorneys are available 24/7. Free consultation — no obligation, no upfront fees."
                variant="red"
              />
            </div>
          </article>

          <aside className="lg:col-span-1">
            <Sidebar config={siteConfig} links={sidebarLinks} heading="More FAQ Topics" />
          </aside>
        </div>
      </div>
    </>
  );
}
