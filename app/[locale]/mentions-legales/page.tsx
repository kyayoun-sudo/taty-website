import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata = { title: "Mentions légales", robots: { index: false } };

export default async function LegalNoticePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const isFr = locale === "fr";

  return (
    <Section>
      <SectionHeading title={isFr ? "Mentions légales" : "Legal Notice"} />
      <div className="mb-8 max-w-2xl">
        <PlaceholderNotice>
          {isFr
            ? "Cette page reprendra les mentions légales officielles du cabinet (forme juridique, capital, RCCM, ordre professionnel, hébergeur...) une fois ces informations transmises par TATY & Associés."
            : "This page will contain the firm's official legal notice (legal form, capital, RCCM registration, professional body, hosting provider...) once provided by TATY & Associés."}
        </PlaceholderNotice>
      </div>
      <dl className="max-w-xl space-y-3 text-sm text-ink-muted">
        <div><dt className="font-medium text-ink">{isFr ? "Raison sociale" : "Legal name"}</dt><dd>{siteConfig.legalName}</dd></div>
        <div><dt className="font-medium text-ink">RCCM</dt><dd>{siteConfig.registrations.rccm}</dd></div>
        <div><dt className="font-medium text-ink">{isFr ? "Ordre professionnel" : "Professional body"}</dt><dd>{siteConfig.registrations.professionalOrder}</dd></div>
      </dl>
    </Section>
  );
}