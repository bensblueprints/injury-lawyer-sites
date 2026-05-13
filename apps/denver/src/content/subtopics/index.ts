import type { SubtopicContent } from "../types";

export interface SubtopicEntry {
  parentSlug: string;
  slug: string;
  label: string;
}

export const SUBTOPIC_ENTRIES: SubtopicEntry[] = [
  // Car Accident subtopics
  { parentSlug: "car-accident-lawyer", slug: "rear-end-accident", label: "Rear-End Accidents" },
  { parentSlug: "car-accident-lawyer", slug: "hit-and-run-accident", label: "Hit & Run Accidents" },
  { parentSlug: "car-accident-lawyer", slug: "drunk-driving-accident", label: "Drunk Driving Accidents" },
  // Truck Accident subtopics
  { parentSlug: "truck-accident-lawyer", slug: "semi-truck-accident", label: "Semi-Truck Accidents" },
  { parentSlug: "truck-accident-lawyer", slug: "delivery-truck-accident", label: "Delivery Truck Accidents" },
  { parentSlug: "truck-accident-lawyer", slug: "underride-accident", label: "Underride Accidents" },
  // Slip & Fall subtopics
  { parentSlug: "slip-and-fall-lawyer", slug: "snow-ice-slip-fall", label: "Snow & Ice Slip & Fall" },
  { parentSlug: "slip-and-fall-lawyer", slug: "parking-lot-slip-fall", label: "Parking Lot Slip & Fall" },
  { parentSlug: "slip-and-fall-lawyer", slug: "staircase-fall-accident", label: "Staircase Fall Accidents" },
  // Medical Malpractice subtopics
  { parentSlug: "medical-malpractice-lawyer", slug: "surgical-error", label: "Surgical Errors" },
  { parentSlug: "medical-malpractice-lawyer", slug: "misdiagnosis-lawyer", label: "Misdiagnosis" },
  { parentSlug: "medical-malpractice-lawyer", slug: "birth-injury-lawyer", label: "Birth Injuries" },
  // Wrongful Death subtopics
  { parentSlug: "wrongful-death-lawyer", slug: "wrongful-death-car-accident", label: "Wrongful Death – Car Accident" },
  { parentSlug: "wrongful-death-lawyer", slug: "wrongful-death-medical", label: "Wrongful Death – Medical" },
  { parentSlug: "wrongful-death-lawyer", slug: "wrongful-death-workplace", label: "Wrongful Death – Workplace" },
  // Workers Comp subtopics
  { parentSlug: "workers-compensation-lawyer", slug: "denied-workers-comp-claim", label: "Denied Workers Comp Claims" },
  { parentSlug: "workers-compensation-lawyer", slug: "workplace-fall-injury", label: "Workplace Fall Injuries" },
  { parentSlug: "workers-compensation-lawyer", slug: "repetitive-stress-injury", label: "Repetitive Stress Injuries" },
  // Catastrophic subtopics
  { parentSlug: "catastrophic-injury-lawyer", slug: "traumatic-brain-injury-tbi", label: "Traumatic Brain Injury (TBI)" },
  { parentSlug: "catastrophic-injury-lawyer", slug: "spinal-cord-paralysis", label: "Spinal Cord Paralysis" },
  // Premises subtopics
  { parentSlug: "premises-liability-lawyer", slug: "negligent-security-injury", label: "Negligent Security" },
  { parentSlug: "premises-liability-lawyer", slug: "swimming-pool-accident", label: "Swimming Pool Accidents" },
  { parentSlug: "premises-liability-lawyer", slug: "elevator-escalator-accident", label: "Elevator & Escalator Accidents" },
  // Product Liability subtopics
  { parentSlug: "product-liability-lawyer", slug: "defective-auto-parts", label: "Defective Auto Parts" },
  { parentSlug: "product-liability-lawyer", slug: "dangerous-drugs-lawyer", label: "Dangerous Drugs" },
  { parentSlug: "product-liability-lawyer", slug: "defective-medical-devices", label: "Defective Medical Devices" },
  // Motorcycle subtopics
  { parentSlug: "motorcycle-accident-lawyer", slug: "lane-splitting-accident", label: "Lane Splitting Accidents" },
  { parentSlug: "motorcycle-accident-lawyer", slug: "motorcycle-road-hazard", label: "Motorcycle Road Hazards" },
  { parentSlug: "motorcycle-accident-lawyer", slug: "uninsured-motorist-motorcycle", label: "Uninsured Motorist Motorcycle" },
  // Rideshare subtopics
  { parentSlug: "rideshare-accident-lawyer", slug: "uber-accident-lawyer", label: "Uber Accident" },
  { parentSlug: "rideshare-accident-lawyer", slug: "lyft-accident-lawyer", label: "Lyft Accident" },
  { parentSlug: "rideshare-accident-lawyer", slug: "rideshare-passenger-injury", label: "Rideshare Passenger Injury" },
  // Hotel subtopics
  { parentSlug: "hotel-casino-accident-lawyer", slug: "casino-negligent-security", label: "Casino Negligent Security" },
  { parentSlug: "hotel-casino-accident-lawyer", slug: "hotel-pool-accident", label: "Hotel Pool Accidents" },
  { parentSlug: "hotel-casino-accident-lawyer", slug: "hotel-bed-bug-injury", label: "Hotel Bed Bug Injuries" },
  // Dog Bite subtopics
  { parentSlug: "dog-bite-lawyer", slug: "dog-attack-scarring", label: "Dog Attack Scarring" },
  { parentSlug: "dog-bite-lawyer", slug: "dog-bite-child-injury", label: "Dog Bite Child Injuries" },
  { parentSlug: "dog-bite-lawyer", slug: "landlord-dog-bite-liability", label: "Landlord Dog Bite Liability" },
  // Burn subtopics
  { parentSlug: "burn-injury-lawyer", slug: "chemical-burn-injury", label: "Chemical Burn Injuries" },
  { parentSlug: "burn-injury-lawyer", slug: "electrical-burn-injury", label: "Electrical Burn Injuries" },
  { parentSlug: "burn-injury-lawyer", slug: "house-fire-injury-lawyer", label: "House Fire Injuries" },
  // Brain Injury subtopics
  { parentSlug: "brain-injury-lawyer", slug: "concussion-injury-claim", label: "Concussion Injury Claims" },
  { parentSlug: "brain-injury-lawyer", slug: "coma-injury-lawyer", label: "Coma Injury Claims" },
  { parentSlug: "brain-injury-lawyer", slug: "cognitive-impairment-claim", label: "Cognitive Impairment Claims" },
  // Spinal subtopics
  { parentSlug: "spinal-cord-injury-lawyer", slug: "herniated-disc-injury", label: "Herniated Disc Injuries" },
  { parentSlug: "spinal-cord-injury-lawyer", slug: "lumbar-spine-injury", label: "Lumbar Spine Injuries" },
  { parentSlug: "spinal-cord-injury-lawyer", slug: "cervical-spine-injury", label: "Cervical Spine Injuries" },
  // Pedestrian subtopics
  { parentSlug: "pedestrian-accident-lawyer", slug: "crosswalk-accident-lawyer", label: "Crosswalk Accidents" },
  { parentSlug: "pedestrian-accident-lawyer", slug: "school-zone-pedestrian-accident", label: "School Zone Pedestrian Accidents" },
  { parentSlug: "pedestrian-accident-lawyer", slug: "downtown-pedestrian-accident", label: "Downtown Denver Pedestrian Accidents" },
  // Bicycle subtopics
  { parentSlug: "bicycle-accident-lawyer", slug: "bike-lane-accident", label: "Bike Lane Accidents" },
  { parentSlug: "bicycle-accident-lawyer", slug: "dooring-accident-lawyer", label: "Dooring Accidents" },
  { parentSlug: "bicycle-accident-lawyer", slug: "electric-bike-accident", label: "E-Bike Accidents" },
  // Construction subtopics
  { parentSlug: "construction-accident-lawyer", slug: "scaffold-fall-injury", label: "Scaffold Fall Injuries" },
  { parentSlug: "construction-accident-lawyer", slug: "crane-accident-lawyer", label: "Crane Accidents" },
  { parentSlug: "construction-accident-lawyer", slug: "trench-collapse-injury", label: "Trench Collapse Injuries" },
  // Bus subtopics
  { parentSlug: "bus-accident-lawyer", slug: "rtd-bus-accident", label: "RTD Bus Accidents" },
  { parentSlug: "bus-accident-lawyer", slug: "charter-bus-accident", label: "Charter Bus Accidents" },
  { parentSlug: "bus-accident-lawyer", slug: "school-bus-accident", label: "School Bus Accidents" },
];

