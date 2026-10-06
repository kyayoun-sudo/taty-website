"use client";

import { useState } from "react";
import Link from "next/link";
import { Locale, localizedHref, type Dictionary } from "@/lib/i18n";
import { LocaleSwitch } from "./LocaleSwitch";

export function MobileNav({
  locale,
  dict,
  nav,
}: {
  locale: Locale;
  dict: Dictionary;
  nav: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-line"
      >
        <span className="h-px w-5 bg-brand-primary" />
        <span className="h-px w-5 bg-brand-primary" />
      </button>

      {open && (
        <div className="fixed inset-x-0 top-20 z-40 border-t border-line bg-paper px-6 py-8">
          <nav className="flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={localizedHref(locale, item.href)}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink hover:text-brand-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={localizedHref(locale, "/contact")}
              onClick={() => setOpen(false)}
              className="mt-2 inline-block border border-brand-primary bg-brand-primary px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              {dict.nav.contactCta}
            </Link>
            <div className="pt-4">
              <LocaleSwitch locale={locale} />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
