import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { PRACTICE_AREA_SLUGS } from "@/content/practice-areas";

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

  return entries;
}
