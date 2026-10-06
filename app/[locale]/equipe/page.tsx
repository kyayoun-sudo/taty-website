import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, getDictionary, type Locale } from "@/lib/i18n";
import { getVisible } from "@/lib/content-status";
import { team } from "@/content/team";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TeamCard } from "@/components/sections/TeamCard";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    title: isFr ? "Notre Équipe" : "Our Team",
    description: isFr
      ? "Découvrez les associés et collaborateurs de TATY & Associés."
      : "Meet the partners and team members of TATY & Associés.",
    alternates: { canonical: isFr ? "/equipe" : "/en/equipe" },
  };
}

export default async function TeamPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);
  const visibleTeam = getVisible(team);

  return (
    <Section>
      <SectionHeading eyebrow={dict.team.eyebrow} title={dict.team.title} subtitle={dict.team.intro} />
      <div className="mb-10">
        <PlaceholderNotice>{dict.team.placeholderNote}</PlaceholderNotice>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleTeam.map((member) => (
          <TeamCard key={member.id} member={member} locale={locale} />
        ))}
      </div>
    </Section>
  );
}