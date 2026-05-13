import type { PracticeAreaContent } from "../types";

export const PRACTICE_AREA_SLUGS = [
  "car-accident-lawyer",
  "truck-accident-lawyer",
  "motorcycle-accident-lawyer",
  "pedestrian-accident-lawyer",
  "bicycle-accident-lawyer",
  "construction-accident-lawyer",
  "slip-and-fall-lawyer",
  "medical-malpractice-lawyer",
  "wrongful-death-lawyer",
  "workers-compensation-lawyer",
  "dog-bite-lawyer",
  "hotel-casino-accident-lawyer",
  "bus-accident-lawyer",
  "catastrophic-injury-lawyer",
  "product-liability-lawyer",
  "burn-injury-lawyer",
  "brain-injury-lawyer",
  "spinal-cord-injury-lawyer",
  "premises-liability-lawyer",
  "rideshare-accident-lawyer",
] as const;

export type PracticeAreaSlug = (typeof PRACTICE_AREA_SLUGS)[number];

const stub = (
  slug: string,
  title: string,
  description: string
): PracticeAreaContent => ({
  slug,
  title,
  metaTitle: `${title} in Denver, CO | Denver Injury Law Group`,
  metaDescription: `${description} Free consultation. No fee unless we win. Call (303) 555-0174.`,
  heroHeadline: `Denver ${title}`,
  heroSubheadline: description,
  intro: `If you or a loved one has been injured and needs a ${title.toLowerCase()} in Denver, Colorado, the Denver Injury Law Group is ready to fight for you. ${description}`,
  sections: [
    {
      heading: `What to Do After Your ${title.replace(" Lawyer", "")} Accident`,
      body: `The steps you take immediately following your injury can significantly affect your ability to recover compensation under Colorado law. First, seek medical attention at Denver Health Medical Center or UCHealth University of Colorado Hospital — even if you believe your injuries are minor, as many symptoms appear days later. Second, document everything: photograph the scene, collect witness contact information, and preserve any physical evidence. Third, report the incident to the appropriate authority (Denver Police Department, Colorado State Patrol, property owner, or employer) and obtain a written report. Finally, do not give recorded statements to any insurance company before speaking with an attorney. Call Denver Injury Law Group at (303) 555-0174 before talking to anyone else.`,
    },
    {
      heading: "How Colorado Injury Law Works",
      body: `Colorado is a modified comparative negligence state under CRS 13-21-111. You can recover compensation even if you were partially at fault for your injury — as long as your share of fault does not reach or exceed 50%. If you are 50% or more at fault, you are completely barred from recovery. If you are less than 50% at fault, your recovery is reduced proportionally by your percentage of fault. Insurance companies routinely try to exaggerate your percentage of fault to reduce or eliminate their liability. Under CRS 10-3-1115 and CRS 10-3-1116, Colorado also has strong bad faith insurance laws that penalize insurers who delay or deny valid claims without a reasonable basis.`,
    },
    {
      heading: "What Compensation Can You Recover?",
      body: `Colorado injury victims are entitled to both economic and non-economic damages. Economic damages include: past and future medical bills, lost wages, loss of future earning capacity, property damage, and out-of-pocket expenses. Non-economic damages include: pain and suffering, emotional distress, loss of enjoyment of life, and loss of consortium. Colorado does cap non-economic damages in most cases at $250,000 (adjusted for inflation under CRS 13-21-102.5), though this cap can be raised to $500,000 in exceptional circumstances. In cases involving particularly egregious conduct, Colorado courts may also award punitive (exemplary) damages under CRS 13-21-102.`,
    },
    {
      heading: "Why Choose Denver Injury Law Group",
      body: `Denver Injury Law Group is one of Metro Denver's most trusted personal injury firms. Our attorneys have recovered millions of dollars for Denver and Colorado injury victims. We work on a contingency fee basis — meaning you pay nothing unless we win. Our team handles all communication with insurance companies, manages your medical records and bills, and prepares every case as if it will go to trial in Denver District Court (1437 Bannock St). That trial-ready approach forces insurance companies to make fair settlement offers. If they don't, we take them to court.`,
    },
    {
      heading: "Colorado Statute of Limitations",
      body: `Colorado law under CRS 13-80-102 generally gives injury victims two years from the date of injury to file a personal injury lawsuit. Missing this deadline almost certainly means losing your right to compensation forever. Some claims — including those against government entities — have much shorter notice requirements under the Colorado Governmental Immunity Act (CRS 24-10-109), sometimes as little as 180 days. Do not wait to contact an attorney. Call us today at (303) 555-0174.`,
    },
  ],
  faqs: [
    {
      question: `How do I find the best ${title.toLowerCase()} in Denver?`,
      answer: `Look for attorneys who specialize in personal injury, have verified client reviews, work on contingency, and have a demonstrable track record of results in Colorado courts including Denver District Court and Jefferson County District Court. Denver Injury Law Group checks every box. Call us for a free, no-obligation case review.`,
    },
    {
      question: "How long does a personal injury case take in Colorado?",
      answer:
        "It depends on the complexity of your case, the severity of your injuries, and whether liability is disputed. Many cases resolve in six to eighteen months. Cases involving catastrophic injuries or disputed liability may take longer. We keep you informed every step of the way.",
    },
    {
      question: "Will I have to go to court?",
      answer:
        "Most personal injury cases settle without going to trial. However, we prepare every case as if it will go to trial in Denver District Court or Arapahoe County District Court, because that preparation is what drives insurance companies to offer fair settlements. If a fair settlement cannot be reached, we will take your case to court.",
    },
  ],
  relatedAreas: PRACTICE_AREA_SLUGS.filter((s) => s !== slug)
    .slice(0, 5)
    .map((s) => ({
      label: s
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      href: `/${s}`,
    })),
});

