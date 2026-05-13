import type { ResourceContent } from "../types";

export const RESOURCE_SLUGS = [
  "nevada-accident-checklist",
  "nevada-insurance-guide",
  "medical-treatment-guide",
  "evidence-preservation-guide",
  "nevada-court-guide",
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
  "local-resources": {
    slug: "local-resources",
    title: "Local Resources for Injury Victims in Las Vegas",
    metaTitle: "Local Resources for Injury Victims | Las Vegas Injury Law Group",
    metaDescription:
      "A guide to local emergency services, hospitals, courts, and support resources for accident victims in Las Vegas and Clark County, Nevada.",
    intro:
      "If you or a loved one has been injured in Las Vegas, knowing where to turn for help is critical. This page compiles key local resources for Clark County injury victims.",
    sections: [
      {
        heading: "Emergency Services",
        body: "Las Vegas Metro Police Department (LVMPD): Non-emergency line (702) 828-3111. Clark County Fire Department: (702) 455-7316. Nevada Highway Patrol Las Vegas: (702) 486-4100. For all emergencies, dial 911.",
      },
      {
        heading: "Hospitals and Trauma Centers",
        body: "University Medical Center (UMC) — 1800 W. Charleston Blvd — Clark County's only Level I Trauma Center. Sunrise Hospital & Medical Center — 3186 Maryland Pkwy — Level II Trauma. Valley Hospital Medical Center — 620 Shadow Lane. Centennial Hills Hospital — 6900 N. Durango Dr.",
      },
      {
        heading: "Courts and Government Offices",
        body: "Eighth Judicial District Court (Clark County): 200 Lewis Ave, Las Vegas, NV 89155. Clark County Clerk's Office: (702) 671-0500. Nevada DMV (Las Vegas): 2701 E. Sahara Ave. Clark County Risk Management: (702) 455-3895.",
      },
      {
        heading: "Victim Support and Legal Aid",
        body: "Nevada Legal Services: (702) 386-0404 — free civil legal aid for qualifying individuals. Clark County Victim Services: (702) 671-4271. Nevada Coalition Against Sexual Violence: 1-800-992-5757. Nevada 211: Dial 2-1-1 for social service referrals statewide.",
      },
    ],
  },
  "accident-reports": {
    slug: "accident-reports",
    title: "How to Get Accident Reports in Las Vegas and Nevada",
    metaTitle: "How to Get Accident Reports in Las Vegas | Las Vegas Injury Law Group",
    metaDescription:
      "Step-by-step guide to obtaining police accident reports, DMV records, and incident reports after a crash in Las Vegas or Clark County, Nevada.",
    intro:
      "Obtaining the official accident report is one of the most important steps after a crash in Las Vegas. This guide explains how to request reports from LVMPD, Nevada Highway Patrol, and the Nevada DMV.",
    sections: [
      {
        heading: "Las Vegas Metro Police Department Reports",
        body: "LVMPD accident reports can be requested online at lvmpd.com, by mail to LVMPD Records & Fingerprint Bureau (400 S. Martin L. King Blvd., Las Vegas, NV 89106), or in person. Reports are typically available 5–10 business days after the crash. The fee is approximately $12 per report.",
      },
      {
        heading: "Nevada Highway Patrol Reports",
        body: "Crashes on Nevada state highways and interstates are handled by the Nevada Highway Patrol. NHP reports can be ordered through the NHP Records Unit at (775) 687-5300 or online at nhp.nv.gov. Processing time is 7–14 business days.",
      },
      {
        heading: "Nevada DMV Crash Records",
        body: "The Nevada DMV maintains statewide crash records. You can request a certified crash report through the DMV's Records Section at dmvnv.com or by visiting a Las Vegas DMV office. You will need the crash date, location, and the names of the parties involved.",
      },
      {
        heading: "Why Accident Reports Matter",
        body: "The official police report documents fault findings, citations issued, witness information, road and weather conditions, and vehicle damage. It is a foundational piece of evidence in any insurance claim or personal injury lawsuit. Your attorney uses this report to establish liability.",
      },
    ],
  },
  "hospitals": {
    slug: "hospitals",
    title: "Major Hospitals Near Las Vegas for Injury Treatment",
    metaTitle: "Major Hospitals in Las Vegas for Injury Treatment | Las Vegas Injury Law Group",
    metaDescription:
      "A guide to major hospitals, trauma centers, and urgent care facilities in Las Vegas and Clark County for accident and injury victims.",
    intro:
      "After a serious accident in Las Vegas, getting to the right medical facility quickly can save your life and strengthen your injury claim. Here are the major hospitals and trauma centers serving the Las Vegas Valley.",
    sections: [
      {
        heading: "Level I Trauma Center",
        body: "University Medical Center of Southern Nevada (UMC) — 1800 W. Charleston Blvd, Las Vegas, NV 89102 — (702) 383-2000. UMC is Clark County's only Level I Trauma Center, capable of handling the most severe traumatic injuries including spinal cord injuries, traumatic brain injuries, and multi-system trauma.",
      },
      {
        heading: "Level II Trauma Centers",
        body: "Sunrise Hospital & Medical Center — 3186 S. Maryland Pkwy, Las Vegas, NV 89109 — (702) 731-8000. Sunrise Children's Hospital (pediatric trauma) is co-located on the same campus. St. Rose Dominican Hospital – Rose de Lima Campus — 102 E. Lake Mead Pkwy, Henderson — also serves southern Clark County.",
      },
      {
        heading: "Other Major Hospitals",
        body: "Valley Hospital Medical Center — 620 Shadow Ln, Las Vegas — (702) 388-4000. Desert Springs Hospital — 2075 E. Flamingo Rd — (702) 369-7500. Spring Valley Hospital — 5400 S. Rainbow Blvd — (702) 853-3000. Centennial Hills Hospital — 6900 N. Durango Dr — (702) 835-9700.",
      },
      {
        heading: "Urgent Care and After-Hours Options",
        body: "For non-life-threatening injuries, CityMD, MountainView Urgent Care, and Concentra Medical Centers operate multiple Las Vegas Valley locations with extended hours. Documenting injuries promptly at any licensed medical facility — including urgent care — creates a critical medical record for your claim.",
      },
    ],
  },
  "accident-statistics": {
    slug: "accident-statistics",
    title: "Las Vegas Accident Statistics and Traffic Safety Data",
    metaTitle: "Las Vegas Accident Statistics | Las Vegas Injury Law Group",
    metaDescription:
      "Traffic crash statistics, dangerous intersections, and injury trends in Las Vegas and Clark County, Nevada.",
    intro:
      "Las Vegas consistently ranks among the most dangerous cities for pedestrians and drivers alike. Understanding local accident statistics underscores why experienced legal representation matters after a crash.",
    sections: [
      {
        heading: "Statewide and Clark County Crash Data",
        body: "Nevada reports approximately 300–330 traffic fatalities per year, with Clark County accounting for roughly 60% of all fatalities statewide. The Nevada Department of Transportation (NDOT) publishes annual crash summaries at nevadadot.com. In recent years, Las Vegas has averaged over 12,000 injury-causing crashes annually within Clark County.",
      },
      {
        heading: "Pedestrian and Cyclist Danger",
        body: "Las Vegas consistently ranks in the top 10 most dangerous large metro areas for pedestrian fatalities in the U.S., according to the Governors Highway Safety Association. The Strip corridor and surrounding blocks account for a disproportionate share of pedestrian fatalities. Alcohol, distracted driving, and inadequate crosswalk signaling are leading contributing factors.",
      },
      {
        heading: "Most Dangerous Intersections",
        body: "Historically high-crash intersections in the Las Vegas Valley include Charleston Blvd & Rainbow Blvd, Tropicana Ave & Pecos Rd, Flamingo Rd & Maryland Pkwy, and Craig Rd & Losee Rd in North Las Vegas. LVMPD and NDOT publish intersection crash data updated annually.",
      },
      {
        heading: "DUI and Impaired Driving Trends",
        body: "Nevada has one of the highest rates of alcohol-involved traffic fatalities in the nation. LVMPD conducts hundreds of DUI arrests each year during holiday enforcement campaigns. DUI crashes often result in severe injuries and may support punitive damages claims against the at-fault driver.",
      },
    ],
  },
  "court-system": {
    slug: "court-system",
    title: "Las Vegas Court System Guide for Injury Victims",
    metaTitle: "Las Vegas Court System Guide | Las Vegas Injury Law Group",
    metaDescription:
      "Understand which Las Vegas and Clark County courts handle personal injury cases and how the Nevada court system works for injury victims.",
    intro:
      "If your personal injury case proceeds to litigation in Las Vegas, it will be handled by one of several courts depending on the amount at stake. Here is what injury victims need to know about the Clark County court system.",
    sections: [
      {
        heading: "Justice Court: Claims Under $15,000",
        body: "Small personal injury claims (under $15,000) are filed in one of the Clark County Justice Courts — Las Vegas Justice Court, Henderson Justice Court, or North Las Vegas Justice Court, depending on where the incident occurred. Las Vegas Justice Court: 200 Lewis Ave, Las Vegas, NV 89155.",
      },
      {
        heading: "Eighth Judicial District Court",
        body: "Claims over $15,000 are filed in the Eighth Judicial District Court of Nevada — Clark County's general jurisdiction trial court. Address: Regional Justice Center, 200 Lewis Ave, Las Vegas, NV 89155. Phone: (702) 671-0500. This court handles the vast majority of significant personal injury lawsuits in the Las Vegas area.",
      },
      {
        heading: "Federal District Court",
        body: "Cases involving parties from different states (diversity jurisdiction) with damages over $75,000, or cases involving federal law, may be filed in the U.S. District Court for the District of Nevada — Las Vegas Division, located at 333 Las Vegas Blvd S., Las Vegas, NV 89101.",
      },
      {
        heading: "Short Trial Program",
        body: "Nevada offers a Short Trial program for cases in which damages are between $2,500 and $75,000. Short trials are decided by a jury of four and are limited in length. This program can resolve cases more quickly and cost-effectively than standard district court litigation.",
      },
    ],
  },
  "insurance-companies": {
    slug: "insurance-companies",
    title: "Dealing with Insurance Companies in Las Vegas and Nevada",
    metaTitle: "Dealing with Insurance Companies in Las Vegas | Las Vegas Injury Law Group",
    metaDescription:
      "What to know about dealing with insurance adjusters and insurance companies after an accident in Las Vegas and Nevada.",
    intro:
      "Insurance companies operating in Nevada are required to act in good faith — but that does not mean they will treat you fairly. Understanding how insurers operate helps you protect your claim from the moment of your accident.",
    sections: [
      {
        heading: "Major Auto Insurers in Nevada",
        body: "The largest auto insurers in Nevada include State Farm, GEICO, Progressive, Allstate, Farmers, USAA, and Travelers. Each has dedicated claims departments staffed by adjusters whose job is to resolve claims at the lowest possible cost. Despite their advertising, their interests are not aligned with yours.",
      },
      {
        heading: "Nevada Bad Faith Insurance Law",
        body: "Under Nevada Revised Statutes Chapter 686A, insurance companies must investigate claims promptly, communicate claim status, and make fair settlement offers based on the evidence. Violations can give rise to bad faith claims under NRS 686A.310, potentially entitling you to damages beyond your underlying claim.",
      },
      {
        heading: "Common Insurance Adjuster Tactics",
        body: "Adjusters are trained to: call immediately after an accident while you are off-guard; request recorded statements; offer low-ball settlements before you understand your full damages; create delays hoping you'll become financially desperate; and scrutinize your medical treatment for gaps or inconsistencies. Never speak with an opposing insurer without your attorney present.",
      },
      {
        heading: "Negotiation Tips and When to Involve an Attorney",
        body: "Never accept a first offer. Never sign a release without legal review. Do not provide a recorded statement to the at-fault driver's insurer. If an adjuster denies your claim, disputes liability, or offers less than your documented damages, contact our Las Vegas office immediately. Most personal injury attorneys — including ours — work on contingency, so there is no cost to consult.",
      },
    ],
  },
};

export function getResourceContent(slug: string): ResourceContent | null {
  return resourceContent[slug as ResourceSlug] ?? null;
}

export { resourceContent };
