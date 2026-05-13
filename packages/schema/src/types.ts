export interface SiteConfig {
  city: string;
  state: string;
  stateAbbr: string;
  siteName: string;
  domain: string;
  phone: string;
  phoneFormatted: string;
  lawyerName: string;
  firmName: string;
  address: string;
  addressStreet: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
  email: string;
  hours: string;
  latitude: string;
  longitude: string;
  googleMapsUrl: string;
  lawyerPhoto: string;
  description: string;
  tagline: string;
  elevenLabsAgentId?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
