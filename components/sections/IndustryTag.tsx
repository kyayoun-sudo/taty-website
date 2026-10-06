import type { Industry } from "@/content/industries";
import { Locale, t } from "@/lib/i18n";

export function IndustryTag({ industry, locale }: { industry: Industry; locale: Locale }) {
  return (
    <span className="inline-flex items-center border border-line bg-paper px-4 py-2 text-sm text-ink">
      {t(locale, industry.title)}
    </span>
  );
}
