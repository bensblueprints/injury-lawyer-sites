import type { Metadata } from "next";
import { HeroSection, PracticeAreaCard, CTABox } from "@injury/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dallas Personal Injury Practice Areas | Dallas Injury Law Group",
  description:
    "Dallas Injury Law Group handles all types of personal injury cases throughout the DFW Metroplex. Car accidents, truck accidents, slip and fall, wrongful death, and more. Call (214) 555-0183.",
  alternates: {
    canonical: "https://dallastexasinjurylawyer.com/practice-areas",
  },
};

const PRACTICE_AREAS = [
  { icon: "🚗", title: "Car Accidents", slug: "car-accident-lawyer", excerpt: "Rear-ends, T-bones, DUI crashes, and highway pile-ups on I-35, I-20, and Dallas-area roads." },
  { icon: "🚚", title: "Truck Accidents", slug: "truck-accident-lawyer", excerpt: "Semi-truck and 18-wheeler crashes causing catastrophic injuries throughout the DFW Metroplex." },
  { icon: "🏍️", title: "Motorcycle Accidents", slug: "motorcycle-accident-lawyer", excerpt: "Fighting biker bias and recovering maximum compensation for injured motorcyclists in Texas." },
  { icon: "🚶", title: "Pedestrian Accidents", slug: "pedestrian-accident-lawyer", excerpt: "Representing pedestrians struck by vehicles in crosswalks and throughout the DFW area." },
  { icon: "🚲", title: "Bicycle Accidents", slug: "bicycle-accident-lawyer", excerpt: "Helping injured cyclists recover compensation for medical bills, bike damage, and lost income." },
  { icon: "🏗️", title: "Construction Accidents", slug: "construction-accident-lawyer", excerpt: "Falls, equipment failures, and OSHA violations at Dallas construction and work sites." },
  { icon: "🏢", title: "Slip & Fall", slug: "slip-and-fall-lawyer", excerpt: "Holding negligent property owners accountable for dangerous conditions throughout North Texas." },
  { icon: "💊", title: "Medical Malpractice", slug: "medical-malpractice-lawyer", excerpt: "Surgical errors, misdiagnoses, and medication mistakes at Dallas-area healthcare facilities." },
  { icon: "⚖️", title: "Wrongful Death", slug: "wrongful-death-lawyer", excerpt: "Fighting for families who lost a loved one due to negligence or recklessness in Texas." },
  { icon: "👷", title: "Workers' Compensation", slug: "workers-compensation-lawyer", excerpt: "Protecting injured Texas workers against denied and lowballed workers' comp claims." },
  { icon: "🐕", title: "Dog Bites", slug: "dog-bite-lawyer", excerpt: "Holding dog owners liable under Texas law for bites and attacks throughout DFW." },
  { icon: "🏨", title: "Premises Liability", slug: "premises-liability-lawyer", excerpt: "Negligent property owners throughout North Texas held responsible for injuries on their land." },
  { icon: "🚌", title: "Bus & Transit Accidents", slug: "bus-accident-lawyer", excerpt: "DART bus crashes, charter coach accidents, and rideshare injuries throughout the DFW area." },
  { icon: "💥", title: "Catastrophic Injuries", slug: "catastrophic-injury-lawyer", excerpt: "Maximum lifetime compensation for TBIs, spinal cord injuries, amputations, and severe burns." },
  { icon: "🧪", title: "Product Liability", slug: "product-liability-lawyer", excerpt: "Suing manufacturers, distributors, and retailers for defective products that injure consumers." },
  { icon: "🔥", title: "Burn Injuries", slug: "burn-injury-lawyer", excerpt: "Full compensation for surgeries, grafts, rehabilitation, and long-term care after severe burns." },
  { icon: "🧠", title: "Brain Injuries", slug: "brain-injury-lawyer", excerpt: "Working with neurologists to maximize compensation for traumatic brain injury victims in Texas." },
  { icon: "🦴", title: "Spinal Cord Injuries", slug: "spinal-cord-injury-lawyer", excerpt: "Multimillion-dollar recoveries for paralysis and serious vertebral injuries in the DFW area." },
  { icon: "🌀", title: "Rideshare Accidents", slug: "rideshare-accident-lawyer", excerpt: "Navigating complex Uber and Lyft insurance stacking issues for Dallas rideshare crash victims." },
  { icon: "🏥", title: "Nursing Home Abuse", slug: "nursing-home-abuse-lawyer", excerpt: "Holding Dallas-area care facilities accountable for neglect and abuse of elderly residents." },
];

export default function PracticeAreasPage() {
  return (
    <>
      <HeroSection
        config={siteConfig}
        headline="Dallas Personal Injury Practice Areas"
        subheadline="From I-35 highway crashes to workplace injuries — Dallas Injury Law Group handles the full spectrum of serious personal injury cases throughout the DFW Metroplex."
        compact
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              All Dallas Injury Practice Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our attorneys have experience in all types of personal injury cases throughout
              Dallas, Plano, Irving, Arlington, and the entire DFW Metroplex.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRACTICE_AREAS.map((area, i) => (
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

          <div className="mt-12">
            <CTABox
              config={siteConfig}
              headline="Don't See Your Case Type? Call Us."
              body="We handle many types of personal injury cases not listed here. Call (214) 555-0183 for a free consultation."
              variant="red"
            />
          </div>
        </div>
      </section>
    </>
  );
}
