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
  | "industry";

export const insightCategoryLabels: Record<InsightCategory, LocalizedText> = {
  audit: { fr: "Audit", en: "Audit" },
  accounting: { fr: "Comptabilité", en: "Accounting" },
  ohada: { fr: "OHADA", en: "OHADA" },
  ifrs: { fr: "IFRS", en: "IFRS" },
  tax: { fr: "Fiscalité", en: "Tax" },
  esg: { fr: "ESG", en: "ESG" },
  finance: { fr: "Finance", en: "Finance" },
  "business-environment": { fr: "Environnement des affaires en Côte d'Ivoire", en: "Côte d'Ivoire business environment" },
  industry: { fr: "Analyses sectorielles", en: "Industry insights" },
};

export interface InsightArticle {
  slug: string;
  status: ContentStatus;
  category: InsightCategory;
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedText;
  publishedAt: string | null; // ISO date, null while unconfirmed
  isPlaceholder: boolean; // true = demonstration content, never a real TATY publication
}

/**
 * Placeholder articles ONLY, clearly labelled as draft demonstration
 * content in the UI. Replace with real, approved publications before
 * removing the "draft" status.
 */
export const insights: InsightArticle[] = [
  {
    slug: "exemple-article-audit",
    status: "draft",
    category: "audit",
    isPlaceholder: true,
    publishedAt: null,
    title: { fr: "[TITRE D'ARTICLE — EXEMPLE DE STRUCTURE]", en: "[ARTICLE TITLE — STRUCTURE EXAMPLE]" },
    excerpt: {
      fr: "Ceci est un article de démonstration illustrant la structure du système de publications. Il ne s'agit pas d'une publication réelle de TATY & Associés.",
      en: "This is a demonstration article illustrating the publications system structure. It is not a real TATY & Associés publication.",
    },
    body: {
      fr: "[CONTENU DE L'ARTICLE À FOURNIR PAR TATY & ASSOCIÉS]",
      en: "[ARTICLE CONTENT TO BE PROVIDED BY TATY & ASSOCIÉS]",
    },
  },
  {
    slug: "exemple-article-ohada",
    status: "draft",
    category: "ohada",
    isPlaceholder: true,
    publishedAt: null,
    title: { fr: "[TITRE D'ARTICLE — OHADA — EXEMPLE]", en: "[ARTICLE TITLE — OHADA — EXAMPLE]" },
    excerpt: {
      fr: "Article de démonstration pour la catégorie OHADA, en attente de contenu validé par le cabinet.",
      en: "Demonstration article for the OHADA category, pending content validated by the firm.",
    },
    body: {
      fr: "[CONTENU DE L'ARTICLE À FOURNIR PAR TATY & ASSOCIÉS]",
      en: "[ARTICLE CONTENT TO BE PROVIDED BY TATY & ASSOCIÉS]",
    },
  },
  {
    slug: "exemple-article-ifrs",
    status: "draft",
    category: "ifrs",
    isPlaceholder: true,
    publishedAt: null,
    title: { fr: "[TITRE D'ARTICLE — IFRS — EXEMPLE]", en: "[ARTICLE TITLE — IFRS — EXAMPLE]" },
    excerpt: {
      fr: "Article de démonstration pour la catégorie IFRS, en attente de contenu validé par le cabinet.",
      en: "Demonstration article for the IFRS category, pending content validated by the firm.",
    },
    body: {
      fr: "[CONTENU DE L'ARTICLE À FOURNIR PAR TATY & ASSOCIÉS]",
      en: "[ARTICLE CONTENT TO BE PROVIDED BY TATY & ASSOCIÉS]",
    },
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((a) => a.slug === slug);
}
