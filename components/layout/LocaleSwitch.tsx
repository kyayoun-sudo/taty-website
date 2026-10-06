import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n";

export function LocaleSwitch({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center gap-1 text-sm font-medium text-ink-muted">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          <Link
            href={l === "fr" ? "/" : `/${l}`}
            className={l === locale ? "text-brand-primary underline underline-offset-4" : "hover:text-brand-primary"}
          >
            {l.toUpperCase()}
          </Link>
          {i < locales.length - 1 && <span className="text-line">/</span>}
        </span>
      ))}
    </div>
  );
}
