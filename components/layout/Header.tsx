import Link from "next/link";
import { Locale, localizedHref, type Dictionary } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { LocaleSwitch } from "./LocaleSwitch";
import { MobileNav } from "./MobileNav";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const nav = [
    { href: "/le-cabinet", label: dict.nav.firm },
    { href: "/equipe", label: dict.nav.team },
    { href: "/services", label: dict.nav.services },
    { href: "/secteurs", label: dict.nav.industries },
    { href: "/international", label: dict.nav.international },
    { href: "/insights", label: dict.nav.insights },
    { href: "/carrieres", label: dict.nav.careers },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href={localizedHref(locale, "/")} className="flex items-center gap-3">
          <span className="font-display text-xl font-semibold tracking-tight text-brand-primary">
            {siteConfig.firmName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={localizedHref(locale, item.href)}
              className="text-sm font-medium text-ink hover:text-brand-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LocaleSwitch locale={locale} />
          <Link
            href={localizedHref(locale, "/contact")}
            className="border border-brand-primary bg-brand-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-primary-dark"
          >
            {dict.nav.contactCta}
          </Link>
        </div>

        <MobileNav locale={locale} dict={dict} nav={nav} />
      </Container>
    </header>
  );
}
