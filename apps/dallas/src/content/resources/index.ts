import type { ResourceContent } from "../types";

export const RESOURCE_SLUGS = [
  "texas-accident-checklist",
  "texas-insurance-guide",
  "medical-treatment-guide",
  "evidence-preservation-guide",
  "texas-court-guide",
  "recovery-timeline",
  "local-resources",
  "accident-reports",
  "hospitals",
  "accident-statistics",
  "court-system",
  "insurance-companies",
] as const;

export type ResourceSlug = (typeof RESOURCE_SLUGS)[number];

const resourceContent: Record<ResourceSlug, ResourceContent> = {
  "texas-accident-checklist": {
    slug: "texas-accident-checklist",
    title: "Texas Accident Checklist: What to Do After an Injury",
    metaTitle: "Texas Accident Checklist | Dallas Injury Law Group",
    metaDescription:
      "A complete checklist of steps to take after an accident in Texas. Protect your health, preserve evidence, and protect your legal rights.",
    intro:
      "Following the right steps after an accident in Texas can make the difference between a full recovery and leaving money on the table. Use this checklist to protect yourself.",
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
  "texas-insurance-guide": {
    slug: "texas-insurance-guide",
    title: "Texas Auto Insurance Guide for Injury Victims",
    metaTitle: "Texas Auto Insurance Guide | Dallas Injury Law Group",
    metaDescription:
      "Understand Texas auto insurance requirements, coverage types, and how to navigate an insurance claim after an accident in Dallas.",
    intro:
      "Texas's insurance laws directly affect your ability to recover compensation after an accident. This guide explains what you need to know.",
    sections: [
      {
        heading: "Texas Minimum Coverage Requirements",
        body: "Texas requires all drivers to carry minimum liability insurance: $30,000 per person / $60,000 per accident for bodily injury, and $25,000 for property damage (30/60/25). These minimums are often inadequate for serious injuries.",
      },
      {
        heading: "Uninsured/Underinsured Motorist Coverage",
        body: "Texas insurers must offer UM/UIM coverage. This coverage pays when the at-fault driver has no insurance or insufficient insurance. It is one of the most important coverages you can carry on Texas roads.",
      },
      {
        heading: "Personal Injury Protection (PIP)",
        body: "Texas requires insurers to offer Personal Injury Protection (PIP), which pays your medical bills and a portion of lost wages regardless of fault. You must affirmatively reject PIP in writing if you do not want it.",
      },
      {
        heading: "How Insurance Companies Investigate Claims",
        body: "After filing a claim, an insurance adjuster is assigned to investigate. They review police reports, medical records, and vehicle damage. They may contact you for a recorded statement. Never provide a recorded statement without consulting an attorney first.",
      },
    ],
  },
  "medical-treatment-guide": {
    slug: "medical-treatment-guide",
    title: "Medical Treatment Guide for Texas Injury Victims",
    metaTitle: "Medical Treatment Guide for Injury Victims | Dallas Injury Law Group",
    metaDescription:
      "What to know about medical treatment after a personal injury in Dallas and Texas. Protect your health and your legal claim.",
    intro:
      "Proper medical treatment after an injury serves two purposes: restoring your health and documenting your damages. This guide helps you navigate the medical side of your injury claim.",
    sections: [
      {
        heading: "Seek Treatment Immediately",
        body: "Do not wait to see a doctor. Delayed treatment is one of the most common reasons insurance companies deny or reduce claims. Prompt medical attention creates a medical record that connects your injuries to the accident.",
      },
      {
        heading: "Follow All Treatment Recommendations",
        body: "Attend all appointments, follow your doctor's instructions, and complete all prescribed physical therapy or rehabilitation. Missed appointments give insurance companies grounds to argue you were not seriously injured.",
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
    title: "Evidence Preservation Guide for Texas Injury Cases",
    metaTitle: "Evidence Preservation Guide | Dallas Injury Law Group",
    metaDescription:
      "How to preserve critical evidence after an accident in Dallas and Texas. Protect your personal injury claim from the start.",
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
        body: "Your attorney should send a preservation or spoliation letter to relevant parties demanding that they preserve surveillance footage, maintenance records, and vehicle data. Our office does this immediately upon retention.",
      },
    ],
  },
  "texas-court-guide": {
    slug: "texas-court-guide",
    title: "Texas Court Guide: Personal Injury Litigation in Dallas",
    metaTitle: "Texas Court Guide for Injury Victims | Dallas Injury Law Group",
    metaDescription:
      "A guide to Texas and Dallas courts for personal injury victims. Learn how the court system works and what to expect during litigation.",
    intro:
      "If your injury case goes to litigation, understanding how Texas and Dallas courts work will help you participate more effectively and set realistic expectations.",
    sections: [
      {
        heading: "Which Court Handles Your Case?",
        body: "Cases seeking under $20,000 may be filed in a Dallas County Justice of the Peace or County Court at Law. Cases between $20,000 and $200,000 are heard in County Court at Law. Cases over $200,000 — or those involving title to land or injunctive relief — are filed in a Texas District Court.",
      },
      {
        heading: "Dallas County District Courts",
        body: "Most significant personal injury cases are filed in one of Dallas County's civil district courts at the George Allen Sr. Courts Building, 600 Commerce St., Dallas, TX 75202. Dallas County has multiple civil district courts including the 14th, 44th, 68th, 95th, 116th, 134th, 160th, 162nd, 191st, 192nd, 193rd, 194th, and 298th.",
      },
      {
        heading: "Case Timeline",
        body: "After filing, the court issues a scheduling order setting deadlines for discovery, expert designations, dispositive motions, and trial. Most Dallas County personal injury cases proceed to trial within 18 to 24 months of filing.",
      },
      {
        heading: "Jury Trials in Texas",
        body: "Texas personal injury cases are decided by a jury of twelve (district court) or six (county court). Jurors are selected through voir dire, and both sides have the right to use peremptory challenges. Texas allows less-than-unanimous jury verdicts in civil cases (10 of 12 jurors must agree).",
      },
    ],
  },
  "recovery-timeline": {
    slug: "recovery-timeline",
    title: "Personal Injury Case Timeline: What to Expect in Dallas",
    metaTitle: "Injury Case Timeline | Dallas Injury Law Group",
    metaDescription:
      "A realistic timeline for a personal injury case in Dallas and Texas. Know what to expect from consultation through resolution.",
    intro:
      "Personal injury cases in Texas can take anywhere from a few months to several years to resolve. This timeline gives you a realistic picture of the process.",
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
        body: "Your attorney sends a demand letter to the insurer. Negotiations proceed over one to three months. Many cases settle during this phase. If not, a lawsuit is filed in Dallas County.",
      },
      {
        heading: "Months 12–36+: Litigation (If Necessary)",
        body: "Litigation involves filing the petition, completing discovery, expert designations, pretrial motions, and potentially a trial. Complex cases may take two to three years from injury to trial.",
      },
    ],
  },
  "local-resources": {
    slug: "local-resources",
    title: "Local Resources for Injury Victims in Dallas",
    metaTitle: "Local Resources for Injury Victims | Dallas Injury Law Group",
    metaDescription:
      "A guide to local emergency services, hospitals, courts, and support resources for accident victims in Dallas and Dallas County, Texas.",
    intro:
      "If you or a loved one has been injured in Dallas, knowing where to turn for help is critical. This page compiles key local resources for Dallas County injury victims.",
    sections: [
      {
        heading: "Emergency Services",
        body: "Dallas Police Department: Non-emergency line (214) 744-4444. Dallas Fire-Rescue: Non-emergency (214) 670-4280. Texas Department of Public Safety (TxDPS) Troop A: (972) 223-9010. For all emergencies, dial 911.",
      },
      {
        heading: "Hospitals and Trauma Centers",
        body: "Parkland Memorial Hospital — 5200 Harry Hines Blvd — Dallas's primary Level I Trauma Center and county hospital. UT Southwestern Medical Center — 5323 Harry Hines Blvd. Baylor University Medical Center — 3500 Gaston Ave — Level II Trauma. Methodist Dallas Medical Center — 1441 N. Beckley Ave.",
      },
      {
        heading: "Courts and Government Offices",
        body: "Dallas County District Courts: George Allen Sr. Courts Building, 600 Commerce St, Dallas, TX 75202. Dallas County Clerk: (214) 653-7099. Texas DMV Regional Service Center — Dallas: (888) 368-4689. Dallas County Risk Management: (214) 653-6200.",
      },
      {
        heading: "Victim Support and Legal Aid",
        body: "Dallas Volunteer Attorney Program (DVAP): (214) 243-2243 — free civil legal aid. Victim Connect Resource Center: 1-855-4-VICTIM. Dallas County Crime Victims Assistance: (214) 653-3627. Texas 211: Dial 2-1-1 for social service referrals.",
      },
    ],
  },
  "accident-reports": {
    slug: "accident-reports",
    title: "How to Get Accident Reports in Dallas and Texas",
    metaTitle: "How to Get Accident Reports in Dallas | Dallas Injury Law Group",
    metaDescription:
      "Step-by-step guide to obtaining police accident reports, Texas DPS crash records, and incident reports after a crash in Dallas or Dallas County.",
    intro:
      "Obtaining the official accident report is one of the most important steps after a crash in Dallas. This guide explains how to request reports from the Dallas Police Department, Texas DPS, and the Texas Department of Transportation.",
    sections: [
      {
        heading: "Dallas Police Department Reports",
        body: "DPD accident reports can be requested online through the DPD Open Records portal at dallaspolice.net, by mail to Dallas Police Department Records Division (1400 South Lamar St., Dallas, TX 75215), or in person. Most reports are available 5–10 business days after the crash. The fee is approximately $6 per report.",
      },
      {
        heading: "Texas DPS Crash Records",
        body: "Crashes investigated by the Texas Department of Public Safety (on state highways and interstates) can be ordered through the TxDPS Crash Records portal at txdps.state.tx.us or by calling (512) 424-2600. Processing typically takes 7–14 business days.",
      },
      {
        heading: "Texas Department of Transportation (TxDOT) Records",
        body: "TxDOT maintains a Crash Records Information System (CRIS) database of all reportable Texas crashes. Certified crash reports can be requested at txdot.gov/about/get-involved/crash-records.html. You will need the crash date, location, and parties' information.",
      },
      {
        heading: "Why Accident Reports Matter",
        body: "The official police report documents fault findings, citations issued, witness information, road and weather conditions, and vehicle damage. It is a foundational piece of evidence in any insurance claim or personal injury lawsuit. Your attorney uses this report to establish liability.",
      },
    ],
  },
  "hospitals": {
    slug: "hospitals",
    title: "Major Hospitals Near Dallas for Injury Treatment",
    metaTitle: "Major Hospitals in Dallas for Injury Treatment | Dallas Injury Law Group",
    metaDescription:
      "A guide to major hospitals, trauma centers, and urgent care facilities in Dallas and the surrounding metro area for accident and injury victims.",
    intro:
      "After a serious accident in Dallas, getting to the right medical facility quickly can save your life and strengthen your injury claim. Here are the major hospitals and trauma centers serving the Dallas-Fort Worth area.",
    sections: [
      {
        heading: "Level I Trauma Centers",
        body: "Parkland Memorial Hospital — 5200 Harry Hines Blvd, Dallas, TX 75235 — (214) 590-8000. Parkland is Dallas County's primary Level I Trauma Center and handles the highest volume of major trauma in North Texas. UT Southwestern is co-located nearby and provides specialist support.",
      },
      {
        heading: "Additional Level I and Level II Trauma Centers",
        body: "Baylor University Medical Center at Dallas — 3500 Gaston Ave, Dallas, TX 75246 — (214) 820-0111 — Level II Trauma. Methodist Dallas Medical Center — 1441 N. Beckley Ave — Level II Trauma. Texas Health Presbyterian Hospital Dallas — 8200 Walnut Hill Ln — (214) 345-6789.",
      },
      {
        heading: "Specialty and Suburban Hospitals",
        body: "Children's Medical Center Dallas — 1935 Medical District Dr (pediatric trauma). Baylor Scott & White Medical Center — Plano (Level II Trauma). Medical City Dallas Hospital — 7777 Forest Ln — (972) 566-7000. UT Southwestern Clements University Hospital — 6201 Harry Hines Blvd — (214) 645-0000.",
      },
      {
        heading: "Urgent Care and After-Hours Options",
        body: "For non-life-threatening injuries, CareNow, FastMed, and TexasHealth GoHealth Urgent Care operate numerous Dallas-area locations. Documenting injuries promptly at any licensed medical facility — including urgent care — creates a critical medical record for your claim.",
      },
    ],
  },
  "accident-statistics": {
    slug: "accident-statistics",
    title: "Dallas Accident Statistics and Traffic Safety Data",
    metaTitle: "Dallas Accident Statistics | Dallas Injury Law Group",
    metaDescription:
      "Traffic crash statistics, dangerous intersections, and injury trends in Dallas and Dallas County, Texas.",
    intro:
      "Dallas consistently ranks among the most dangerous cities in Texas for traffic fatalities and serious injuries. Understanding local accident statistics underscores why experienced legal representation matters after a crash.",
    sections: [
      {
        heading: "Statewide and Dallas County Crash Data",
        body: "Texas reports over 3,500 traffic fatalities per year — one of the highest totals of any state. Dallas County alone accounts for hundreds of traffic deaths annually. TxDOT's CRIS database shows Dallas County averaging over 25,000 injury-causing crashes per year in recent reporting periods.",
      },
      {
        heading: "Pedestrian and Cyclist Danger",
        body: "Dallas ranks among the most dangerous large cities in the U.S. for pedestrian fatalities. High-risk corridors include Garland Road, Buckner Blvd, Northwest Highway, and portions of I-30. Distracted driving, high speed limits, and limited pedestrian infrastructure are contributing factors.",
      },
      {
        heading: "Most Dangerous Intersections",
        body: "Historically high-crash intersections in Dallas include I-635 (LBJ Freeway) interchange areas, I-30 & I-35E, Northwest Highway & Skillman St, Garland Rd & Buckner Blvd, and Stemmons Freeway corridor. TxDOT publishes updated intersection crash data annually through CRIS.",
      },
      {
        heading: "DUI and Impaired Driving Trends",
        body: "Texas consistently ranks in the top five states for drunk driving fatalities. Dallas sees a disproportionate number of DUI-related crashes on weekends and during major events at AT&T Stadium and American Airlines Center. DUI crashes often support punitive (exemplary) damage claims under Texas law.",
      },
    ],
  },
  "court-system": {
    slug: "court-system",
    title: "Dallas Court System Guide for Injury Victims",
    metaTitle: "Dallas Court System Guide | Dallas Injury Law Group",
    metaDescription:
      "Understand which Dallas and Texas courts handle personal injury cases and how the court system works for injury victims in Dallas County.",
    intro:
      "If your personal injury case proceeds to litigation in Dallas, it will be handled by one of several courts depending on the amount at stake. Here is what injury victims need to know about the Dallas County court system.",
    sections: [
      {
        heading: "Justice of the Peace and County Courts at Law",
        body: "Small claims (under $20,000) are handled by Dallas County Justice of the Peace courts. Claims between $20,000 and $250,000 may be filed in Dallas County Courts at Law. Dallas County has multiple civil courts at law located at 600 Commerce St., Dallas, TX 75202.",
      },
      {
        heading: "Dallas County District Courts",
        body: "Most significant personal injury lawsuits are filed in one of Dallas County's civil district courts at the George Allen Sr. Courts Building, 600 Commerce St., Dallas, TX 75202. Phone: (214) 653-7099. Dallas has over a dozen civil district courts dedicated to civil litigation.",
      },
      {
        heading: "Federal District Court",
        body: "Cases involving parties from different states with damages over $75,000, or cases involving federal law, may be filed in the U.S. District Court for the Northern District of Texas — Dallas Division, located at 1100 Commerce St., Dallas, TX 75242.",
      },
      {
        heading: "Case Timelines and Mediation",
        body: "Dallas County courts issue scheduling orders that set deadlines for discovery, expert designations, and trial. Most Dallas personal injury cases are tried within 18 to 24 months of filing. Courts routinely order mediation, which resolves a significant percentage of cases before trial.",
      },
    ],
  },
  "insurance-companies": {
    slug: "insurance-companies",
    title: "Dealing with Insurance Companies in Dallas and Texas",
    metaTitle: "Dealing with Insurance Companies in Dallas | Dallas Injury Law Group",
    metaDescription:
      "What to know about dealing with insurance adjusters and insurance companies after an accident in Dallas and Texas.",
    intro:
      "Insurance companies operating in Texas are regulated by the Texas Department of Insurance — but regulation does not guarantee fair treatment. Understanding how insurers operate helps you protect your claim.",
    sections: [
      {
        heading: "Major Auto Insurers in Texas",
        body: "The largest auto insurers in Texas include State Farm, GEICO, Progressive, Allstate, Farmers, USAA (headquartered in San Antonio), and Texas Farm Bureau. Each has dedicated claims departments whose primary goal is to resolve claims at the lowest possible cost.",
      },
      {
        heading: "Texas Bad Faith Insurance Law",
        body: "Under the Texas Insurance Code Chapter 541 and the Deceptive Trade Practices Act (DTPA), insurance companies must investigate claims promptly, provide timely acknowledgment, and make fair offers. Violations can entitle you to additional damages, attorney fees, and potentially treble damages under the DTPA.",
      },
      {
        heading: "Common Insurance Adjuster Tactics",
        body: "Adjusters are trained to: call immediately after an accident while you are off-guard; request recorded statements; offer low-ball settlements before you understand your full damages; create delays; and scrutinize your medical treatment for gaps. Never speak with an opposing insurer without your attorney present.",
      },
      {
        heading: "Negotiation Tips and When to Involve an Attorney",
        body: "Never accept a first offer without legal review. Do not provide a recorded statement to the at-fault driver's insurer. If an adjuster denies your claim, disputes liability, or offers less than your documented damages, contact our Dallas office immediately. We work on contingency — no fee unless we win.",
      },
    ],
  },
};

export function getResourceContent(slug: string): ResourceContent | null {
  return resourceContent[slug as ResourceSlug] ?? null;
}

export { resourceContent };
