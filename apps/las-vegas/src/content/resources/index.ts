import type { ResourceContent } from "../types";

export const RESOURCE_SLUGS = [
  "nevada-accident-checklist",
  "nevada-insurance-guide",
  "medical-treatment-guide",
  "evidence-preservation-guide",
  "nevada-court-guide",
  "recovery-timeline",
] as const;

export type ResourceSlug = (typeof RESOURCE_SLUGS)[number];

const resourceContent: Record<ResourceSlug, ResourceContent> = {
  "nevada-accident-checklist": {
    slug: "nevada-accident-checklist",
    title: "Nevada Accident Checklist: What to Do After an Injury",
    metaTitle: "Nevada Accident Checklist | Las Vegas Injury Law Group",
    metaDescription:
      "A complete checklist of steps to take after an accident in Nevada. Protect your health, preserve evidence, and protect your legal rights.",
    intro:
      "Following the right steps after an accident in Nevada can make the difference between a full recovery and leaving money on the table. Use this checklist to protect yourself.",
    sections: [
      {
        heading: "Immediate Steps (At the Scene)",
        body: "1. Call 911 and ensure emergency services are on the way. 2. Do not move injured persons unless there is immediate danger. 3. Move vehicles out of traffic if possible and safe. 4. Turn on hazard lights. 5. Photograph the scene, vehicles, license plates, and visible injuries. 6. Gather witness names and phone numbers. 7. Exchange insurance and contact information with other drivers.",
      },
      {
        heading: "Within 24 Hours",
        body: "Seek medical evaluation even if you feel fine — many injuries have delayed symptoms. Keep all medical documentation. File a police report if one was not filed at the scene. Notify your auto insurer of the accident. Do NOT post about the accident on social media.",
      },
      {
        heading: "Within 72 Hours",
        body: "Contact a personal injury attorney for a free consultation. Preserve your clothing and footwear as evidence. Write down everything you remember about the accident while it is fresh. Obtain any available surveillance footage before it is overwritten.",
      },
      {
        heading: "Ongoing Steps",
        body: "Follow all medical advice and attend all appointments. Keep a daily pain and symptom journal. Save all medical bills, receipts, and correspondence. Track all lost wages and income. Do not sign any releases or accept any settlement without legal review.",
      },
    ],
  },
  "nevada-insurance-guide": {
    slug: "nevada-insurance-guide",
    title: "Nevada Auto Insurance Guide for Injury Victims",
    metaTitle: "Nevada Auto Insurance Guide | Las Vegas Injury Law Group",
    metaDescription:
      "Understand Nevada auto insurance requirements, coverage types, and how to navigate an insurance claim after an accident.",
    intro:
      "Nevada's insurance laws directly affect your ability to recover compensation after an accident. This guide explains what you need to know.",
    sections: [
      {
        heading: "Nevada Minimum Coverage Requirements",
        body: "Nevada requires all drivers to carry minimum liability insurance: $25,000 per person / $50,000 per accident for bodily injury, and $20,000 for property damage. These minimums are often inadequate for serious injuries.",
      },
      {
        heading: "Uninsured/Underinsured Motorist Coverage",
        body: "Nevada requires insurers to offer UM/UIM coverage equal to your liability limits. This coverage pays when the at-fault driver has no insurance or insufficient insurance. It is one of the most important coverages you can carry.",
      },
      {
        heading: "Medical Payments (MedPay) Coverage",
        body: "MedPay is optional coverage that pays your medical bills regardless of fault, up to your policy limits. It can be used alongside your health insurance to cover deductibles and copays.",
      },
      {
        heading: "How Insurance Companies Investigate Claims",
        body: "After filing a claim, an insurance adjuster is assigned to investigate. They review police reports, medical records, and vehicle damage. They may contact you for a recorded statement. Never provide a recorded statement without consulting an attorney first.",
      },
    ],
  },
  "medical-treatment-guide": {
    slug: "medical-treatment-guide",
    title: "Medical Treatment Guide for Nevada Injury Victims",
    metaTitle: "Medical Treatment Guide for Injury Victims | Las Vegas Injury Law Group",
    metaDescription:
      "What to know about medical treatment after a personal injury in Las Vegas and Nevada. Protect your health and your legal claim.",
    intro:
      "Proper medical treatment after an injury serves two purposes: restoring your health and documenting your damages. This guide helps you navigate the medical side of your injury claim.",
    sections: [
      {
        heading: "Seek Treatment Immediately",
        body: "Do not wait to see a doctor. Delayed treatment is one of the most common reasons insurance companies deny or reduce claims. Prompt medical attention creates a medical record that connects your injuries to the accident.",
      },
      {
        heading: "Follow All Treatment Recommendations",
        body: "Attend all appointments, follow your doctor's instructions, and complete all prescribed physical therapy or rehabilitation. Missed appointments and non-compliance give insurance companies grounds to argue you were not seriously injured.",
      },
      {
        heading: "Choosing Your Treating Physician",
        body: "For personal injury purposes, you generally have the right to choose your own treating physician. Choose a specialist appropriate to your injuries — orthopedist, neurologist, or other specialist as indicated.",
      },
      {
        heading: "Document Everything",
        body: "Keep records of every appointment, procedure, prescription, and medical expense. Keep a daily journal documenting pain levels, limitations, and how your injuries affect your daily life. This documentation is invaluable when calculating non-economic damages.",
      },
    ],
  },
  "evidence-preservation-guide": {
    slug: "evidence-preservation-guide",
    title: "Evidence Preservation Guide for Nevada Injury Cases",
    metaTitle: "Evidence Preservation Guide | Las Vegas Injury Law Group",
    metaDescription:
      "How to preserve critical evidence after an accident in Nevada. Protect your personal injury claim from the start.",
    intro:
      "Evidence is the foundation of every personal injury case. Evidence can disappear quickly after an accident. This guide shows you how to preserve what matters most.",
    sections: [
      {
        heading: "Physical Evidence",
        body: "Preserve your clothing and footwear from the day of the accident — do not wash them. Keep any defective product that caused your injury. Photograph your injuries regularly as they heal.",
      },
      {
        heading: "Digital Evidence",
        body: "Screen-capture any social media posts by witnesses or the at-fault party. Download dashcam footage immediately. Take detailed photographs at the scene including road conditions, traffic controls, and any relevant hazards.",
      },
      {
        heading: "Documentary Evidence",
        body: "Save every piece of paper related to your case: police reports, medical bills, insurance correspondence, employer records, and receipts for all out-of-pocket expenses. Keep both physical and digital copies.",
      },
      {
        heading: "Spoliation Letters",
        body: "Your attorney should send a preservation or spoliation letter to relevant parties demanding that they preserve evidence such as surveillance footage, maintenance records, employee personnel files, and black box data. Our office does this immediately upon retention.",
      },
    ],
  },
  "nevada-court-guide": {
    slug: "nevada-court-guide",
    title: "Nevada Court Guide: Personal Injury Litigation",
    metaTitle: "Nevada Court Guide for Injury Victims | Las Vegas Injury Law Group",
    metaDescription:
      "A guide to Nevada courts for personal injury victims. Learn how the court system works and what to expect during litigation.",
    intro:
      "If your injury case goes to litigation, understanding how Nevada's court system works will help you participate more effectively and set realistic expectations.",
    sections: [
      {
        heading: "Which Court Handles Your Case?",
        body: "Cases seeking under $15,000 are filed in Justice Court. Cases seeking between $15,000 and $50,000 may be filed in District Court but are typically assigned to the Short Trial program. Cases over $50,000 are filed in Nevada District Court (Clark County for Las Vegas cases).",
      },
      {
        heading: "The Clark County District Court",
        body: "Most significant personal injury cases in Las Vegas are filed in the Eighth Judicial District Court in Clark County. The courthouse is located at 200 Lewis Avenue, Las Vegas, NV 89155.",
      },
      {
        heading: "Case Timeline",
        body: "After filing, a scheduling order sets deadlines for discovery, expert disclosures, dispositive motions, and trial. Most Clark County personal injury cases proceed to trial within 12 to 18 months of filing.",
      },
      {
        heading: "Jury Trials in Nevada",
        body: "Nevada personal injury cases are decided by a jury of six (in Justice Court) or twelve (in District Court). Jurors are selected through voir dire, and both sides have the right to use peremptory challenges to remove prospective jurors.",
      },
    ],
  },
  "recovery-timeline": {
    slug: "recovery-timeline",
    title: "Personal Injury Case Timeline: What to Expect",
    metaTitle: "Injury Case Timeline | Las Vegas Injury Law Group",
    metaDescription:
      "A realistic timeline for a personal injury case in Las Vegas and Nevada. Know what to expect from consultation through resolution.",
    intro:
      "Personal injury cases in Nevada can take anywhere from a few months to several years to resolve. This timeline gives you a realistic picture of the process.",
    sections: [
      {
        heading: "Months 1–3: Medical Treatment and Investigation",
        body: "During this phase, you focus on medical treatment. Your attorney simultaneously investigates the accident, preserves evidence, obtains police and incident reports, and begins collecting medical records.",
      },
      {
        heading: "Months 3–12: Reaching Maximum Medical Improvement",
        body: "Your attorney monitors your medical treatment. Once you reach MMI, your attorney requests all remaining medical records and bills. This may take six months to a year for serious injuries.",
      },
      {
        heading: "Months 9–18: Demand, Negotiation, and Settlement",
        body: "Your attorney sends a demand letter to the insurer. Negotiations proceed over one to three months. Many cases settle during this phase. If not, a lawsuit is filed.",
      },
      {
        heading: "Months 12–36+: Litigation (If Necessary)",
        body: "Litigation involves filing the complaint, completing discovery (depositions, document exchange, expert reports), pretrial motions, and potentially a trial. Complex cases may take two to three years from injury to trial.",
      },
    ],
  },
};

export function getResourceContent(slug: string): ResourceContent | null {
  return resourceContent[slug as ResourceSlug] ?? null;
}

export { resourceContent };