const stub = (entry: SubtopicEntry): SubtopicContent => ({
  slug: entry.slug,
  parentSlug: entry.parentSlug,
  title: entry.label,
  metaTitle: `${entry.label} in Denver, CO | Denver Injury Law Group`,
  metaDescription: `Injured in a ${entry.label.toLowerCase()} incident in Denver? Our Colorado attorneys fight for maximum compensation. Free consultation. No fee unless we win. Call (303) 555-0174.`,
  intro: `Denver Injury Law Group represents victims of ${entry.label.toLowerCase()} throughout Metro Denver and Colorado. If you or a loved one has been injured, our experienced attorneys are ready to evaluate your case and fight for every dollar you deserve under Colorado law.`,
  sections: [
    {
      heading: `Understanding ${entry.label} Claims in Colorado`,
      body: `${entry.label} cases in Colorado require a thorough understanding of state personal injury law, evidence preservation, and insurance company tactics. Under CRS 13-80-102, injured victims generally have two years from the date of injury to file a lawsuit. Our attorneys have handled hundreds of cases similar to yours and know exactly how to build a compelling claim in Denver District Court and Colorado's other district courts.`,
    },
    {
      heading: "Compensation Available",
      body: `Victims of ${entry.label.toLowerCase()} incidents in Colorado may be entitled to compensation for medical expenses at facilities like Denver Health Medical Center and UCHealth University of Colorado Hospital, lost income, pain and suffering, emotional distress, and more. Our attorneys evaluate every element of your damages under Colorado law to pursue the maximum recovery.`,
    },
    {
      heading: "Why Act Quickly",
      body: `Evidence disappears. Witnesses' memories fade. Insurance companies begin building their defense immediately after an accident in Colorado. Under CRS 10-3-1115, insurers must act in good faith — but they routinely use delay tactics to reduce claims. The sooner you contact us, the stronger your case will be. Call Denver Injury Law Group at (303) 555-0174 today for a free consultation.`,
    },
  ],
  faqs: [
    {
      question: `What should I do after a ${entry.label.toLowerCase()} incident in Denver?`,
      answer: `Seek immediate medical attention, document the scene, gather witness information, and call Denver Injury Law Group at (303) 555-0174 before speaking with any insurance company. Colorado's modified comparative negligence rule (CRS 13-21-111) means even partial fault can affect your recovery.`,
    },
    {
      question: "How much is my case worth?",
      answer:
        "Case value depends on the severity of your injuries, medical costs, lost wages, and the impact on your quality of life. Colorado law caps non-economic damages in most cases under CRS 13-21-102.5 but allows full recovery of economic damages. Our attorneys provide a detailed, honest assessment during your free consultation.",
    },
  ],
});

export const subtopicContentMap: Record<string, SubtopicContent> = Object.fromEntries(
  SUBTOPIC_ENTRIES.map((entry) => [`${entry.parentSlug}/${entry.slug}`, stub(entry)])
);

export function getSubtopicContent(
  parentSlug: string,
  slug: string
): SubtopicContent | null {
  return subtopicContentMap[`${parentSlug}/${slug}`] ?? null;
}

export function getSubtopicsForParent(parentSlug: string): SubtopicEntry[] {
  return SUBTOPIC_ENTRIES.filter((e) => e.parentSlug === parentSlug);
}
