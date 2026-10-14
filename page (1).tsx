import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, getDictionary, type Locale } from "@/lib/i18n";
import { getVisible } from "@/lib/content-status";
import { team } from "@/content/team";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TeamCard } from "@/components/sections/TeamCard";

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
    alternates: {
      canonical: isFr ? "/equipe" : "/en/equipe",
    },
  };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  const visibleTeam = getVisible(team).map((member) => {
    if (member.id !== "komenan-paul-yann") return member;

    return {
      ...member,
      role: {
        fr: "Consultant-associé, ACCA Member (Chartered Certified Accountant)",
        en: "Associate Consultant, ACCA Member (Chartered Certified Accountant)",
      },
      qualifications: [
        {
          fr: "Membre de l'ACCA (Association of Chartered Certified Accountants) — Chartered Certified Accountant",
          en: "ACCA Member (Association of Chartered Certified Accountants) — Chartered Certified Accountant",
        },
        ...member.qualifications.slice(1),
      ],
      bio: {
        fr: "Membre de l'ACCA (Chartered Certified Accountant) et économiste comptant plus de 10 ans d'expérience internationale en finance, reporting et audit entre l'Europe, l'Asie et l'Afrique, avec la maîtrise de plusieurs référentiels comptables (IFRS, US GAAP, SYSCOHADA, Plan Comptable Français). Avant de rejoindre TATY & Associés en 2026 en tant que Consultant-associé (Audit, Transformation & Développement International), il a occupé des postes de comptable senior et de contrôleur comptable au sein de groupes internationaux tels que Roche, Baker Hughes, ExxonMobil et Tata Consultancy Services. Au sein du cabinet, il pilote des missions d'audit, la standardisation des méthodologies et de la documentation, ainsi que la stratégie de développement international du cabinet, incluant le projet TATY France et la structuration d'un réseau international de cabinets partenaires. Il est également l'auteur de plusieurs publications sur les normes comptables et l'inclusion financière en Afrique (SSRN, Academia.edu).",
        en: "An ACCA Member (Chartered Certified Accountant) and economist with more than 10 years of international experience in finance, reporting and audit across Europe, Asia and Africa, with command of several accounting frameworks (IFRS, US GAAP, SYSCOHADA, French GAAP). Before joining TATY & Associés in 2026 as Associate Consultant (Audit, Transformation & International Business Development), he held senior accountant and financial controller roles at international groups including Roche, Baker Hughes, ExxonMobil and Tata Consultancy Services. At the firm, he leads audit engagements, the standardisation of methodology and documentation, and the firm's international development strategy, including the TATY France project and the structuring of an international network of partner firms. He is also the author of several publications on accounting standards and financial inclusion in Africa (SSRN, Academia.edu).",
      },
    };
  });

  return (
    <Section>
      <SectionHeading
        eyebrow={dict.team.eyebrow}
        title={dict.team.title}
        subtitle={dict.team.intro}
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleTeam.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
            locale={locale}
          />
        ))}
      </div>
    </Section>
  );
}
