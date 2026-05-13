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
  title: "Denver Personal Injury Lawyer | Free Consultation | No Fee Unless We Win",
  description:
    "Injured in Denver? Our aggressive personal injury attorneys fight insurance companies and win. Free consultation. No fees unless we recover for you. Call (303) 555-0174.",
  alternates: {
    canonical: "https://devnercoloradoinjurylawyer.com",
  },
  openGraph: {
    title: "Denver Personal Injury Lawyer | Denver Injury Law Group",
    description:
      "Injured in Denver? Our aggressive personal injury attorneys fight insurance companies and win. Free consultation. No fees unless we recover for you.",
    url: "https://devnercoloradoinjurylawyer.com",
  },
};

const practiceAreas = [
  {
    icon: "🚗",
    title: "Car Accidents",
    slug: "car-accident-lawyer",
    excerpt:
      "Rear-ends, T-bones, head-on collisions on I-25 and I-70 — we fight insurance adjusters so you receive the full compensation you deserve for medical bills, lost wages, and pain and suffering.",
  },
  {
    icon: "🚚",
    title: "Truck Accidents",
    slug: "truck-accident-lawyer",
    excerpt:
      "Semi-truck and big-rig crashes cause catastrophic injuries. Our attorneys have the resources to take on large carriers and their insurance teams on Colorado's freight corridors.",
  },
  {
    icon: "🏍️",
    title: "Motorcycle Accidents",
    slug: "motorcycle-accident-lawyer",
    excerpt:
      "Motorcyclists are disproportionately injured on Colorado roads. We know how biased insurance companies are and how to overcome it to secure fair compensation.",
  },
  {
    icon: "🚶",
    title: "Pedestrian Accidents",
    slug: "pedestrian-accident-lawyer",
    excerpt:
      "Pedestrians struck by vehicles on Denver's streets suffer severe, life-altering injuries. We pursue maximum compensation for your medical care, rehabilitation, and future losses.",
  },
  {
    icon: "🚲",
    title: "Bicycle Accidents",
    slug: "bicycle-accident-lawyer",
    excerpt:
      "Denver's bike lanes and trails see frequent collisions. We hold negligent drivers accountable and recover damages for your injuries, bike damage, and lost income.",
  },
  {
    icon: "🏗️",
    title: "Construction Accidents",
    slug: "construction-accident-lawyer",
    excerpt:
      "Falls, equipment failures, and scaffolding collapses on Denver-area job sites can end careers. We navigate OSHA violations and third-party liability to secure your recovery.",
  },
  {
    icon: "🏢",
    title: "Slip & Fall",
    slug: "slip-and-fall-lawyer",
    excerpt:
      "Colorado property owners must keep premises safe — including removing snow and ice. When they fail, we hold them liable under Colorado's premises liability statute (CRS 13-21-115).",
  },
  {
    icon: "💊",
    title: "Medical Malpractice",
    slug: "medical-malpractice-lawyer",
    excerpt:
      "Surgical errors, misdiagnoses, and medication mistakes at Denver Health or UCHealth cause preventable harm. Our attorneys work with top medical experts to build your case.",
  },
  {
    icon: "⚖️",
    title: "Wrongful Death",
    slug: "wrongful-death-lawyer",
    excerpt:
      "Losing a loved one due to negligence is devastating. We pursue justice and financial accountability under Colorado's wrongful death statute (CRS 13-21-202).",
  },
  {
    icon: "👷",
    title: "Workers' Compensation",
    slug: "workers-compensation-lawyer",
    excerpt:
      "Injured on the job in Colorado? If your employer or insurer is denying or lowballing your claim, our attorneys fight to protect your rights under Colorado workers' comp law.",
  },
  {
    icon: "🐕",
    title: "Dog Bites",
    slug: "dog-bite-lawyer",
    excerpt:
      "Colorado holds dog owners strictly liable for bites under CRS 13-21-124. We recover damages for your physical injuries, psychological trauma, and scarring.",
  },
  {
    icon: "🏨",
    title: "Hotel & Resort Accidents",
    slug: "hotel-casino-accident-lawyer",
    excerpt:
      "Denver hotels and Black Hawk casino resorts must maintain safe premises. When a pool accident, elevator malfunction, or unsafe floor injures you, we hold the property accountable.",
  },
  {
    icon: "🚌",
    title: "Bus & Transit Accidents",
    slug: "bus-accident-lawyer",
    excerpt:
      "RTD bus and light rail crashes have unique legal complexities. Our team handles the insurance process and government immunity issues so you can focus on recovery.",
  },
  {
    icon: "💥",
    title: "Catastrophic Injuries",
    slug: "catastrophic-injury-lawyer",
    excerpt:
      "Traumatic brain injuries, spinal cord damage, and amputations require lifetime care. We fight for settlements that reflect your true long-term needs under Colorado law.",
  },
  {
    icon: "🧪",
    title: "Product Liability",
    slug: "product-liability-lawyer",
    excerpt:
      "Defective products cause serious harm. We sue manufacturers, distributors, and retailers who put dangerous goods into Colorado consumers' hands.",
  },
  {
    icon: "🔥",
    title: "Burn Injuries",
    slug: "burn-injury-lawyer",
    excerpt:
      "Severe burns require extensive and expensive treatment. Our attorneys pursue every dollar needed for surgeries, grafts, rehabilitation, and long-term care.",
  },
  {
    icon: "🧠",
    title: "Brain Injuries",
    slug: "brain-injury-lawyer",
    excerpt:
      "Traumatic brain injuries (TBIs) can reshape your entire life. We work with neurologists at UCHealth and life-care planners to maximize your compensation.",
  },
  {
    icon: "🦴",
    title: "Spinal Cord Injuries",
    slug: "spinal-cord-injury-lawyer",
    excerpt:
      "Paralysis and spinal damage claims require specialized legal strategies. We pursue multimillion-dollar recoveries for the most serious Colorado injuries.",
  },
  {
    icon: "🏡",
    title: "Premises Liability",
    slug: "premises-liability-lawyer",
    excerpt:
      "Negligent property owners — whether residential or commercial — are responsible for injuries under Colorado's premises liability statute. We build strong cases against them.",
  },
  {
    icon: "🌀",
    title: "Rideshare Accidents",
    slug: "rideshare-accident-lawyer",
    excerpt:
      "Uber and Lyft accidents in Denver involve complex insurance stacking issues. We know Colorado's TNC regulations and fight for full compensation on your behalf.",
  },
];

