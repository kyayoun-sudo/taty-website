import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  isLocale,
  getDictionary,
  localizedHref,
  t,
  type Locale,
} from "@/lib/i18n";

import { getVisible } from "@/lib/content-status";
import { industries } from "@/content/industries";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  return {
    title: isFr ? "Secteurs d'activité" : "Industries",
    description: isFr
      ? "Les secteurs d'activité couverts par TATY & Associés en Côte d'Ivoire."
      : "Industries covered by TATY & Associés in Côte d'Ivoire.",
    alternates: {
      canonical: isFr ? "/secteurs" : "/en/secteurs",
    },
  };
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);
  const visibleIndustries = getVisible(industries);

  return (
    <Section>
      <SectionHeading
        eyebrow={dict.industries.eyebrow}
        title={dict.industries.title}
        subtitle={dict.industries.intro}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleIndustries.map((industry) => {
          const industryName = t(locale, industry.title);

          return (
            <Link
              key={industry.slug}
              href={localizedHref(
                locale,
                `/contact?sector=${encodeURIComponent(industryName)}`
              )}
              className="group flex flex-col gap-4 border border-line bg-paper p-5 transition-colors hover:border-brand-accent"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-medium text-brand-primary group-hover:text-brand-accent">
                  {industryName}
                </span>

                <StatusBadge
                  status={industry.status}
                  locale={locale}
                />
              </div>

              <span className="text-sm font-medium text-brand-accent">
                {locale === "fr"
                  ? "Nous contacter pour ce secteur →"
                  : "Contact us about this industry →"}
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
