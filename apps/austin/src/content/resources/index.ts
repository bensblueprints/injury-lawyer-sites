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
    metaTitle: "Texas Accident Checklist | Austin Injury Law Group",
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
    metaTitle: "Texas Auto Insurance Guide | Austin Injury Law Group",
    metaDescription:
      "Understand Texas auto insurance requirements, coverage types, and how to navigate an insurance claim after an accident in Austin.",
    intro:
      "Texas's insurance laws directly affect your ability to recover compensation after an accident. This guide explains what you need to know.",
    sections: [
      {
        heading: "Texas Minimum Coverage Requirements",
        body: "Texas requires all drivers to carry minimum liability insurance of $30,000 per person / $60,000 per accident for bodily injury, and $25,000 for property damage (30/60/25). These minimums are often inadequate for serious injuries given Austin's high cost of medical care.",
      },
      {
        heading: "Uninsured/Underinsured Motorist Coverage",
        body: "Texas insurers must offer UM/UIM coverage. This coverage pays when the at-fault driver has no insurance or insufficient insurance. With Austin's rapidly growing population and high traffic volume, UM/UIM coverage is critical.",
      },
      {
        heading: "Personal Injury Protection (PIP)",
        body: "Texas requires insurers to offer Personal Injury Protection (PIP), which pays your medical bills and a portion of lost wages regardless of fault. You must affirmatively reject PIP in writing if you do not want it.",
      },
      {
        heading: "How Insurance Companies Investigate Claims",
        body: "After filing a claim, an insurance adjuster reviews police reports, medical records, and vehicle damage. They may request a recorded statement. Never provide a recorded statement without consulting an Austin injury attorney first.",
      },
    ],
  },
  "medical-treatment-guide": {
    slug: "medical-treatment-guide",
    title: "Medical Treatment Guide for Texas Injury Victims",
    metaTitle: "Medical Treatment Guide for Injury Victims | Austin Injury Law Group",
    metaDescription:
      "What to know about medical treatment after a personal injury in Austin and Texas. Protect your health and your legal claim.",
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
        body: "For personal injury purposes, you generally have the right to choose your own treating physician in Texas. Choose a specialist appropriate to your injuries — orthopedist, neurologist, or other specialist as indicated by your condition.",
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
    metaTitle: "Evidence Preservation Guide | Austin Injury Law Group",
    metaDescription:
      "How to preserve critical evidence after an accident in Austin and Texas. Protect your personal injury claim from the start.",
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
        body: "Your attorney should send a preservation letter to relevant parties demanding that they preserve surveillance footage, maintenance records, and vehicle data. Our Austin office does this immediately upon retention.",
      },
    ],
  },
  "texas-court-guide": {
    slug: "texas-court-guide",
    title: "Texas Court Guide: Personal Injury Litigation in Austin",
    metaTitle: "Texas Court Guide for Injury Victims | Austin Injury Law Group",
    metaDescription:
      "A guide to Texas and Austin courts for personal injury victims. Learn how the court system works and what to expect during litigation.",
    intro:
      "If your injury case goes to litigation in Austin, understanding how Texas and Travis County courts work will help you participate more effectively.",
    sections: [
      {
        heading: "Which Court Handles Your Case?",
        body: "Cases seeking under $20,000 may be filed in Travis County Justice of the Peace or County Court at Law. Cases between $20,000 and $200,000 are heard in County Court at Law. Cases over $200,000 are filed in a Texas District Court.",
      },
      {
        heading: "Travis County District Courts",
        body: "Most significant personal injury cases in Austin are filed in Travis County District Court at the Travis County Courthouse, 1000 Guadalupe St, Austin, TX 78701. Travis County has multiple civil district courts.",
      },
      {
        heading: "Case Timeline",
        body: "After filing, the court issues a scheduling order setting deadlines for discovery, expert designations, and trial. Most Travis County personal injury cases proceed to trial within 18 to 24 months of filing.",
      },
      {
        heading: "Jury Trials in Texas",
        body: "Texas personal injury cases are decided by a jury of twelve (district court) or six (county court). Jurors are selected through voir dire. Texas allows non-unanimous jury verdicts in civil cases — 10 of 12 jurors must agree.",
      },
    ],
  },
  "recovery-timeline": {
    slug: "recovery-timeline",
    title: "Personal Injury Case Timeline: What to Expect in Austin",
    metaTitle: "Injury Case Timeline | Austin Injury Law Group",
    metaDescription:
      "A realistic timeline for a personal injury case in Austin and Texas. Know what to expect from consultation through resolution.",
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
        body: "Your attorney sends a demand letter to the insurer. Negotiations proceed over one to three months. Many cases settle during this phase. If not, a lawsuit is filed in Travis County.",
      },
      {
        heading: "Months 12–36+: Litigation (If Necessary)",
        body: "Litigation involves filing the petition, completing discovery, expert designations, pretrial motions, and potentially a trial. Complex cases may take two to three years from injury to trial.",
      },
    ],
  },
  "local-resources": {
    slug: "local-resources",
    title: "Local Resources for Injury Victims in Austin",
    metaTitle: "Local Resources for Injury Victims | Austin Injury Law Group",
    metaDescription:
      "A guide to local emergency services, hospitals, courts, and support resources for accident victims in Austin and Travis County, Texas.",
    intro:
      "If you or a loved one has been injured in Austin, knowing where to turn for help is critical. This page compiles key local resources for Travis County injury victims.",
    sections: [
      {
        heading: "Emergency Services",
        body: "Austin Police Department: Non-emergency line (512) 974-5000. Austin Fire Department: Non-emergency (512) 974-0130. Texas DPS Highway Patrol (Austin/Travis County): (512) 997-4500. For all emergencies, dial 911.",
      },
      {
        heading: "Hospitals and Trauma Centers",
        body: "University Medical Center Brackenridge (Ascension Seton Medical Center Austin) — 1201 W. 38th St — Travis County's primary Level I Trauma Center. St. David's Medical Center — 919 E. 32nd St — Level II Trauma. Dell Seton Medical Center at The University of Texas — 1500 Red River St — Level I Trauma.",
      },
      {
        heading: "Courts and Government Offices",
        body: "Travis County District Courts: 1000 Guadalupe St, Austin, TX 78701. Travis County Clerk: (512) 854-9188. Texas DMV Austin Regional Service Center: (512) 465-7611. Travis County Risk Management: (512) 854-9119.",
      },
      {
        heading: "Victim Support and Legal Aid",
        body: "Austin Volunteer Lawyer Program: (512) 476-5550. Texas Legal Services Center: (512) 477-6000. Austin/Travis County SafePlace (crisis support): (512) 267-SAFE. Texas 211: Dial 2-1-1 for social service referrals.",
      },
    ],
  },
  "accident-reports": {
    slug: "accident-reports",
    title: "How to Get Accident Reports in Austin and Texas",
    metaTitle: "How to Get Accident Reports in Austin | Austin Injury Law Group",
    metaDescription:
      "Step-by-step guide to obtaining police accident reports, Texas DPS crash records, and incident reports after a crash in Austin or Travis County.",
    intro:
      "Obtaining the official accident report is one of the most important steps after a crash in Austin. This guide explains how to request reports from the Austin Police Department, Texas DPS, and TxDOT.",
    sections: [
      {
        heading: "Austin Police Department Reports",
        body: "APD accident reports can be requested online through the APD Open Records portal at austintexas.gov/police, by mail to Austin Police Department Records Division (715 E. 8th St., Austin, TX 78701), or in person. Reports are typically available within 5–10 business days. The fee is approximately $6 per report.",
      },
      {
        heading: "Texas DPS Crash Records",
        body: "Crashes investigated by the Texas Department of Public Safety on state highways and interstates can be ordered through TxDPS at txdps.state.tx.us or by calling (512) 424-2600. Processing typically takes 7–14 business days.",
      },
      {
        heading: "TxDOT Crash Records Information System (CRIS)",
        body: "TxDOT maintains the Crash Records Information System (CRIS) — a statewide database of all reportable crashes. Certified crash reports can be requested at txdot.gov/about/get-involved/crash-records.html. You will need the crash date, location, and parties involved.",
      },
      {
        heading: "Why Accident Reports Matter",
        body: "The official police report documents fault findings, citations issued, witness information, road and weather conditions, and vehicle damage. It is a foundational piece of evidence in any insurance claim or personal injury lawsuit. Your attorney uses this report to establish liability.",
      },
    ],
  },
  "hospitals": {
    slug: "hospitals",
    title: "Major Hospitals Near Austin for Injury Treatment",
    metaTitle: "Major Hospitals in Austin for Injury Treatment | Austin Injury Law Group",
    metaDescription:
      "A guide to major hospitals, trauma centers, and urgent care facilities in Austin and the surrounding area for accident and injury victims.",
    intro:
      "After a serious accident in Austin, getting to the right medical facility quickly can save your life and strengthen your injury claim. Here are the major hospitals and trauma centers serving the Austin metro area.",
    sections: [
      {
        heading: "Level I Trauma Centers",
        body: "Dell Seton Medical Center at The University of Texas — 1500 Red River St, Austin, TX 78701 — (512) 324-7000. Dell Seton is Travis County's flagship Level I Trauma Center, operated in partnership with UT Austin and staffed by UT Dell Medical School faculty.",
      },
      {
        heading: "Additional Major Hospitals",
        body: "St. David's Medical Center — 919 E. 32nd St, Austin, TX 78705 — (512) 476-7111 — Level II Trauma Center. Ascension Seton Medical Center Austin — 1201 W. 38th St — (512) 324-1000. St. David's South Austin Medical Center — 901 W. Ben White Blvd — (512) 447-2211.",
      },
      {
        heading: "Specialty and Suburban Hospitals",
        body: "Dell Children's Medical Center — 4900 Mueller Blvd (pediatric trauma). Baylor Scott & White Medical Center — Round Rock (Level II Trauma). Ascension Seton Northwest — 11113 Research Blvd — (512) 324-6000. Ascension Seton Hays — 6001 Kyle Pkwy, Kyle — (512) 504-5000.",
      },
      {
        heading: "Urgent Care and After-Hours Options",
        body: "For non-life-threatening injuries, NextCare Urgent Care, CareNow, and Concentra operate multiple Austin-area locations. Documenting injuries promptly at any licensed medical facility — including urgent care — creates a critical medical record for your claim.",
      },
    ],
  },
  "accident-statistics": {
    slug: "accident-statistics",
    title: "Austin Accident Statistics and Traffic Safety Data",
    metaTitle: "Austin Accident Statistics | Austin Injury Law Group",
    metaDescription:
      "Traffic crash statistics, dangerous intersections, and injury trends in Austin and Travis County, Texas.",
    intro:
      "Austin's explosive population growth has brought dramatically increased traffic and crash rates. Understanding local accident statistics underscores why experienced legal representation matters after a crash.",
    sections: [
      {
        heading: "Statewide and Travis County Crash Data",
        body: "Texas reports over 3,500 traffic fatalities per year. Travis County has seen rising crash totals alongside rapid population growth, with TxDOT's CRIS database reporting thousands of injury-causing crashes annually in the Austin metro. Austin has declared traffic fatalities a 'Vision Zero' public safety priority.",
      },
      {
        heading: "Pedestrian and Cyclist Danger",
        body: "Austin consistently ranks among the most dangerous Texas cities for pedestrians and cyclists. High-risk areas include South Congress Ave, East 6th Street, Airport Blvd, and Rundberg Lane. The proliferation of scooters, e-bikes, and rideshare vehicles adds additional complexity to Austin traffic.",
      },
      {
        heading: "Most Dangerous Intersections and Corridors",
        body: "Historically high-crash areas in Austin include I-35 corridor through downtown, MoPac (Loop 1) in the Barton Springs area, US-183 (Ed Bluestein Blvd), Ben White Blvd (SH 71), and FM 620 in Round Rock/Cedar Park. TxDOT updates crash data annually through the CRIS database.",
      },
      {
        heading: "DUI and Impaired Driving Trends",
        body: "Austin's entertainment districts — 6th Street, Rainey Street, and South Congress — generate significant late-night impaired driving activity. Texas consistently ranks in the top five states for drunk driving fatalities. DUI crashes often support exemplary damage claims under Texas law.",
      },
    ],
  },
  "court-system": {
    slug: "court-system",
    title: "Austin Court System Guide for Injury Victims",
    metaTitle: "Austin Court System Guide | Austin Injury Law Group",
    metaDescription:
      "Understand which Austin and Travis County courts handle personal injury cases and how the court system works for injury victims.",
    intro:
      "If your personal injury case proceeds to litigation in Austin, it will be handled by one of several courts depending on the amount at stake. Here is what injury victims need to know about the Travis County and Texas court system.",
    sections: [
      {
        heading: "Justice of the Peace and County Courts at Law",
        body: "Small claims (under $20,000) are handled by Travis County Justice of the Peace courts. Claims between $20,000 and $250,000 may be filed in Travis County Courts at Law located at the Travis County Courthouse, 1000 Guadalupe St, Austin, TX 78701.",
      },
      {
        heading: "Travis County District Courts",
        body: "Most significant personal injury lawsuits are filed in Travis County District Court at the Travis County Courthouse, 1000 Guadalupe St, Austin, TX 78701. Phone: (512) 854-9188. Travis County has multiple civil district courts dedicated to civil litigation.",
      },
      {
        heading: "Federal District Court",
        body: "Cases involving parties from different states with damages over $75,000, or cases involving federal law, may be filed in the U.S. District Court for the Western District of Texas — Austin Division, located at 501 W. 5th St., Austin, TX 78701.",
      },
      {
        heading: "Case Timelines and Mediation",
        body: "Travis County courts issue scheduling orders setting deadlines for discovery, expert designations, and trial. Most Austin personal injury cases proceed to trial within 18 to 24 months of filing. Courts regularly order mediation, which resolves many cases before trial.",
      },
    ],
  },
  "insurance-companies": {
    slug: "insurance-companies",
    title: "Dealing with Insurance Companies in Austin and Texas",
    metaTitle: "Dealing with Insurance Companies in Austin | Austin Injury Law Group",
    metaDescription:
      "What to know about dealing with insurance adjusters and insurance companies after an accident in Austin and Texas.",
    intro:
      "Insurance companies operating in Texas are regulated by the Texas Department of Insurance — but regulation does not guarantee fair treatment. Understanding how insurers operate helps you protect your claim.",
    sections: [
      {
        heading: "Major Auto Insurers in Texas",
        body: "The largest auto insurers in Texas include State Farm, GEICO, Progressive, Allstate, Farmers, USAA (headquartered in San Antonio), and Texas Farm Bureau. Each has dedicated claims departments whose primary goal is to resolve claims at the lowest possible cost.",
      },
      {
        heading: "Texas Bad Faith Insurance Law",
        body: "Under the Texas Insurance Code Chapter 541 and the Deceptive Trade Practices Act (DTPA), insurance companies must investigate claims promptly and make fair offers. Violations can entitle you to additional damages, attorney fees, and potentially treble damages under the DTPA.",
      },
      {
        heading: "Common Insurance Adjuster Tactics",
        body: "Adjusters are trained to: call immediately after an accident while you are off-guard; request recorded statements; offer low-ball settlements before you understand your full damages; create delays hoping you'll become financially desperate. Never speak with an opposing insurer without your attorney present.",
      },
      {
        heading: "Negotiation Tips and When to Involve an Attorney",
        body: "Never accept a first offer without legal review. Do not provide a recorded statement to the at-fault driver's insurer. If an adjuster denies your claim, disputes liability, or offers less than your documented damages, contact our Austin office immediately. We work on contingency — no fee unless we win.",
      },
    ],
  },
};

export function getResourceContent(slug: string): ResourceContent | null {
  return resourceContent[slug as ResourceSlug] ?? null;
}

export { resourceContent };
