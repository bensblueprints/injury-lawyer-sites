import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  HeroSection,
  CTABox,
  FAQAccordion,
  Breadcrumbs,
  Sidebar,
} from "@injury/ui";
import { siteConfig } from "@/config/site";
import {
  getPracticeAreaContent,
  PRACTICE_AREA_SLUGS,
} from "@/content/practice-areas";

interface Props {
  params: { practiceArea: string; subtopic: string };
}

// Common subtopic slugs per practice area
const SUBTOPIC_MAP: Record<string, string[]> = {
  "car-accident-lawyer": [
    "rear-end-collision",
    "drunk-driving-accident",
    "hit-and-run-accident",
    "intersection-crash",
    "highway-accident",
  ],
  "truck-accident-lawyer": [
    "18-wheeler-accident",
    "commercial-vehicle-crash",
    "truck-driver-fatigue",
    "jackknife-accident",
    "underride-accident",
  ],
  "motorcycle-accident-lawyer": [
    "lane-splitting-accident",
    "dooring-accident",
    "road-rash-injuries",
    "helmet-laws",
    "motorcycle-hit-and-run",
  ],
  "slip-and-fall-lawyer": [
    "wet-floor-accident",
    "ice-and-snow-fall",
    "broken-sidewalk-injury",
    "parking-lot-fall",
    "retail-store-fall",
  ],
  "wrongful-death-lawyer": [
    "fatal-car-accident",
    "workplace-fatality",
    "medical-negligence-death",
    "wrongful-death-damages",
    "wrongful-death-statute",
  ],
  "workers-compensation-lawyer": [
    "denied-workers-comp",
    "workplace-fall-injury",
    "repetitive-stress-injury",
    "third-party-work-injury",
    "return-to-work-dispute",
  ],
};

const DEFAULT_SUBTOPICS = ["overview", "damages", "process", "faq", "contact"];

export async function generateStaticParams() {
  const params: { practiceArea: string; subtopic: string }[] = [];
  for (const practiceArea of PRACTICE_AREA_SLUGS) {
    const subtopics = SUBTOPIC_MAP[practiceArea] ?? DEFAULT_SUBTOPICS;
    for (const subtopic of subtopics) {
      params.push({ practiceArea, subtopic });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parent = getPracticeAreaContent(params.practiceArea);
  if (!parent) return {};
  const subtopicTitle = params.subtopic
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const title = `${subtopicTitle} | ${parent.title} in Dallas, TX`;
  const description = `Learn about ${subtopicTitle.toLowerCase()} from Dallas Injury Law Group's ${parent.title.toLowerCase()} attorneys. Free consultation. Call (214) 555-0183.`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://dallastexasinjurylawyer.com/${params.practiceArea}/${params.subtopic}`,
    },
  };
}

export default function SubtopicPage({ params }: Props) {
  const parent = getPracticeAreaContent(params.practiceArea);
  if (!parent) notFound();

  const subtopicTitle = params.subtopic
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: parent.title, href: `/${parent.slug}` },
    { label: subtopicTitle, href: `/${parent.slug}/${params.subtopic}` },
  ];

  const sidebarLinks = parent.relatedAreas.map((area) => ({
    label: area.label,
    href: area.href,
  }));

  return (
    <>
      <HeroSection
        config={siteConfig}
        headline={`Dallas ${subtopicTitle}`}
        subheadline={`Experienced Dallas ${parent.title.toLowerCase()} attorneys handling ${subtopicTitle.toLowerCase()} cases throughout the DFW Metroplex. Free consultation — no fee unless we win.`}
        compact
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8 not-prose">
              Dallas Injury Law Group represents victims in {subtopicTitle.toLowerCase()} cases
              throughout Dallas, Plano, Irving, Arlington, and all of the DFW Metroplex. Our
              {" "}{parent.title.toLowerCase()} attorneys understand the specific challenges of
              {" "}{subtopicTitle.toLowerCase()} claims and fight to maximize your recovery.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Understanding {subtopicTitle} in Texas
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {subtopicTitle} cases in Texas require a thorough understanding of state law,
                insurance regulations, and local court procedures. Our Dallas attorneys have
                extensive experience navigating these complexities to secure the best possible
                outcome for our clients. Texas follows a modified comparative fault rule,
                meaning you can recover damages even if you were partially at fault, as long
                as your fault does not exceed 51%.
              </p>
            </div>

            <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md">
              <Image
                src={`/images/${params.practiceArea}.webp`}
                alt={`${subtopicTitle} attorney in Dallas`}
                width={1536}
                height={1024}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                What to Do If You&apos;ve Been Involved in a {subtopicTitle} Case
              </h2>
              <p className="text-gray-700 leading-relaxed">
                After any injury incident in Dallas, your immediate priority should be your
                health and safety. Seek medical attention right away. Then document everything —
                photographs, witness information, police reports, and medical records. Do not
                give recorded statements to any insurance company without first speaking to a
                Dallas injury attorney. Call us at (214) 555-0183 for a free consultation.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Compensation Available in {subtopicTitle} Claims
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Depending on the specifics of your {subtopicTitle.toLowerCase()} case, you
                may be entitled to compensation for medical expenses (past and future), lost
                wages and reduced earning capacity, pain and suffering, emotional distress,
                property damage, and other out-of-pocket losses. Our Dallas attorneys evaluate
                every element of your damages to pursue the maximum recovery available under
                Texas law.
              </p>
            </div>

            <div className="not-prose my-10">
              <CTABox
                config={siteConfig}
                headline={`Injured in a ${subtopicTitle} Case in Dallas?`}
                body="Our attorneys respond within 15 minutes. Free consultation, no upfront fees."
                variant="red"
              />
            </div>

            <div className="not-prose">
              <h2 className="text-2xl font-black text-gray-900 mb-6">
                Frequently Asked Questions About {subtopicTitle}
              </h2>
              <FAQAccordion
                faqs={[
                  {
                    question: `How long do I have to file a ${subtopicTitle.toLowerCase()} claim in Texas?`,
                    answer: `Texas generally allows two years from the date of injury to file a personal injury lawsuit. However, claims against government entities may have shorter deadlines. Contact us immediately at (214) 555-0183 to protect your rights.`,
                  },
                  {
                    question: `What is a ${subtopicTitle.toLowerCase()} case worth in Dallas?`,
                    answer: `Every case is unique. Compensation depends on your medical expenses, lost wages, pain and suffering, and other factors. Our Dallas attorneys will evaluate your specific circumstances during a free consultation.`,
                  },
                  {
                    question: `Do I need a lawyer for a ${subtopicTitle.toLowerCase()} case?`,
                    answer: `Having an experienced Dallas injury attorney dramatically increases your chance of fair compensation. Insurance companies have legal teams on their side — you deserve the same. We handle everything on a contingency basis, so you pay nothing unless we win.`,
                  },
                ]}
              />
            </div>
          </article>

          <aside className="lg:col-span-1">
            <Sidebar
              config={siteConfig}
              links={sidebarLinks}
              heading="Related Practice Areas"
            />
          </aside>
        </div>
      </div>
    </>
  );
}
