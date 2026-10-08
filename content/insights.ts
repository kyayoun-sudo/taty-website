import { readdirSync } from "node:fs";
import path from "node:path";
import type { LocalizedText } from "@/lib/i18n";
import type { ContentStatus } from "@/lib/content-status";

export type InsightCategory =
  | "audit"
  | "accounting"
  | "ohada"
  | "ifrs"
  | "tax"
  | "esg"
  | "finance"
  | "business-environment"
  | "industry"
  | "publication";

export const insightCategoryLabels: Record<
  InsightCategory,
  LocalizedText
> = {
  audit: { fr: "Audit", en: "Audit" },
  accounting: { fr: "Comptabilité", en: "Accounting" },
  ohada: { fr: "OHADA", en: "OHADA" },
  ifrs: { fr: "IFRS", en: "IFRS" },
  tax: { fr: "Fiscalité", en: "Tax" },
  esg: { fr: "ESG", en: "ESG" },
  finance: { fr: "Finance", en: "Finance" },
  "business-environment": {
    fr: "Environnement des affaires en Côte d'Ivoire",
    en: "Côte d'Ivoire business environment",
  },
  industry: {
    fr: "Analyses sectorielles",
    en: "Industry insights",
  },
  publication: {
    fr: "Publication",
    en: "Publication",
  },
};

export interface InsightArticle {
  slug: string;
  status: ContentStatus;
  category: InsightCategory;
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedText;
  publishedAt: string | null;
  isPlaceholder: boolean;
  pdfUrl?: string;
}

const publicationsDirectory = path.join(
  process.cwd(),
  "public",
  "assets",
  "publications",
);

function loadPublications(): InsightArticle[] {
  let entries: ReturnType<typeof readdirSync>;

  try {
    entries = readdirSync(publicationsDirectory);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }

  return entries
    .filter((filename) => /\.pdf$/i.test(filename))
    .filter((filename) =>
      readdirSync(publicationsDirectory, {
        withFileTypes: true,
      }).some(
        (entry) =>
          entry.name === filename && entry.isFile(),
      ),
    )
    .sort((a, b) => a.localeCompare(b, "fr"))
    .map((filename) => {
      const title = filename
        .replace(/\.pdf$/i, "")
        .replace(/[_-]+/g, " ")
        .trim();

      // L'encodage hexadécimal évite les collisions entre fichiers.
      const slug = `pdf-${Buffer.from(filename, "utf8").toString("hex")}`;

      return {
        slug,
        status: "confirmed",
        category: "publication",
        title: {
          fr: title,
          en: title,
        },
        excerpt: {
          fr: "Consulter la publication au format PDF.",
          en: "Read the publication in PDF format.",
        },
        body: {
          fr: "",
          en: "",
        },
        publishedAt: null,
        isPlaceholder: false,
        pdfUrl: `/assets/publications/${encodeURIComponent(filename)}`,
      };
    });
}

export const insights: InsightArticle[] = loadPublications();

export function getInsightBySlug(slug: string) {
  return insights.find((article) => article.slug === slug);
}
