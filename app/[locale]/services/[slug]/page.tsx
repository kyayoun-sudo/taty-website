import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, getDictionary, localizedHref, t, locales, type Locale } from "@/lib/i18n";
import { isVisible } from "@/lib/content-status";
import { services, getServiceBySlug } from "@/content/services";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { CTABanner } from "@/components/sections/CTABanner";

export function generateStaticParams() {
  return locales.flatMap((locale) => services.map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: t(locale, service.title),
    description: t(locale, service.shortDescription),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);
  const service = getServiceBySlug(slug);
  if (!service || !isVisible(service)) notFound();

  return (
    <>
      <Section>
        <Link href={localizedHref(locale, "/services")} className="mb-6 inline-block text-sm text-brand-accent hover:underline">
          ← {dict.common.backToOverview}
        </Link>
        <div className="mb-4 flex items-center gap-4">
          <StatusBadge status={service.status} locale={locale} />
        </div>
        <SectionHeading eyebrow={dict.services.eyebrow} title={t(locale, service.title)} subtitle={t(locale, service.shortDescription)} />

        <div className="mb-10">
          <PlaceholderNotice>{dict.services.statusNote}</PlaceholderNotice>
        </div>

        {service.lines.length > 0 && (
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-primary">
              {dict.services.possibleScope}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.lines.map((line, i) => (
                <li key={i} className="flex items-start gap-3 border border-line bg-paper p-4 text-sm text-ink">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  {t(locale, line.title)}
                </li>
              ))}
            </ul>
          </div>
        )}
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