export const practiceAreaContent: Record<PracticeAreaSlug, PracticeAreaContent> = {
  "car-accident-lawyer": stub(
    "car-accident-lawyer",
    "Car Accident Lawyer",
    "Denver car accident attorneys fighting for maximum compensation after rear-end crashes, T-bone collisions, DUI accidents, and highway pile-ups on I-25, I-70, US-36, and local Denver streets."
  ),
  "truck-accident-lawyer": stub(
    "truck-accident-lawyer",
    "Truck Accident Lawyer",
    "Semi-truck and commercial vehicle accident attorneys in Denver. We take on large carriers and their insurance teams to recover full compensation for catastrophic injuries on Colorado's major freight corridors."
  ),
  "motorcycle-accident-lawyer": stub(
    "motorcycle-accident-lawyer",
    "Motorcycle Accident Lawyer",
    "Denver motorcycle accident attorneys who understand biker bias and fight to recover fair compensation for injuries, bike damage, and lost wages throughout Metro Denver and the Front Range."
  ),
  "pedestrian-accident-lawyer": stub(
    "pedestrian-accident-lawyer",
    "Pedestrian Accident Lawyer",
    "Denver pedestrian accident attorneys representing victims struck by vehicles on downtown streets, in crosswalks along Colfax Avenue, and throughout Metro Denver."
  ),
  "bicycle-accident-lawyer": stub(
    "bicycle-accident-lawyer",
    "Bicycle Accident Lawyer",
    "Bicycle accident attorneys in Denver helping injured cyclists recover compensation for medical bills, bike damage, and pain and suffering on Denver's bike lanes, trails, and roads."
  ),
  "construction-accident-lawyer": stub(
    "construction-accident-lawyer",
    "Construction Accident Lawyer",
    "Denver construction accident attorneys handling falls, equipment failures, scaffolding collapses, and third-party liability claims at Colorado construction sites."
  ),
  "slip-and-fall-lawyer": stub(
    "slip-and-fall-lawyer",
    "Slip & Fall Lawyer",
    "Premises liability attorneys in Denver holding property owners accountable for dangerous conditions including snow and ice hazards, wet floors, and uneven surfaces that cause slip and fall injuries in businesses, apartments, and public spaces."
  ),
  "medical-malpractice-lawyer": stub(
    "medical-malpractice-lawyer",
    "Medical Malpractice Lawyer",
    "Denver medical malpractice attorneys pursuing justice for victims of surgical errors, misdiagnosis, medication mistakes, and hospital negligence at Colorado healthcare facilities."
  ),
  "wrongful-death-lawyer": stub(
    "wrongful-death-lawyer",
    "Wrongful Death Lawyer",
    "Denver wrongful death attorneys fighting for families who lost a loved one due to someone else's negligence, recklessness, or intentional misconduct under Colorado's wrongful death statute (CRS 13-21-202)."
  ),
  "workers-compensation-lawyer": stub(
    "workers-compensation-lawyer",
    "Workers' Compensation Lawyer",
    "Colorado workers' compensation attorneys helping injured employees navigate denied claims, fight lowball offers from insurers, and pursue additional recovery when third parties contributed to workplace injuries."
  ),
  "dog-bite-lawyer": stub(
    "dog-bite-lawyer",
    "Dog Bite Lawyer",
    "Denver dog bite attorneys holding owners liable under Colorado's strict dog bite statute (CRS 13-21-124) for bites, attacks, and injuries caused by dangerous dogs throughout Metro Denver."
  ),
  "hotel-casino-accident-lawyer": stub(
    "hotel-casino-accident-lawyer",
    "Hotel & Resort Accident Lawyer",
    "Denver hotel and resort accident attorneys holding downtown Denver hotels, Black Hawk and Central City casino resorts, and other lodging properties accountable for slip and falls, pool accidents, elevator injuries, and negligent security."
  ),
  "bus-accident-lawyer": stub(
    "bus-accident-lawyer",
    "Bus & Transit Accident Lawyer",
    "Denver bus accident attorneys representing victims injured on RTD buses and light rail, charter coaches, hotel shuttles, and rideshare vehicles throughout the Metro Denver area."
  ),
  "catastrophic-injury-lawyer": stub(
    "catastrophic-injury-lawyer",
    "Catastrophic Injury Lawyer",
    "Denver catastrophic injury attorneys pursuing maximum lifetime compensation for traumatic brain injuries, spinal cord damage, amputations, and severe burns suffered by Colorado injury victims."
  ),
  "product-liability-lawyer": stub(
    "product-liability-lawyer",
    "Product Liability Lawyer",
    "Denver product liability attorneys suing manufacturers, distributors, and retailers for defective products that cause serious injuries to Colorado consumers."
  ),
  "burn-injury-lawyer": stub(
    "burn-injury-lawyer",
    "Burn Injury Lawyer",
    "Denver burn injury attorneys pursuing full compensation for surgery, skin grafts, long-term rehabilitation, and pain and suffering after severe burn injuries sustained in Colorado accidents."
  ),
  "brain-injury-lawyer": stub(
    "brain-injury-lawyer",
    "Brain Injury Lawyer",
    "Denver traumatic brain injury attorneys working with neurologists at UCHealth and Denver Health to build compelling cases and maximize compensation for TBI victims and their families."
  ),
  "spinal-cord-injury-lawyer": stub(
    "spinal-cord-injury-lawyer",
    "Spinal Cord Injury Lawyer",
    "Denver spinal cord injury attorneys pursuing multimillion-dollar recoveries for paralysis, partial paralysis, and serious vertebral injuries suffered in Colorado accidents."
  ),
  "premises-liability-lawyer": stub(
    "premises-liability-lawyer",
    "Premises Liability Lawyer",
    "Denver premises liability attorneys holding negligent property owners responsible for hazardous conditions — including snow and ice hazards under Colorado's premises liability statute (CRS 13-21-115) — that injure visitors, tenants, and customers."
  ),
  "rideshare-accident-lawyer": stub(
    "rideshare-accident-lawyer",
    "Rideshare Accident Lawyer",
    "Denver Uber and Lyft accident attorneys navigating complex insurance stacking issues under Colorado's Transportation Network Company regulations to recover full compensation for rideshare crash victims throughout Metro Denver."
  ),
};

export function getPracticeAreaContent(slug: string): PracticeAreaContent | null {
  return practiceAreaContent[slug as PracticeAreaSlug] ?? null;
}
