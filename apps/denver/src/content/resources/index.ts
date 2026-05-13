import type { ResourceContent } from "../types";

export const RESOURCE_SLUGS = [
  "colorado-accident-checklist",
  "colorado-insurance-guide",
  "medical-treatment-guide",
  "evidence-preservation-guide",
  "colorado-court-guide",
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
  "colorado-accident-checklist": {
    slug: "colorado-accident-checklist",
    title: "Colorado Accident Checklist: What to Do After an Injury",
    metaTitle: "Colorado Accident Checklist | Denver Injury Law Group",
    metaDescription:
      "A complete checklist of steps to take after an accident in Colorado. Protect your health, preserve evidence, and protect your legal rights under Colorado law.",
    intro:
      "Following the right steps after an accident in Denver or Colorado can make the difference between a full recovery and leaving money on the table. Use this checklist to protect yourself.",
    sections: [
      {
        heading: "Immediate Steps (At the Scene)",
        body: "1. Call 911 and ensure emergency services are on the way. 2. Do not move injured persons unless there is immediate danger. 3. Move vehicles out of traffic if possible and safe. 4. Turn on hazard lights. 5. Photograph the scene, vehicles, license plates, and visible injuries. 6. Gather witness names and phone numbers. 7. Exchange insurance and contact information with other drivers. 8. Request Denver Police Department or Colorado State Patrol respond to document the scene.",
      },
      {
        heading: "Within 24 Hours",
        body: "Seek medical evaluation at Denver Health Medical Center, UCHealth University of Colorado Hospital, or another Colorado emergency facility — even if you feel fine. Many injuries have delayed symptoms. Keep all medical documentation. File a police report if one was not filed at the scene (DPD non-emergency: 720-913-2000). Notify your auto insurer of the accident. Do NOT post about the accident on social media.",
      },
      {
        heading: "Within 72 Hours",
        body: "Contact a Denver personal injury attorney for a free consultation. Preserve your clothing and footwear as evidence. Write down everything you remember about the accident while it is fresh. Obtain any available surveillance footage before it is overwritten — Colorado businesses typically overwrite footage within 30-72 hours.",
      },
      {
        heading: "Ongoing Steps",
        body: "Follow all medical advice and attend all appointments. Keep a daily pain and symptom journal. Save all medical bills, receipts, and correspondence. Track all lost wages and income. Do not sign any releases or accept any settlement without legal review. Remember: Colorado's statute of limitations (CRS 13-80-102) is generally two years from the date of injury.",
      },
    ],
  },
  "colorado-insurance-guide": {
    slug: "colorado-insurance-guide",
    title: "Colorado Auto Insurance Guide for Injury Victims",
    metaTitle: "Colorado Auto Insurance Guide | Denver Injury Law Group",
    metaDescription:
      "Understand Colorado auto insurance requirements, coverage types, and how to navigate an insurance claim after a Denver accident.",
    intro:
      "Colorado's insurance laws directly affect your ability to recover compensation after an accident in Denver or elsewhere in the state. This guide explains what you need to know.",
    sections: [
      {
        heading: "Colorado Minimum Coverage Requirements",
        body: "Colorado requires all drivers to carry minimum liability insurance under CRS 10-4-619: $25,000 per person / $50,000 per accident for bodily injury, and $15,000 for property damage. These minimums are often inadequate for serious injuries sustained in Denver-area accidents.",
      },
      {
        heading: "Uninsured/Underinsured Motorist Coverage",
        body: "Colorado requires insurers to offer UM/UIM coverage under CRS 10-4-609. This coverage pays when the at-fault driver has no insurance or insufficient insurance. You can reject UM/UIM coverage in writing, but we strongly recommend keeping it given Colorado's uninsured driver rates.",
      },
      {
        heading: "Medical Payments (MedPay) Coverage",
        body: "Colorado requires insurers to offer MedPay coverage, which pays your medical bills regardless of fault, up to your policy limits. MedPay can be used alongside your health insurance to cover deductibles and copays after a Denver-area accident.",
      },
      {
        heading: "How Insurance Companies Investigate Claims in Colorado",
        body: "After filing a claim, a Colorado insurance adjuster is assigned to investigate. They review Denver Police Department reports, medical records, and vehicle damage. They may contact you for a recorded statement. Under CRS 10-3-1115, they must investigate and act in good faith — but never provide a recorded statement without consulting a Denver attorney first.",
      },
    ],
  },
  "medical-treatment-guide": {
    slug: "medical-treatment-guide",
    title: "Medical Treatment Guide for Colorado Injury Victims",
    metaTitle: "Medical Treatment Guide for Injury Victims | Denver Injury Law Group",
    metaDescription:
      "What to know about medical treatment after a personal injury in Denver and Colorado. Protect your health and your legal claim.",
    intro:
      "Proper medical treatment after an injury in Denver serves two purposes: restoring your health and documenting your damages under Colorado law. This guide helps you navigate the medical side of your injury claim.",
    sections: [
      {
        heading: "Seek Treatment Immediately",
        body: "Do not wait to see a doctor after an accident in Denver. Delayed treatment is one of the most common reasons Colorado insurance companies deny or reduce claims. Prompt medical attention at Denver Health Medical Center, UCHealth University of Colorado Hospital, Presbyterian St. Luke's Medical Center, or any licensed Colorado facility creates a medical record that connects your injuries to the accident.",
      },
      {
        heading: "Follow All Treatment Recommendations",
        body: "Attend all appointments, follow your doctor's instructions, and complete all prescribed physical therapy or rehabilitation. Missed appointments and non-compliance give Colorado insurance companies grounds to argue you were not seriously injured and reduce their settlement offers.",
      },
      {
        heading: "Choosing Your Treating Physician",
        body: "For personal injury purposes, you generally have the right to choose your own treating physician in Colorado. Choose a specialist appropriate to your injuries — orthopedist, neurologist at UCHealth, or other specialist as indicated. Your choice of physician is important and should not be dictated by the opposing insurer.",
      },
      {
        heading: "Document Everything",
        body: "Keep records of every appointment, procedure, prescription, and medical expense at Denver-area facilities. Keep a daily journal documenting pain levels, limitations, and how your injuries affect your daily life. This documentation is invaluable when calculating non-economic damages under Colorado law.",
      },
    ],
  },
  "evidence-preservation-guide": {
    slug: "evidence-preservation-guide",
    title: "Evidence Preservation Guide for Colorado Injury Cases",
    metaTitle: "Evidence Preservation Guide | Denver Injury Law Group",
    metaDescription:
      "How to preserve critical evidence after an accident in Denver or Colorado. Protect your personal injury claim from the start.",
    intro:
      "Evidence is the foundation of every personal injury case in Colorado. Evidence can disappear quickly after an accident in Denver. This guide shows you how to preserve what matters most.",
    sections: [
      {
        heading: "Physical Evidence",
        body: "Preserve your clothing and footwear from the day of the accident — do not wash them. Keep any defective product that caused your injury. Photograph your injuries regularly as they heal. If the accident involved a vehicle, do not have it repaired until your attorney has had it inspected.",
      },
      {
        heading: "Digital Evidence",
        body: "Screen-capture any social media posts by witnesses or the at-fault party. Download dashcam footage immediately — many Denver drivers have dashcams. Take detailed photographs at the scene including road conditions, traffic controls, any relevant hazards, and street signs to document the exact location.",
      },
      {
        heading: "Documentary Evidence",
        body: "Save every piece of paper related to your Denver case: Denver Police Department reports (obtainable from DPD Records at 720-913-2000), medical bills, insurance correspondence, employer records, and receipts for all out-of-pocket expenses. Keep both physical and digital copies.",
      },
      {
        heading: "Spoliation Letters",
        body: "Your attorney should send a preservation or spoliation letter to relevant Denver businesses, property owners, and other parties demanding that they preserve evidence such as surveillance footage, maintenance records, employee personnel files, and vehicle data. Our Denver office does this immediately upon retention to prevent destruction of evidence.",
      },
    ],
  },
  "colorado-court-guide": {
    slug: "colorado-court-guide",
    title: "Colorado Court Guide: Personal Injury Litigation",
    metaTitle: "Colorado Court Guide for Injury Victims | Denver Injury Law Group",
    metaDescription:
      "A guide to Colorado courts for personal injury victims in Denver. Learn how the court system works and what to expect during litigation.",
    intro:
      "If your injury case goes to litigation in Denver, understanding how Colorado's court system works will help you participate more effectively and set realistic expectations.",
    sections: [
      {
        heading: "Which Court Handles Your Case?",
        body: "Cases seeking under $25,000 are filed in County Court. Cases seeking over $25,000 are filed in Colorado District Court — Denver District Court (1437 Bannock St), Arapahoe County District Court (Centennial) for Aurora and Englewood cases, or Jefferson County District Court (Golden) for Lakewood and Arvada cases.",
      },
      {
        heading: "Denver District Court",
        body: "Most significant personal injury cases in Denver are filed in the Denver District Court, located at 1437 Bannock St, Denver, CO 80203. Phone: 720-865-8301. This court handles civil cases and operates under the Colorado Rules of Civil Procedure (C.R.C.P.).",
      },
      {
        heading: "Case Timeline",
        body: "After filing in Denver District Court, a case management order sets deadlines for discovery, expert disclosures, dispositive motions, and trial. Most Denver personal injury cases proceed to trial within 12 to 18 months of filing, though complex cases can take longer.",
      },
      {
        heading: "Jury Trials in Colorado",
        body: "Colorado personal injury cases are decided by a jury of six in District Court under C.R.C.P. 48. Jurors are selected through voir dire at the Denver District Court, and both sides have the right to use peremptory challenges to remove prospective jurors. Jury verdicts in Colorado must be unanimous.",
      },
    ],
  },
  "recovery-timeline": {
    slug: "recovery-timeline",
    title: "Personal Injury Case Timeline: What to Expect in Colorado",
    metaTitle: "Injury Case Timeline | Denver Injury Law Group",
    metaDescription:
      "A realistic timeline for a personal injury case in Denver and Colorado. Know what to expect from consultation through resolution.",
    intro:
      "Personal injury cases in Colorado can take anywhere from a few months to several years to resolve. This timeline gives you a realistic picture of the process in Denver courts.",
    sections: [
      {
        heading: "Months 1–3: Medical Treatment and Investigation",
        body: "During this phase, you focus on medical treatment at Denver Health, UCHealth, or another Colorado healthcare facility. Your Denver attorney simultaneously investigates the accident, preserves evidence, obtains Denver Police Department or Colorado State Patrol reports, and begins collecting medical records.",
      },
      {
        heading: "Months 3–12: Reaching Maximum Medical Improvement",
        body: "Your attorney monitors your medical treatment. Once you reach MMI (maximum medical improvement), your attorney requests all remaining medical records and bills. This may take six months to a year for serious injuries requiring surgery or long-term rehabilitation at Colorado facilities.",
      },
      {
        heading: "Months 9–18: Demand, Negotiation, and Settlement",
        body: "Your attorney sends a demand letter to the insurer, triggering Colorado's bad faith statute (CRS 10-3-1115). Negotiations proceed over one to three months. Many Colorado cases settle during this phase. If not, a lawsuit is filed in Denver District Court or another appropriate Colorado court.",
      },
      {
        heading: "Months 12–36+: Litigation (If Necessary)",
        body: "Litigation in Denver District Court involves filing the complaint, completing discovery (depositions, document exchange, expert reports under C.R.C.P. 26), pretrial motions, and potentially a trial. Complex Colorado cases may take two to three years from injury to trial verdict.",
      },
    ],
  },
  "local-resources": {
    slug: "local-resources",
    title: "Local Resources for Injury Victims in Denver",
    metaTitle: "Local Resources for Injury Victims | Denver Injury Law Group",
    metaDescription:
      "A guide to local emergency services, hospitals, courts, and support resources for accident victims in Denver and Metro Denver, Colorado.",
    intro:
      "If you or a loved one has been injured in Denver, knowing where to turn for help is critical. This page compiles key local resources for Denver and Metro Denver injury victims.",
    sections: [
      {
        heading: "Emergency Services",
        body: "Denver Police Department: Non-emergency line 720-913-2000. Denver Fire Department: 720-913-3473. Colorado State Patrol Denver: 303-239-4501. RTD Transit Police: 303-299-6000. For all emergencies, dial 911.",
      },
      {
        heading: "Hospitals and Trauma Centers",
        body: "Denver Health Medical Center (Level I Trauma) — 777 Bannock St, Denver, CO 80204 — 303-436-6000. UCHealth University of Colorado Hospital (Level I Trauma) — 12605 E 16th Ave, Aurora, CO 80045 — 720-848-0000. Children's Hospital Colorado (Level I Pediatric Trauma) — 13123 E 16th Ave, Aurora — 720-777-1234. Presbyterian St. Luke's Medical Center — 1719 E 19th Ave, Denver — 303-839-6000.",
      },
      {
        heading: "Courts and Government Offices",
        body: "Denver District Court: 1437 Bannock St, Denver, CO 80203 — 720-865-8301. Arapahoe County District Court (Aurora/Englewood): 7325 S Potomac St, Centennial — 720-874-8600. Jefferson County District Court (Lakewood/Arvada): 100 Jefferson County Pkwy, Golden — 303-271-6145. Colorado Division of Workers' Compensation: 633 17th St, Denver — 303-318-8700.",
      },
      {
        heading: "Victim Support and Legal Aid",
        body: "Colorado Legal Services: 303-837-1313 — free civil legal aid for qualifying individuals. Denver Victim Assistance Unit: 720-913-6035. Violence Free Colorado: 303-831-9632. Colorado 211: Dial 2-1-1 for social service referrals statewide. Colorado Bar Association Lawyer Referral Service: 303-831-8000.",
      },
    ],
  },
  "accident-reports": {
    slug: "accident-reports",
    title: "How to Get Accident Reports in Denver and Colorado",
    metaTitle: "How to Get Accident Reports in Denver | Denver Injury Law Group",
    metaDescription:
      "Step-by-step guide to obtaining police accident reports, DMV records, and incident reports after a crash in Denver or Colorado.",
    intro:
      "Obtaining the official accident report is one of the most important steps after a crash in Denver. This guide explains how to request reports from the Denver Police Department, Colorado State Patrol, and the Colorado DMV.",
    sections: [
      {
        heading: "Denver Police Department Reports",
        body: "DPD accident reports can be requested online at denvergov.org, by calling the DPD Records Unit at 720-913-2000, or in person at the Denver Police Headquarters at 1331 Cherokee St. Reports are typically available 5–10 business days after the crash. The fee is approximately $6 per report.",
      },
      {
        heading: "Colorado State Patrol Reports",
        body: "Crashes on Colorado highways and interstates are investigated by the Colorado State Patrol. CSP reports can be ordered through the CSP Records Section at 303-239-4501 or online at colorado.gov/csp. Processing time is typically 7–14 business days. You will need the crash date, location, and names of parties involved.",
      },
      {
        heading: "Colorado DMV Crash Records",
        body: "The Colorado Division of Motor Vehicles maintains statewide crash records. You can request a certified crash report through the DMV at colorado.gov/dmv or by visiting a Colorado DMV office in Denver. You will need to provide crash details and a valid ID.",
      },
      {
        heading: "Why Accident Reports Matter",
        body: "The official police report from the Denver Police Department or Colorado State Patrol documents fault findings, citations issued, witness information, road and weather conditions, and vehicle damage. It is a foundational piece of evidence in any Colorado insurance claim or personal injury lawsuit filed in Denver District Court.",
      },
    ],
  },
  "hospitals": {
    slug: "hospitals",
    title: "Major Hospitals Near Denver for Injury Treatment",
    metaTitle: "Major Hospitals in Denver for Injury Treatment | Denver Injury Law Group",
    metaDescription:
      "A guide to major hospitals, trauma centers, and urgent care facilities in Denver and Metro Denver for accident and injury victims.",
    intro:
      "After a serious accident in Denver, getting to the right medical facility quickly can save your life and strengthen your injury claim. Here are the major hospitals and trauma centers serving Metro Denver.",
    sections: [
      {
        heading: "Level I Trauma Centers",
        body: "Denver Health Medical Center — 777 Bannock St, Denver, CO 80204 — 303-436-6000. Denver Health is a Level I Trauma Center and a safety-net hospital serving all of Denver. UCHealth University of Colorado Hospital — 12605 E 16th Ave, Aurora, CO 80045 — 720-848-0000. UCHealth's flagship hospital is a Level I Trauma Center and one of the top academic medical centers in the Rocky Mountain region.",
      },
      {
        heading: "Pediatric and Specialty Trauma",
        body: "Children's Hospital Colorado — 13123 E 16th Ave, Aurora, CO 80045 — 720-777-1234. Colorado's Level I pediatric trauma center, the most comprehensive children's hospital in the Rocky Mountain region. Presbyterian St. Luke's Medical Center — 1719 E 19th Ave, Denver — 303-839-6000 — a major Denver hospital serving the Capitol Hill and Uptown neighborhoods.",
      },
      {
        heading: "Other Major Hospitals",
        body: "SCL Health Saint Joseph Hospital — 1375 E 19th Ave, Denver — 303-837-7111. Porter Adventist Hospital — 2525 S Downing St, Denver — 303-778-1955. Swedish Medical Center — 501 E Hampden Ave, Englewood — 303-788-5000. Sky Ridge Medical Center — 10101 RidgeGate Pkwy, Lone Tree — 720-225-1000. Exempla Good Samaritan Medical Center — 200 Exempla Cir, Lafayette — 303-689-4000.",
      },
      {
        heading: "Urgent Care and After-Hours Options",
        body: "For non-life-threatening injuries after a Denver accident, UCHealth Urgent Care, Concentra Medical Centers, and AFC Urgent Care operate multiple Metro Denver locations with extended hours. Documenting injuries promptly at any licensed Colorado medical facility — including urgent care — creates a critical medical record for your personal injury claim.",
      },
    ],
  },
  "accident-statistics": {
    slug: "accident-statistics",
    title: "Denver Accident Statistics and Traffic Safety Data",
    metaTitle: "Denver Accident Statistics | Denver Injury Law Group",
    metaDescription:
      "Traffic crash statistics, dangerous intersections, and injury trends in Denver and Metro Denver, Colorado.",
    intro:
      "Denver's growing population and busy highway corridors create significant traffic safety challenges. Understanding local accident statistics underscores why experienced legal representation matters after a crash in Colorado.",
    sections: [
      {
        heading: "Statewide and Denver Crash Data",
        body: "Colorado reports approximately 550–650 traffic fatalities per year, according to Colorado Department of Transportation (CDOT) annual crash data. Denver County consistently accounts for a significant share of serious injury crashes statewide. CDOT publishes annual crash summaries at cotrip.org. Denver averages several thousand injury-causing crashes annually within city and county limits.",
      },
      {
        heading: "Pedestrian and Cyclist Danger",
        body: "Denver has made significant investments in protected bike lanes and pedestrian infrastructure, but the city still sees hundreds of pedestrian and cyclist injuries each year. Colfax Avenue, Broadway, and major downtown intersections are particularly dangerous. CDOT's Vision Zero initiative tracks pedestrian and cyclist fatalities across the state.",
      },
      {
        heading: "Most Dangerous Corridors",
        body: "Historically high-crash corridors in Metro Denver include I-70 near the I-25 interchange (the 'Denver Stack'), I-25 through downtown Denver, Colfax Avenue (US-40), and Federal Boulevard. CDOT and Denver Public Works publish intersection and corridor crash data that attorneys use to establish liability patterns.",
      },
      {
        heading: "DUI and Impaired Driving Trends",
        body: "Colorado has seen increases in DUI arrests since recreational marijuana was legalized, adding drug-impaired driving to alcohol-impaired driving concerns. Denver Police Department conducts regular DUI enforcement campaigns on I-25, Colfax, and other high-risk corridors. DUI crashes often result in severe injuries and may support punitive damages claims under CRS 13-21-102.",
      },
    ],
  },
  "court-system": {
    slug: "court-system",
    title: "Denver Court System Guide for Injury Victims",
    metaTitle: "Denver Court System Guide | Denver Injury Law Group",
    metaDescription:
      "Understand which Denver and Colorado courts handle personal injury cases and how the Colorado court system works for injury victims.",
    intro:
      "If your personal injury case proceeds to litigation in Denver, it will be handled by one of several courts depending on the amount at stake and where the incident occurred. Here is what injury victims need to know about Colorado's court system.",
    sections: [
      {
        heading: "County Court: Claims Under $25,000",
        body: "Small personal injury claims (under $25,000) in Denver may be filed in Denver County Court, located at 1437 Bannock St, Denver, CO 80203. Denver County Court also handles Small Claims cases up to $7,500. For incidents in Aurora, use Arapahoe County Court; for Lakewood, use Jefferson County Court.",
      },
      {
        heading: "Denver District Court",
        body: "Claims over $25,000 in Denver are filed in the Denver District Court, located at 1437 Bannock St, Denver, CO 80203 — Phone: 720-865-8301. This court handles the vast majority of significant personal injury lawsuits arising from Denver-area incidents. Cases are governed by the Colorado Rules of Civil Procedure (C.R.C.P.).",
      },
      {
        heading: "Other Metro Denver District Courts",
        body: "Arapahoe County District Court (7325 S Potomac St, Centennial — 720-874-8600) handles cases from Aurora and Englewood. Jefferson County District Court (100 Jefferson County Pkwy, Golden — 303-271-6145) handles cases from Lakewood, Arvada, Wheat Ridge, and Littleton. Adams County District Court (1100 Judicial Center Dr, Brighton) handles Commerce City and Thornton cases.",
      },
      {
        heading: "Federal District Court",
        body: "Cases involving parties from different states (diversity jurisdiction) with damages over $75,000, or cases involving federal law, may be filed in the U.S. District Court for the District of Colorado, located at 901 19th St, Denver, CO 80294 — 303-844-3433.",
      },
    ],
  },
  "insurance-companies": {
    slug: "insurance-companies",
    title: "Dealing with Insurance Companies in Denver and Colorado",
    metaTitle: "Dealing with Insurance Companies in Denver | Denver Injury Law Group",
    metaDescription:
      "What to know about dealing with insurance adjusters and insurance companies after an accident in Denver and Colorado.",
    intro:
      "Insurance companies operating in Colorado are required to act in good faith under CRS 10-3-1115 — but that does not mean they will treat you fairly. Understanding how insurers operate helps you protect your Denver injury claim.",
    sections: [
      {
        heading: "Major Auto Insurers in Colorado",
        body: "The largest auto insurers in Colorado include State Farm, GEICO, Progressive, Allstate, Farmers, USAA, Travelers, and American Family. Each has dedicated claims departments staffed by Colorado-licensed adjusters whose job is to resolve claims at the lowest possible cost. Despite their advertising, their interests are not aligned with yours.",
      },
      {
        heading: "Colorado Bad Faith Insurance Law",
        body: "Under CRS 10-3-1115 and CRS 10-3-1116, insurance companies must not unreasonably delay or deny payment of a valid claim without a reasonable basis. A claimant who proves bad faith may recover two times the covered benefit plus reasonable attorney fees and costs. Colorado's bad faith laws are among the strongest in the nation.",
      },
      {
        heading: "Common Insurance Adjuster Tactics",
        body: "Adjusters are trained to: call immediately after a Denver accident while you are off-guard; request recorded statements; offer low-ball settlements before you understand your full damages under Colorado law; create delays hoping you'll become financially desperate; and scrutinize your medical treatment for gaps or inconsistencies. Never speak with an opposing insurer without your Denver attorney present.",
      },
      {
        heading: "Negotiation Tips and When to Involve a Denver Attorney",
        body: "Never accept a first offer. Never sign a release without legal review. Do not provide a recorded statement to the at-fault driver's insurer. If an adjuster denies your claim, disputes liability, or offers less than your documented damages, contact our Denver office immediately. Most personal injury attorneys — including ours — work on contingency, so there is no cost to consult.",
      },
    ],
  },
};

export function getResourceContent(slug: string): ResourceContent | null {
  return resourceContent[slug as ResourceSlug] ?? null;
}

export { resourceContent };
