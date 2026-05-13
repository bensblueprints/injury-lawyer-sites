import type { Metadata } from "next";
import { Breadcrumbs, PracticeAreaCard, CTABox } from "@injury/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Practice Areas – Denver Personal Injury Lawyer",
  description:
    "Denver Injury Law Group handles all types of personal injury cases in Colorado. Car accidents, truck crashes, slip and falls, medical malpractice, wrongful death, and more.",
  alternates: {
    canonical: "https://devnercoloradoinjurylawyer.com/practice-areas",
  },
  openGraph: {
    title: "Practice Areas – Denver Injury Law Group",
    description:
      "Our Denver personal injury attorneys handle car accidents, truck crashes, slip and falls, medical malpractice, wrongful death, workers' comp, and more under Colorado law.",
    url: "https://devnercoloradoinjurylawyer.com/practice-areas",
  },
};

const practiceAreas = [
  {
    icon: "🚗",
    title: "Car Accidents",
    slug: "car-accident-lawyer",
    excerpt:
      "Rear-ends, T-bones, head-on collisions on I-25 and I-70 — we fight insurance adjusters so you receive full compensation for medical bills, lost wages, and pain and suffering.",
  },
  {
    icon: "🚚",
    title: "Truck Accidents",
    slug: "truck-accident-lawyer",
    excerpt:
      "Semi-truck and big-rig crashes cause catastrophic injuries. Our attorneys have the resources to take on large carriers and their insurance teams.",
  },
  {
    icon: "🏍️",
    title: "Motorcycle Accidents",
    slug: "motorcycle-accident-lawyer",
    excerpt:
      "We know the bias motorcyclists face in Colorado and how to overcome it to secure fair compensation.",
  },
  {
    icon: "🚶",
    title: "Pedestrian Accidents",
    slug: "pedestrian-accident-lawyer",
    excerpt:
      "We pursue maximum compensation for pedestrians struck by vehicles on Denver's streets and throughout Colorado.",
  },
  {
    icon: "🚲",
    title: "Bicycle Accidents",
    slug: "bicycle-accident-lawyer",
    excerpt:
      "We hold negligent drivers accountable and recover damages for injured cyclists on Denver's bike lanes and trails.",
  },
  {
    icon: "🏗️",
    title: "Construction Accidents",
    slug: "construction-accident-lawyer",
    excerpt:
      "Falls, equipment failures, and scaffolding collapses — we navigate OSHA violations and Colorado third-party liability.",
  },
  {
    icon: "🏢",
    title: "Slip & Fall",
    slug: "slip-and-fall-lawyer",
    excerpt:
      "Colorado property owners must keep premises safe under CRS 13-21-115. When they fail — including snow and ice — we hold them liable.",
  },
  {
    icon: "💊",
    title: "Medical Malpractice",
    slug: "medical-malpractice-lawyer",
    excerpt:
      "Surgical errors, misdiagnoses, and medication mistakes at Colorado hospitals — we work with top medical experts to build your case.",
  },
  {
    icon: "⚖️",
    title: "Wrongful Death",
    slug: "wrongful-death-lawyer",
    excerpt:
      "We pursue justice under Colorado's wrongful death statute (CRS 13-21-202) for families who lost a loved one due to negligence.",
  },
  {
    icon: "👷",
    title: "Workers' Compensation",
    slug: "workers-compensation-lawyer",
    excerpt:
      "We fight for injured Colorado workers whose claims are being denied or undervalued by their employer's insurer.",
  },
  {
    icon: "🐕",
    title: "Dog Bites",
    slug: "dog-bite-lawyer",
    excerpt:
      "Colorado holds dog owners strictly liable for bites under CRS 13-21-124. We recover damages for physical injuries and trauma.",
  },
  {
    icon: "🏨",
    title: "Hotel & Resort Accidents",
    slug: "hotel-casino-accident-lawyer",
    excerpt:
      "Denver hotels and Black Hawk casino resorts must maintain safe premises. We hold Colorado properties accountable for guest injuries.",
  },
  {
    icon: "🚌",
    title: "Bus & Transit Accidents",
    slug: "bus-accident-lawyer",
    excerpt:
      "RTD bus and light rail crashes have unique legal complexities involving government immunity that our team handles with expertise.",
  },
  {
    icon: "💥",
    title: "Catastrophic Injuries",
    slug: "catastrophic-injury-lawyer",
    excerpt:
      "Traumatic brain injuries, spinal cord damage, and amputations require lifetime care — and maximum compensation under Colorado law.",
  },
  {
    icon: "🧪",
    title: "Product Liability",
    slug: "product-liability-lawyer",
    excerpt:
      "We sue manufacturers, distributors, and retailers who put dangerous products into Colorado consumers' hands.",
  },
  {
    icon: "🔥",
    title: "Burn Injuries",
    slug: "burn-injury-lawyer",
    excerpt:
      "We pursue every dollar needed for surgeries, skin grafts, rehabilitation, and long-term care after serious Colorado burn injuries.",
  },
  {
    icon: "🧠",
    title: "Brain Injuries",
    slug: "brain-injury-lawyer",
    excerpt:
      "We work with neurologists at UCHealth and Denver Health and life-care planners to maximize compensation for TBI victims.",
  },
  {
    icon: "🦴",
    title: "Spinal Cord Injuries",
    slug: "spinal-cord-injury-lawyer",
    excerpt:
      "We pursue multimillion-dollar recoveries for paralysis and serious spinal injuries sustained in Colorado accidents.",
  },
  {
    icon: "🏡",
    title: "Premises Liability",
    slug: "premises-liability-lawyer",
    excerpt:
      "We build strong liability cases against negligent residential and commercial property owners under Colorado's premises liability statute.",
  },
  {
    icon: "🌀",
    title: "Rideshare Accidents",
    slug: "rideshare-accident-lawyer",
    excerpt:
      "Uber and Lyft accidents in Denver involve complex insurance stacking issues under Colorado's TNC regulations we know how to navigate.",
  },
];

export default function PracticeAreasPage() {
  const breadcrumbs = [{ label: "Practice Areas" }];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={breadcrumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            Denver Personal Injury Practice Areas
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Denver Injury Law Group handles every type of serious personal injury case
            in Colorado under state and federal law. Browse our practice areas below to
            learn more about your legal rights.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CTABox
          config={siteConfig}
          headline="Not Sure Which Practice Area Applies to Your Colorado Case?"
          body="Call us for a free consultation and our Denver attorneys will explain which legal theories apply to your specific situation under Colorado law."
        />
      </section>

      {/* Coverage note */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            Serving All of Metro Denver and Colorado
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We represent clients throughout Denver, Aurora, Lakewood, Arvada, Westminster,
            Thornton, Centennial, Highlands Ranch, Englewood, Littleton, Boulder, Broomfield,
            and every corner of Metro Denver and the Colorado Front Range.
          </p>
          <a
            href="/areas"
            className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-red-900/20"
          >
            View All Service Areas →
          </a>
        </div>
      </section>
    </>
  );
}
