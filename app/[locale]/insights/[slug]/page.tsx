import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, getDictionary, localizedHref, t, locales, type Locale } from "@/lib/i18n";
import { isVisible } from "@/lib/content-status";
import { insights, getInsightBySlug, insightCategoryLabels } from "@/content/insights";
import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export function generateStaticParams() {
  return locales.flatMap((locale) => insights.map((article) => ({ locale, slug: article.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const article = getInsightBySlug(slug);
  if (!article) return {};
  return {
    title: t(locale, article.title),
    description: t(locale, article.excerpt),
    robots: article.isPlaceholder ? { index: false, follow: false } : undefined,
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);
  const article = getInsightBySlug(slug);
  if (!article || !isVisible(article)) notFound();

  return (
    <Section>
      <Link href={localizedHref(locale, "/insights")} className="mb-6 inline-block text-sm text-brand-accent hover:underline">
        ← {dict.common.backToOverview}
      </Link>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">
          {t(locale, insightCategoryLabels[article.category])}
        </span>
        <StatusBadge status={article.status} locale={locale} />
      </div>

      <h1 className="mb-6 max-w-3xl text-3xl font-medium text-brand-primary sm:text-4xl">{t(locale, article.title)}</h1>

      {article.isPlaceholder && (
        <div className="mb-10">
          <PlaceholderNotice>{dict.insights.draftNotice}</PlaceholderNotice>
        </div>
      )}

      <div className="max-w-2xl text-ink-muted">{t(locale, article.body)}</div>
    </Section>
  );
}