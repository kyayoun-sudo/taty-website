import type { ContentStatus } from "@/lib/content-status";
import type { Locale } from "@/lib/i18n";

const labels: Record<Locale, Record<Exclude<ContentStatus, "hidden">, string>> = {
  fr: { draft: "Contenu provisoire", confirmed: "Confirmé" },
  en: { draft: "Draft content", confirmed: "Confirmed" },
};

/** Small visual flag shown on any content item that is not yet confirmed by TATY. */
export function StatusBadge({ status, locale }: { status: ContentStatus; locale: Locale }) {
  if (status === "confirmed" || status === "hidden") return null;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-status-draft-bg px-3 py-1 text-xs font-medium text-status-draft">
      <span className="h-1.5 w-1.5 rounded-full bg-status-draft" />
      {labels[locale].draft}
    </span>
  );
}
