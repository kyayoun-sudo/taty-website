import Link from "next/link";
import type { InsightArticle } from "@/content/insights";
import { insightCategoryLabels } from "@/content/insights";
import { Locale, localizedHref, t, type Dictionary } from "@/lib/i18n";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function InsightCard({
  article,
  locale,
  dict,
}: {
  article: InsightArticle;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Link
      href={localizedHref(locale, `/insights/${article.slug}`)}
      className="group flex flex-col gap-4 border border-line bg-paper p-7 hover:border-brand-accent"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">
          {t(locale, insightCategoryLabels[article.category])}
        </span>
        <StatusBadge status={article.status} locale={locale} />
      </div>
      <h3 className="text-lg font-medium text-brand-primary group-hover:text-brand-accent">
        {t(locale, article.title)}
      </h3>
      <p className="text-sm text-ink-muted">{t(locale, article.excerpt)}</p>
      {article.isPlaceholder && (
        <p className="text-xs italic text-status-draft">{dict.insights.draftNotice}</p>
      )}
    </Link>
  );
}
