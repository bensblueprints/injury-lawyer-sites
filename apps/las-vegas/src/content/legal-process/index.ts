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
  metaTitle: `${title} | Las Vegas Injury Law Group`,
  metaDescription: `${intro.slice(0, 155)}`,
  intro,
  sections,
});

const legalProcessContent: Record<LegalProcessSlug, LegalProcessContent> = {
  "how-to-file-a-claim": stub(
    "how-to-file-a-claim",
    "How to File a Personal Injury Claim in Nevada",
    "Filing a personal injury claim in Nevada involves several key steps. This guide walks you through the process from the moment of your injury to final resolution.",
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
    "Nevada Statute of Limitations for Personal Injury",
    "Nevada law imposes strict deadlines on when you can file a personal injury lawsuit. Missing these deadlines almost always results in permanently losing your right to compensation.",
    [
      {
        heading: "General Personal Injury: Two Years",
        body: "Nevada Revised Statutes § 11.190 gives injury victims two years from the date of the accident or injury to file a lawsuit. This is a firm deadline — courts rarely make exceptions.",
      },
      {
        heading: "Claims Against Government Entities",
        body: "If a government agency (city, county, state) was responsible for your injury, you must file a Notice of Claim within 90 days of the injury. Missing this deadline bars your lawsuit entirely.",
      },
      {
        heading: "Medical Malpractice: Three Years or One Year",
        body: "Medical malpractice claims must be filed within three years of the malpractice, or one year from when you discovered (or should have discovered) the injury — whichever comes first.",
      },
      {
        heading: "Discovery Rule and Tolling",
        body: "In some cases, the statute of limitations clock doesn't start until you discover your injury or learn that it was caused by someone's negligence. Fraud, concealment, and minority status can also toll (pause) the deadline.",
      },
    ]
  ),
  "insurance-negotiation": stub(
    "insurance-negotiation",
    "Insurance Negotiation: How It Works in Nevada",
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
    "Going to Trial: What to Expect in a Nevada Injury Case",
    "Most personal injury cases settle before trial, but being prepared to go to trial is essential. Here's what to expect if your case goes to court in Nevada.",
    [
      {
        heading: "The Decision to File a Lawsuit",
        body: "If settlement negotiations fail, your attorney files a complaint in Nevada district court (or federal court for certain cases). This initiates the formal litigation process.",
      },
      {
        heading: "Discovery Phase",
        body: "Both sides exchange documents, take depositions, and retain expert witnesses. Discovery can take six to twelve months in complex cases.",
      },
      {
        heading: "Pretrial Motions and Mediation",
        body: "Attorneys file motions to shape what evidence and arguments the jury will hear. Courts often require mediation — a settlement conference with a neutral mediator — before trial.",
      },
      {
        heading: "The Trial",
        body: "Nevada personal injury trials involve jury selection, opening statements, witness testimony, expert testimony, closing arguments, and jury deliberation. Most trials last two to ten days.",
      },
    ]
  ),
  "discovery-process": stub(
    "discovery-process",
    "The Discovery Process in Nevada Personal Injury Cases",
    "Discovery is the phase of litigation where both sides gather and exchange information. Understanding discovery helps you participate effectively in your own case.",
    [
      {
        heading: "Interrogatories",
        body: "Written questions submitted to the opposing party, who must answer under oath. Interrogatories cover basic facts about the incident, injuries, witnesses, and insurance coverage.",
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
    "Deposition Guide for Nevada Injury Victims",
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
    "Mediation and Arbitration in Nevada Injury Cases",
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
        body: "Nevada courts often require mediation before trial. Some insurance policies require arbitration for uninsured motorist claims. Your attorney will evaluate whether ADR is appropriate and advantageous for your case.",
      },
    ]
  ),
  "calculating-damages": stub(
    "calculating-damages",
    "How Damages Are Calculated in Nevada Injury Cases",
    "Understanding how damages are calculated helps you set realistic expectations and ensures you don't leave money on the table when negotiating your settlement.",
    [
      {
        heading: "Economic Damages",
        body: "Economic damages are calculable dollar amounts: past medical bills, future medical expenses (calculated with a life-care planner), lost wages, loss of future earning capacity, and property damage. These require documentation and, for future costs, expert testimony.",
      },
      {
        heading: "Non-Economic Damages",
        body: "Non-economic damages compensate for intangible harms: pain and suffering, emotional distress, loss of enjoyment of life, disfigurement, and loss of consortium. These are harder to quantify and are often the largest component of serious injury settlements.",
      },
      {
        heading: "The Multiplier Method",
        body: "Insurance companies often calculate non-economic damages using a multiplier applied to economic damages (e.g., 1.5x to 5x). More serious injuries command higher multipliers. Our attorneys use this and other methods to establish the maximum defensible value of your non-economic damages.",
      },
      {
        heading: "Punitive Damages",
        body: "Punitive damages are available when a defendant's conduct was oppressive, fraudulent, or malicious. Nevada caps punitive damages at three times compensatory damages, or $300,000 if compensatory damages are under $100,000.",
      },
    ]
  ),
  "liens-and-subrogation": stub(
    "liens-and-subrogation",
    "Liens and Subrogation in Nevada Injury Settlements",
    "When your health insurance, Medicare, Medicaid, or workers' compensation carrier pays for your injury-related treatment, they often have a right to be reimbursed from your settlement. This is called a lien or subrogation right.",
    [
      {
        heading: "What Is a Medical Lien?",
        body: "A medical lien is a legal claim by a healthcare provider or insurer against your settlement, requiring you to reimburse them for treatment costs before you receive your net proceeds.",
      },
      {
        heading: "Types of Liens in Nevada",
        body: "Common liens include health insurance subrogation, Medicare/Medicaid liens (governed by federal law), workers' compensation liens, hospital liens under NRS 108.590, and attorney fee liens.",
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
    "Collecting Your Personal Injury Judgment in Nevada",
    "Winning a judgment is one thing — collecting it is another. Here's how the collection process works after a Nevada court awards you damages.",
    [
      {
        heading: "Insurance Policy Limits",
        body: "In most cases, your recovery is limited by the defendant's insurance policy limits. If your damages exceed those limits, you may be able to access your own underinsured motorist (UIM) coverage.",
      },
      {
        heading: "Judgment Liens",
        body: "A court judgment can be recorded as a lien against the defendant's real property in Nevada. This prevents them from selling or refinancing without paying you.",
      },
      {
        heading: "Wage Garnishment",
        body: "Nevada allows judgment creditors to garnish up to 25% of a defendant's disposable wages (after exemptions). We pursue every available collection method to recover what the court awarded you.",
      },
      {
        heading: "When the Defendant Has No Assets",
        body: "If the defendant has no insurance and no assets, collection may be difficult or impossible. This is why uninsured motorist coverage is so important. We counsel every client on coverage issues before they become a problem.",
      },
    ]
  ),
};

export function getLegalProcessContent(slug: string): LegalProcessContent | null {
  return legalProcessContent[slug as LegalProcessSlug] ?? null;
}

export { legalProcessContent };
