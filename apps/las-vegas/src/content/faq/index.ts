import type { FAQContent } from "../types";

export const FAQ_TOPIC_SLUGS = [
  "general-personal-injury",
  "car-accidents",
  "truck-accidents",
  "slip-and-fall",
  "medical-malpractice",
  "workers-compensation",
  "wrongful-death",
  "insurance-claims",
  "settlement-process",
  "nevada-injury-law",
] as const;

export type FAQTopicSlug = (typeof FAQ_TOPIC_SLUGS)[number];

const faqContent: Record<FAQTopicSlug, FAQContent> = {
  "general-personal-injury": {
    slug: "general-personal-injury",
    title: "General Personal Injury FAQs",
    metaTitle: "Personal Injury FAQ Las Vegas | Las Vegas Injury Law Group",
    metaDescription:
      "Common questions about personal injury law in Las Vegas and Nevada. Learn about your rights, the claims process, and how to get the compensation you deserve.",
    intro:
      "If you've been injured in Las Vegas or anywhere in Southern Nevada, you likely have a lot of questions. Here are the most common questions our attorneys answer every day.",
    faqs: [
      {
        question: "What is a personal injury claim?",
        answer:
          "A personal injury claim is a legal action filed when someone is injured due to another person's or entity's negligence, recklessness, or intentional misconduct. The goal is to recover compensation for medical bills, lost wages, pain and suffering, and other damages.",
      },
      {
        question: "How long do I have to file a personal injury lawsuit in Nevada?",
        answer:
          "Nevada's statute of limitations for personal injury is generally two years from the date of injury. Claims against government entities may have notice requirements as short as six months. Missing these deadlines typically bars your claim permanently.",
      },
      {
        question: "Do I need a lawyer for a personal injury claim?",
        answer:
          "You are not legally required to have a lawyer, but studies consistently show that represented claimants recover significantly more — often three to four times as much — as unrepresented individuals. Insurance companies have professional adjusters and lawyers on their side; you should too.",
      },
      {
        question: "What if I was partially at fault for my accident?",
        answer:
          "Nevada uses modified comparative negligence. If you are less than 51% at fault, you can still recover — but your compensation is reduced by your percentage of fault. Insurance companies routinely try to inflate your fault percentage to minimize their payout.",
      },
      {
        question: "What damages can I recover in Nevada?",
        answer:
          "You may recover economic damages (medical bills, lost wages, future care costs, property damage) and non-economic damages (pain and suffering, emotional distress, loss of consortium, loss of enjoyment of life). Punitive damages may also be available in cases of extreme misconduct.",
      },
    ],
  },
  "car-accidents": {
    slug: "car-accidents",
    title: "Car Accident FAQs – Las Vegas",
    metaTitle: "Car Accident FAQ Las Vegas | Las Vegas Injury Law Group",
    metaDescription:
      "Answers to common car accident questions in Las Vegas and Nevada. Learn about fault, insurance, and how to maximize your recovery after a crash.",
    intro:
      "Las Vegas's busy streets and highways see thousands of car accidents every year. Here are the questions we hear most from car accident victims in Southern Nevada.",
    faqs: [
      {
        question: "What should I do immediately after a car accident in Las Vegas?",
        answer:
          "Call 911, seek medical attention, photograph the scene and all vehicles, exchange information with the other driver, collect witness contact information, and report the accident to your insurer. Do not admit fault and do not give a recorded statement to the other driver's insurer before consulting an attorney.",
      },
      {
        question: "Nevada is an at-fault state — what does that mean for my claim?",
        answer:
          "Nevada is an 'at-fault' or 'tort' state for car accidents, meaning the driver who caused the accident is responsible for damages. You can file a claim with the at-fault driver's insurance, your own insurance (if you have uninsured/underinsured motorist coverage), or a direct lawsuit.",
      },
      {
        question: "What is uninsured motorist coverage and do I need it in Nevada?",
        answer:
          "Nevada law requires drivers to carry uninsured motorist (UM) coverage unless they reject it in writing. UM coverage pays your damages when the at-fault driver has no insurance or insufficient insurance. We strongly recommend keeping this coverage, as many Nevada drivers are uninsured.",
      },
      {
        question: "How long does a car accident settlement take in Nevada?",
        answer:
          "Straightforward cases may settle in a few months. Cases involving disputed liability, serious injuries, or multiple parties can take one to two years or more. We work to resolve cases as efficiently as possible while never sacrificing the value of your claim.",
      },
      {
        question: "The insurance company is offering me a fast settlement — should I take it?",
        answer:
          "Probably not. Quick settlement offers are almost always made before the full extent of your injuries is known and are designed to close your claim cheaply. Once you sign a release, you cannot seek additional compensation. Have an attorney review any offer before accepting.",
      },
    ],
  },
  "truck-accidents": {
    slug: "truck-accidents",
    title: "Truck Accident FAQs – Las Vegas",
    metaTitle: "Truck Accident FAQ Las Vegas | Las Vegas Injury Law Group",
    metaDescription:
      "Truck accident FAQ for Las Vegas and Nevada. Learn how commercial vehicle cases work and how to hold carriers and drivers accountable for your injuries.",
    intro:
      "Semi-truck and commercial vehicle accidents are among the most complex and devastating cases in personal injury law. Here's what you need to know.",
    faqs: [
      {
        question: "Who can be held liable in a Las Vegas truck accident?",
        answer:
          "Liability can extend to the truck driver, the trucking company, the truck owner, the cargo loading company, the truck manufacturer (for defective parts), and even maintenance providers. Our attorneys conduct thorough investigations to identify every responsible party.",
      },
      {
        question: "What federal regulations apply to truck accidents?",
        answer:
          "Commercial trucks are regulated by the Federal Motor Carrier Safety Administration (FMCSA). Regulations govern driver hours of service, load limits, vehicle maintenance, driver qualifications, and more. Violations of these regulations can establish negligence per se.",
      },
      {
        question: "How do I get the truck's black box data?",
        answer:
          "Commercial trucks are equipped with Electronic Logging Devices (ELDs) and event data recorders. This data can be overwritten quickly. Our attorneys immediately send preservation letters and, when necessary, seek court orders to preserve this critical evidence.",
      },
      {
        question: "Are truck accident settlements larger than regular car accident settlements?",
        answer:
          "They can be significantly larger, for several reasons: truck crashes typically cause more severe injuries, trucking companies carry substantial commercial insurance policies (often $1 million or more), and there may be multiple liable parties. However, trucking companies also retain aggressive defense teams.",
      },
      {
        question: "Should I talk to the trucking company's insurer?",
        answer:
          "No. Trucking company insurers and their defense teams begin investigating immediately after a crash. Anything you say can and will be used against your claim. Contact us first — we handle all communication.",
      },
    ],
  },
  "slip-and-fall": {
    slug: "slip-and-fall",
    title: "Slip & Fall FAQs – Las Vegas",
    metaTitle: "Slip and Fall FAQ Las Vegas | Las Vegas Injury Law Group",
    metaDescription:
      "Slip and fall FAQ for Las Vegas and Nevada. Learn about premises liability, how to prove your case, and what compensation you may recover.",
    intro:
      "Las Vegas casinos, hotels, and retail businesses see a high volume of slip and fall accidents. Here's what you need to know about your rights.",
    faqs: [
      {
        question: "What do I need to prove in a Las Vegas slip and fall case?",
        answer:
          "You must show that the property owner owed you a duty of care, that a dangerous condition existed, that the owner knew or should have known about it, that they failed to fix or warn of it, and that this failure caused your injuries.",
      },
      {
        question: "What if I fell in a casino or hotel on the Las Vegas Strip?",
        answer:
          "Strip properties are particularly aggressive in fighting injury claims. They have in-house legal teams and surveillance footage they may try to withhold. Act immediately — casinos are required to preserve footage if notified. Our attorneys are experienced with these defendants.",
      },
      {
        question: "Does it matter if there was a 'wet floor' sign?",
        answer:
          "A wet floor sign is not an automatic defense for the property owner. The sign must be visible, placed appropriately, and the hazard must not be unreasonably dangerous regardless of the warning. Our attorneys evaluate whether the warning was adequate.",
      },
      {
        question: "Can I sue the property owner if the fall was partly my fault?",
        answer:
          "Yes, under Nevada's comparative negligence system — as long as you are less than 51% at fault. Your recovery will be reduced by your percentage of fault, but you can still recover.",
      },
      {
        question: "How quickly do I need to report a slip and fall at a business?",
        answer:
          "Immediately, if possible. Ask for an incident report, keep a copy, and take photos of the hazard before it is cleaned or repaired. Preserve your clothing and shoes as evidence. Then call us right away.",
      },
    ],
  },
  "medical-malpractice": {
    slug: "medical-malpractice",
    title: "Medical Malpractice FAQs – Las Vegas",
    metaTitle: "Medical Malpractice FAQ Las Vegas | Las Vegas Injury Law Group",
    metaDescription:
      "Medical malpractice FAQ for Las Vegas and Nevada. Learn about the standard of care, filing requirements, and how to hold negligent providers accountable.",
    intro:
      "Medical malpractice cases are among the most complex in personal injury law. Here's what Las Vegas patients need to know.",
    faqs: [
      {
        question: "What is the standard of care in a Nevada medical malpractice case?",
        answer:
          "The standard of care is the level of skill, care, and treatment that a reasonably competent healthcare provider in the same specialty would have provided under the same or similar circumstances.",
      },
      {
        question: "Do I need a medical expert to file a malpractice claim?",
        answer:
          "Yes. Nevada law requires a supporting affidavit from a qualified medical expert who attests that your claim has merit. Our firm works with a network of specialist physicians across every medical field.",
      },
      {
        question: "What is the statute of limitations for medical malpractice in Nevada?",
        answer:
          "Generally three years from the date of the malpractice, or one year from when you discovered (or reasonably should have discovered) the injury — whichever comes first. Special rules apply for minors and cases of fraud or concealment.",
      },
      {
        question: "Are there caps on medical malpractice damages in Nevada?",
        answer:
          "Nevada caps non-economic damages in medical malpractice cases at $350,000. However, there are no caps on economic damages such as medical bills and lost wages. Our attorneys maximize every element of your recovery.",
      },
      {
        question: "What if my doctor dismissed my symptoms and I got sicker?",
        answer:
          "Failure to diagnose or delayed diagnosis is one of the most common forms of medical malpractice. If a provider's failure to timely identify your condition caused you harm, you may have a valid claim.",
      },
    ],
  },
  "workers-compensation": {
    slug: "workers-compensation",
    title: "Workers' Compensation FAQs – Nevada",
    metaTitle: "Workers Comp FAQ Nevada | Las Vegas Injury Law Group",
    metaDescription:
      "Nevada workers' compensation FAQ. Learn about your rights, how to handle denied claims, and when to file a personal injury lawsuit alongside a workers' comp claim.",
    intro:
      "Nevada workers' compensation provides important benefits to injured workers — but the system is complex and insurers routinely deny or undervalue claims. Here's what you need to know.",
    faqs: [
      {
        question: "What does Nevada workers' compensation cover?",
        answer:
          "Nevada workers' comp covers medical treatment for work-related injuries, temporary disability benefits while you cannot work, permanent disability benefits if you have lasting impairment, and vocational rehabilitation if you cannot return to your prior job.",
      },
      {
        question: "My workers' comp claim was denied — what can I do?",
        answer:
          "You have the right to appeal a denial. The appeals process has strict deadlines. Contact our office immediately if your claim has been denied or if you believe benefits are being undervalued.",
      },
      {
        question: "Can I sue my employer for a workplace injury?",
        answer:
          "Generally no — workers' compensation is the exclusive remedy against your employer. However, if a third party (such as a contractor, equipment manufacturer, or property owner) contributed to your injury, you may file a separate personal injury lawsuit against them.",
      },
      {
        question: "Can I be fired for filing a workers' compensation claim?",
        answer:
          "No. Nevada law prohibits retaliation against employees who file workers' compensation claims. If your employer fires, demotes, or otherwise retaliates against you, you may have additional claims.",
      },
      {
        question: "Do I need an attorney for a workers' compensation claim?",
        answer:
          "You do not have to have an attorney, but having one significantly improves your outcomes — especially if your claim is disputed, your injuries are serious, or a third-party claim is available. We provide free consultations for all workers' compensation matters.",
      },
    ],
  },
  "wrongful-death": {
    slug: "wrongful-death",
    title: "Wrongful Death FAQs – Las Vegas",
    metaTitle: "Wrongful Death FAQ Las Vegas | Las Vegas Injury Law Group",
    metaDescription:
      "Wrongful death FAQ for Las Vegas and Nevada. Learn who can file a claim, what damages are available, and how our attorneys can help your family.",
    intro:
      "Losing a family member due to someone else's negligence is devastating. Here are answers to the most pressing questions about wrongful death claims in Nevada.",
    faqs: [
      {
        question: "Who can file a wrongful death lawsuit in Nevada?",
        answer:
          "Under NRS 41.085, a wrongful death action may be brought by the heirs or personal representative of the deceased. This typically includes a spouse, children, parents, or siblings — in that order of priority.",
      },
      {
        question: "What damages are available in a Nevada wrongful death case?",
        answer:
          "Heirs may recover grief and sorrow, loss of probable support and services, loss of companionship and consortium, loss of probable inheritance, and medical and funeral expenses. The estate may separately recover for the decedent's pain and suffering before death.",
      },
      {
        question: "What is the statute of limitations for wrongful death in Nevada?",
        answer:
          "Two years from the date of death. This deadline is strictly enforced. Contact us immediately to preserve your right to file a claim.",
      },
      {
        question: "Can we file a wrongful death claim if criminal charges are pending?",
        answer:
          "Yes. Civil wrongful death claims and criminal prosecutions are completely separate proceedings. A wrongful death claim has a lower burden of proof (preponderance of evidence) than a criminal case (beyond a reasonable doubt).",
      },
      {
        question: "How long does a wrongful death case take?",
        answer:
          "Cases involving clear liability may settle within six to eighteen months. Complex cases with disputed liability or multiple defendants can take two to three years or more. We pursue the most efficient path to justice without sacrificing your recovery.",
      },
    ],
  },
  "insurance-claims": {
    slug: "insurance-claims",
    title: "Insurance Claims FAQs – Las Vegas",
    metaTitle: "Insurance Claims FAQ Las Vegas | Las Vegas Injury Law Group",
    metaDescription:
      "FAQ on dealing with insurance companies after an injury in Las Vegas. Learn how to protect your claim and avoid common insurance company tactics.",
    intro:
      "Dealing with insurance companies after an injury can be overwhelming and adversarial. Here's what you need to know to protect your claim.",
    faqs: [
      {
        question: "Should I give a recorded statement to the insurance company?",
        answer:
          "Not without speaking to an attorney first. Insurance adjusters are trained to ask questions designed to elicit statements they can use to deny or reduce your claim. You are generally not required to give a recorded statement to the opposing party's insurer.",
      },
      {
        question: "The insurance company says I have to use their 'approved' doctor. Is that true?",
        answer:
          "For your own health insurance, you may be required to use in-network providers. For the opposing party's insurance, you have no such obligation. You have the right to treat with the physicians of your choice.",
      },
      {
        question: "What if the insurance company is acting in bad faith?",
        answer:
          "Nevada law prohibits insurance companies from engaging in bad faith claims handling, including unreasonable delays, denying claims without a proper investigation, or making lowball offers without justification. Our attorneys pursue bad faith claims when appropriate.",
      },
      {
        question: "Can I negotiate my own settlement without a lawyer?",
        answer:
          "You can, but you're at a significant disadvantage. Insurance adjusters negotiate claims every day. Studies show unrepresented claimants receive far less than those represented by attorneys — even after accounting for attorney fees.",
      },
      {
        question: "What is a demand letter?",
        answer:
          "A demand letter is a formal letter from your attorney to the insurance company setting forth your injuries, medical treatment, damages, and the amount you are demanding to settle the claim. It is the first formal step in the negotiation process.",
      },
    ],
  },
  "settlement-process": {
    slug: "settlement-process",
    title: "Settlement Process FAQs – Las Vegas",
    metaTitle: "Injury Settlement Process FAQ Las Vegas | Las Vegas Injury Law Group",
    metaDescription:
      "FAQ on the personal injury settlement process in Las Vegas and Nevada. Learn what to expect from investigation through resolution.",
    intro:
      "Understanding the settlement process can reduce stress and help you make better decisions about your case. Here's a plain-language overview.",
    faqs: [
      {
        question: "What are the stages of a personal injury case?",
        answer:
          "Generally: (1) Initial consultation and case evaluation; (2) Investigation and evidence gathering; (3) Medical treatment and reaching maximum medical improvement; (4) Demand letter and negotiation; (5) Settlement or litigation; (6) Resolution and distribution of proceeds.",
      },
      {
        question: "What is 'maximum medical improvement' (MMI)?",
        answer:
          "MMI is the point at which your condition has stabilized and further improvement is unlikely. It is generally best to wait until MMI before settling, because once you settle, you cannot seek additional compensation for ongoing or future medical needs.",
      },
      {
        question: "How are attorney fees calculated in a contingency case?",
        answer:
          "Contingency fees are a percentage of the recovery — typically 33% before a lawsuit is filed and 40% if litigation is required. Fees are deducted from the settlement or verdict, not paid upfront by you.",
      },
      {
        question: "Can the insurance company take back a settlement offer?",
        answer:
          "An offer can be withdrawn before you accept it. Once you accept and sign a release, the settlement is binding. This is why it is critical to have an attorney review any settlement before you sign.",
      },
      {
        question: "What happens after I sign a settlement agreement?",
        answer:
          "After signing a release, the insurance company sends payment (typically within 21-30 days). Your attorney deducts fees and costs, pays any medical liens, and disburses the net proceeds to you.",
      },
    ],
  },
  "nevada-injury-law": {
    slug: "nevada-injury-law",
    title: "Nevada Injury Law FAQs",
    metaTitle: "Nevada Personal Injury Law FAQ | Las Vegas Injury Law Group",
    metaDescription:
      "FAQ on Nevada personal injury law. Learn how Nevada's comparative negligence, statutes of limitations, and damage rules affect your injury claim.",
    intro:
      "Nevada has specific laws that govern personal injury cases. Understanding these rules is essential to protecting your rights.",
    faqs: [
      {
        question: "What is Nevada's comparative negligence rule?",
        answer:
          "Nevada uses modified comparative negligence with a 51% bar. If you are 50% or less at fault for your injury, you can recover — but your award is reduced by your fault percentage. If you are 51% or more at fault, you cannot recover anything.",
      },
      {
        question: "What are Nevada's minimum auto insurance requirements?",
        answer:
          "Nevada requires minimum liability coverage of $25,000 per person / $50,000 per accident for bodily injury, and $20,000 for property damage. Uninsured motorist coverage equal to the liability limits is required unless rejected in writing.",
      },
      {
        question: "What is Nevada's dram shop law?",
        answer:
          "Nevada does not have a traditional dram shop law imposing liability on bars and restaurants that serve intoxicated patrons. However, there are exceptions for service to visibly intoxicated minors, and social host liability claims may arise in certain circumstances.",
      },
      {
        question: "What are punitive damages and when can I get them in Nevada?",
        answer:
          "Punitive damages punish defendants for oppression, fraud, or malice. Nevada caps punitive damages at three times the compensatory damages awarded, or $300,000 if compensatory damages are less than $100,000.",
      },
      {
        question: "Does Nevada have a cap on personal injury damages?",
        answer:
          "Nevada does not cap economic or non-economic damages in most personal injury cases (with exceptions for medical malpractice non-economic damages at $350,000). This makes Nevada a favorable jurisdiction for seriously injured plaintiffs.",
      },
    ],
  },
};

export function getFAQContent(slug: string): FAQContent | null {
  return faqContent[slug as FAQTopicSlug] ?? null;
}

export { faqContent };
