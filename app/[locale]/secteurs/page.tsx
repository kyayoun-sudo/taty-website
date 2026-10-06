import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, getDictionary, t, type Locale } from "@/lib/i18n";
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
      ? "Les secteurs d'activité couverts par l'organisation de TATY & Associés en Côte d'Ivoire."
      : "The industries covered by TATY & Associés' sector-based organisation in Côte d'Ivoire.",
    alternates: { canonical: isFr ? "/secteurs" : "/en/secteurs" },
  };
}

export default async function IndustriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);
  const visibleIndustries = getVisible(industries);

  return (
    <Section>
      <SectionHeading eyebrow={dict.industries.eyebrow} title={dict.industries.title} subtitle={dict.industries.intro} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleIndustries.map((industry) => (
          <div key={industry.slug} className="flex items-center justify-between gap-3 border border-line bg-paper p-5">
            <span className="font-medium text-brand-primary">{t(locale, industry.title)}</span>
            <StatusBadge status={industry.status} locale={locale} />
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-ink-muted">{dict.industries.experienceToBeConfirmed}</p>
    </Section>
  );
}
