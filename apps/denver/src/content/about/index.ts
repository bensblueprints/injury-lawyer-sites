import type { AboutContent } from "../types";

export const ABOUT_PAGE_SLUGS = ["about-us", "why-choose-us", "case-results"] as const;

export type AboutPageSlug = (typeof ABOUT_PAGE_SLUGS)[number];

const aboutContent: Record<AboutPageSlug, AboutContent> = {
  "about-us": {
    slug: "about-us",
    title: "About Denver Injury Law Group",
    metaTitle: "About Us | Denver Injury Law Group",
    metaDescription:
      "Learn about Denver Injury Law Group — aggressive personal injury attorneys serving Denver, Aurora, Lakewood, Arvada, and all of Metro Denver, Colorado.",
    intro:
      "Denver Injury Law Group is a Colorado personal injury firm dedicated to one mission: getting injury victims the maximum compensation they deserve under Colorado law. We fight insurance companies so you can focus on healing.",
    sections: [
      {
        heading: "Our Firm",
        body: "Denver Injury Law Group was founded to give Colorado injury victims the aggressive, experienced representation they deserve. Insurance companies have teams of attorneys working to minimize your claim from day one — and Colorado's bad faith insurance laws (CRS 10-3-1115 and CRS 10-3-1116) give us powerful tools to hold those companies accountable. You need a law firm that matches their resources and resolve. That's us.",
      },
      {
        heading: "Our Approach",
        body: "We treat every case as if it will go to trial in Denver District Court, Arapahoe County District Court, or whichever Colorado court is appropriate. That trial-ready approach — thorough investigation, expert witnesses, meticulous documentation — is what forces insurance companies to make fair settlement offers. We do not accept inadequate offers. We negotiate hard, and when necessary, we litigate.",
      },
      {
        heading: "Our Community",
        body: "We are a Denver firm, serving Denver and Metro Colorado clients. We understand the local courts, the local insurance companies, and the communities where our clients live and work — from downtown Denver's Capitol Hill to Aurora, Lakewood, Arvada, Thornton, Westminster, and the suburbs south along I-25. That local knowledge makes a difference in the results we achieve.",
      },
      {
        heading: "No Fee Unless We Win",
        body: "We believe that access to quality legal representation should not depend on your financial situation. That's why we handle all personal injury cases on a contingency fee basis. You pay nothing unless we recover for you under Colorado law. There's never a fee to consult with us.",
      },
    ],
  },
  "why-choose-us": {
    slug: "why-choose-us",
    title: "Why Choose Denver Injury Law Group",
    metaTitle: "Why Choose Us | Denver Injury Law Group",
    metaDescription:
      "Why Denver injury victims choose Denver Injury Law Group. Results, experience, Colorado legal knowledge, and a genuine commitment to every client.",
    intro:
      "When you're choosing a personal injury attorney in Denver, you have options. Here's why Colorado injury victims trust Denver Injury Law Group to fight for their recovery.",
    sections: [
      {
        heading: "Proven Track Record",
        body: "Our attorneys have recovered millions of dollars for Denver and Colorado injury victims. We have successfully resolved hundreds of cases involving car accidents on I-25 and I-70, truck crashes, slip and falls including winter ice and snow cases, medical malpractice, wrongful death, and catastrophic injuries.",
      },
      {
        heading: "Personalized Attention",
        body: "We do not treat clients like case numbers. Every client receives direct access to their attorney, regular case updates, and honest communication about the strengths and challenges of their case under Colorado law. You will never be passed off to a paralegal when you have important questions.",
      },
      {
        heading: "Resources and Network",
        body: "We have the resources to invest in your Colorado case — accident reconstruction experts, medical specialists at UCHealth and Denver Health, life-care planners, economic experts, and private investigators. We front all costs and recover them only if you win.",
      },
      {
        heading: "Aggressive Negotiators, Experienced Litigators",
        body: "We negotiate aggressively because Colorado insurance companies respond to strength — especially when they know we understand CRS 10-3-1115 bad faith liability. When negotiation fails, we are ready to take your case to trial in Denver District Court. Our trial experience is a key reason insurers respect our demands.",
      },
      {
        heading: "Available 24/7",
        body: "Accidents happen at all hours on Denver's I-25, I-70, and surface streets. Our team is available 24 hours a day, 7 days a week. Call us anytime at (303) 555-0174 and a member of our team will respond.",
      },
    ],
  },
  "case-results": {
    slug: "case-results",
    title: "Case Results | Denver Injury Law Group",
    metaTitle: "Case Results | Denver Injury Law Group",
    metaDescription:
      "Representative case results from Denver Injury Law Group. See examples of settlements and verdicts recovered for Colorado injury victims.",
    intro:
      "The following are representative results achieved for our clients in Colorado. Past results do not guarantee a similar outcome in your case. Every case is unique and depends on its specific facts, circumstances, and applicable Colorado law.",
    sections: [
      {
        heading: "Vehicle Accident Recoveries",
        body: "$2,600,000 — Semi-truck collision on I-70, catastrophic spine injury. $1,250,000 — T-bone intersection crash on Colfax Avenue, traumatic brain injury. $895,000 — Rear-end collision by drunk driver on I-25, herniated discs and surgery. $475,000 — Hit-and-run pedestrian accident in downtown Denver. $350,000 — Motorcycle accident on US-36, multiple fractures and lost wages.",
      },
      {
        heading: "Premises Liability and Slip & Fall",
        body: "$975,000 — Slip and fall on snow and ice at a Lakewood shopping center, ACL tear and shoulder surgery. $680,000 — Aurora apartment complex pool accident, drowning injury to minor. $415,000 — Retail store slip on unmarked wet floor in Englewood, knee replacement. $290,000 — Parking garage fall in downtown Denver due to poor lighting, hip fracture.",
      },
      {
        heading: "Workplace and Product Liability",
        body: "$3,200,000 — Construction site scaffold collapse in Commerce City, paraplegia. $875,000 — Defective power tool at Thornton manufacturing facility, loss of fingers. $740,000 — Chemical exposure at Adams County industrial site, respiratory injury. $520,000 — Workers' compensation third-party claim, forklift accident in Aurora.",
      },
      {
        heading: "Medical Malpractice and Wrongful Death",
        body: "$2,900,000 — Surgical error at Denver-area hospital resulting in permanent disability. $1,950,000 — Wrongful death in motor vehicle accident on I-70 mountain corridor, surviving family. $1,300,000 — Misdiagnosis of cancer resulting in delayed treatment and serious harm. $875,000 — Emergency room negligence at Metro Denver hospital, missed heart attack.",
      },
    ],
  },
};

export function getAboutContent(slug: string): AboutContent | null {
  return aboutContent[slug as AboutPageSlug] ?? null;
}

export { aboutContent };
