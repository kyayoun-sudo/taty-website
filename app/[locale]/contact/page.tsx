import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, getDictionary, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr ? "Contact" : "Contact",
    description: isFr
      ? "Contactez TATY & Associés, cabinet d'audit, d'expertise comptable et de conseil à Abidjan, Côte d'Ivoire."
      : "Contact TATY & Associés, an audit, accounting and advisory firm in Abidjan, Côte d'Ivoire.",
    alternates: { canonical: isFr ? "/contact" : "/en/contact" },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  return (
    <Section>
      <SectionHeading eyebrow={dict.contact.eyebrow} title={dict.contact.title} subtitle={dict.contact.intro} />

      <div className="grid gap-12 lg:grid-cols-2">
        <ContactForm dict={dict} locale={locale} />

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand-primary">
              {dict.contact.officeTitle}
            </h2>
            {siteConfig.offices.map((office) => (
              <div key={office.id} className="mb-4 border border-line bg-paper p-5 text-sm text-ink">
                <p className="font-medium text-brand-primary">{office.name}</p>
                {office.addressLines.map((line, i) => (
                  <p key={i} className="text-ink-muted">{line}</p>
                ))}
              </div>
            ))}
            <p className="text-sm text-ink-muted">{siteConfig.contact.phone}</p>
            <p className="text-sm text-ink-muted">{siteConfig.contact.email}</p>
            <p className="mt-2 text-sm text-ink-muted">
              {dict.footer.workingHours}: {siteConfig.workingHours[locale]}
            </p>
          </div>

          <div className="flex h-64 items-center justify-center border border-dashed border-line bg-paper-muted text-sm text-ink-muted">
            {dict.contact.mapPending}
          </div>
        </div>
      </div>
    </Section>
  );
}