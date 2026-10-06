import Link from "next/link";
import type { ServiceCategory } from "@/content/services";
import { Locale, localizedHref, t } from "@/lib/i18n";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function ServiceCard({ service, locale }: { service: ServiceCategory; locale: Locale }) {
  return (
    <Link
      href={localizedHref(locale, `/services/${service.slug}`)}
      className="group flex flex-col gap-4 border border-line bg-paper p-7 transition-colors hover:border-brand-accent"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-medium text-brand-primary group-hover:text-brand-accent">
          {t(locale, service.title)}
        </h3>
        <StatusBadge status={service.status} locale={locale} />
      </div>
      <p className="text-sm text-ink-muted">{t(locale, service.shortDescription)}</p>
    </Link>
  );
}
