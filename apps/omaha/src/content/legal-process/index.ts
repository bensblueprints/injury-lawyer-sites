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
  metaTitle: `${title} | Omaha Injury Law Group`,
  metaDescription: `${intro.slice(0, 155)}`,
  intro,
  sections,
});

const legalProcessContent: Record<LegalProcessSlug, LegalProcessContent> = {
  "how-to-file-a-claim": stub(
    "how-to-file-a-claim",
    "How to File a Personal Injury Claim in Nebraska",
    "Filing a personal injury claim in Nebraska involves several key steps. This guide walks you through the process from the moment of your injury to final resolution.",
    [
      {
        heading: "Step 1: Seek Immediate Medical Attention",
        body: "Your health is the priority. Seek treatment right away — both for your wellbeing and to create a medical record that documents your injuries. Gaps in treatment can be used against your claim.",
      },
      {
        heading: "Step 2: Document Everything",
        body: "Photograph the scene, your injuries, and any property damage. Collect witness names and contact information. Preserve physical evidence. Keep all medical bills and receipts.",
      },
      {
        heading: "Step 3: Report the Incident",
        body: "File a police report for vehicle accidents. Report slip-and-fall incidents to property managers and request a written incident report. Notify your employer immediately for workplace injuries.",
      },
      {
        heading: "Step 4: Contact an Attorney Before Talking to Insurance",
        body: "Do not give recorded statements to any insurance company before consulting a personal injury attorney. An attorney ensures you do not inadvertently harm your claim.",
      },
      {
        heading: "Step 5: Investigation and Demand",
        body: "Your attorney investigates the incident, gathers evidence, consults experts, and calculates your full damages. Once you reach maximum medical improvement, a demand letter is sent to the insurance company.",
      },
    ]
  ),
  "statute-of-limitations": stub(
    "statute-of-limitations",
    "Nebraska Statute of Limitations for Personal Injury",
    "Nebraska law imposes strict deadlines on when you can file a personal injury lawsuit. Missing these deadlines almost always results in permanently losing your right to compensation.",
    [
      {
        heading: "General Personal Injury: Four Years",
        body: "Nebraska Revised Statutes § 25-207 gives injury victims four years from the date of the accident or injury to file a lawsuit. This is longer than many states — but the deadline is still firm.",
      },
      {
        heading: "Claims Against Government Entities",
        body: "If a government agency (City of Omaha, Douglas County, State of Nebraska) was responsible for your injury, you must file a notice of claim under the Nebraska Political Subdivisions Tort Claims Act within two years. Separate notice requirements may apply. Missing these requirements can bar your claim.",
      },
      {
        heading: "Medical Malpractice: Two Years",
        body: "Medical malpractice claims in Nebraska must be filed within two years from the date you discovered, or reasonably should have discovered, the injury caused by malpractice. Nebraska also maintains a $2.25 million cap on total damages in medical malpractice cases.",
      },
      {
        heading: "Discovery Rule and Tolling",
        body: "In some cases, the statute of limitations clock does not start until you discover your injury or learn that it was caused by negligence. Minority status tolls the deadline until the injured person turns 21 under Nebraska law.",
      },
    ]
  ),
  "insurance-negotiation": stub(
    "insurance-negotiation",
    "Insurance Negotiation: How It Works in Nebraska",
    "Insurance negotiation is the process of reaching a settlement with the at-fault party's insurance company. Understanding this process helps you know what to expect and avoid being taken advantage of.",
    [
      {
        heading: "How Insurance Companies Value Claims",
        body: "Insurers use software and formulas to calculate claim values, often starting well below the true value. They factor in medical bills, lost wages, and a multiplier for non-economic damages — but that multiplier is always the starting point of negotiation, not the final answer.",
      },
      {
        heading: "The Demand Letter",
        body: "Your attorney sends a comprehensive demand letter outlining your injuries, medical treatment, damages, and the settlement amount demanded. This initiates formal negotiations.",
      },
      {
        heading: "Counteroffers and Negotiation",
        body: "The insurance company will respond with a counteroffer, often significantly lower than the demand. Your attorney evaluates the offer, negotiates further, and advises you on whether to accept or proceed to litigation.",
      },
      {
        heading: "When Negotiations Break Down",
        body: "If the insurance company refuses to make a fair offer, your attorney files a lawsuit. The filing often prompts renewed settlement discussions. Many cases settle during or after the litigation process.",
      },
    ]
  ),
  "going-to-trial": stub(
    "going-to-trial",
    "Going to Trial: What to Expect in a Nebraska Injury Case",
    "Most personal injury cases settle before trial, but being prepared to go to trial is essential. Here's what to expect if your case goes to court in Nebraska.",
    [
      {
        heading: "The Decision to File a Lawsuit",
        body: "If settlement negotiations fail, your attorney files a complaint in the District Court of Douglas County. Nebraska's district courts are the general jurisdiction trial courts handling significant personal injury cases.",
      },
      {
        heading: "Discovery Phase",
        body: "Both sides exchange documents, take depositions, and retain expert witnesses. Discovery can take six to twelve months in complex Nebraska cases under the Nebraska Court Rules of Discovery.",
      },
      {
        heading: "Pretrial Motions and Mediation",
        body: "Attorneys file motions to shape what evidence and arguments the jury will hear. Douglas County courts often encourage or require mediation before trial.",
      },
      {
        heading: "The Trial",
        body: "Nebraska personal injury trials involve jury selection, opening statements, witness testimony, expert testimony, closing arguments, and jury deliberation. Nebraska requires unanimous jury verdicts in civil cases.",
      },
    ]
  ),
  "discovery-process": stub(
    "discovery-process",
    "The Discovery Process in Nebraska Personal Injury Cases",
    "Discovery is the phase of litigation where both sides gather and exchange information. Understanding discovery helps you participate effectively in your own case.",
    [
      {
        heading: "Interrogatories",
        body: "Written questions submitted to the opposing party, who must answer under oath. Interrogatories cover basic facts about the incident, injuries, witnesses, and insurance coverage under the Nebraska Court Rules.",
      },
      {
        heading: "Requests for Production",
        body: "Formal requests for documents, photos, video footage, medical records, employment records, and other evidence. Your attorney will also respond to the defendant's document requests.",
      },
      {
        heading: "Depositions",
        body: "Sworn out-of-court testimony given in response to attorney questioning. You will likely be deposed by the defense attorney. Your attorney will prepare you thoroughly beforehand.",
      },
      {
        heading: "Expert Witnesses",
        body: "Both sides retain expert witnesses to testify on issues like accident reconstruction, medical causation, life-care planning, and economic losses. Expert reports are exchanged during discovery.",
      },
    ]
  ),
  "deposition-guide": stub(
    "deposition-guide",
    "Deposition Guide for Nebraska Injury Victims",
    "A deposition is sworn testimony given outside of court. Being prepared for your deposition is critical to protecting your case.",
    [
      {
        heading: "What Is a Deposition?",
        body: "A deposition is a formal, recorded question-and-answer session conducted by the opposing attorney. Your testimony is given under oath and can be used at trial. Your attorney will be present.",
      },
      {
        heading: "How to Prepare",
        body: "Review all documents and prior statements in your case. Meet with your attorney for a thorough preparation session. Be well-rested and arrive on time. Dress professionally.",
      },
      {
        heading: "How to Answer Questions",
        body: "Listen carefully to each question. Answer only what is asked — do not volunteer additional information. Say 'I don't know' or 'I don't remember' when those are accurate. Never guess.",
      },
      {
        heading: "Common Deposition Tactics",
        body: "Defense attorneys use silence, repetition, and reformulated questions to get you to change your story or provide harmful admissions. Stay calm, be consistent, and defer to your attorney's guidance.",
      },
    ]
  ),
  "mediation-and-arbitration": stub(
    "mediation-and-arbitration",
    "Mediation and Arbitration in Nebraska Injury Cases",
    "Mediation and arbitration are alternative dispute resolution methods that can resolve injury cases faster and with less expense than a full trial.",
    [
      {
        heading: "What Is Mediation?",
        body: "Mediation is a voluntary, confidential negotiation facilitated by a neutral third party (the mediator). The mediator helps the parties reach a mutually acceptable settlement. No one is forced to settle — each party retains the right to go to trial.",
      },
      {
        heading: "What Is Arbitration?",
        body: "Arbitration is a more formal process where a neutral arbitrator (or panel) hears evidence and renders a decision. Binding arbitration means the decision is final; non-binding arbitration allows either party to request a trial.",
      },
      {
        heading: "When Is Alternative Dispute Resolution Used?",
        body: "Douglas County courts may suggest or require mediation before trial. Some insurance policies require arbitration for uninsured motorist claims. Your attorney will evaluate whether ADR is appropriate and advantageous for your case.",
      },
    ]
  ),
  "calculating-damages": stub(
    "calculating-damages",
    "How Damages Are Calculated in Nebraska Injury Cases",
    "Understanding how damages are calculated helps you set realistic expectations and ensures you don't leave money on the table when negotiating your settlement.",
    [
      {
        heading: "Economic Damages",
        body: "Economic damages are calculable dollar amounts: past medical bills, future medical expenses, lost wages, loss of future earning capacity, and property damage. These require documentation and, for future costs, expert testimony.",
      },
      {
        heading: "Non-Economic Damages",
        body: "Non-economic damages compensate for intangible harms: pain and suffering, emotional distress, loss of enjoyment of life, disfigurement, and loss of consortium. Nebraska law does not cap non-economic damages in most personal injury cases.",
      },
      {
        heading: "The Multiplier Method",
        body: "Insurance companies often calculate non-economic damages using a multiplier applied to economic damages (e.g., 1.5x to 5x). More serious injuries command higher multipliers. Our attorneys work to establish the maximum defensible value of your non-economic damages.",
      },
      {
        heading: "Punitive Damages",
        body: "Nebraska does not recognize punitive damages in personal injury cases as a general rule. However, courts may award enhanced compensatory damages in cases involving particularly egregious conduct. Your attorney will advise you on whether such damages may be available in your case.",
      },
    ]
  ),
  "liens-and-subrogation": stub(
    "liens-and-subrogation",
    "Liens and Subrogation in Nebraska Injury Settlements",
    "When your health insurance, Medicare, Medicaid, or workers' compensation carrier pays for your injury-related treatment, they often have a right to be reimbursed from your settlement.",
    [
      {
        heading: "What Is a Medical Lien?",
        body: "A medical lien is a legal claim by a healthcare provider or insurer against your settlement, requiring you to reimburse them for treatment costs before you receive your net proceeds.",
      },
      {
        heading: "Types of Liens in Nebraska",
        body: "Common liens include health insurance subrogation, Medicare/Medicaid liens (governed by federal law), workers' compensation liens under the Nebraska Workers' Compensation Act, hospital liens, and attorney fee liens.",
      },
      {
        heading: "Negotiating Liens",
        body: "Many liens can be negotiated and reduced. Our attorneys work aggressively to reduce lien amounts so that you receive the maximum net proceeds from your settlement.",
      },
      {
        heading: "The Medicare Secondary Payer Act",
        body: "Federal law requires that Medicare's conditional payments be reimbursed from injury settlements. Failing to comply can result in significant penalties. We handle all Medicare lien resolution on your behalf.",
      },
    ]
  ),
  "collecting-your-judgment": stub(
    "collecting-your-judgment",
    "Collecting Your Personal Injury Judgment in Nebraska",
    "Winning a judgment is one thing — collecting it is another. Here's how the collection process works after a Nebraska court awards you damages.",
    [
      {
        heading: "Insurance Policy Limits",
        body: "In most cases, your recovery is limited by the defendant's insurance policy limits. If your damages exceed those limits, you may be able to access your own underinsured motorist (UIM) coverage.",
      },
      {
        heading: "Judgment Liens",
        body: "A Nebraska court judgment can be filed as a lien against the defendant's real property in any county where they own property. This prevents them from selling or refinancing without paying you.",
      },
      {
        heading: "Wage Garnishment",
        body: "Nebraska allows judgment creditors to garnish disposable earnings subject to federal and state exemptions. We pursue every available collection method under Nebraska law to recover what the court awarded you.",
      },
      {
        heading: "When the Defendant Has No Assets",
        body: "If the defendant has no insurance and no assets, collection may be difficult or impossible. This is why uninsured motorist coverage is so important. We counsel every client on coverage issues before they become a problem.",
      },
    ]
  ),
  "lawsuit-timeline": stub(
    "lawsuit-timeline",
    "Personal Injury Lawsuit Timeline in Omaha",
    "Understanding the timeline of a personal injury lawsuit in Omaha helps you plan ahead and stay informed at every stage of your Nebraska case.",
    [
      {
        heading: "Pre-Filing: Investigation and Demand",
        body: "Before filing a lawsuit, your attorney investigates the accident, gathers police reports from the Omaha Police Department or Nebraska State Patrol, obtains medical records, and retains experts as needed. Once you reach maximum medical improvement, a demand package is sent to the insurer. This phase typically lasts six to twelve months.",
      },
      {
        heading: "Filing the Lawsuit",
        body: "If the insurer refuses a fair settlement, your attorney files a complaint in the District Court of Douglas County. The defendant is then served and typically has 30 days to file an answer under the Nebraska Rules of Civil Procedure. Filing often prompts renewed settlement talks.",
      },
      {
        heading: "Discovery Phase",
        body: "Discovery in Douglas County personal injury cases typically runs six to twelve months. Both sides serve written discovery, take depositions, and exchange expert reports per the scheduling order. Nebraska's four-year statute of limitations gives attorneys more time to build cases than most states.",
      },
      {
        heading: "Trial or Settlement",
        body: "Douglas County courts often encourage or require mediation before trial. If mediation fails, the case proceeds before a Douglas County jury. Nebraska requires unanimous jury verdicts in civil cases. Most Omaha personal injury cases resolve within 12 to 24 months of filing.",
      },
    ]
  ),
  "what-is-negligence": stub(
    "what-is-negligence",
    "What Is Negligence in Omaha Personal Injury Law?",
    "Negligence is the legal foundation of most personal injury claims in Nebraska. Proving negligence is how injury victims establish that another party is legally responsible for their losses.",
    [
      {
        heading: "The Four Elements of Negligence",
        body: "To win a Nebraska personal injury case, your attorney must prove four elements: (1) the defendant owed you a duty of care, (2) the defendant breached that duty, (3) the breach caused your injury, and (4) you suffered measurable damages as a result. All four elements must be proven by a preponderance of the evidence.",
      },
      {
        heading: "Duty of Care",
        body: "A duty of care is a legal obligation to act with reasonable care toward others. Drivers owe a duty to drive safely on Omaha roads including I-80, I-480, and Dodge Street. Property owners owe a duty to maintain safe premises. Doctors owe a duty to meet the applicable standard of care.",
      },
      {
        heading: "Breach of Duty",
        body: "A breach occurs when someone fails to meet the applicable standard of care — for example, running a red light at a busy Omaha intersection or failing to repair a known hazard in a commercial building. The standard is what a reasonably prudent person would have done under the same circumstances.",
      },
      {
        heading: "Comparative Negligence in Nebraska",
        body: "Nebraska follows a modified comparative negligence rule under Nebraska Revised Statutes § 25-21,185.09. You can recover damages as long as you are not 50% or more at fault. Your recovery is reduced by your percentage of fault — so if you are 20% at fault for a $100,000 claim, you recover $80,000. If you are 50% or more at fault, you recover nothing.",
      },
    ]
  ),
  "when-to-hire": stub(
    "when-to-hire",
    "When to Hire a Personal Injury Lawyer in Omaha",
    "Knowing when to hire a personal injury attorney in Omaha can be the difference between a fair settlement and leaving thousands of dollars on the table.",
    [
      {
        heading: "Signs You Need an Attorney",
        body: "You should consult an Omaha personal injury attorney if: you were injured due to someone else's negligence; an insurance company has contacted you for a recorded statement; you have received a settlement offer; your claim involves disputed liability; or you are unsure of your rights under Nebraska law.",
      },
      {
        heading: "Serious Injuries Always Warrant Legal Help",
        body: "If you have suffered a traumatic brain injury, spinal cord injury, broken bones, burns, or any injury requiring surgery or long-term care, the stakes are too high to navigate alone. Serious injury claims involve complex damage calculations and aggressive defense tactics that require experienced legal representation.",
      },
      {
        heading: "Insurance Company Red Flags",
        body: "Be cautious if an adjuster calls quickly after your accident and seems overly helpful, pressures you to settle fast, asks for a recorded statement, or offers a lump sum before you have finished treatment. These tactics are designed to minimize your payout. An Omaha attorney levels the playing field.",
      },
      {
        heading: "The Sooner You Call, the Better",
        body: "Nebraska's statute of limitations gives most injury victims four years to file a lawsuit — longer than most states. But critical evidence — surveillance footage, witness memories, skid marks — disappears fast regardless of the deadline. Contacting our Omaha office as soon as possible after your accident protects your claim from the start.",
      },
    ]
  ),
};

export function getLegalProcessContent(slug: string): LegalProcessContent | null {
  return legalProcessContent[slug as LegalProcessSlug] ?? null;
}

export { legalProcessContent };
