import type { Metadata } from "next";
import {
  HeroSection,
  TrustBar,
  PracticeAreaCard,
  NeighborhoodCard,
  ProcessSteps,
  CTABox,
  FAQAccordion,
} from "@injury/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Austin Personal Injury Lawyer | Free Consultation | No Fee Unless We Win",
  description:
    "Injured in Austin? Our aggressive personal injury attorneys fight insurance companies and win. Free consultation. No fees unless we recover for you. Call (512) 555-0219.",
  alternates: {
    canonical: "https://austintexasinjurylawyer.com",
  },
  openGraph: {
    title: "Austin Personal Injury Lawyer | Austin Injury Law Group",
    description:
      "Injured in Austin? Our aggressive personal injury attorneys fight insurance companies and win. Free consultation. No fees unless we recover for you.",
    url: "https://austintexasinjurylawyer.com",
  },
};

const practiceAreas = [
  {
    icon: "🚗",
    title: "Car Accidents",
    slug: "car-accident-lawyer",
    excerpt:
      "Rear-ends, T-bones, head-on collisions — we fight insurance adjusters on Austin's I-35, MoPac, and local roads so you receive full compensation.",
  },
  {
    icon: "🚚",
    title: "Truck Accidents",
    slug: "truck-accident-lawyer",
    excerpt:
      "Semi-truck and big-rig crashes on I-35 and US-183 cause catastrophic injuries. Our attorneys take on large carriers and their insurance teams.",
  },
  {
    icon: "🏍️",
    title: "Motorcycle Accidents",
    slug: "motorcycle-accident-lawyer",
    excerpt:
      "Motorcyclists are disproportionately injured in Texas crashes. We know how biased insurance companies are and fight to overcome it.",
  },
  {
    icon: "🚶",
    title: "Pedestrian Accidents",
    slug: "pedestrian-accident-lawyer",
    excerpt:
      "Pedestrians struck by vehicles in Austin's busy downtown and university areas suffer severe injuries. We pursue maximum compensation.",
  },
  {
    icon: "🚲",
    title: "Bicycle Accidents",
    slug: "bicycle-accident-lawyer",
    excerpt:
      "Austin's growing cycling culture comes with risks. We hold negligent drivers accountable and recover damages for your injuries and lost income.",
  },
  {
    icon: "🏗️",
    title: "Construction Accidents",
    slug: "construction-accident-lawyer",
    excerpt:
      "Austin's construction boom creates daily hazards. We navigate OSHA violations and third-party liability to secure your recovery.",
  },
  {
    icon: "🏢",
    title: "Slip & Fall",
    slug: "slip-and-fall-lawyer",
    excerpt:
      "Texas property owners must keep premises safe. When they fail, we hold them liable for your injuries, lost wages, and ongoing medical needs.",
  },
  {
    icon: "💊",
    title: "Medical Malpractice",
    slug: "medical-malpractice-lawyer",
    excerpt:
      "Surgical errors, misdiagnoses, and medication mistakes cause preventable harm. Our attorneys work with top medical experts to build your case.",
  },
  {
    icon: "⚖️",
    title: "Wrongful Death",
    slug: "wrongful-death-lawyer",
    excerpt:
      "Losing a loved one due to negligence is devastating. We pursue justice and financial accountability so your Austin family can begin to heal.",
  },
  {
    icon: "👷",
    title: "Workers' Compensation",
    slug: "workers-compensation-lawyer",
    excerpt:
      "Injured on the job in Texas? If your employer or insurer is denying or lowballing your claim, our attorneys fight to protect your rights.",
  },
  {
    icon: "🐕",
    title: "Dog Bites",
    slug: "dog-bite-lawyer",
    excerpt:
      "Texas holds dog owners liable for bites and attacks. We recover damages for your physical injuries, psychological trauma, and scarring.",
  },
  {
    icon: "🏨",
    title: "Premises Liability",
    slug: "premises-liability-lawyer",
    excerpt:
      "Negligent property owners across Austin and Central Texas are responsible for injuries on their premises. We build strong liability cases.",
  },
  {
    icon: "🚌",
    title: "Bus & Transit Accidents",
    slug: "bus-accident-lawyer",
    excerpt:
      "Capital Metro bus crashes and rideshare accidents have unique legal complexities. Our team handles the insurance process so you can focus on recovery.",
  },
  {
    icon: "💥",
    title: "Catastrophic Injuries",
    slug: "catastrophic-injury-lawyer",
    excerpt:
      "Traumatic brain injuries, spinal cord damage, and amputations require lifetime care. We fight for settlements that reflect your true long-term needs.",
  },
  {
    icon: "🧪",
    title: "Product Liability",
    slug: "product-liability-lawyer",
    excerpt:
      "Defective products cause serious harm. We sue manufacturers, distributors, and retailers who put dangerous goods into Texas consumers' hands.",
  },
  {
    icon: "🔥",
    title: "Burn Injuries",
    slug: "burn-injury-lawyer",
    excerpt:
      "Severe burns require extensive treatment. Our attorneys pursue every dollar needed for surgeries, grafts, rehabilitation, and long-term care.",
  },
  {
    icon: "🧠",
    title: "Brain Injuries",
    slug: "brain-injury-lawyer",
    excerpt:
      "Traumatic brain injuries can reshape your entire life. We work with neurologists and life-care planners to maximize your Austin compensation.",
  },
  {
    icon: "🦴",
    title: "Spinal Cord Injuries",
    slug: "spinal-cord-injury-lawyer",
    excerpt:
      "Paralysis and spinal damage claims require specialized legal strategies. We pursue multimillion-dollar recoveries for the most serious injuries.",
  },
  {
    icon: "🌀",
    title: "Rideshare Accidents",
    slug: "rideshare-accident-lawyer",
    excerpt:
      "Uber and Lyft accidents in Austin involve complex insurance stacking issues. We know the playbook and fight for full compensation on your behalf.",
  },
  {
    icon: "🏥",
    title: "Nursing Home Abuse",
    slug: "nursing-home-abuse-lawyer",
    excerpt:
      "Neglect and abuse in Austin-area nursing facilities is a serious legal matter. We hold care facilities accountable and fight for your loved ones.",
  },
];

