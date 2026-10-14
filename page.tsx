import type { Metadata } from "next";
import { isLocale, getDictionary, localizedHref, t, type Locale } from "@/lib/i18n";
import { getVisible } from "@/lib/content-status";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { firmSections } from "@/content/firm";
import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { IndustryTag } from "@/components/sections/IndustryTag";
import { InsightCard } from "@/components/sections/InsightCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/Button";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr
      ? "Cabinet d'audit, d'expertise comptable et de conseil en Côte d'Ivoire"
      : "Audit, Accounting & Advisory Firm in Côte d'Ivoire",
    description: isFr
      ? "TATY & Associés est un cabinet d'audit, d'expertise comptable et de conseil basé à Abidjan, Côte d'Ivoire, au service des entreprises ivoiriennes, groupes internationaux et investisseurs."
      : "TATY & Associés is an audit, accounting and advisory firm based in Abidjan, Côte d'Ivoire, serving Ivorian companies, international groups and investors.",
    alternates: {
      canonical: isFr ? "/" : "/en",
      languages: { fr: "/", en: "/en" },
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  const visibleServices = getVisible(services).slice(0, 8);
  const visibleIndustries = getVisible(industries);
  const visibleInsights = getVisible(insights).slice(0, 3);
  const whoWeAre = firmSections.find((s) => s.id === "who-we-are");

  const whyItems =
    locale === "fr"
      ? [
          {
            title: dict.firm.independence,
            text: "Des travaux conduits avec objectivité, intégrité et indépendance de jugement.",
          },
          {
            title: dict.firm.quality,
            text: "Une approche structurée, documentée et soumise à des exigences élevées de qualité.",
          },
          {
            title: dict.firm.ethics,
            text: "Une culture professionnelle fondée sur l'intégrité, la confidentialité et la responsabilité.",
          },
          {
            title: dict.firm.standards,
            text: "Des missions réalisées dans le respect des référentiels comptables, d'audit et professionnels applicables.",
          },
        ]
      : [
          {
            title: dict.firm.independence,
            text: "Work performed with objectivity, integrity and independence of judgement.",
          },
          {
            title: dict.firm.quality,
            text: "A structured and documented approach supported by high quality standards.",
          },
          {
            title: dict.firm.ethics,
            text: "A professional culture built on integrity, confidentiality and accountability.",
          },
          {
            title: dict.firm.standards,
            text: "Engagements performed in accordance with applicable accounting, auditing and professional frameworks.",
          },
        ];

  return (
    <>
      <Hero locale={locale} dict={dict} />

      <Section>
        <SectionHeading title={dict.home.introTitle} />
        <p className="max-w-3xl text-lg text-ink-muted">{whoWeAre ? t(locale, whoWeAre.body) : ""}</p>
        <div className="mt-8">
          <Button href={localizedHref(locale, "/le-cabinet")} variant="secondary">
            {dict.common.learnMore}
          </Button>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow={dict.nav.services}
          title={dict.home.servicesTitle}
          subtitle={dict.home.servicesSubtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleServices.map((service) => (
            <ServiceCard key={service.slug} service={service} locale={locale} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={dict.nav.industries}
          title={dict.home.industriesTitle}
          subtitle={dict.home.industriesSubtitle}
        />
        <div className="flex flex-wrap gap-3">
          {visibleIndustries.map((industry) => (
            <IndustryTag key={industry.slug} industry={industry} locale={locale} />
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading title={dict.home.whyTitle} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyItems.map((item) => (
            <div key={item.title} className="border-t-2 border-brand-accent pt-4">
              <h3 className="text-base font-medium text-brand-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={dict.nav.international}
              title={dict.home.internationalTitle}
              subtitle={dict.home.internationalSubtitle}
            />
            <Button href={localizedHref(locale, "/international")} variant="secondary">
              {dict.home.internationalCta}
            </Button>
          </div>
          <div className="h-64 border border-line bg-paper-muted lg:h-80" aria-hidden />
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow={dict.nav.insights}
          title={dict.home.insightsTitle}
          subtitle={dict.home.insightsSubtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleInsights.map((article) => (
            <InsightCard key={article.slug} article={article} locale={locale} dict={dict} />
          ))}
        </div>
        <div className="mt-8">
          <Button href={localizedHref(locale, "/insights")} variant="ghost">
            {dict.common.viewAll} →
          </Button>
        </div>
      </Section>

      <CTABanner
        locale={locale}
        title={dict.home.contactTitle}
        subtitle={dict.home.contactSubtitle}
        ctaLabel={dict.nav.contactCta}
      />
    </>
  );
}
