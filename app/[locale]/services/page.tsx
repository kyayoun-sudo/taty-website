import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, getDictionary, type Locale } from "@/lib/i18n";
import { getVisible } from "@/lib/content-status";
import { services } from "@/content/services";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/sections/ServiceCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr ? "Nos Services" : "Our Services",
    description: isFr
      ? "Audit & certification, comptabilité & reporting, conseil financier, risque & conformité, IFRS, ESG, transformation finance, fiscalité."
      : "Audit & assurance, accounting & reporting, financial advisory, risk & compliance, IFRS, ESG, finance transformation, tax advisory.",
    alternates: { canonical: isFr ? "/services" : "/en/services" },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);
  const visibleServices = getVisible(services);

  return (
    <Section>
      <SectionHeading eyebrow={dict.services.eyebrow} title={dict.services.title} subtitle={dict.services.intro} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleServices.map((service) => (
          <ServiceCard key={service.slug} service={service} locale={locale} />
        ))}
      </div>
    </Section>
  );
}