const neighborhoods = [
  {
    name: "Round Rock",
    slug: "round-rock",
    description:
      "Serving Round Rock injury victims on I-35, US-79, and throughout Williamson County's largest city.",
  },
  {
    name: "Cedar Park",
    slug: "cedar-park",
    description:
      "Cedar Park's rapid growth along US-183A and Whitestone Boulevard creates new accident risks we handle every day.",
  },
  {
    name: "Georgetown",
    slug: "georgetown",
    description:
      "We represent Georgetown residents injured on I-35, Inner Loop Road, and throughout Williamson County's seat.",
  },
  {
    name: "Kyle",
    slug: "kyle",
    description:
      "Kyle's explosive growth along I-35 has brought increased traffic and accidents — we're here to fight for local victims.",
  },
  {
    name: "Pflugerville",
    slug: "pflugerville",
    description:
      "Serving Pflugerville injury victims on SH-130, FM-1825, and throughout this growing Northeast Austin suburb.",
  },
  {
    name: "Leander",
    slug: "leander",
    description:
      "Leander's rapid development along US-183 and the Metro Rail corridor brings new traffic and accident risks.",
  },
  {
    name: "Buda",
    slug: "buda",
    description:
      "We serve Buda injury victims along I-35 and FM-967, where high-speed collisions occur regularly.",
  },
  {
    name: "Manor",
    slug: "manor",
    description:
      "Serving Manor residents injured on US-290, SH-130, and throughout Travis County's eastern communities.",
  },
  {
    name: "San Marcos",
    slug: "san-marcos",
    description:
      "San Marcos sits on the I-35 corridor — we handle injury claims from university-area crashes and highway accidents.",
  },
  {
    name: "Hutto",
    slug: "hutto",
    description:
      "Hutto's fast-growing neighborhoods and expanding road network create new personal injury cases we're ready to handle.",
  },
  {
    name: "Taylor",
    slug: "taylor",
    description:
      "We represent Taylor injury victims as Williamson County's semiconductor corridor brings new residents and road hazards.",
  },
  {
    name: "Lakeway",
    slug: "lakeway",
    description:
      "Serving Lakeway residents injured in accidents along RR 620, FM 2222, and the Lake Travis corridor.",
  },
  {
    name: "Dripping Springs",
    slug: "dripping-springs",
    description:
      "Dripping Springs' scenic Hill Country roads and US-290 corridor see frequent accidents — we represent victims throughout the area.",
  },
  {
    name: "Bastrop",
    slug: "bastrop",
    description:
      "Serving Bastrop County injury victims along SH-71, SH-21, and throughout this historic Central Texas community.",
  },
  {
    name: "Westlake",
    slug: "westlake",
    description:
      "Westlake's winding Hill Country roads and proximity to MoPac generate significant injury claims we handle for local residents.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Call or Contact Us",
    body: "Reach our team 24/7 by phone or our online form. We respond within 15 minutes — no waiting, no runaround.",
  },
  {
    number: "2",
    title: "Free Case Review",
    body: "A senior attorney personally reviews your case at no charge. We explain your rights, your options, and what your case may be worth.",
  },
  {
    number: "3",
    title: "We Fight For You",
    body: "We handle everything — investigation, medical record collection, insurance negotiations, and litigation if necessary. You heal; we fight.",
  },
  {
    number: "4",
    title: "You Win",
    body: "We don't get paid unless you do. When we secure your settlement or verdict, our fee comes from the recovery — never out of your pocket.",
  },
];

