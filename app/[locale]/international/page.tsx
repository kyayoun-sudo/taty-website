import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  isLocale,
  getDictionary,
  localizedHref,
  t,
  type Locale,
} from "@/lib/i18n";
import {
  internationalAudiences,
  internationalCapabilities,
  confirmedCountries,
  confirmedFunders,
} from "@/content/international";
import {
  Section,
  SectionHeading,
} from "@/components/ui/Section";
import { CTABanner } from "@/components/sections/CTABanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  return {
    title: isFr
      ? "Services Internationaux"
      : "International Services",
    description: isFr
      ? "Support local en Côte d'Ivoire pour les groupes internationaux, investisseurs étrangers et équipes d'audit de groupe dans l'espace OHADA."
      : "Local support in Côte d'Ivoire for international groups, foreign investors and group audit teams across the OHADA area.",
    alternates: {
      canonical: isFr
        ? "/international"
        : "/en/international",
    },
  };
}

export default async function InternationalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);
  const isFr = locale === "fr";
  const contactHref = localizedHref(locale, "/contact");

  const intro = isFr
    ? "TATY & Associés accompagne les groupes internationaux, investisseurs étrangers et équipes d'audit de groupe présents ou souhaitant s'implanter en Côte d'Ivoire et dans l'espace OHADA."
    : "TATY & Associés supports international groups, foreign investors and group audit teams operating or seeking to establish a presence in Côte d'Ivoire and the OHADA area.";

  return (
    <>
      <Section>
        <SectionHeading
          eyebrow={dict.international.eyebrow}
          title={dict.international.title}
          subtitle={intro}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-primary">
              {dict.international.audiencesTitle}
            </h2>

            <ul className="space-y-3">
              {internationalAudiences.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-l-2 border-brand-accent pl-4 text-sm text-ink"
                >
                  {t(locale, item)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-primary">
              {isFr
                ? "Domaines d'accompagnement"
                : "Areas of support"}
            </h2>

            <ul className="grid gap-3 sm:grid-cols-2">
              {internationalCapabilities.map((item, i) => (
                <li key={i}>
                  <a
                    href={contactHref}
                    className="block h-full border border-line bg-paper p-4 text-sm text-ink transition-colors hover:border-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
                  >
                    {t(locale, item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section muted>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-primary">
          {isFr
            ? "Une expérience confirmée à l'international"
            : "A confirmed international track record"}
        </h2>

        <p className="mb-8 max-w-2xl text-sm text-ink-muted">
          {isFr
            ? "Le cabinet a conduit des missions d'audit financées par les bailleurs suivants, dans les pays ci-dessous."
            : "The firm has carried out audit engagements financed by the following donors, in the countries listed below."}
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              {isFr
                ? "Bailleurs de fonds"
                : "Donors / funders"}
            </h3>

            <ul className="flex flex-wrap gap-2">
              {confirmedFunders.map((item, i) => (
                <li
                  key={i}
                  className="border border-line bg-paper px-3 py-1.5 text-xs text-ink"
                >
                  {t(locale, item)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              {isFr
                ? "Pays d'intervention"
                : "Countries of engagement"}
            </h3>

            <ul className="flex flex-wrap gap-2">
              {confirmedCountries.map((item, i) => (
                <li
                  key={i}
                  className="border border-line bg-paper px-3 py-1.5 text-xs text-ink"
                >
                  {t(locale, item)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTABanner
        locale={locale}
        title={dict.home.contactTitle}
        subtitle={dict.home.contactSubtitle}
        ctaLabel={dict.nav.contactCta}
        ctaHref="/contact"
      />
    </>
  );
}
