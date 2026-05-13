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
  "colorado-injury-law",
] as const;

export type FAQTopicSlug = (typeof FAQ_TOPIC_SLUGS)[number];

const faqContent: Record<FAQTopicSlug, FAQContent> = {
  "general-personal-injury": {
    slug: "general-personal-injury",
    title: "General Personal Injury FAQs",
    metaTitle: "Personal Injury FAQ Denver | Denver Injury Law Group",
    metaDescription:
      "Common questions about personal injury law in Denver and Colorado. Learn about your rights, the claims process, and how to get the compensation you deserve.",
    intro:
      "If you've been injured in Denver or anywhere in Metro Denver, you likely have a lot of questions. Here are the most common questions our attorneys answer every day.",
    faqs: [
      {
        question: "What is a personal injury claim?",
        answer:
          "A personal injury claim is a legal action filed when someone is injured due to another person's or entity's negligence, recklessness, or intentional misconduct. The goal is to recover compensation for medical bills, lost wages, pain and suffering, and other damages under Colorado law.",
      },
      {
        question: "How long do I have to file a personal injury lawsuit in Colorado?",
        answer:
          "Colorado's statute of limitations for personal injury is generally two years from the date of injury under CRS 13-80-102. Claims against government entities under the Colorado Governmental Immunity Act (CRS 24-10-109) require notice within 182 days. Missing these deadlines typically bars your claim permanently.",
      },
      {
        question: "Do I need a lawyer for a personal injury claim?",
        answer:
          "You are not legally required to have a lawyer, but studies consistently show that represented claimants recover significantly more — often three to four times as much — as unrepresented individuals. Insurance companies have professional adjusters and lawyers on their side; you should too.",
      },
      {
        question: "What if I was partially at fault for my accident?",
        answer:
          "Colorado uses modified comparative negligence under CRS 13-21-111. If you are less than 50% at fault, you can still recover — but your compensation is reduced by your percentage of fault. If you are 50% or more at fault, you are completely barred from recovery. Insurance companies routinely try to inflate your fault percentage to minimize their payout.",
      },
      {
        question: "What damages can I recover in Colorado?",
        answer:
          "You may recover economic damages (medical bills, lost wages, future care costs, property damage) and non-economic damages (pain and suffering, emotional distress, loss of consortium). Colorado caps non-economic damages under CRS 13-21-102.5 at $250,000 (adjustable to $500,000 in exceptional cases). Economic damages are not capped. Punitive damages under CRS 13-21-102 may be available in cases of willful or wanton conduct.",
      },
    ],
  },
  "car-accidents": {
    slug: "car-accidents",
    title: "Car Accident FAQs – Denver",
    metaTitle: "Car Accident FAQ Denver | Denver Injury Law Group",
    metaDescription:
      "Answers to common car accident questions in Denver and Colorado. Learn about fault, insurance, and how to maximize your recovery after a crash.",
    intro:
      "Denver's busy highways and surface streets — including I-25, I-70, and Colfax Avenue — see thousands of car accidents every year. Here are the questions we hear most from car accident victims in Metro Denver.",
    faqs: [
      {
        question: "What should I do immediately after a car accident in Denver?",
        answer:
          "Call 911, seek medical attention at Denver Health Medical Center or the nearest emergency facility, photograph the scene and all vehicles, exchange information with the other driver, collect witness contact information, and report the accident to Denver Police Department. Do not admit fault and do not give a recorded statement to the other driver's insurer before consulting an attorney.",
      },
      {
        question: "Colorado is an at-fault state — what does that mean for my claim?",
        answer:
          "Colorado is an 'at-fault' or 'tort' state for car accidents, meaning the driver who caused the accident is responsible for damages. You can file a claim with the at-fault driver's insurance, your own insurance (if you have uninsured/underinsured motorist coverage), or a direct lawsuit filed in Denver District Court or the appropriate Colorado district court.",
      },
      {
        question: "What is uninsured motorist coverage and do I need it in Colorado?",
        answer:
          "Colorado requires insurers to offer uninsured/underinsured motorist (UM/UIM) coverage, which pays your damages when the at-fault driver has no insurance or insufficient insurance. Under CRS 10-4-609, you can reject UM/UIM coverage in writing. We strongly recommend keeping this coverage, as a significant number of Colorado drivers are uninsured.",
      },
      {
        question: "How long does a car accident settlement take in Colorado?",
        answer:
          "Straightforward cases may settle in a few months. Cases involving disputed liability, serious injuries, or multiple parties can take one to two years or more. We work to resolve cases as efficiently as possible while never sacrificing the value of your claim.",
      },
      {
        question: "The insurance company is offering me a fast settlement — should I take it?",
        answer:
          "Probably not. Quick settlement offers are almost always made before the full extent of your injuries is known and are designed to close your claim cheaply. Once you sign a release, you cannot seek additional compensation. Have an attorney review any offer before accepting — our consultations are always free.",
      },
    ],
  },
  "truck-accidents": {
    slug: "truck-accidents",
    title: "Truck Accident FAQs – Denver",
    metaTitle: "Truck Accident FAQ Denver | Denver Injury Law Group",
    metaDescription:
      "Truck accident FAQ for Denver and Colorado. Learn how commercial vehicle cases work and how to hold carriers and drivers accountable for your injuries.",
    intro:
      "Semi-truck and commercial vehicle accidents on Colorado's I-70, I-25, and US-36 are among the most complex and devastating cases in personal injury law. Here's what you need to know.",
    faqs: [
      {
        question: "Who can be held liable in a Denver truck accident?",
        answer:
          "Liability can extend to the truck driver, the trucking company, the truck owner, the cargo loading company, the truck manufacturer (for defective parts), and even maintenance providers. Our attorneys conduct thorough investigations to identify every responsible party, including FMCSA violations.",
      },
      {
        question: "What federal regulations apply to truck accidents?",
        answer:
          "Commercial trucks are regulated by the Federal Motor Carrier Safety Administration (FMCSA). Regulations govern driver hours of service, load limits, vehicle maintenance, driver qualifications, and more. Violations of these regulations can establish negligence per se under Colorado law.",
      },
      {
        question: "How do I get the truck's black box data?",
        answer:
          "Commercial trucks are equipped with Electronic Logging Devices (ELDs) and event data recorders. This data can be overwritten quickly. Our attorneys immediately send preservation letters and, when necessary, seek court orders in Denver District Court to preserve this critical evidence.",
      },
      {
        question: "Are truck accident settlements larger than regular car accident settlements?",
        answer:
          "They can be significantly larger, for several reasons: truck crashes typically cause more severe injuries, trucking companies carry substantial commercial insurance policies (often $1 million or more), and there may be multiple liable parties. However, trucking companies also retain aggressive defense teams.",
      },
      {
        question: "Should I talk to the trucking company's insurer?",
        answer:
          "No. Trucking company insurers and their defense teams begin investigating immediately after a crash. Anything you say can and will be used against your claim. Contact us first — we handle all communication with insurers.",
      },
    ],
  },
  "slip-and-fall": {
    slug: "slip-and-fall",
    title: "Slip & Fall FAQs – Denver",
    metaTitle: "Slip and Fall FAQ Denver | Denver Injury Law Group",
    metaDescription:
      "Slip and fall FAQ for Denver and Colorado. Learn about premises liability, how to prove your case, and what compensation you may recover after a fall injury.",
    intro:
      "Denver's extreme winter weather creates additional slip and fall hazards on snow and ice, and Colorado's premises liability statute (CRS 13-21-115) governs who can sue and under what circumstances. Here's what you need to know.",
    faqs: [
      {
        question: "What do I need to prove in a Denver slip and fall case?",
        answer:
          "Under Colorado's premises liability statute (CRS 13-21-115), your duty of care depends on your status as an invitee, licensee, or trespasser. Invitees (customers, tenants) are owed the highest duty — the property owner must exercise reasonable care to inspect and repair known and reasonably discoverable dangerous conditions.",
      },
      {
        question: "Can I sue for a slip and fall on snow or ice in Colorado?",
        answer:
          "Yes. Property owners in Colorado have a duty to remove or warn of ice and snow hazards within a reasonable time. Denver city ordinances require property owners to clear sidewalks after snowfall. If a property owner's failure to clear ice or snow caused your fall, you may have a valid premises liability claim under CRS 13-21-115.",
      },
      {
        question: "Does it matter if there was a 'wet floor' sign?",
        answer:
          "A wet floor sign is not an automatic defense for the property owner. The sign must be visible, placed appropriately, and the hazard must not be unreasonably dangerous regardless of the warning. Our attorneys evaluate whether the warning was adequate and whether the owner exercised reasonable care.",
      },
      {
        question: "Can I sue the property owner if the fall was partly my fault?",
        answer:
          "Yes, under Colorado's modified comparative negligence rule (CRS 13-21-111) — as long as you are less than 50% at fault. Your recovery will be reduced by your percentage of fault, but you can still recover.",
      },
      {
        question: "How quickly do I need to report a slip and fall at a business in Denver?",
        answer:
          "Immediately, if possible. Ask for an incident report, keep a copy, and take photos of the hazard before it is cleaned or repaired. Preserve your clothing and shoes as evidence. Then call us right away — Colorado's two-year statute of limitations (CRS 13-80-102) applies.",
      },
    ],
  },
  "medical-malpractice": {
    slug: "medical-malpractice",
    title: "Medical Malpractice FAQs – Denver",
    metaTitle: "Medical Malpractice FAQ Denver | Denver Injury Law Group",
    metaDescription:
      "Medical malpractice FAQ for Denver and Colorado. Learn about the standard of care, filing requirements, and how to hold negligent providers accountable.",
    intro:
      "Medical malpractice cases at Denver Health, UCHealth University of Colorado Hospital, and other Colorado facilities are among the most complex in personal injury law. Here's what Denver patients need to know.",
    faqs: [
      {
        question: "What is the standard of care in a Colorado medical malpractice case?",
        answer:
          "The standard of care is the level of skill, care, and treatment that a reasonably competent healthcare provider in the same specialty would have provided under the same or similar circumstances in Colorado.",
      },
      {
        question: "Do I need a medical expert to file a malpractice claim in Colorado?",
        answer:
          "Yes. Colorado law requires a certificate of review from a qualified medical expert who attests that your claim has merit under CRS 13-20-602. Our firm works with a network of specialist physicians across every medical field.",
      },
      {
        question: "What is the statute of limitations for medical malpractice in Colorado?",
        answer:
          "Colorado's statute of limitations for medical malpractice under CRS 13-80-102.5 is generally two years from the date the victim discovered or should have discovered the injury, with an absolute maximum of three years from the date of the negligent act. Special rules apply for minors and cases of fraudulent concealment.",
      },
      {
        question: "Are there caps on medical malpractice damages in Colorado?",
        answer:
          "Colorado caps non-economic damages in medical malpractice cases at $300,000 under CRS 13-64-302. Economic damages (medical bills, lost wages) are not capped. Our attorneys maximize every element of your recoverable damages.",
      },
      {
        question: "What if my doctor at Denver Health dismissed my symptoms and I got sicker?",
        answer:
          "Failure to diagnose or delayed diagnosis is one of the most common forms of medical malpractice in Colorado. If a provider's failure to timely identify your condition caused you harm, you may have a valid claim under Colorado's medical malpractice laws.",
      },
    ],
  },
  "workers-compensation": {
    slug: "workers-compensation",
    title: "Workers' Compensation FAQs – Colorado",
    metaTitle: "Workers Comp FAQ Colorado | Denver Injury Law Group",
    metaDescription:
      "Colorado workers' compensation FAQ. Learn about your rights, how to handle denied claims, and when to file a personal injury lawsuit alongside a workers' comp claim.",
    intro:
      "Colorado workers' compensation provides important benefits to injured workers — but the system is complex and insurers routinely deny or undervalue claims. Here's what Denver workers need to know.",
    faqs: [
      {
        question: "What does Colorado workers' compensation cover?",
        answer:
          "Colorado workers' comp under CRS Title 8 covers medical treatment for work-related injuries, temporary disability benefits while you cannot work (paid at two-thirds of your average weekly wage), permanent disability benefits if you have lasting impairment, and vocational rehabilitation if you cannot return to your prior job.",
      },
      {
        question: "My workers' comp claim was denied — what can I do?",
        answer:
          "You have the right to appeal a denial to the Colorado Division of Workers' Compensation. The appeals process has strict deadlines. Contact our office immediately if your claim has been denied or if you believe benefits are being undervalued by the insurance company.",
      },
      {
        question: "Can I sue my employer for a workplace injury in Colorado?",
        answer:
          "Generally no — workers' compensation under Colorado law is the exclusive remedy against your employer. However, if a third party (such as a contractor, equipment manufacturer, or property owner) contributed to your injury, you may file a separate personal injury lawsuit against them in Denver District Court or the appropriate Colorado court.",
      },
      {
        question: "Can I be fired for filing a workers' compensation claim in Colorado?",
        answer:
          "No. Colorado law under CRS 8-42-102 prohibits retaliation against employees who file workers' compensation claims. If your employer fires, demotes, or otherwise retaliates against you, you may have additional claims for wrongful termination.",
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
    title: "Wrongful Death FAQs – Denver",
    metaTitle: "Wrongful Death FAQ Denver | Denver Injury Law Group",
    metaDescription:
      "Wrongful death FAQ for Denver and Colorado. Learn who can file a claim, what damages are available, and how our attorneys can help your family recover.",
    intro:
      "Losing a family member due to someone else's negligence in Colorado is devastating. Here are answers to the most pressing questions about wrongful death claims in Denver.",
    faqs: [
      {
        question: "Who can file a wrongful death lawsuit in Colorado?",
        answer:
          "Under CRS 13-21-202, a wrongful death action must be filed by the deceased's heirs — typically the surviving spouse (who has the exclusive right for the first year after death), followed by children, grandchildren, or parents of an unmarried deceased individual in the second year.",
      },
      {
        question: "What damages are available in a Colorado wrongful death case?",
        answer:
          "Under CRS 13-21-203, heirs may recover grief, loss of companionship and consortium, loss of expected financial support, and funeral and burial expenses. Colorado caps non-economic wrongful death damages, but economic damages including lost future income and support are not capped.",
      },
      {
        question: "What is the statute of limitations for wrongful death in Colorado?",
        answer:
          "Two years from the date of death under CRS 13-80-102. This deadline is strictly enforced in Colorado courts. Contact us immediately to preserve your family's right to file a claim.",
      },
      {
        question: "Can we file a wrongful death claim if criminal charges are pending?",
        answer:
          "Yes. Civil wrongful death claims and criminal prosecutions are completely separate proceedings in Colorado. A wrongful death claim has a lower burden of proof (preponderance of evidence) than a criminal case (beyond a reasonable doubt), so a civil case can succeed even if criminal charges are dropped or the defendant is acquitted.",
      },
      {
        question: "How long does a wrongful death case take in Denver?",
        answer:
          "Cases involving clear liability may settle within six to eighteen months. Complex cases with disputed liability or multiple defendants filed in Denver District Court can take two to three years or more. We pursue the most efficient path to justice without sacrificing your family's recovery.",
      },
    ],
  },
  "insurance-claims": {
    slug: "insurance-claims",
    title: "Insurance Claims FAQs – Denver",
    metaTitle: "Insurance Claims FAQ Denver | Denver Injury Law Group",
    metaDescription:
      "FAQ on dealing with insurance companies after an injury in Denver. Learn how to protect your claim and avoid common insurance company tactics under Colorado law.",
    intro:
      "Dealing with insurance companies after an injury in Colorado can be overwhelming and adversarial. Here's what you need to know to protect your claim under Colorado law.",
    faqs: [
      {
        question: "Should I give a recorded statement to the insurance company?",
        answer:
          "Not without speaking to an attorney first. Insurance adjusters are trained to ask questions designed to elicit statements they can use to deny or reduce your claim. You are generally not required to give a recorded statement to the opposing party's insurer.",
      },
      {
        question: "The insurance company says I have to use their 'approved' doctor. Is that true?",
        answer:
          "For your own health insurance, you may be required to use in-network providers. For the opposing party's insurance, you have no such obligation. You have the right to treat with the physicians of your choice, including specialists at Denver Health or UCHealth.",
      },
      {
        question: "What if the insurance company is acting in bad faith in Colorado?",
        answer:
          "Colorado law under CRS 10-3-1115 and CRS 10-3-1116 prohibits insurance companies from unreasonably delaying or denying payment of a valid claim. A claimant who prevails on a bad faith claim may recover two times the covered benefit plus attorney fees. Our attorneys pursue bad faith claims aggressively when appropriate.",
      },
      {
        question: "Can I negotiate my own settlement without a lawyer?",
        answer:
          "You can, but you're at a significant disadvantage. Insurance adjusters negotiate claims every day. Studies show unrepresented claimants receive far less than those represented by attorneys — even after accounting for attorney fees.",
      },
      {
        question: "What is a demand letter in Colorado?",
        answer:
          "A demand letter is a formal letter from your attorney to the insurance company setting forth your injuries, medical treatment, damages, and the settlement amount demanded. It is the first formal step in the negotiation process and triggers the insurer's obligation under Colorado's bad faith statutes to investigate and respond promptly.",
      },
    ],
  },
  "settlement-process": {
    slug: "settlement-process",
    title: "Settlement Process FAQs – Denver",
    metaTitle: "Injury Settlement Process FAQ Denver | Denver Injury Law Group",
    metaDescription:
      "FAQ on the personal injury settlement process in Denver and Colorado. Learn what to expect from investigation through resolution.",
    intro:
      "Understanding the settlement process in Colorado can reduce stress and help you make better decisions about your case. Here's a plain-language overview.",
    faqs: [
      {
        question: "What are the stages of a personal injury case in Colorado?",
        answer:
          "Generally: (1) Initial consultation and case evaluation; (2) Investigation and evidence gathering; (3) Medical treatment and reaching maximum medical improvement (MMI); (4) Demand letter and negotiation; (5) Settlement or litigation in Denver District Court or another Colorado court; (6) Resolution and distribution of proceeds.",
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
          "An offer can be withdrawn before you accept it. Once you accept and sign a release, the settlement is binding under Colorado contract law. This is why it is critical to have an attorney review any settlement before you sign.",
      },
      {
        question: "What happens after I sign a settlement agreement in Colorado?",
        answer:
          "After signing a release, the insurance company sends payment (typically within 21-30 days). Your attorney deducts fees and costs, pays any medical liens (including Colorado hospital liens under CRS 38-27-101), and disburses the net proceeds to you.",
      },
    ],
  },
  "colorado-injury-law": {
    slug: "colorado-injury-law",
    title: "Colorado Injury Law FAQs",
    metaTitle: "Colorado Personal Injury Law FAQ | Denver Injury Law Group",
    metaDescription:
      "FAQ on Colorado personal injury law. Learn how Colorado's comparative negligence, statutes of limitations, and damage rules affect your injury claim in Denver.",
    intro:
      "Colorado has specific laws that govern personal injury cases. Understanding these rules is essential to protecting your rights in Denver and throughout the state.",
    faqs: [
      {
        question: "What is Colorado's comparative negligence rule?",
        answer:
          "Colorado uses modified comparative negligence under CRS 13-21-111. If you are less than 50% at fault for your injury, you can recover — but your award is reduced by your fault percentage. If you are exactly 50% or more at fault, you are completely barred from recovery.",
      },
      {
        question: "What are Colorado's minimum auto insurance requirements?",
        answer:
          "Colorado requires minimum liability coverage of $25,000 per person / $50,000 per accident for bodily injury, and $15,000 for property damage under CRS 10-4-619. Uninsured motorist coverage must be offered but can be rejected in writing. Colorado also has Medical Payments (MedPay) coverage requirements.",
      },
      {
        question: "What is Colorado's dog bite law?",
        answer:
          "Colorado has a strict liability dog bite statute under CRS 13-21-124. Dog owners are strictly liable for injuries caused by their dogs biting any person in a public place or lawfully in a private place. The one-bite rule does not apply to dog bites — prior knowledge of viciousness is not required.",
      },
      {
        question: "What are punitive damages and when can I get them in Colorado?",
        answer:
          "Punitive (exemplary) damages under CRS 13-21-102 punish defendants for willful and wanton conduct or fraud. Colorado caps punitive damages at an amount equal to the actual (compensatory) damages awarded. They cannot exceed compensatory damages.",
      },
      {
        question: "What is the Colorado Governmental Immunity Act?",
        answer:
          "The Colorado Governmental Immunity Act (CRS 24-10-101 et seq.) limits claims against government entities. You must file a Notice of Claim within 182 days of the injury or discovery of the injury. The Act waives immunity for certain categories including motor vehicle accidents involving government employees and dangerous conditions on public property.",
      },
    ],
  },
};

export function getFAQContent(slug: string): FAQContent | null {
  return faqContent[slug as FAQTopicSlug] ?? null;
}

export { faqContent };