const homepageFAQs = [
  {
    question: "How much does it cost to hire an Austin personal injury lawyer?",
    answer:
      "Nothing upfront. Austin Injury Law Group works on a contingency fee basis, which means you pay zero attorney fees unless we win your case. Our fee is a percentage of the recovery, so if we don't win, you owe nothing. There's never a cost to get a free consultation.",
  },
  {
    question: "How long do I have to file a personal injury lawsuit in Texas?",
    answer:
      "In Texas, the statute of limitations for most personal injury claims is two years from the date of the injury. However, some cases — such as claims against government entities or medical malpractice — have different and shorter deadlines. Contact us immediately to protect your rights.",
  },
  {
    question: "What is my Austin personal injury case worth?",
    answer:
      "Every case is unique. Compensation depends on factors including medical bills (past and future), lost wages, loss of earning capacity, pain and suffering, emotional distress, and property damage. Our attorneys evaluate every element of your damages to pursue maximum compensation.",
  },
  {
    question: "Do I need a lawyer if the insurance company already offered me a settlement?",
    answer:
      "Yes — and urgently so. Initial insurance offers are almost always lowball numbers designed to close your claim before you understand its full value. Our attorneys frequently recover two to ten times what the insurance company first offered. Let us review any offer before you accept.",
  },
  {
    question: "What should I do immediately after an accident in Austin?",
    answer:
      "Call 911 and get a police report. Seek medical attention even if you feel fine — some injuries don't appear immediately. Document the scene with photos if you can. Get witness information. Do not give a recorded statement to the other party's insurance company. Then call us at (512) 555-0219 for a free consultation.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        config={siteConfig}
        headline="Austin's Most Aggressive Injury Lawyers"
        subheadline="Injured in Austin or Central Texas? Our attorneys have recovered millions for car accident victims, slip and fall survivors, and seriously injured clients. Free consultation — no fee unless we win."
      />

      {/* Trust Bar */}
      <TrustBar config={siteConfig} />

      {/* Practice Areas Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              What We Handle
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Austin Personal Injury Practice Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From I-35 highway crashes to construction site accidents, our attorneys handle
              the full spectrum of serious injury cases throughout Austin and Central Texas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {practiceAreas.map((area, i) => (
              <PracticeAreaCard
                key={area.slug}
                icon={area.icon}
                title={area.title}
                excerpt={area.excerpt}
                slug={area.slug}
                index={i}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/practice-areas"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-red-900/20"
            >
              View All Practice Areas →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Box #1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABox
          config={siteConfig}
          headline="Hurt in Austin? Don't Wait — Call Now."
          body="Every day you delay costs you evidence and leverage. Our attorneys are available 24/7 and will respond within 15 minutes."
          variant="red"
        />
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessSteps steps={processSteps} title="How Our Process Works" />
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Local Representation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Serving Every Corner of Central Texas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We represent injury victims in Austin, Round Rock, Cedar Park, Georgetown,
              and every community throughout Central Texas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {neighborhoods.map((hood, i) => (
              <NeighborhoodCard
                key={hood.slug}
                name={hood.name}
                slug={hood.slug}
                description={hood.description}
                index={i}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/areas"
              className="inline-flex items-center gap-2 bg-white border-2 border-red-700 text-red-700 hover:bg-red-50 font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              View All Service Areas →
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-700/20 border border-red-700/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Why Clients Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Austin's Most Aggressive Injury Law Firm
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              When you're up against billion-dollar insurance companies, you need a team
              that matches their aggression. That's us.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                title: "$50M+ Recovered",
                body: "Our attorneys have secured over $50 million in settlements and verdicts for Central Texas injury victims.",
              },
              {
                icon: "⚡",
                title: "24/7 Availability",
                body: "Accidents don't happen on a schedule. Our team is available around the clock — call us anytime, day or night.",
              },
              {
                icon: "🤝",
                title: "No Fee Unless We Win",
                body: "You pay nothing upfront. Our contingency fee means we only get paid when you get paid. Zero financial risk to you.",
              },
              {
                icon: "📋",
                title: "We Handle Everything",
                body: "From gathering police reports and medical records to fighting insurance companies — we manage every detail of your case.",
              },
              {
                icon: "⚖️",
                title: "Trial-Ready Attorneys",
                body: "Insurance companies know we go to trial. That reputation forces them to offer fair settlements — or face us in court.",
              },
              {
                icon: "🌟",
                title: "4.9★ Client Reviews",
                body: "118 five-star reviews from real Austin and Central Texas clients. Our results speak for themselves.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-black text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box #2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CTABox
          config={siteConfig}
          headline="Free Consultation — Speak to an Attorney Today"
          body="No obligation, no pressure. Just straightforward legal advice from an experienced Austin personal injury attorney."
          variant="dark"
        />
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Common Questions
            </span>
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              Austin Injury Law — Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Get clear answers to the questions injury victims ask us most often.
            </p>
          </div>
          <FAQAccordion faqs={homepageFAQs} />
          <div className="text-center mt-8">
            <a
              href="/faq/general-personal-injury"
              className="text-red-700 hover:text-red-800 font-bold text-sm underline underline-offset-4"
            >
              View all frequently asked questions →
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Don't Face Insurance Companies Alone
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Every year, Austin accident victims leave millions on the table by accepting
            first offers. Let our attorneys fight for every dollar you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/free-consultation"
              className="bg-white text-red-700 font-black px-8 py-4 rounded-xl text-lg shadow-xl hover:bg-gray-50 transition-colors"
            >
              Get Your Free Consultation →
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-black/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-black/30 transition-colors"
            >
              Call (512) 555-0219
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
