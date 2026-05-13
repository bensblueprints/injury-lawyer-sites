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
  metaTitle: `${title} | Austin Injury Law Group`,
  metaDescription: `${intro.slice(0, 155)}`,
  intro,
  sections,
});

const legalProcessContent: Record<LegalProcessSlug, LegalProcessContent> = {
  "how-to-file-a-claim": stub(
    "how-to-file-a-claim",
    "How to File a Personal Injury Claim in Texas",
    "Filing a personal injury claim in Texas involves several key steps. This guide walks you through the process from the moment of your injury to final resolution.",
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
    "Texas Statute of Limitations for Personal Injury",
    "Texas law imposes strict deadlines on when you can file a personal injury lawsuit. Missing these deadlines almost always results in permanently losing your right to compensation.",
    [
      {
        heading: "General Personal Injury: Two Years",
        body: "Texas Civil Practice & Remedies Code § 16.003 gives injury victims two years from the date of the accident or injury to file a lawsuit. This is a firm deadline — courts rarely make exceptions.",
      },
      {
        heading: "Claims Against Government Entities",
        body: "If a government agency (City of Austin, Travis County, TXDOT) was responsible for your injury, you must provide formal notice within six months under the Texas Tort Claims Act. Missing this deadline can bar your lawsuit entirely.",
      },
      {
        heading: "Medical Malpractice: Two Years",
        body: "Medical malpractice claims must generally be filed within two years of the date of the malpractice, or the date the patient discovered or should have discovered the injury. Expert reports are required within 120 days of filing.",
      },
      {
        heading: "Discovery Rule and Tolling",
        body: "In some cases, the statute of limitations clock does not start until you discover your injury or learn that it was caused by negligence. Fraud, concealment, and minority status can also toll (pause) the deadline under Texas law.",
      },
    ]
  ),
  "insurance-negotiation": stub(
    "insurance-negotiation",
    "Insurance Negotiation: How It Works in Texas",
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
    "Going to Trial: What to Expect in a Texas Injury Case",
    "Most personal injury cases settle before trial, but being prepared to go to trial is essential. Here's what to expect if your case goes to court in Austin.",
    [
      {
        heading: "The Decision to File a Lawsuit",
        body: "If settlement negotiations fail, your attorney files a petition in Travis County District Court or the appropriate Texas district court. Austin-area cases are typically handled in Travis County courts.",
      },
      {
        heading: "Discovery Phase",
        body: "Both sides exchange documents, take depositions, and retain expert witnesses. Discovery can take six to twelve months in complex cases under the Texas Rules of Civil Procedure.",
      },
      {
        heading: "Pretrial Motions and Mediation",
        body: "Attorneys file motions to shape what evidence and arguments the jury will hear. Travis County courts routinely order mediation before trial — a settlement conference with a neutral mediator.",
      },
      {
        heading: "The Trial",
        body: "Texas personal injury trials involve jury selection, opening statements, witness testimony, expert testimony, closing arguments, and jury deliberation. Most trials last two to ten days.",
      },
    ]
  ),
  "discovery-process": stub(
    "discovery-process",
    "The Discovery Process in Texas Personal Injury Cases",
    "Discovery is the phase of litigation where both sides gather and exchange information. Understanding discovery helps you participate effectively in your own case.",
    [
      {
        heading: "Interrogatories",
        body: "Written questions submitted to the opposing party, who must answer under oath. Texas limits interrogatories to 25 in most cases. They cover basic facts about the incident, injuries, witnesses, and insurance coverage.",
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
    "Deposition Guide for Texas Injury Victims",
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
    "Mediation and Arbitration in Texas Injury Cases",
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
        body: "Travis County courts routinely order mediation in personal injury cases before trial. Some insurance policies require arbitration for uninsured motorist claims. Your attorney will evaluate whether ADR is appropriate and advantageous for your case.",
      },
    ]
  ),
  "calculating-damages": stub(
    "calculating-damages",
    "How Damages Are Calculated in Texas Injury Cases",
    "Understanding how damages are calculated helps you set realistic expectations and ensures you don't leave money on the table when negotiating your settlement.",
    [
      {
        heading: "Economic Damages",
        body: "Economic damages are calculable dollar amounts: past medical bills, future medical expenses, lost wages, loss of future earning capacity, and property damage. These require documentation and, for future costs, expert testimony.",
      },
      {
        heading: "Non-Economic Damages",
        body: "Non-economic damages compensate for intangible harms: pain and suffering, mental anguish, disfigurement, and loss of consortium. Texas caps non-economic damages in medical malpractice cases, but most personal injury cases have no cap on non-economic damages.",
      },
      {
        heading: "The Multiplier Method",
        body: "Insurance companies often calculate non-economic damages using a multiplier applied to economic damages (e.g., 1.5x to 5x). More serious injuries command higher multipliers. Our attorneys work to establish the maximum defensible value of your non-economic damages.",
      },
      {
        heading: "Exemplary (Punitive) Damages",
        body: "Texas calls punitive damages 'exemplary damages.' Under Texas Civil Practice & Remedies Code § 41.008, exemplary damages are available when the defendant acted with fraud, malice, or gross negligence, subject to statutory caps.",
      },
    ]
  ),
  "liens-and-subrogation": stub(
    "liens-and-subrogation",
    "Liens and Subrogation in Texas Injury Settlements",
    "When your health insurance, Medicare, Medicaid, or workers' compensation carrier pays for your injury-related treatment, they often have a right to be reimbursed from your settlement.",
    [
      {
        heading: "What Is a Medical Lien?",
        body: "A medical lien is a legal claim by a healthcare provider or insurer against your settlement, requiring you to reimburse them for treatment costs before you receive your net proceeds.",
      },
      {
        heading: "Types of Liens in Texas",
        body: "Common liens include health insurance subrogation, Medicare/Medicaid liens (governed by federal law), workers' compensation liens, hospital liens under the Texas Property Code, and attorney fee liens.",
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
    "Collecting Your Personal Injury Judgment in Texas",
    "Winning a judgment is one thing — collecting it is another. Here's how the collection process works after a Texas court awards you damages.",
    [
      {
        heading: "Insurance Policy Limits",
        body: "In most cases, your recovery is limited by the defendant's insurance policy limits. If your damages exceed those limits, you may be able to access your own underinsured motorist (UIM) coverage.",
      },
      {
        heading: "Judgment Liens",
        body: "A Texas court judgment can be recorded as an abstract of judgment in any county where the defendant owns property. This creates a lien that prevents them from selling or refinancing without paying you.",
      },
      {
        heading: "Wage Garnishment",
        body: "Texas generally prohibits wage garnishment for consumer debts, but court-ordered garnishment is available in some situations. We pursue every available collection method under Texas law.",
      },
      {
        heading: "When the Defendant Has No Assets",
        body: "If the defendant has no insurance and no assets, collection may be difficult or impossible. This is why uninsured motorist coverage is so important. We counsel every client on coverage issues before they become a problem.",
      },
    ]
  ),
  "lawsuit-timeline": stub(
    "lawsuit-timeline",
    "Personal Injury Lawsuit Timeline in Austin",
    "Understanding the timeline of a personal injury lawsuit in Austin helps you plan ahead and stay informed at every stage of your Texas case.",
    [
      {
        heading: "Pre-Filing: Investigation and Demand",
        body: "Before filing a lawsuit, your attorney investigates the accident, gathers police reports from the Austin Police Department or Texas DPS, obtains medical records, and retains experts as needed. Once you reach maximum medical improvement, a demand package is sent to the insurer. This phase typically lasts six to twelve months.",
      },
      {
        heading: "Filing the Lawsuit",
        body: "If the insurer refuses a fair settlement, your attorney files an original petition in Travis County District Court (or Williamson County, Hays County, or another appropriate court depending on where the incident occurred). The defendant is served and has 20 days to answer under the Texas Rules of Civil Procedure.",
      },
      {
        heading: "Discovery Phase",
        body: "Discovery in Travis County personal injury cases typically runs six to twelve months. Both sides serve written discovery and take depositions. Expert witnesses are designated and reports exchanged per the scheduling order issued by the court.",
      },
      {
        heading: "Trial or Settlement",
        body: "Travis County courts routinely order mediation before trial. If mediation fails, the case is tried before an Austin-area jury. Most Travis County personal injury cases resolve within 12 to 24 months of filing. Complex catastrophic injury cases can take longer.",
      },
    ]
  ),
  "what-is-negligence": stub(
    "what-is-negligence",
    "What Is Negligence in Austin Personal Injury Law?",
    "Negligence is the legal foundation of most personal injury claims in Texas. Proving negligence is how injury victims establish that another party is legally responsible for their losses.",
    [
      {
        heading: "The Four Elements of Negligence",
        body: "To win a Texas personal injury case, your attorney must prove four elements: (1) the defendant owed you a duty of care, (2) the defendant breached that duty, (3) the breach caused your injury, and (4) you suffered measurable damages as a result. All four elements must be proven by a preponderance of the evidence.",
      },
      {
        heading: "Duty of Care",
        body: "A duty of care is a legal obligation to act with reasonable care toward others. Drivers owe a duty to drive safely on Austin roads including MoPac, I-35, and Loop 360. Property owners owe a duty to maintain safe premises. Doctors and hospitals owe a duty to meet the applicable standard of care.",
      },
      {
        heading: "Breach of Duty",
        body: "A breach occurs when someone fails to meet the applicable standard of care — for example, weaving through traffic on I-35 or failing to repair a known hazard on Austin's 6th Street. The standard is what a reasonably prudent person would have done under the same circumstances.",
      },
      {
        heading: "Comparative Negligence in Texas",
        body: "Texas follows a modified comparative fault rule under Texas Civil Practice & Remedies Code § 33.001. You can recover damages as long as you are not more than 50% responsible for the accident. Your recovery is reduced by your percentage of fault. If you are 51% or more at fault, you recover nothing.",
      },
    ]
  ),
  "when-to-hire": stub(
    "when-to-hire",
    "When to Hire a Personal Injury Lawyer in Austin",
    "Knowing when to hire a personal injury attorney in Austin can be the difference between a fair settlement and leaving thousands of dollars on the table.",
    [
      {
        heading: "Signs You Need an Attorney",
        body: "You should consult an Austin personal injury attorney if: you were injured due to someone else's negligence; an insurance company has contacted you for a recorded statement; you have received a settlement offer; your claim involves disputed liability; or you are unsure of your rights under Texas law.",
      },
      {
        heading: "Serious Injuries Always Warrant Legal Help",
        body: "If you have suffered a traumatic brain injury, spinal cord injury, broken bones, burns, or any injury requiring surgery or long-term care, the stakes are too high to navigate alone. Serious injury claims require experienced legal representation to maximize your recovery.",
      },
      {
        heading: "Insurance Company Red Flags",
        body: "Be cautious if an adjuster calls quickly after your accident and seems overly helpful, pressures you to settle fast, asks for a recorded statement, or offers a lump sum before you have finished treatment. These tactics are designed to minimize your payout. An Austin attorney levels the playing field.",
      },
      {
        heading: "The Sooner You Call, the Better",
        body: "Texas's statute of limitations gives most injury victims two years to file a lawsuit, but critical evidence — surveillance footage, witness memories, skid marks — disappears quickly. Contacting our Austin office as soon as possible after your accident protects your claim from the start.",
      },
    ]
  ),
};

export function getLegalProcessContent(slug: string): LegalProcessContent | null {
  return legalProcessContent[slug as LegalProcessSlug] ?? null;
}

export { legalProcessContent };
