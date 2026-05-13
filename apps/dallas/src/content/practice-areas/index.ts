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
  "premises-liability-lawyer",
  "bus-accident-lawyer",
  "catastrophic-injury-lawyer",
  "product-liability-lawyer",
  "burn-injury-lawyer",
  "brain-injury-lawyer",
  "spinal-cord-injury-lawyer",
  "rideshare-accident-lawyer",
  "nursing-home-abuse-lawyer",
] as const;

export type PracticeAreaSlug = (typeof PRACTICE_AREA_SLUGS)[number];

const stub = (
  slug: string,
  title: string,
  description: string
): PracticeAreaContent => ({
  slug,
  title,
  metaTitle: `${title} in Dallas, TX | Dallas Injury Law Group`,
  metaDescription: `${description} Free consultation. No fee unless we win. Call (214) 555-0183.`,
  heroHeadline: `Dallas ${title}`,
  heroSubheadline: description,
  intro: `If you or a loved one has been injured and needs a ${title.toLowerCase()} in Dallas, Texas, the Dallas Injury Law Group is ready to fight for you. ${description}`,
  sections: [
    {
      heading: `What to Do After Your ${title.replace(" Lawyer", "")} Accident`,
      body: `The steps you take immediately following your injury can significantly affect your ability to recover compensation. First, seek medical attention — even if you believe your injuries are minor. Second, document everything: photograph the scene, collect witness contact information, and preserve any physical evidence. Third, report the incident to the appropriate authority (police, property owner, employer) and obtain a written report. Finally, do not give recorded statements to any insurance company before speaking with an attorney. Call Dallas Injury Law Group at (214) 555-0183 before talking to anyone else.`,
    },
    {
      heading: "How Texas Injury Law Works",
      body: `Texas is a modified comparative fault state. This means you can recover compensation even if you were partially at fault for your injury — as long as your share of fault does not exceed 51%. However, your recovery will be reduced by your percentage of fault. Insurance companies routinely try to exaggerate your percentage of fault to reduce or eliminate their liability. Our attorneys aggressively counter these tactics to ensure your fair recovery.`,
    },
    {
      heading: "What Compensation Can You Recover?",
      body: `Texas injury victims are entitled to both economic and non-economic damages. Economic damages include: past and future medical bills, lost wages, loss of future earning capacity, property damage, and out-of-pocket expenses. Non-economic damages include: pain and suffering, emotional distress, loss of enjoyment of life, and loss of consortium. In cases involving particularly egregious conduct, Texas courts may also award punitive damages (called exemplary damages) designed to punish the defendant.`,
    },
    {
      heading: "Why Choose Dallas Injury Law Group",
      body: `Dallas Injury Law Group is one of North Texas's most trusted personal injury firms. Our attorneys have recovered millions of dollars for Dallas injury victims. We work on a contingency fee basis — meaning you pay nothing unless we win. Our team handles all communication with insurance companies, manages your medical records and bills, and prepares every case as if it will go to trial. That trial-ready approach forces insurance companies to make fair settlement offers. If they don't, we take them to court.`,
    },
    {
      heading: "Texas Statute of Limitations",
      body: `Texas law generally gives injury victims two years from the date of injury to file a personal injury lawsuit. Missing this deadline almost certainly means losing your right to compensation forever. Some claims — including those against government entities — have much shorter notice requirements, sometimes as little as six months. Do not wait to contact an attorney. Call us today at (214) 555-0183.`,
    },
  ],
  faqs: [
    {
      question: `How do I find the best ${title.toLowerCase()} in Dallas?`,
      answer: `Look for attorneys who specialize in personal injury, have verified client reviews, work on contingency, and have a demonstrable track record of results. Dallas Injury Law Group checks every box. Call us for a free, no-obligation case review.`,
    },
    {
      question: "How long does a personal injury case take in Texas?",
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
    "Dallas car accident attorneys fighting for maximum compensation after rear-end crashes, T-bone collisions, DUI accidents, and highway pile-ups on I-35, I-20, I-635, and the Dallas North Tollway."
  ),
  "truck-accident-lawyer": stub(
    "truck-accident-lawyer",
    "Truck Accident Lawyer",
    "Semi-truck and commercial vehicle accident attorneys in Dallas. We take on large carriers and their insurance teams to recover full compensation for catastrophic injuries on DFW highways."
  ),
  "motorcycle-accident-lawyer": stub(
    "motorcycle-accident-lawyer",
    "Motorcycle Accident Lawyer",
    "Dallas motorcycle accident attorneys who understand biker bias and fight to recover fair compensation for injuries, bike damage, and lost wages throughout the DFW Metroplex."
  ),
  "pedestrian-accident-lawyer": stub(
    "pedestrian-accident-lawyer",
    "Pedestrian Accident Lawyer",
    "Dallas pedestrian accident attorneys representing victims struck by vehicles in crosswalks, parking lots, and throughout the DFW Metroplex."
  ),
  "bicycle-accident-lawyer": stub(
    "bicycle-accident-lawyer",
    "Bicycle Accident Lawyer",
    "Bicycle accident attorneys in Dallas helping injured cyclists recover compensation for medical bills, bike damage, and pain and suffering on Dallas roads and trails."
  ),
  "construction-accident-lawyer": stub(
    "construction-accident-lawyer",
    "Construction Accident Lawyer",
    "Dallas construction accident attorneys handling falls, equipment failures, scaffolding collapses, and third-party liability claims at Texas work sites throughout the DFW Metroplex."
  ),
  "slip-and-fall-lawyer": stub(
    "slip-and-fall-lawyer",
    "Slip & Fall Lawyer",
    "Premises liability attorneys in Dallas holding property owners accountable for dangerous conditions that cause slip and fall injuries in stores, restaurants, offices, and parking lots."
  ),
  "medical-malpractice-lawyer": stub(
    "medical-malpractice-lawyer",
    "Medical Malpractice Lawyer",
    "Dallas medical malpractice attorneys pursuing justice for victims of surgical errors, misdiagnosis, medication mistakes, and hospital negligence at DFW healthcare facilities."
  ),
  "wrongful-death-lawyer": stub(
    "wrongful-death-lawyer",
    "Wrongful Death Lawyer",
    "Dallas wrongful death attorneys fighting for families who lost a loved one due to someone else's negligence, recklessness, or intentional misconduct in Texas."
  ),
  "workers-compensation-lawyer": stub(
    "workers-compensation-lawyer",
    "Workers' Compensation Lawyer",
    "Texas workers' compensation attorneys helping injured Dallas employees navigate denied claims, fight lowball offers, and pursue additional recovery when third parties are at fault."
  ),
  "dog-bite-lawyer": stub(
    "dog-bite-lawyer",
    "Dog Bite Lawyer",
    "Dallas dog bite attorneys holding owners liable under Texas law for bites, attacks, and injuries caused by dangerous dogs throughout the DFW Metroplex."
  ),
  "premises-liability-lawyer": stub(
    "premises-liability-lawyer",
    "Premises Liability Lawyer",
    "Dallas premises liability attorneys holding negligent property owners responsible for hazardous conditions that injure visitors, tenants, and customers throughout North Texas."
  ),
  "bus-accident-lawyer": stub(
    "bus-accident-lawyer",
    "Bus & Transit Accident Lawyer",
    "Dallas bus accident attorneys representing victims injured on DART buses, charter coaches, hotel shuttles, and rideshare vehicles throughout the DFW Metroplex."
  ),
  "catastrophic-injury-lawyer": stub(
    "catastrophic-injury-lawyer",
    "Catastrophic Injury Lawyer",
    "Dallas catastrophic injury attorneys pursuing maximum lifetime compensation for traumatic brain injuries, spinal cord damage, amputations, and severe burns throughout North Texas."
  ),
  "product-liability-lawyer": stub(
    "product-liability-lawyer",
    "Product Liability Lawyer",
    "Dallas product liability attorneys suing manufacturers, distributors, and retailers for defective products that cause injuries to Texas consumers."
  ),
  "burn-injury-lawyer": stub(
    "burn-injury-lawyer",
    "Burn Injury Lawyer",
    "Dallas burn injury attorneys pursuing full compensation for surgery, skin grafts, long-term rehabilitation, and pain and suffering after severe burn injuries in Texas."
  ),
  "brain-injury-lawyer": stub(
    "brain-injury-lawyer",
    "Brain Injury Lawyer",
    "Dallas traumatic brain injury attorneys working with neurologists and life-care planners to maximize compensation for TBI victims and their families throughout North Texas."
  ),
  "spinal-cord-injury-lawyer": stub(
    "spinal-cord-injury-lawyer",
    "Spinal Cord Injury Lawyer",
    "Dallas spinal cord injury attorneys pursuing multimillion-dollar recoveries for paralysis, partial paralysis, and serious vertebral injuries throughout the DFW Metroplex."
  ),
  "rideshare-accident-lawyer": stub(
    "rideshare-accident-lawyer",
    "Rideshare Accident Lawyer",
    "Dallas Uber and Lyft accident attorneys navigating complex insurance stacking issues to recover full compensation for rideshare crash victims throughout the DFW Metroplex."
  ),
  "nursing-home-abuse-lawyer": stub(
    "nursing-home-abuse-lawyer",
    "Nursing Home Abuse Lawyer",
    "Dallas nursing home abuse attorneys holding care facilities accountable for neglect, physical abuse, and financial exploitation of elderly residents throughout North Texas."
  ),
};

export function getPracticeAreaContent(slug: string): PracticeAreaContent | null {
  return practiceAreaContent[slug as PracticeAreaSlug] ?? null;
}
