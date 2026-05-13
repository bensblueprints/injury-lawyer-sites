import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  PageHeroSection,
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
  const title = `${subtopicTitle} | ${parent.title} in Austin, TX`;
  const description = `Learn about ${subtopicTitle.toLowerCase()} from Austin Injury Law Group's ${parent.title.toLowerCase()} attorneys. Free consultation. Call (512) 555-0219.`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://austintexasinjurylawyer.com/${params.practiceArea}/${params.subtopic}`,
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
      <PageHeroSection practiceAreaSlug={params.practiceArea} imageAlt={`${subtopicTitle} lawyer Austin`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            {`Austin ${subtopicTitle}`}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">{`Experienced Austin ${parent.title.toLowerCase()} attorneys handling ${subtopicTitle.toLowerCase()} cases throughout Central Texas. Free consultation — no fee unless we win.`}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="/free-consultation" className="bg-red-700 hover:bg-red-600 text-white font-black px-6 py-3 rounded-xl transition-colors shadow-lg">Free Case Review →</a>
            <a href={`tel:${siteConfig.phone}`} className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/20 transition-colors">Call {siteConfig.phoneFormatted}</a>
          </div>
        </div>
      </PageHeroSection>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8 not-prose">
              Austin Injury Law Group represents victims in {subtopicTitle.toLowerCase()} cases
              throughout Austin, Round Rock, Cedar Park, Georgetown, and all of Central Texas. Our
              {" "}{parent.title.toLowerCase()} attorneys understand the specific challenges of
              {" "}{subtopicTitle.toLowerCase()} claims and fight to maximize your recovery.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Understanding {subtopicTitle} in Texas
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {subtopicTitle} cases in Texas require a thorough understanding of state law,
                insurance regulations, and local court procedures. Our Austin attorneys have
                extensive experience navigating these complexities to secure the best possible
                outcome for our clients. Texas follows a modified comparative fault rule,
                meaning you can recover damages even if you were partially at fault, as long
                as your fault does not exceed 51%.
              </p>
            </div>

            <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md">
              <Image
                src={`/images/${params.practiceArea}.webp`}
                alt={`${subtopicTitle} attorney in Austin`}
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
                After any injury incident in Austin, your immediate priority should be your
                health and safety. Seek medical attention right away. Then document everything —
                photographs, witness information, police reports, and medical records. Do not
                give recorded statements to any insurance company without first speaking to an
                Austin injury attorney. Call us at (512) 555-0219 for a free consultation.
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
                property damage, and other out-of-pocket losses. Our Austin attorneys evaluate
                every element of your damages to pursue the maximum recovery available under
                Texas law.
              </p>
            </div>

            <div className="not-prose my-10">
              <CTABox
                config={siteConfig}
                headline={`Injured in a ${subtopicTitle} Case in Austin?`}
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
                    answer: `Texas generally allows two years from the date of injury to file a personal injury lawsuit. However, claims against government entities may have shorter deadlines. Contact us immediately at (512) 555-0219 to protect your rights.`,
                  },
                  {
                    question: `What is a ${subtopicTitle.toLowerCase()} case worth in Austin?`,
                    answer: `Every case is unique. Compensation depends on your medical expenses, lost wages, pain and suffering, and other factors. Our Austin attorneys will evaluate your specific circumstances during a free consultation.`,
                  },
                  {
                    question: `Do I need a lawyer for a ${subtopicTitle.toLowerCase()} case?`,
                    answer: `Having an experienced Austin injury attorney dramatically increases your chance of fair compensation. Insurance companies have legal teams on their side — you deserve the same. We handle everything on a contingency basis, so you pay nothing unless we win.`,
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
