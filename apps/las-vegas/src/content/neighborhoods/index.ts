import type { NeighborhoodContent } from "../types";
import { PRACTICE_AREA_SLUGS } from "../practice-areas";

export const NEIGHBORHOOD_SLUGS = [
  "downtown-las-vegas",
  "the-strip",
  "summerlin",
  "henderson",
  "north-las-vegas",
  "spring-valley",
  "enterprise",
  "paradise",
  "whitney",
  "green-valley",
  "boulder-city",
  "centennial-hills",
  "nellis-afb-area",
  "winchester",
  "laughlin",
] as const;

export type NeighborhoodSlug = (typeof NEIGHBORHOOD_SLUGS)[number];

const neighborhoodMeta: Record<NeighborhoodSlug, { name: string; description: string }> = {
  "downtown-las-vegas": {
    name: "Downtown Las Vegas",
    description:
      "The original heart of Las Vegas, encompassing Fremont Street, the Arts District, and the government center corridor.",
  },
  "the-strip": {
    name: "The Strip",
    description:
      "Las Vegas Boulevard, home to the world's most famous casinos, hotels, and entertainment venues — and a high concentration of pedestrian and vehicle accidents.",
  },
  summerlin: {
    name: "Summerlin",
    description:
      "Las Vegas's largest master-planned community on the western edge of the valley, bordering Red Rock Canyon.",
  },
  henderson: {
    name: "Henderson",
    description:
      "Nevada's second-largest city, located southeast of Las Vegas, with a rapidly growing population and busy commercial corridors.",
  },
  "north-las-vegas": {
    name: "North Las Vegas",
    description:
      "An independent city north of Las Vegas with significant industrial and warehouse districts that see frequent trucking and workplace accidents.",
  },
  "spring-valley": {
    name: "Spring Valley",
    description:
      "One of the most populous unincorporated communities in the United States, stretching south and west of the Strip.",
  },
  enterprise: {
    name: "Enterprise",
    description:
      "A rapidly growing unincorporated community in the southwest Las Vegas Valley, home to new residential and commercial development.",
  },
  paradise: {
    name: "Paradise",
    description:
      "The unincorporated community encompassing the Las Vegas Strip, UNLV, McCarran Airport, and much of central Clark County.",
  },
  whitney: {
    name: "Whitney",
    description:
      "An east Las Vegas Valley community near the I-515 and Boulder Highway corridors.",
  },
  "green-valley": {
    name: "Green Valley",
    description:
      "Henderson's premier planned community featuring upscale neighborhoods, the Green Valley Ranch Resort, and busy retail corridors.",
  },
  "boulder-city": {
    name: "Boulder City",
    description:
      "Nevada's only city that prohibits gambling, situated between Las Vegas and Hoover Dam along US-93.",
  },
  "centennial-hills": {
    name: "Centennial Hills",
    description:
      "A fast-growing northwest Las Vegas community with new master-planned neighborhoods and commercial development.",
  },
  "nellis-afb-area": {
    name: "Nellis AFB Area",
    description:
      "The northeast Las Vegas Valley communities surrounding Nellis Air Force Base, including Las Vegas Motor Speedway area.",
  },
  winchester: {
    name: "Winchester",
    description:
      "A central unincorporated community just east of the Strip with high residential density and busy surface streets.",
  },
  laughlin: {
    name: "Laughlin",
    description:
      "Nevada's river town casino destination 90 miles south of Las Vegas along the Colorado River.",
  },
};

const allPracticeAreaLinks = PRACTICE_AREA_SLUGS.map((slug) => ({
  label: slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase()),
  href: `/${slug}`,
}));

const stub = (slug: NeighborhoodSlug): NeighborhoodContent => {
  const meta = neighborhoodMeta[slug];
  return {
    slug,
    name: meta.name,
    metaTitle: `Personal Injury Lawyer in ${meta.name}, NV | Las Vegas Injury Law Group`,
    metaDescription: `Injured in ${meta.name}? Our Las Vegas personal injury attorneys serve all of ${meta.name} and the surrounding areas. Free consultation. No fee unless we win. Call (702) 555-0147.`,
    intro: `Las Vegas Injury Law Group represents personal injury victims throughout ${meta.name}, Nevada. ${meta.description} Our attorneys are ready to fight for the full compensation you deserve — at no cost unless we win your case.`,
    sections: [
      {
        heading: `Personal Injury Cases in ${meta.name}`,
        body: `${meta.name} residents and visitors face the same injury risks found throughout Southern Nevada — car accidents, slip and falls, workplace injuries, and more. When negligence causes your injury, you deserve an attorney who knows the local courts, insurance companies, and legal landscape. Las Vegas Injury Law Group has represented clients throughout ${meta.name} and the surrounding communities.`,
      },
      {
        heading: `Common Injury Accidents in ${meta.name}`,
        body: `Our ${meta.name} clients have been injured in a wide range of incidents, including motor vehicle collisions, premises liability accidents at local businesses, dog bites, workplace injuries, and catastrophic accidents. No matter how your injury occurred, our attorneys evaluate your case for free and explain your legal options.`,
      },
      {
        heading: "Nevada No-Fee Guarantee",
        body: `We work on a contingency fee basis for all personal injury cases in ${meta.name}. That means you pay zero attorney fees unless and until we recover compensation for you. There's never a cost to call us, consult with us, or have us review your case. Call (702) 555-0147 now.`,
      },
      {
        heading: `Why Choose Las Vegas Injury Law Group for Your ${meta.name} Case`,
        body: `Our firm has deep roots in Southern Nevada and an intimate understanding of Clark County courts, local insurance companies, and the judges and juries who decide cases. That local knowledge, combined with our trial-ready approach, means we consistently achieve outcomes that out-of-state or unfamiliar firms cannot.`,
      },
    ],
    practiceAreaLinks: allPracticeAreaLinks,
  };
};

export const neighborhoodContent: Record<NeighborhoodSlug, NeighborhoodContent> =
  Object.fromEntries(
    NEIGHBORHOOD_SLUGS.map((slug) => [slug, stub(slug)])
  ) as Record<NeighborhoodSlug, NeighborhoodContent>;

export function getNeighborhoodContent(slug: string): NeighborhoodContent | null {
  return neighborhoodContent[slug as NeighborhoodSlug] ?? null;
}