const neighborhoods = [
  {
    name: "Aurora",
    slug: "aurora",
    description:
      "Colorado's third-largest city — we represent Aurora residents injured in car crashes on I-225, slip and falls, and workplace accidents throughout Arapahoe, Adams, and Douglas counties.",
  },
  {
    name: "Lakewood",
    slug: "lakewood",
    description:
      "Jefferson County's largest city. We serve Lakewood residents injured on US-6, Wadsworth Blvd, and commercial corridors throughout West Denver.",
  },
  {
    name: "Arvada",
    slug: "arvada",
    description:
      "A fast-growing northwest Denver suburb — we handle car accidents, slip and falls, and personal injury cases for Arvada residents and visitors.",
  },
  {
    name: "Westminster",
    slug: "westminster",
    description:
      "Busy US-36 corridors and dense commercial development make Westminster a frequent site of car accidents and slip and fall injuries we handle for local residents.",
  },
  {
    name: "Thornton",
    slug: "thornton",
    description:
      "One of Colorado's fastest-growing cities — we represent Thornton residents injured in I-25 crashes, workplace accidents, and premises liability incidents.",
  },
  {
    name: "Centennial",
    slug: "centennial",
    description:
      "Arapahoe County's largest city — we handle injury cases for Centennial residents and visitors along Arapahoe Road, I-25, and the Tech Center corridor.",
  },
  {
    name: "Highlands Ranch",
    slug: "highlands-ranch",
    description:
      "Douglas County's premier planned community — we represent Highlands Ranch residents injured on C-470, Santa Fe Drive, and in local commercial areas.",
  },
  {
    name: "Englewood",
    slug: "englewood",
    description:
      "Immediately south of Denver along Broadway — we handle injury cases for Englewood residents and workers in the Swedish Medical Center and South Broadway corridors.",
  },
  {
    name: "Littleton",
    slug: "littleton",
    description:
      "Arapahoe County's historic county seat southwest of Denver — we serve Littleton residents injured in C-470 accidents, slip and falls, and more.",
  },
  {
    name: "Commerce City",
    slug: "commerce-city",
    description:
      "Heavy commercial truck traffic on I-76 and US-85 means frequent serious accidents — we represent Commerce City workers and residents throughout Adams County.",
  },
  {
    name: "Boulder",
    slug: "boulder",
    description:
      "Home to CU Boulder and significant cyclist activity — we handle personal injury cases for Boulder residents on US-36, Canyon Blvd, and throughout Boulder County.",
  },
  {
    name: "Broomfield",
    slug: "broomfield",
    description:
      "Colorado's newest county between Denver and Boulder on US-36 — we represent Broomfield residents injured in commuter corridors and commercial areas.",
  },
  {
    name: "Downtown Denver",
    slug: "downtown-denver",
    description:
      "The urban core of Colorado's capital city — pedestrian accidents, rideshare crashes, and slip and falls in downtown Denver's busy streets and venues.",
  },
  {
    name: "LoDo",
    slug: "lodo",
    description:
      "Denver's Lower Downtown historic entertainment district — we handle rideshare accidents, bar and restaurant injuries, and pedestrian cases near Coors Field and Union Station.",
  },
  {
    name: "Castle Rock",
    slug: "castle-rock",
    description:
      "Douglas County's growing county seat on I-25 — we serve Castle Rock residents injured in highway accidents, slip and falls, and construction incidents.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Call or Contact Us",
    body: "Reach our Denver team 24/7 by phone or our online form. We respond within 15 minutes — no waiting, no runaround.",
  },
  {
    number: "2",
    title: "Free Case Review",
    body: "A senior attorney personally reviews your Colorado case at no charge. We explain your rights under Colorado law, your options, and what your case may be worth.",
  },
  {
    number: "3",
    title: "We Fight For You",
    body: "We handle everything — investigation, medical record collection, insurance negotiations with Colorado insurers, and litigation if necessary. You heal; we fight.",
  },
  {
    number: "4",
    title: "You Win",
    body: "We don't get paid unless you do. When we secure your settlement or verdict under Colorado law, our fee comes from the recovery — never out of your pocket.",
  },
];

