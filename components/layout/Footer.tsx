import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Locale, localizedHref, type Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const socialEntries = Object.entries(siteConfig.social).filter(([, url]) => url);

  const columns = [
    {
      title: dict.nav.services,
      links: [
        { href: "/services", label: dict.nav.services },
        { href: "/secteurs", label: dict.nav.industries },
        { href: "/international", label: dict.nav.international },
      ],
    },
    {
      title: dict.nav.firm,
      links: [
        { href: "/le-cabinet", label: dict.nav.firm },
        { href: "/equipe", label: dict.nav.team },
        { href: "/insights", label: dict.nav.insights },
        { href: "/carrieres", label: dict.nav.careers },
      ],
    },
  ];

  return (
    <footer className="border-t border-line bg-brand-primary text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold">{siteConfig.firmName}</p>
          <p className="mt-3 max-w-xs text-sm text-white/70">{siteConfig.tagline[locale]}</p>
          {socialEntries.length > 0 && (
            <div className="mt-6 flex gap-4 text-sm">
              {socialEntries.map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  {key}
                </a>
              ))}
            </div>
          )}
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{col.title}</p>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={localizedHref(locale, link.href)} className="text-white/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{dict.footer.contactTitle}</p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {siteConfig.offices.map((office) => (
              <li key={office.id}>{office.addressLines.join(", ")}</li>
            ))}
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.email}</li>
            <li className="text-white/50">
              {dict.footer.workingHours}: {siteConfig.workingHours[locale]}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {siteConfig.firmName}. {dict.footer.rightsReserved}
          </p>
          <div className="flex gap-6">
            <Link href={localizedHref(locale, "/mentions-legales")} className="hover:text-white">
              {dict.footer.legalMentions}
            </Link>
            <Link href={localizedHref(locale, "/politique-confidentialite")} className="hover:text-white">
              {dict.footer.privacyPolicy}
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
