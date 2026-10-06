import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, getDictionary, t, type Locale } from "@/lib/i18n";
import { getVisible } from "@/lib/content-status";
import { insights, insightCategoryLabels } from "@/content/insights";
import { Section, SectionHeading } from "@/components/ui/Section";
import { InsightCard } from "@/components/sections/InsightCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr ? "Publications & Analyses" : "Insights & Publications",
    description: isFr
      ? "Analyses de TATY & Associés sur l'audit, la comptabilité, l'IFRS, l'OHADA, la fiscalité et l'ESG."
      : "TATY & Associés' analysis on audit, accounting, IFRS, OHADA, tax and ESG.",
    alternates: { canonical: isFr ? "/insights" : "/en/insights" },
  };
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);
  const visibleInsights = getVisible(insights);
  const categories = Object.values(insightCategoryLabels);

  return (
    <Section>
      <SectionHeading eyebrow={dict.insights.eyebrow} title={dict.insights.title} subtitle={dict.insights.intro} />

      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat, i) => (
          <span key={i} className="border border-line px-3 py-1.5 text-xs font-medium text-ink-muted">
            {t(locale, cat)}
          </span>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleInsights.map((article) => (
          <InsightCard key={article.slug} article={article} locale={locale} dict={dict} />
        ))}
      </div>
    </Section>
  );
}