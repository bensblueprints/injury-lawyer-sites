import type { AboutContent } from "../types";

export const ABOUT_PAGE_SLUGS = ["about-us", "why-choose-us", "case-results"] as const;

export type AboutPageSlug = (typeof ABOUT_PAGE_SLUGS)[number];

const aboutContent: Record<AboutPageSlug, AboutContent> = {
  "about-us": {
    slug: "about-us",
    title: "About Las Vegas Injury Law Group",
    metaTitle: "About Us | Las Vegas Injury Law Group",
    metaDescription:
      "Learn about Las Vegas Injury Law Group — aggressive personal injury attorneys serving Las Vegas, Henderson, North Las Vegas, and all of Southern Nevada.",
    intro:
      "Las Vegas Injury Law Group is a Southern Nevada personal injury firm dedicated to one mission: getting injury victims the maximum compensation they deserve. We fight insurance companies so you can focus on healing.",
    sections: [
      {
        heading: "Our Firm",
        body: "Las Vegas Injury Law Group was founded to give Southern Nevada injury victims the aggressive, experienced representation they deserve. Insurance companies have teams of attorneys working to minimize your claim from day one. You need a law firm that matches their resources and resolve. That's us.",
      },
      {
        heading: "Our Approach",
        body: "We treat every case as if it will go to trial. That trial-ready approach — thorough investigation, expert witnesses, meticulous documentation — is what forces insurance companies to make fair settlement offers. We do not accept inadequate offers. We negotiate hard, and when necessary, we litigate.",
      },
      {
        heading: "Our Community",
        body: "We are a Las Vegas firm, serving Las Vegas and Southern Nevada clients. We understand the local courts, the local insurance companies, and the communities where our clients live. That local knowledge makes a difference in the results we achieve.",
      },
      {
        heading: "No Fee Unless We Win",
        body: "We believe that access to quality legal representation should not depend on your financial situation. That's why we handle all personal injury cases on a contingency fee basis. You pay nothing unless we recover for you. There's never a fee to consult with us.",
      },
    ],
  },
  "why-choose-us": {
    slug: "why-choose-us",
    title: "Why Choose Las Vegas Injury Law Group",
    metaTitle: "Why Choose Us | Las Vegas Injury Law Group",
    metaDescription:
      "Why Las Vegas injury victims choose Las Vegas Injury Law Group. Results, experience, local knowledge, and a genuine commitment to every client.",
    intro:
      "When you're choosing a personal injury attorney in Las Vegas, you have options. Here's why thousands of Southern Nevada injury victims have trusted Las Vegas Injury Law Group.",
    sections: [
      {
        heading: "Proven Track Record",
        body: "Our attorneys have recovered millions of dollars for Las Vegas and Southern Nevada injury victims. We have successfully resolved hundreds of cases involving car accidents, truck crashes, slip and falls, medical malpractice, wrongful death, and catastrophic injuries.",
      },
      {
        heading: "Personalized Attention",
        body: "We do not treat clients like case numbers. Every client receives direct access to their attorney, regular case updates, and honest communication about the strengths and challenges of their case. You will never be passed off to a paralegal when you have important questions.",
      },
      {
        heading: "Resources and Network",
        body: "We have the resources to invest in your case — accident reconstruction experts, medical specialists, life-care planners, economic experts, and private investigators. We front all costs and recover them only if you win.",
      },
      {
        heading: "Aggressive Negotiators, Experienced Litigators",
        body: "We negotiate aggressively because insurance companies respond to strength. When negotiation fails, we are ready to take your case to trial in Clark County District Court. Our trial experience is a key reason insurers respect our demands.",
      },
      {
        heading: "Available 24/7",
        body: "Accidents happen at all hours. Our team is available 24 hours a day, 7 days a week. Call us anytime at (702) 555-0147 and a member of our team will respond.",
      },
    ],
  },
  "case-results": {
    slug: "case-results",
    title: "Case Results | Las Vegas Injury Law Group",
    metaTitle: "Case Results | Las Vegas Injury Law Group",
    metaDescription:
      "Representative case results from Las Vegas Injury Law Group. See examples of settlements and verdicts recovered for Southern Nevada injury victims.",
    intro:
      "The following are representative results achieved for our clients. Past results do not guarantee a similar outcome in your case. Every case is unique and depends on its specific facts, circumstances, and applicable law.",
    sections: [
      {
        heading: "Vehicle Accident Recoveries",
        body: "$2,400,000 — Semi-truck collision on I-15, catastrophic spine injury. $1,150,000 — T-bone intersection crash, traumatic brain injury. $875,000 — Rear-end collision by drunk driver, herniated discs and surgery. $450,000 — Hit-and-run pedestrian accident on the Strip. $325,000 — Motorcycle accident, multiple fractures and lost wages.",
      },
      {
        heading: "Premises Liability and Slip & Fall",
        body: "$1,200,000 — Casino slip and fall, ACL tear and shoulder surgery. $680,000 — Hotel pool accident, drowning and brain damage to minor. $395,000 — Retail store slip on unmarked wet floor, knee replacement. $275,000 — Parking garage fall due to poor lighting, hip fracture.",
      },
      {
        heading: "Workplace and Product Liability",
        body: "$3,100,000 — Construction site scaffold collapse, paraplegia. $950,000 — Defective power tool, loss of fingers. $720,000 — Chemical exposure at manufacturing facility, respiratory injury. $540,000 — Workers' compensation third-party claim, forklift accident.",
      },
      {
        heading: "Medical Malpractice and Wrongful Death",
        body: "$2,800,000 — Surgical error resulting in permanent disability. $1,900,000 — Wrongful death in motor vehicle accident, surviving family. $1,400,000 — Misdiagnosis of cancer resulting in delayed treatment and harm. $850,000 — Emergency room negligence, missed heart attack.",
      },
    ],
  },
};

export function getAboutContent(slug: string): AboutContent | null {
  return aboutContent[slug as AboutPageSlug] ?? null;
}

export { aboutContent };
