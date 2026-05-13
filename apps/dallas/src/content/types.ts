export interface ContentSection {
  heading: string;
  body: string;
}

export interface PracticeAreaContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  intro: string;
  sections: ContentSection[];
  faqs: { question: string; answer: string }[];
  relatedAreas: { label: string; href: string }[];
}

export interface SubtopicContent {
  slug: string;
  parentSlug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: ContentSection[];
  faqs: { question: string; answer: string }[];
}

export interface NeighborhoodContent {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: ContentSection[];
  practiceAreaLinks: { label: string; href: string }[];
}

export interface FAQContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  faqs: { question: string; answer: string }[];
}

export interface LegalProcessContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: ContentSection[];
}

export interface ResourceContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: ContentSection[];
}

export interface AboutContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: ContentSection[];
}
