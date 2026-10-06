import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, getDictionary, t, type Locale } from "@/lib/i18n";
import { firmSections } from "@/content/firm";
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
    title: isFr ? "Le Cabinet" : "The Firm",
    description: isFr
      ? "Qui sommes-nous, notre histoire, notre mission, nos valeurs et nos engagements en matière d'indépendance, d'éthique et de qualité."
      : "Who we are, our history, mission, values, and our commitments to independence, ethics and quality.",
    alternates: { canonical: isFr ? "/le-cabinet" : "/en/le-cabinet" },
  };
}

export default async function FirmPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  return (
    <Section>
      <SectionHeading eyebrow={dict.firm.eyebrow} title={dict.firm.title} />
      <div className="grid gap-12 lg:grid-cols-2">
        {firmSections.map((section) => (
          <div key={section.id} className="border-t border-line pt-6">
            <div className="mb-2 flex items-center justify-between gap-3">
              <h2 className="text-xl font-medium text-brand-primary">{t(locale, section.title)}</h2>
              <StatusBadge status={section.status} locale={locale} />
            </div>
            <p className="text-ink-muted">{t(locale, section.body)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