const homepageFAQs = [
  {
    question: "How much does it cost to hire a Denver personal injury lawyer?",
    answer:
      "Nothing upfront. Denver Injury Law Group works on a contingency fee basis, which means you pay zero attorney fees unless we win your case. Our fee is a percentage of the recovery, so if we don't win, you owe nothing. There's never a cost to get a free consultation.",
  },
  {
    question: "How long do I have to file a personal injury lawsuit in Colorado?",
    answer:
      "In Colorado, the statute of limitations for most personal injury claims is two years from the date of the injury under CRS 13-80-102. However, claims against government entities (City of Denver, RTD, CDOT) have different and shorter deadlines under the Colorado Governmental Immunity Act — sometimes as little as 182 days. Contact us immediately to protect your rights.",
  },
  {
    question: "What is my Denver personal injury case worth?",
    answer:
      "Every case is unique. Compensation depends on factors including medical bills (past and future), lost wages, loss of earning capacity, pain and suffering, and property damage. Colorado caps non-economic damages in most cases under CRS 13-21-102.5, but economic damages are not capped. Our attorneys evaluate every element of your damages to pursue maximum compensation.",
  },
  {
    question: "Do I need a lawyer if the insurance company already offered me a settlement?",
    answer:
      "Yes — and urgently so. Initial insurance offers are almost always lowball numbers designed to close your claim before you understand its full value. Our Denver attorneys frequently recover two to ten times what the insurance company first offered. Let us review any offer before you accept.",
  },
  {
    question: "What should I do immediately after an accident in Denver?",
    answer:
      "Call 911 and get a Denver Police Department report. Seek medical attention at Denver Health or UCHealth even if you feel fine — some injuries don't appear immediately. Document the scene with photos if you can. Get witness information. Do not give a recorded statement to the other party's insurance company. Then call us at (303) 555-0174 for a free consultation.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        config={siteConfig}
        headline="Denver's Most Aggressive Injury Lawyers"
        subheadline="Injured in Denver or Metro Colorado? Our attorneys have recovered millions for car accident victims, slip and fall survivors, and seriously injured clients. Free consultation — no fee unless we win."
      />

      {/* Trust Bar */}
      <TrustBar />

      {/* Practice Areas Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              What We Handle
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Denver Personal Injury Practice Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From winter slip-and-falls to catastrophic I-70 highway crashes, our attorneys
              handle the full spectrum of serious injury cases throughout Metro Denver and Colorado.
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
          headline="Hurt in Denver? Don't Wait — Call Now."
          body="Every day you delay costs you evidence and leverage. Our Denver attorneys are available 24/7 and will respond within 15 minutes."
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
              Serving Every Corner of Metro Denver
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We represent injury victims in Denver, Aurora, Lakewood, Arvada, Westminster,
              Thornton, and every community throughout Metro Denver and along the Front Range.
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
              Denver's Most Aggressive Injury Law Firm
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              When you're up against billion-dollar insurance companies and Colorado's complex
              injury laws, you need a team that matches their aggression. That's us.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                title: "$50M+ Recovered",
                body: "Our attorneys have secured over $50 million in settlements and verdicts for Metro Denver and Colorado injury victims.",
              },
              {
                icon: "⚡",
                title: "24/7 Availability",
                body: "Accidents don't happen on a schedule. Our Denver team is available around the clock — call us anytime, day or night.",
              },
              {
                icon: "🤝",
                title: "No Fee Unless We Win",
                body: "You pay nothing upfront. Our contingency fee means we only get paid when you get paid. Zero financial risk to you.",
              },
              {
                icon: "📋",
                title: "We Handle Everything",
                body: "From gathering Denver Police reports and medical records to fighting Colorado insurance companies — we manage every detail of your case.",
              },
              {
                icon: "⚖️",
                title: "Trial-Ready Attorneys",
                body: "Colorado insurance companies know we go to trial in Denver District Court. That reputation forces them to offer fair settlements — or face us in court.",
              },
              {
                icon: "🌟",
                title: "4.9★ Client Reviews",
                body: "143 five-star reviews from real Denver and Metro Colorado clients. Our results speak for themselves.",
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
          headline="Free Consultation — Speak to a Denver Attorney Today"
          body="No obligation, no pressure. Just straightforward legal advice from an experienced Denver personal injury attorney."
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
              Denver Injury Law — Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Get clear answers to the questions Colorado injury victims ask us most often.
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
            Don't Face Colorado Insurance Companies Alone
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Every year, Denver accident victims leave millions on the table by accepting
            first offers. Let our attorneys fight for every dollar you deserve under Colorado law.
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
              Call (303) 555-0174
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
