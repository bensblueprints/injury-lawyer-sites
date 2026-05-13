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
  metaTitle: `${title} in Las Vegas, NV | Las Vegas Injury Law Group`,
  metaDescription: `${description} Free consultation. No fee unless we win. Call (702) 555-0147.`,
  heroHeadline: `Las Vegas ${title}`,
  heroSubheadline: description,
  intro: `If you or a loved one has been injured and needs a ${title.toLowerCase()} in Las Vegas, Nevada, the Las Vegas Injury Law Group is ready to fight for you. ${description}`,
  sections: [
    {
      heading: `What to Do After Your ${title.replace(" Lawyer", "")} Accident`,
      body: `The steps you take immediately following your injury can significantly affect your ability to recover compensation. First, seek medical attention — even if you believe your injuries are minor. Second, document everything: photograph the scene, collect witness contact information, and preserve any physical evidence. Third, report the incident to the appropriate authority (police, property owner, employer) and obtain a written report. Finally, do not give recorded statements to any insurance company before speaking with an attorney. Call Las Vegas Injury Law Group at (702) 555-0147 before talking to anyone else.`,
    },
    {
      heading: "How Nevada Injury Law Works",
      body: `Nevada is a modified comparative negligence state. This means you can recover compensation even if you were partially at fault for your injury — as long as your share of fault does not exceed 50%. However, your recovery will be reduced by your percentage of fault. Insurance companies routinely try to exaggerate your percentage of fault to reduce or eliminate their liability. Our attorneys aggressively counter these tactics to ensure your fair recovery.`,
    },
    {
      heading: "What Compensation Can You Recover?",
      body: `Nevada injury victims are entitled to both economic and non-economic damages. Economic damages include: past and future medical bills, lost wages, loss of future earning capacity, property damage, and out-of-pocket expenses. Non-economic damages include: pain and suffering, emotional distress, loss of enjoyment of life, and loss of consortium. In cases involving particularly egregious conduct, Nevada courts may also award punitive damages designed to punish the defendant.`,
    },
    {
      heading: "Why Choose Las Vegas Injury Law Group",
      body: `Las Vegas Injury Law Group is one of Southern Nevada's most trusted personal injury firms. Our attorneys have recovered millions of dollars for Las Vegas injury victims. We work on a contingency fee basis — meaning you pay nothing unless we win. Our team handles all communication with insurance companies, manages your medical records and bills, and prepares every case as if it will go to trial. That trial-ready approach forces insurance companies to make fair settlement offers. If they don't, we take them to court.`,
    },
    {
      heading: "Nevada Statute of Limitations",
      body: `Nevada law generally gives injury victims two years from the date of injury to file a personal injury lawsuit. Missing this deadline almost certainly means losing your right to compensation forever. Some claims — including those against government entities — have much shorter notice requirements, sometimes as little as six months. Do not wait to contact an attorney. Call us today at (702) 555-0147.`,
    },
  ],
  faqs: [
    {
      question: `How do I find the best ${title.toLowerCase()} in Las Vegas?`,
      answer: `Look for attorneys who specialize in personal injury, have verified client reviews, work on contingency, and have a demonstrable track record of results. Las Vegas Injury Law Group checks every box. Call us for a free, no-obligation case review.`,
    },
    {
      question: "How long does a personal injury case take in Nevada?",
      answer:
        "It depends on the complexity of your case, the severity of your injuries, and whether liability is disputed. Many cases resolve in six to eighteen months. Cases involving catastrophic injuries or disputed liability may take longer. We keep you informed every step of the way.",
    },
    {
      question: "Will I have to go to court?",
      answer:
        "Most personal injury cases settle without going to trial. However, we prepare every case as if it will go to trial, because that preparation is what drives insurance companies to offer fair settlements. If a fair settlement cannot be reached, we will take your case to court.",
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
    "Las Vegas car accident attorneys fighting for maximum compensation after rear-end crashes, T-bone collisions, DUI accidents, and highway pile-ups on I-15, US-95, and local streets."
  ),
  "truck-accident-lawyer": stub(
    "truck-accident-lawyer",
    "Truck Accident Lawyer",
    "Semi-truck and commercial vehicle accident attorneys in Las Vegas. We take on large carriers and their insurance teams to recover full compensation for catastrophic injuries."
  ),
  "motorcycle-accident-lawyer": stub(
    "motorcycle-accident-lawyer",
    "Motorcycle Accident Lawyer",
    "Las Vegas motorcycle accident attorneys who understand biker bias and fight to recover fair compensation for injuries, bike damage, and lost wages."
  ),
  "pedestrian-accident-lawyer": stub(
    "pedestrian-accident-lawyer",
    "Pedestrian Accident Lawyer",
    "Las Vegas pedestrian accident attorneys representing victims struck by vehicles on the Strip, in crosswalks, and throughout Southern Nevada."
  ),
  "bicycle-accident-lawyer": stub(
    "bicycle-accident-lawyer",
    "Bicycle Accident Lawyer",
    "Bicycle accident attorneys in Las Vegas helping injured cyclists recover compensation for medical bills, bike damage, and pain and suffering."
  ),
  "construction-accident-lawyer": stub(
    "construction-accident-lawyer",
    "Construction Accident Lawyer",
    "Las Vegas construction accident attorneys handling falls, equipment failures, scaffolding collapses, and third-party liability claims at Nevada work sites."
  ),
  "slip-and-fall-lawyer": stub(
    "slip-and-fall-lawyer",
    "Slip & Fall Lawyer",
    "Premises liability attorneys in Las Vegas holding property owners accountable for dangerous conditions that cause slip and fall injuries in casinos, hotels, stores, and parking lots."
  ),
  "medical-malpractice-lawyer": stub(
    "medical-malpractice-lawyer",
    "Medical Malpractice Lawyer",
    "Las Vegas medical malpractice attorneys pursuing justice for victims of surgical errors, misdiagnosis, medication mistakes, and hospital negligence."
  ),
  "wrongful-death-lawyer": stub(
    "wrongful-death-lawyer",
    "Wrongful Death Lawyer",
    "Las Vegas wrongful death attorneys fighting for families who lost a loved one due to someone else's negligence, recklessness, or intentional misconduct."
  ),
  "workers-compensation-lawyer": stub(
    "workers-compensation-lawyer",
    "Workers' Compensation Lawyer",
    "Nevada workers' compensation attorneys helping injured employees navigate denied claims, fight lowball offers, and pursue additional recovery when third parties are at fault."
  ),
  "dog-bite-lawyer": stub(
    "dog-bite-lawyer",
    "Dog Bite Lawyer",
    "Las Vegas dog bite attorneys holding owners strictly liable under Nevada law for bites, attacks, and injuries caused by dangerous dogs."
  ),
  "hotel-casino-accident-lawyer": stub(
    "hotel-casino-accident-lawyer",
    "Hotel & Casino Accident Lawyer",
    "Las Vegas hotel and casino accident attorneys holding Strip resorts and local properties accountable for slip and falls, pool accidents, elevator injuries, and negligent security."
  ),
  "bus-accident-lawyer": stub(
    "bus-accident-lawyer",
    "Bus & Transit Accident Lawyer",
    "Las Vegas bus accident attorneys representing victims injured on RTC buses, charter coaches, hotel shuttles, and rideshare vehicles throughout Clark County."
  ),
  "catastrophic-injury-lawyer": stub(
    "catastrophic-injury-lawyer",
    "Catastrophic Injury Lawyer",
    "Las Vegas catastrophic injury attorneys pursuing maximum lifetime compensation for traumatic brain injuries, spinal cord damage, amputations, and severe burns."
  ),
  "product-liability-lawyer": stub(
    "product-liability-lawyer",
    "Product Liability Lawyer",
    "Las Vegas product liability attorneys suing manufacturers, distributors, and retailers for defective products that cause injuries to Nevada consumers."
  ),
  "burn-injury-lawyer": stub(
    "burn-injury-lawyer",
    "Burn Injury Lawyer",
    "Las Vegas burn injury attorneys pursuing full compensation for surgery, skin grafts, long-term rehabilitation, and pain and suffering after severe burn injuries."
  ),
  "brain-injury-lawyer": stub(
    "brain-injury-lawyer",
    "Brain Injury Lawyer",
    "Las Vegas traumatic brain injury attorneys working with neurologists and life-care planners to maximize compensation for TBI victims and their families."
  ),
  "spinal-cord-injury-lawyer": stub(
    "spinal-cord-injury-lawyer",
    "Spinal Cord Injury Lawyer",
    "Las Vegas spinal cord injury attorneys pursuing multimillion-dollar recoveries for paralysis, partial paralysis, and serious vertebral injuries."
  ),
  "premises-liability-lawyer": stub(
    "premises-liability-lawyer",
    "Premises Liability Lawyer",
    "Las Vegas premises liability attorneys holding negligent property owners responsible for hazardous conditions that injure visitors, tenants, and customers."
  ),
  "rideshare-accident-lawyer": stub(
    "rideshare-accident-lawyer",
    "Rideshare Accident Lawyer",
    "Las Vegas Uber and Lyft accident attorneys navigating complex insurance stacking issues to recover full compensation for rideshare crash victims in Southern Nevada."
  ),
};

export function getPracticeAreaContent(slug: string): PracticeAreaContent | null {
  return practiceAreaContent[slug as PracticeAreaSlug] ?? null;
}
