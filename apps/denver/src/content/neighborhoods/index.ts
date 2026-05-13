import type { NeighborhoodContent } from "../types";
import { PRACTICE_AREA_SLUGS } from "../practice-areas";

export const NEIGHBORHOOD_SLUGS = [
  "aurora",
  "lakewood",
  "arvada",
  "westminster",
  "thornton",
  "centennial",
  "highlands-ranch",
  "englewood",
  "littleton",
  "commerce-city",
  "parker",
  "brighton",
  "boulder",
  "broomfield",
  "castle-rock",
  "downtown-denver",
  "lodo",
] as const;

export type NeighborhoodSlug = (typeof NEIGHBORHOOD_SLUGS)[number];

const neighborhoodMeta: Record<NeighborhoodSlug, { name: string; description: string }> = {
  aurora: {
    name: "Aurora",
    description:
      "Colorado's third-largest city, stretching across Arapahoe, Adams, and Douglas counties with busy corridors including E Colfax Avenue, I-225, and the Fitzsimons medical campus.",
  },
  lakewood: {
    name: "Lakewood",
    description:
      "Jefferson County's largest city, situated west of Denver along US-6 and 6th Avenue Freeway, with significant commercial and residential development and high traffic volumes.",
  },
  arvada: {
    name: "Arvada",
    description:
      "A northwest Denver suburb in Jefferson County with rapidly growing residential communities along Wadsworth Boulevard and the I-70 corridor.",
  },
  westminster: {
    name: "Westminster",
    description:
      "A thriving suburb straddling Adams and Jefferson counties along the US-36 (Boulder Turnpike) corridor, known for its dense commercial development and busy intersections.",
  },
  thornton: {
    name: "Thornton",
    description:
      "One of Colorado's fastest-growing cities in Adams County, located north of Denver along I-25 with extensive residential and commercial corridors seeing increasing accident rates.",
  },
  centennial: {
    name: "Centennial",
    description:
      "Arapahoe County's largest city, a planned community in the southeastern Denver suburbs with major employers and busy arterials including Arapahoe Road and I-25.",
  },
  "highlands-ranch": {
    name: "Highlands Ranch",
    description:
      "One of the nation's largest master-planned communities in Douglas County, south of Denver, with high-volume commuter corridors along C-470 and Santa Fe Drive.",
  },
  englewood: {
    name: "Englewood",
    description:
      "An Arapahoe County city immediately south of Denver with busy medical and commercial corridors along Broadway and US-285 (Hampden Avenue).",
  },
  littleton: {
    name: "Littleton",
    description:
      "The historic county seat of Arapahoe County southwest of Denver, with significant commercial development along C-470 and Santa Fe Drive.",
  },
  "commerce-city": {
    name: "Commerce City",
    description:
      "An Adams County industrial city northeast of Denver with heavy commercial truck traffic on I-76 and US-85 and numerous workplace injury risks.",
  },
  parker: {
    name: "Parker",
    description:
      "A fast-growing Douglas County town southeast of Denver along the E-470 tollway, with rapidly expanding residential neighborhoods and busy commercial areas.",
  },
  brighton: {
    name: "Brighton",
    description:
      "The Adams County seat north of Denver along I-76, a growing community with agricultural and industrial sectors and busy state highway intersections.",
  },
  boulder: {
    name: "Boulder",
    description:
      "Boulder County's largest city at the foothills of the Rocky Mountains, home to the University of Colorado and significant cyclist and pedestrian activity on city streets and US-36.",
  },
  broomfield: {
    name: "Broomfield",
    description:
      "Colorado's newest county, situated between Denver and Boulder along US-36, with major corporate campuses, busy commercial corridors, and high commuter traffic volumes.",
  },
  "castle-rock": {
    name: "Castle Rock",
    description:
      "The Douglas County seat located midway between Denver and Colorado Springs on I-25, a rapidly growing community with significant retail development and high-speed highway exposure.",
  },
  "downtown-denver": {
    name: "Downtown Denver",
    description:
      "The urban core of Colorado's capital city, encompassing the 16th Street Mall, LoDo, Curtis Park, Five Points, and the Capitol Hill neighborhoods with high pedestrian and vehicle activity.",
  },
  lodo: {
    name: "LoDo",
    description:
      "Denver's Lower Downtown historic district, home to Coors Field, Union Station, and a dense entertainment and restaurant district with significant pedestrian traffic and rideshare activity.",
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
    metaTitle: `Personal Injury Lawyer in ${meta.name}, CO | Denver Injury Law Group`,
    metaDescription: `Injured in ${meta.name}? Our Denver personal injury attorneys serve all of ${meta.name} and Metro Denver. Free consultation. No fee unless we win. Call (303) 555-0174.`,
    intro: `Denver Injury Law Group represents personal injury victims throughout ${meta.name}, Colorado. ${meta.description} Our attorneys are ready to fight for the full compensation you deserve under Colorado law — at no cost unless we win your case.`,
    sections: [
      {
        heading: `Personal Injury Cases in ${meta.name}`,
        body: `${meta.name} residents and visitors face the same injury risks found throughout Metro Denver and Colorado — car accidents, slip and falls including snow and ice hazards, workplace injuries, and more. Under Colorado's modified comparative negligence law (CRS 13-21-111), you can still recover compensation even if you were partially at fault, as long as you are less than 50% responsible. When negligence causes your injury in ${meta.name}, you deserve an attorney who knows the local courts, insurance companies, and Colorado legal landscape. Denver Injury Law Group has represented clients throughout ${meta.name} and the surrounding Metro Denver communities.`,
      },
      {
        heading: `Common Injury Accidents in ${meta.name}`,
        body: `Our ${meta.name} clients have been injured in a wide range of incidents, including motor vehicle collisions on local roads and highways, premises liability accidents at local businesses (including snow and ice falls under Colorado's premises liability statute CRS 13-21-115), dog bites under Colorado's strict liability statute (CRS 13-21-124), workplace injuries, and catastrophic accidents. No matter how your injury occurred in ${meta.name}, our Denver attorneys evaluate your case for free and explain your legal options under Colorado law.`,
      },
      {
        heading: "Colorado No-Fee Guarantee",
        body: `We work on a contingency fee basis for all personal injury cases in ${meta.name} and throughout Colorado. That means you pay zero attorney fees unless and until we recover compensation for you. There's never a cost to call us, consult with us, or have us review your case. Call (303) 555-0174 now.`,
      },
      {
        heading: `Why Choose Denver Injury Law Group for Your ${meta.name} Case`,
        body: `Our firm has deep roots in Metro Denver and an intimate understanding of Colorado courts — including Denver District Court, Arapahoe County District Court, Jefferson County District Court, and Adams County District Court. That local knowledge, combined with our trial-ready approach and understanding of Colorado's bad faith insurance laws (CRS 10-3-1115), means we consistently achieve outcomes that unfamiliar firms cannot.`,
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
