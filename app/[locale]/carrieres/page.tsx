import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, getDictionary, t, type Locale } from "@/lib/i18n";
import { careerTracks } from "@/content/careers";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CareerApplicationForm } from "@/components/sections/CareerApplicationForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr ? "Carrières" : "Careers",
    description: isFr
      ? "Rejoindre TATY & Associés : stages, opportunités pour jeunes diplômés et professionnels expérimentés."
      : "Join TATY & Associés: internships, graduate opportunities and experienced-hire positions.",
    alternates: { canonical: isFr ? "/carrieres" : "/en/carrieres" },
  };
}

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  return (
    <Section>
      <SectionHeading eyebrow={dict.careers.eyebrow} title={dict.careers.title} subtitle={dict.careers.intro} />

      <div className="mb-14 grid gap-6 sm:grid-cols-3">
        {careerTracks.map((track) => (
          <div key={track.id} className="border-t-2 border-brand-accent pt-4">
            <h2 className="text-base font-medium text-brand-primary">{t(locale, track.title)}</h2>
            <p className="mt-2 text-sm text-ink-muted">{t(locale, track.description)}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl">
        <h2 className="mb-4 text-xl font-medium text-brand-primary">{dict.careers.applicationTitle}</h2>
        <CareerApplicationForm dict={dict} locale={locale} />
      </div>
    </Section>
  );
}
