import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, getDictionary, t, type Locale } from "@/lib/i18n";
import { careerTracks } from "@/content/careers";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

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
        <div className="mb-6">
          <PlaceholderNotice>{dict.careers.formCv}</PlaceholderNotice>
        </div>
        <form className="flex flex-col gap-5 border border-line bg-paper p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField label={dict.careers.formName} name="name" required />
            <TextField label={dict.careers.formEmail} name="email" type="email" required />
            <TextField label={dict.careers.formPhone} name="phone" type="tel" />
            <TextField label={dict.careers.formPosition} name="position" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">{dict.careers.formMessage}</label>
            <textarea rows={5} name="message" className="w-full border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-brand-accent" />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex w-fit items-center justify-center border border-brand-primary bg-brand-primary px-6 py-3 text-sm font-medium text-white hover:bg-brand-primary-dark"
          >
            {dict.careers.submit}
          </button>
        </form>
      </div>
    </Section>
  );
}

function TextField({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-line bg-paper px-4 py-2.5 text-sm outline-none focus:border-brand-accent"
      />
    </div>
  );
}