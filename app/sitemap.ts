import type { MetadataRoute } from "next";
import { locales, defaultLocale, localizedHref } from "@/lib/i18n";
import { getVisible } from "@/lib/content-status";
import { services } from "@/content/services";
import { insights } from "@/content/insights";

const baseUrl = "https://www.taty-associes.ci";

const staticPaths = [
  "/",
  "/le-cabinet",
  "/equipe",
  "/services",
  "/secteurs",
  "/international",
  "/insights",
  "/carrieres",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    entries.push({
      url: `${baseUrl}${localizedHref(defaultLocale, path)}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}${localizedHref(l, path)}`])),
      },
    });
  }

  for (const service of getVisible(services)) {
    const path = `/services/${service.slug}`;
    entries.push({
      url: `${baseUrl}${localizedHref(defaultLocale, path)}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}${localizedHref(l, path)}`])),
      },
    });
  }

  for (const article of getVisible(insights).filter((a) => !a.isPlaceholder)) {
    const path = `/insights/${article.slug}`;
    entries.push({
      url: `${baseUrl}${localizedHref(defaultLocale, path)}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}${localizedHref(l, path)}`])),
      },
    });
  }

  return entries;
}
