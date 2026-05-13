import type { Metadata } from "next";
import { Breadcrumbs, PracticeAreaCard, CTABox } from "@injury/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Practice Areas – Las Vegas Personal Injury Lawyer",
  description:
    "Las Vegas Injury Law Group handles all types of personal injury cases in Southern Nevada. Car accidents, truck crashes, slip and falls, medical malpractice, wrongful death, and more.",
  alternates: {
    canonical: "https://lasvegasnevadainjurylawyer.com/practice-areas",
  },
  openGraph: {
    title: "Practice Areas – Las Vegas Injury Law Group",
    description:
      "Our Las Vegas personal injury attorneys handle car accidents, truck crashes, slip and falls, medical malpractice, wrongful death, workers' comp, and more.",
    url: "https://lasvegasnevadainjurylawyer.com/practice-areas",
  },
};

const practiceAreas = [
  {
    icon: "🚗",
    title: "Car Accidents",
    slug: "car-accident-lawyer",
    excerpt:
      "Rear-ends, T-bones, head-on collisions — we fight insurance adjusters so you receive full compensation for medical bills, lost wages, and pain and suffering.",
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
      "We know the bias motorcyclists face and how to overcome it to secure fair compensation.",
  },
  {
    icon: "🚶",
    title: "Pedestrian Accidents",
    slug: "pedestrian-accident-lawyer",
    excerpt:
      "We pursue maximum compensation for pedestrians struck by vehicles throughout Southern Nevada.",
  },
  {
    icon: "🚲",
    title: "Bicycle Accidents",
    slug: "bicycle-accident-lawyer",
    excerpt:
      "We hold negligent drivers accountable and recover damages for injured cyclists.",
  },
  {
    icon: "🏗️",
    title: "Construction Accidents",
    slug: "construction-accident-lawyer",
    excerpt:
      "Falls, equipment failures, and scaffolding collapses — we navigate OSHA violations and third-party liability.",
  },
  {
    icon: "🏢",
    title: "Slip & Fall",
    slug: "slip-and-fall-lawyer",
    excerpt:
      "Property owners have a duty to keep premises safe. When they fail, we hold them liable.",
  },
  {
    icon: "💊",
    title: "Medical Malpractice",
    slug: "medical-malpractice-lawyer",
    excerpt:
      "Surgical errors, misdiagnoses, and medication mistakes — we work with top medical experts to build your case.",
  },
  {
    icon: "⚖️",
    title: "Wrongful Death",
    slug: "wrongful-death-lawyer",
    excerpt:
      "We pursue justice and financial accountability for families who have lost a loved one due to negligence.",
  },
  {
    icon: "👷",
    title: "Workers' Compensation",
    slug: "workers-compensation-lawyer",
    excerpt:
      "We fight for injured workers whose claims are being denied or undervalued by their employer's insurer.",
  },
  {
    icon: "🐕",
    title: "Dog Bites",
    slug: "dog-bite-lawyer",
    excerpt:
      "Nevada holds dog owners strictly liable for bites. We recover damages for physical injuries and trauma.",
  },
  {
    icon: "🏨",
    title: "Hotel & Casino Accidents",
    slug: "hotel-casino-accident-lawyer",
    excerpt:
      "Strip resorts must maintain safe premises. We hold Las Vegas properties accountable for guest injuries.",
  },
  {
    icon: "🚌",
    title: "Bus & Transit Accidents",
    slug: "bus-accident-lawyer",
    excerpt:
      "RTC bus crashes and rideshare accidents have unique legal complexities our team handles with expertise.",
  },
  {
    icon: "💥",
    title: "Catastrophic Injuries",
    slug: "catastrophic-injury-lawyer",
    excerpt:
      "Traumatic brain injuries, spinal cord damage, and amputations require lifetime care — and maximum compensation.",
  },
  {
    icon: "🧪",
    title: "Product Liability",
    slug: "product-liability-lawyer",
    excerpt:
      "We sue manufacturers, distributors, and retailers who put dangerous products into consumers' hands.",
  },
  {
    icon: "🔥",
    title: "Burn Injuries",
    slug: "burn-injury-lawyer",
    excerpt:
      "We pursue every dollar needed for surgeries, skin grafts, rehabilitation, and long-term care.",
  },
  {
    icon: "🧠",
    title: "Brain Injuries",
    slug: "brain-injury-lawyer",
    excerpt:
      "We work with neurologists and life-care planners to maximize compensation for TBI victims.",
  },
  {
    icon: "🦴",
    title: "Spinal Cord Injuries",
    slug: "spinal-cord-injury-lawyer",
    excerpt:
      "We pursue multimillion-dollar recoveries for paralysis and serious spinal injuries.",
  },
  {
    icon: "🏡",
    title: "Premises Liability",
    slug: "premises-liability-lawyer",
    excerpt:
      "We build strong liability cases against negligent residential and commercial property owners.",
  },
  {
    icon: "🌀",
    title: "Rideshare Accidents",
    slug: "rideshare-accident-lawyer",
    excerpt:
      "Uber and Lyft accidents involve complex insurance stacking issues we know how to navigate.",
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
            Las Vegas Personal Injury Practice Areas
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Las Vegas Injury Law Group handles every type of serious personal injury case
            in Southern Nevada. Browse our practice areas below to learn more about your
            legal rights.
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
          headline="Not Sure Which Practice Area Applies to Your Case?"
          body="Call us for a free consultation and our attorneys will explain which legal theories apply to your specific situation and how we can help."
        />
      </section>

      {/* Coverage note */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            Serving All of Southern Nevada
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We represent clients throughout Las Vegas, Henderson, North Las Vegas, Summerlin,
            Spring Valley, Enterprise, Boulder City, and every corner of Clark County and
            Southern Nevada.
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
