import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { PRACTICE_AREA_SLUGS } from "@/content/practice-areas";
import { SUBTOPIC_ENTRIES } from "@/content/subtopics";
import { NEIGHBORHOOD_SLUGS } from "@/content/neighborhoods";

const BASE = `https://${siteConfig.domain}`;

const staticRoutes = [
  "/",
  "/practice-areas",
  "/areas",
  "/about",
  "/faq",
  "/legal-process",
  "/resources",
  "/free-consultation",
  "/contact",
  "/about/about-us",
  "/about/why-choose-us",
  "/about/case-results",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1.0 : 0.8,
  }));

  // Practice areas
  for (const slug of PRACTICE_AREA_SLUGS) {
    entries.push({
      url: `${BASE}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  // Subtopics
  for (const entry of SUBTOPIC_ENTRIES) {
    entries.push({
      url: `${BASE}/${entry.parentSlug}/${entry.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Neighborhoods
  for (const slug of NEIGHBORHOOD_SLUGS) {
    entries.push({
      url: `${BASE}/areas/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
