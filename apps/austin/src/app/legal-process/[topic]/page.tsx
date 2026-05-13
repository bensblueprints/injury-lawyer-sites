import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection, CTABox, Breadcrumbs, Sidebar } from "@injury/ui";
import { siteConfig } from "@/config/site";

interface Props {
  params: { topic: string };
}

const LEGAL_PROCESS_TOPICS = [
  { slug: "how-personal-injury-claims-work", title: "How Personal Injury Claims Work" },
  { slug: "filing-a-lawsuit-in-texas", title: "Filing a Lawsuit in Texas" },
  { slug: "discovery-process", title: "The Discovery Process" },
  { slug: "settlement-negotiations", title: "Settlement Negotiations" },
  { slug: "going-to-trial", title: "Going to Trial" },
  { slug: "after-your-settlement", title: "After Your Settlement" },
  { slug: "insurance-company-tactics", title: "Insurance Company Tactics" },
  { slug: "medical-liens-and-bills", title: "Medical Liens and Bills" },
  { slug: "how-to-file-a-claim", title: "How to File a Personal Injury Claim" },
  { slug: "lawsuit-timeline", title: "Personal Injury Lawsuit Timeline" },
  { slug: "statute-of-limitations", title: "Statute of Limitations" },
  { slug: "what-is-negligence", title: "What Is Negligence?" },
  { slug: "calculating-damages", title: "Calculating Your Damages" },
  { slug: "insurance-negotiation", title: "Insurance Negotiation Tips" },
  { slug: "when-to-hire", title: "When to Hire a Personal Injury Lawyer" },
];

export async function generateStaticParams() {
  return LEGAL_PROCESS_TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = LEGAL_PROCESS_TOPICS.find((t) => t.slug === params.topic);
  if (!topic) return {};
  return {
    title: `${topic.title} | Austin Injury Law Group`,
    description: `Learn about ${topic.title.toLowerCase()} from experienced Austin personal injury attorneys. Free consultation. Call (512) 555-0219.`,
    alternates: { canonical: `https://austintexasinjurylawyer.com/legal-process/${params.topic}` },
  };
}

export default function LegalProcessPage({ params }: Props) {
  const topic = LEGAL_PROCESS_TOPICS.find((t) => t.slug === params.topic);
  if (!topic) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Legal Process", href: "/legal-process/how-personal-injury-claims-work" },
    { label: topic.title, href: `/legal-process/${params.topic}` },
  ];

  const sidebarLinks = LEGAL_PROCESS_TOPICS.filter((t) => t.slug !== params.topic).map((t) => ({
    label: t.title,
    href: `/legal-process/${t.slug}`,
  }));

  return (
    <>
      <HeroSection
        config={siteConfig}
        headline={topic.title}
        subheadline="Austin Injury Law Group guides you through every step of the Texas personal injury legal process. We handle everything so you can focus on recovery."
        compact
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 not-prose">
              Understanding {topic.title.toLowerCase()} is essential for Austin injury victims
              who want to protect their rights and maximize their compensation. Austin Injury
              Law Group has guided hundreds of clients through this process throughout
              Central Texas.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Overview: {topic.title} in Texas
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Texas personal injury law governs how accident victims can seek compensation
                for their losses. The process typically begins with a free consultation,
                followed by an investigation of the incident, gathering medical records and
                evidence, and making a demand to the at-fault party&apos;s insurance company.
                Most cases resolve through negotiation; some require litigation.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                How Austin Injury Law Group Handles {topic.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our Austin attorneys manage every aspect of {topic.title.toLowerCase()} on
                your behalf. From day one, we handle communications with insurance adjusters,
                collect all evidence, work with medical providers to manage your bills, and
                build the strongest possible case for your recovery. You focus on healing —
                we handle everything else.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Key Considerations Under Texas Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Texas follows a modified comparative fault rule (51% bar). The statute of
                limitations for most personal injury claims is two years. Texas allows
                recovery of both economic and non-economic damages. In cases of gross
                negligence, exemplary damages may be available. Our attorneys know how to
                navigate all of these factors to your advantage.
              </p>
            </div>

            <div className="not-prose mt-10">
              <CTABox
                config={siteConfig}
                headline="Questions About the Legal Process? Call Us Free."
                body="Our Austin attorneys explain every step in plain English. Free consultation — no obligation."
                variant="red"
              />
            </div>
          </article>

          <aside className="lg:col-span-1">
            <Sidebar config={siteConfig} links={sidebarLinks} heading="Legal Process Topics" />
          </aside>
        </div>
      </div>
    </>
  );
}
