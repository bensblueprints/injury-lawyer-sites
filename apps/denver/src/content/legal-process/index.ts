import type { LegalProcessContent } from "../types";

export const LEGAL_PROCESS_SLUGS = [
  "how-to-file-a-claim",
  "statute-of-limitations",
  "insurance-negotiation",
  "going-to-trial",
  "discovery-process",
  "deposition-guide",
  "mediation-and-arbitration",
  "calculating-damages",
  "liens-and-subrogation",
  "collecting-your-judgment",
  "lawsuit-timeline",
  "what-is-negligence",
  "when-to-hire",
] as const;

export type LegalProcessSlug = (typeof LEGAL_PROCESS_SLUGS)[number];

const stub = (
  slug: LegalProcessSlug,
  title: string,
  intro: string,
  sections: { heading: string; body: string }[]
): LegalProcessContent => ({
  slug,
  title,
  metaTitle: `${title} | Denver Injury Law Group`,
  metaDescription: `${intro.slice(0, 155)}`,
  intro,
  sections,
});

const legalProcessContent: Record<LegalProcessSlug, LegalProcessContent> = {
  "how-to-file-a-claim": stub(
    "how-to-file-a-claim",
    "How to File a Personal Injury Claim in Colorado",
    "Filing a personal injury claim in Colorado involves several key steps. This guide walks you through the process from the moment of your injury to final resolution in Denver or another Colorado court.",
    [
      {
        heading: "Step 1: Seek Immediate Medical Attention",
        body: "Your health is the priority. Seek treatment right away at Denver Health Medical Center, UCHealth University of Colorado Hospital, or another Colorado healthcare facility — both for your wellbeing and to create a medical record that documents your injuries. Gaps in treatment can be used against your claim by insurance adjusters.",
      },
      {
        heading: "Step 2: Document Everything",
        body: "Photograph the scene, your injuries, and any property damage. Collect witness names and contact information. Preserve physical evidence. Keep all medical bills and receipts. If the accident occurred on a Denver street, obtain the Denver Police Department accident report.",
      },
      {
        heading: "Step 3: Report the Incident",
        body: "File a police report with the Denver Police Department for vehicle accidents. Report slip-and-fall incidents to property managers and request a written incident report. Notify your employer immediately for workplace injuries and contact the Colorado Division of Workers' Compensation if applicable.",
      },
      {
        heading: "Step 4: Contact an Attorney Before Talking to Insurance",
        body: "Do not give recorded statements to any insurance company before consulting a personal injury attorney. Colorado's bad faith insurance laws (CRS 10-3-1115) protect you, but adjusters are still trained to minimize your claim. An attorney ensures you do not inadvertently harm your case.",
      },
      {
        heading: "Step 5: Investigation and Demand",
        body: "Your attorney investigates the incident, gathers evidence, consults experts, and calculates your full damages under Colorado law. Once you reach maximum medical improvement (MMI), a demand letter is sent to the insurance company triggering their obligation to respond in good faith.",
      },
    ]
  ),
  "statute-of-limitations": stub(
    "statute-of-limitations",
    "Colorado Statute of Limitations for Personal Injury",
    "Colorado law imposes strict deadlines on when you can file a personal injury lawsuit. Missing these deadlines almost always results in permanently losing your right to compensation.",
    [
      {
        heading: "General Personal Injury: Two Years",
        body: "CRS 13-80-102 gives injury victims two years from the date of the accident or injury to file a lawsuit in Colorado. This is a firm deadline — courts rarely make exceptions. The clock begins to run on the date of the injury, not when you discover the injury in most cases.",
      },
      {
        heading: "Claims Against Government Entities",
        body: "If a government agency (City of Denver, Denver Public Schools, CDOT, RTD, state of Colorado) was responsible for your injury, you must file a Notice of Claim under the Colorado Governmental Immunity Act (CRS 24-10-109) within 182 days of the injury. Missing this notice requirement bars your lawsuit entirely.",
      },
      {
        heading: "Medical Malpractice: Two Years with Special Rules",
        body: "Medical malpractice claims under CRS 13-80-102.5 must be filed within two years of the date the victim discovered or should have discovered the injury, with an absolute three-year limit from the date of the negligent act. Special rules apply for minors (the two-year period does not begin until age 18) and cases of fraudulent concealment.",
      },
      {
        heading: "Discovery Rule and Tolling",
        body: "In some cases, the statute of limitations clock doesn't start until you discover your injury or learn that it was caused by someone's negligence — the 'discovery rule.' Fraud, concealment, and minority status can also toll (pause) the deadline under Colorado law. Contact an attorney immediately to determine which rules apply to your case.",
      },
    ]
  ),
  "insurance-negotiation": stub(
    "insurance-negotiation",
    "Insurance Negotiation: How It Works in Colorado",
    "Insurance negotiation is the process of reaching a settlement with the at-fault party's insurance company. Understanding this process helps you know what to expect and avoid being taken advantage of under Colorado law.",
    [
      {
        heading: "How Insurance Companies Value Claims",
        body: "Insurers use software and formulas to calculate claim values, often starting well below the true value. They factor in medical bills, lost wages, and a multiplier for non-economic damages — but Colorado's cap on non-economic damages (CRS 13-21-102.5) is a ceiling, not a starting point for negotiation.",
      },
      {
        heading: "The Demand Letter",
        body: "Your attorney sends a comprehensive demand letter outlining your injuries, medical treatment, damages, and the settlement amount demanded. This initiates formal negotiations and triggers the insurer's obligations under Colorado's bad faith insurance statute (CRS 10-3-1115).",
      },
      {
        heading: "Counteroffers and Negotiation",
        body: "The insurance company will respond with a counteroffer, often significantly lower than the demand. Your attorney evaluates the offer, negotiates further, and advises you on whether to accept or proceed to litigation in Denver District Court or another Colorado court.",
      },
      {
        heading: "When Negotiations Break Down",
        body: "If the insurance company refuses to make a fair offer, your attorney files a lawsuit. In Colorado, bad faith refusals may expose insurers to additional liability under CRS 10-3-1116, which allows recovery of two times the covered benefit. The filing of a lawsuit often prompts renewed settlement discussions.",
      },
    ]
  ),
  "going-to-trial": stub(
    "going-to-trial",
    "Going to Trial: What to Expect in a Colorado Injury Case",
    "Most personal injury cases settle before trial, but being prepared to go to trial in Denver District Court is essential. Here's what to expect if your case goes to court.",
    [
      {
        heading: "The Decision to File a Lawsuit",
        body: "If settlement negotiations fail, your attorney files a complaint in Denver District Court (1437 Bannock St, Denver, CO 80203) or the appropriate Colorado district court — Jefferson County District Court (Golden) for Lakewood and Arvada cases, Arapahoe County District Court (Centennial) for Aurora and Englewood cases. This initiates the formal litigation process.",
      },
      {
        heading: "Discovery Phase",
        body: "Both sides exchange documents, take depositions, and retain expert witnesses. Discovery in Colorado personal injury cases typically runs six to twelve months in complex cases. Colorado Civil Rules of Procedure govern the process.",
      },
      {
        heading: "Pretrial Motions and Mediation",
        body: "Attorneys file motions to shape what evidence and arguments the jury will hear. Colorado courts often encourage or require mediation — a settlement conference with a neutral mediator — before trial. Many cases settle at or after mediation.",
      },
      {
        heading: "The Trial",
        body: "Colorado personal injury trials involve jury selection, opening statements, witness testimony, expert testimony, closing arguments, and jury deliberation. Juries in Denver District Court have six members with an option for more. Most trials last two to ten days depending on complexity.",
      },
    ]
  ),
  "discovery-process": stub(
    "discovery-process",
    "The Discovery Process in Colorado Personal Injury Cases",
    "Discovery is the phase of litigation where both sides gather and exchange information. Understanding discovery helps you participate effectively in your Colorado personal injury case.",
    [
      {
        heading: "Interrogatories",
        body: "Written questions submitted to the opposing party, who must answer under oath within 35 days under Colorado Rules of Civil Procedure (C.R.C.P. 33). Interrogatories cover basic facts about the incident, injuries, witnesses, and insurance coverage.",
      },
      {
        heading: "Requests for Production",
        body: "Formal requests for documents, photos, video footage, medical records, employment records, and other evidence under C.R.C.P. 34. Your attorney will also respond to the defendant's document requests and fight overbroad requests.",
      },
      {
        heading: "Depositions",
        body: "Sworn out-of-court testimony given in response to attorney questioning under C.R.C.P. 30. You will likely be deposed by the defense attorney. Your attorney will prepare you thoroughly beforehand for depositions conducted in Denver or another Colorado location.",
      },
      {
        heading: "Expert Witnesses",
        body: "Both sides retain expert witnesses under C.R.C.P. 26(a)(2) to testify on issues like accident reconstruction, medical causation, life-care planning, and economic losses. Expert reports are exchanged during discovery and are critical to establishing damages in Colorado courts.",
      },
    ]
  ),
  "deposition-guide": stub(
    "deposition-guide",
    "Deposition Guide for Colorado Injury Victims",
    "A deposition is sworn testimony given outside of court. Being prepared for your deposition is critical to protecting your case in Denver or another Colorado court.",
    [
      {
        heading: "What Is a Deposition?",
        body: "A deposition is a formal, recorded question-and-answer session conducted by the opposing attorney under C.R.C.P. 30. Your testimony is given under oath and can be used at trial in Denver District Court or any other Colorado court. Your attorney will be present throughout.",
      },
      {
        heading: "How to Prepare",
        body: "Review all documents and prior statements in your case. Meet with your attorney for a thorough preparation session. Be well-rested and arrive on time at the designated Denver location. Dress professionally — how you present yourself matters.",
      },
      {
        heading: "How to Answer Questions",
        body: "Listen carefully to each question. Answer only what is asked — do not volunteer additional information. Say 'I don't know' or 'I don't remember' when those are accurate. Never guess. Ask for clarification if a question is confusing.",
      },
      {
        heading: "Common Deposition Tactics",
        body: "Defense attorneys use silence, repetition, and reformulated questions to get you to change your story or provide harmful admissions. Stay calm, be consistent, and defer to your attorney's guidance. Remember that everything you say under oath can be used against you at trial.",
      },
    ]
  ),
  "mediation-and-arbitration": stub(
    "mediation-and-arbitration",
    "Mediation and Arbitration in Colorado Injury Cases",
    "Mediation and arbitration are alternative dispute resolution methods that can resolve Colorado injury cases faster and with less expense than a full trial in Denver District Court.",
    [
      {
        heading: "What Is Mediation?",
        body: "Mediation is a voluntary, confidential negotiation facilitated by a neutral third party (the mediator). The mediator helps the parties reach a mutually acceptable settlement. No one is forced to settle — each party retains the right to go to trial in Denver District Court or another Colorado court.",
      },
      {
        heading: "What Is Arbitration?",
        body: "Arbitration is a more formal process where a neutral arbitrator (or panel) hears evidence and renders a decision. Binding arbitration means the decision is final; non-binding arbitration allows either party to request a full trial in Colorado. Some Colorado insurance policies require arbitration for uninsured motorist claims.",
      },
      {
        heading: "When Is Alternative Dispute Resolution Used?",
        body: "Colorado courts strongly encourage mediation before trial, and many judges order it under C.R.C.P. 16.2. Some insurance policies require arbitration for uninsured motorist claims under CRS 10-4-609. Your attorney will evaluate whether ADR is appropriate and advantageous for your specific Colorado case.",
      },
    ]
  ),
  "calculating-damages": stub(
    "calculating-damages",
    "How Damages Are Calculated in Colorado Injury Cases",
    "Understanding how damages are calculated in Colorado helps you set realistic expectations and ensures you don't leave money on the table when negotiating your settlement.",
    [
      {
        heading: "Economic Damages",
        body: "Economic damages are calculable dollar amounts: past medical bills at Denver Health and other facilities, future medical expenses (calculated with a life-care planner), lost wages, loss of future earning capacity, and property damage. These require documentation and, for future costs, expert testimony. Economic damages are not capped in Colorado.",
      },
      {
        heading: "Non-Economic Damages",
        body: "Non-economic damages compensate for intangible harms: pain and suffering, emotional distress, loss of enjoyment of life, disfigurement, and loss of consortium. Colorado caps non-economic damages in most personal injury cases at $250,000 (adjustable to $500,000 in exceptional circumstances) under CRS 13-21-102.5.",
      },
      {
        heading: "The Multiplier Method",
        body: "Insurance companies often calculate non-economic damages using a multiplier applied to economic damages (e.g., 1.5x to 5x), subject to Colorado's non-economic damage cap. More serious injuries command higher multipliers. Our attorneys use this and other methods to establish the maximum defensible value of your non-economic damages.",
      },
      {
        heading: "Punitive Damages",
        body: "Punitive (exemplary) damages under CRS 13-21-102 are available when a defendant's conduct was willful and wanton or fraudulent. Colorado caps punitive damages at the amount of actual (compensatory) damages awarded — they cannot exceed the compensatory award.",
      },
    ]
  ),
  "liens-and-subrogation": stub(
    "liens-and-subrogation",
    "Liens and Subrogation in Colorado Injury Settlements",
    "When your health insurance, Medicare, Medicaid, or workers' compensation carrier pays for your injury-related treatment in Colorado, they often have a right to be reimbursed from your settlement.",
    [
      {
        heading: "What Is a Medical Lien?",
        body: "A medical lien is a legal claim by a healthcare provider or insurer against your settlement, requiring you to reimburse them for treatment costs before you receive your net proceeds. Colorado hospitals and providers commonly assert liens under CRS 38-27-101.",
      },
      {
        heading: "Types of Liens in Colorado",
        body: "Common liens in Colorado include health insurance subrogation, Medicare/Medicaid liens (governed by federal law), Colorado workers' compensation liens under CRS 8-41-203, hospital liens under CRS 38-27-101, and attorney fee liens. Each has different rules and negotiation opportunities.",
      },
      {
        heading: "Negotiating Liens",
        body: "Many liens in Colorado can be negotiated and reduced. Our attorneys work aggressively to reduce lien amounts — particularly hospital liens and health insurance subrogation claims — so that you receive the maximum net proceeds from your Denver injury settlement.",
      },
      {
        heading: "The Medicare Secondary Payer Act",
        body: "Federal law requires that Medicare's conditional payments be reimbursed from injury settlements. Failing to comply with the Medicare Secondary Payer Act can result in significant penalties. We handle all Medicare lien resolution on behalf of our Denver-area clients.",
      },
    ]
  ),
  "collecting-your-judgment": stub(
    "collecting-your-judgment",
    "Collecting Your Personal Injury Judgment in Colorado",
    "Winning a judgment in Denver District Court or another Colorado court is one thing — collecting it is another. Here's how the collection process works after a Colorado court awards you damages.",
    [
      {
        heading: "Insurance Policy Limits",
        body: "In most cases, your recovery is limited by the defendant's insurance policy limits. Colorado's minimum auto insurance requirements under CRS 10-4-619 are $25,000/$50,000 for bodily injury, which is often inadequate for serious injuries. If your damages exceed those limits, you may be able to access your own underinsured motorist (UIM) coverage.",
      },
      {
        heading: "Judgment Liens",
        body: "A court judgment from Denver District Court can be recorded as a lien against the defendant's real property in Colorado (CRS 13-52-102). This prevents them from selling or refinancing without paying you.",
      },
      {
        heading: "Wage Garnishment",
        body: "Colorado allows judgment creditors to garnish up to 25% of a defendant's disposable earnings under CRS 13-54.5-105 (after exemptions). We pursue every available collection method to recover what the Colorado court awarded you.",
      },
      {
        heading: "When the Defendant Has No Assets",
        body: "If the defendant has no insurance and no assets, collection may be difficult or impossible. This is why uninsured motorist coverage is so important in Colorado. We counsel every client on coverage issues before they become a problem.",
      },
    ]
  ),
  "lawsuit-timeline": stub(
    "lawsuit-timeline",
    "Personal Injury Lawsuit Timeline in Denver",
    "Understanding the timeline of a personal injury lawsuit in Denver helps you plan ahead and stay informed at every stage of your Colorado case.",
    [
      {
        heading: "Pre-Filing: Investigation and Demand",
        body: "Before filing a lawsuit, your attorney investigates the accident, gathers Denver Police Department reports, medical records from Denver Health or UCHealth, and witness statements, and retains experts as needed. Once you reach maximum medical improvement, a demand package is sent to the insurance company. This phase typically lasts six to twelve months.",
      },
      {
        heading: "Filing the Lawsuit",
        body: "If the insurer refuses a fair settlement, your attorney files a complaint in Denver District Court (1437 Bannock St, Denver, CO 80203) for Denver incidents, or Arapahoe County District Court (Aurora/Englewood), Jefferson County District Court (Lakewood/Arvada), or another appropriate Colorado district court. The defendant is then served with process and has 21 days to file an answer under C.R.C.P. 12.",
      },
      {
        heading: "Discovery Phase",
        body: "Discovery in Colorado personal injury cases typically runs six to twelve months. Both sides exchange written interrogatories, requests for production of documents, and take depositions. Expert witnesses are disclosed under C.R.C.P. 26(a)(2) and their reports exchanged.",
      },
      {
        heading: "Trial or Settlement",
        body: "Colorado courts encourage or require mediation before civil trials under C.R.C.P. 16.2. If mediation fails, the case proceeds to trial before a Colorado jury. Most Denver personal injury cases resolve within 12 to 24 months of filing — though complex cases can take longer.",
      },
    ]
  ),
  "what-is-negligence": stub(
    "what-is-negligence",
    "What Is Negligence in Denver Personal Injury Law?",
    "Negligence is the legal foundation of most personal injury claims in Colorado. Proving negligence is how injury victims establish that another party is legally responsible for their losses.",
    [
      {
        heading: "The Four Elements of Negligence",
        body: "To win a Colorado personal injury case, your attorney must prove four elements: (1) the defendant owed you a duty of care, (2) the defendant breached that duty, (3) the breach caused your injury, and (4) you suffered measurable damages as a result. All four elements must be proven by a preponderance of the evidence in Denver District Court or another Colorado court.",
      },
      {
        heading: "Duty of Care",
        body: "A duty of care is a legal obligation to act with reasonable care toward others. Drivers on Denver's I-25 and I-70 owe a duty to drive safely. Property owners owe a duty to maintain safe premises under CRS 13-21-115. Doctors owe a duty to meet the applicable standard of care. The specific duty depends on the relationship between the parties.",
      },
      {
        heading: "Breach of Duty",
        body: "A breach occurs when someone fails to meet the applicable standard of care — for example, running a red light on Colfax Avenue, failing to clear snow and ice from a Denver sidewalk, or failing to diagnose a condition at Denver Health. The standard is what a reasonably prudent person would have done under the same circumstances.",
      },
      {
        heading: "Comparative Negligence in Colorado",
        body: "Colorado follows a modified comparative negligence rule under CRS 13-21-111. You can recover damages as long as you are not 50% or more at fault. Your recovery is reduced by your percentage of fault — so if you are 20% at fault for a $100,000 claim, you recover $80,000. If you are 50% or more at fault, you recover nothing.",
      },
    ]
  ),
  "when-to-hire": stub(
    "when-to-hire",
    "When to Hire a Personal Injury Lawyer in Denver",
    "Knowing when to hire a personal injury attorney in Denver can be the difference between a fair settlement and leaving thousands of dollars on the table under Colorado law.",
    [
      {
        heading: "Signs You Need an Attorney",
        body: "You should consult a Denver personal injury attorney if: you were injured due to someone else's negligence; an insurance company has contacted you for a recorded statement; you have received a settlement offer; your claim involves disputed liability; or you are unsure of your rights under Colorado law (including CRS 13-21-111 comparative negligence rules).",
      },
      {
        heading: "Serious Injuries Always Warrant Legal Help",
        body: "If you have suffered a traumatic brain injury at a Colorado hospital, spinal cord injury, broken bones, burns, or any injury requiring surgery or long-term care, the stakes are too high to navigate alone. Serious injury claims involve complex damage calculations, Colorado's non-economic damage caps, and aggressive defense tactics that require experienced legal representation.",
      },
      {
        heading: "Insurance Company Red Flags",
        body: "Be cautious if an adjuster calls quickly after your accident and seems overly helpful, pressures you to settle fast, asks for a recorded statement, or offers a lump sum before you have finished treatment. These tactics are designed to minimize your Colorado injury claim payout. An attorney levels the playing field.",
      },
      {
        heading: "The Sooner You Call, the Better",
        body: "Colorado's statute of limitations (CRS 13-80-102) gives most injury victims two years to file a lawsuit, but critical evidence — surveillance footage from Denver businesses, witness memories, skid marks on I-70 — disappears fast. Contacting our Denver office as soon as possible after your accident protects your claim from the start.",
      },
    ]
  ),
};

export function getLegalProcessContent(slug: string): LegalProcessContent | null {
  return legalProcessContent[slug as LegalProcessSlug] ?? null;
}

export { legalProcessContent };
