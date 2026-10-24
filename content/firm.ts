import type { LocalizedText } from "@/lib/i18n";
import type { ContentStatus } from "@/lib/content-status";

export interface FirmSection {
  id: string;
  status: ContentStatus;
  title: LocalizedText;
  body: LocalizedText;
}

const pending = (fr: string, en: string): LocalizedText => ({ fr, en });

export const firmSections: FirmSection[] = [
  {
    id: "who-we-are",
    status: "confirmed",
    title: { fr: "Qui sommes-nous", en: "Who we are" },
    body: {
      fr: "Fondé en novembre 2015, le cabinet TATY & Associés (T&A) est une firme d'audit, d'expertise comptable et de conseil, constituée sous la forme d'une Société à Responsabilité Limitée (SARL) et enregistrée à l'Ordre des Experts-Comptables de Côte d'Ivoire sous le numéro matricule 22.0158.2.21.L. Créé par un expert-comptable diplômé fort de plus de vingt ans d'expérience, le cabinet possède une solide maîtrise de l'environnement des affaires en Afrique subsaharienne, au service des entreprises locales et internationales, des PME et PMI, des ONG et associations, des projets de développement financés par des bailleurs nationaux et internationaux, ainsi que des établissements publics et parapublics.",
      en: "Founded in November 2015, TATY & Associés (T&A) is an audit, accounting and advisory firm, incorporated as a Société à Responsabilité Limitée (SARL) and registered with the Institute of Chartered Accountants of Côte d'Ivoire (Ordre des Experts-Comptables) under registration number 22.0158.2.21.L. Founded by a qualified chartered accountant with more than twenty years of experience, the firm has a solid command of the business environment in Sub-Saharan Africa, serving local and international companies, SMEs, NGOs and associations, donor-funded development projects, and public and para-public bodies.",
    },
  },
  {
    id: "history",
    status: "confirmed",
    title: { fr: "Notre histoire", en: "Our history" },
    body: {
      fr: "Créé en 2015, le cabinet a pour activité principale les métiers de l'audit, de l'expertise comptable et du conseil. Depuis sa création, T&A a réalisé de nombreuses missions auprès de projets et programmes de développement (audit financier et comptable, audit des acquisitions et marchés) pour le compte des principaux bailleurs de fonds intervenant en Afrique : Banque Mondiale (IDA), Banque Africaine de Développement (BAD), Fonds Mondial, Fonds International pour le Développement de l'Agriculture (FIDA), Coopération Financière Allemande (KfW), Agence Française de Développement (AFD), Expertise France, Banque Ouest Africaine de Développement (BOAD), Coopération Suisse, GAVI Alliance, entre autres.",
      en: "Established in 2015, the firm's core activities are audit, accounting and advisory services. Since its creation, T&A has carried out numerous engagements for development projects and programmes (financial and accounting audits, procurement and acquisition audits) on behalf of the leading donors active in Africa: the World Bank (IDA), the African Development Bank (AfDB), the Global Fund, the International Fund for Agricultural Development (IFAD), German Development Cooperation (KfW), the French Development Agency (AFD), Expertise France, the West African Development Bank (BOAD), Swiss Cooperation, and the GAVI Alliance, among others.",
    },
  },
  {
    id: "mission",
    status: "draft",
    title: { fr: "Notre mission", en: "Our mission" },
    body: pending("[ÉNONCÉ DE MISSION À FOURNIR]", "[MISSION STATEMENT TO BE PROVIDED]"),
  },
  {
    id: "vision",
    status: "draft",
    title: { fr: "Notre vision", en: "Our vision" },
    body: pending("[ÉNONCÉ DE VISION À FOURNIR]", "[VISION STATEMENT TO BE PROVIDED]"),
  },
  {
    id: "values",
    status: "draft",
    title: { fr: "Nos valeurs", en: "Our values" },
    body: pending("[VALEURS DU CABINET À FOURNIR]", "[FIRM VALUES TO BE PROVIDED]"),
  },
  {
    id: "independence",
    status: "confirmed",
    title: { fr: "Indépendance", en: "Independence" },
    body: {
      fr: "Un regard objectif et impartial, fondé sur la confidentialité, le respect du secret professionnel et l’absence de compromis sur nos conclusions.",
      en: "An objective and impartial perspective, grounded in confidentiality, professional secrecy and uncompromising conclusions.",
    },
  },
  {
    id: "ethics",
    status: "confirmed",
    title: { fr: "Éthique", en: "Ethics" },
    body: {
      fr: "Intégrité, responsabilité et honnêteté intellectuelle guident chacune de nos interventions et fondent la relation de confiance avec nos clients et partenaires.",
      en: "Integrity, accountability and intellectual honesty guide every engagement and underpin the trust we build with clients and partners.",
    },
  },
  {
    id: "quality",
    status: "confirmed",
    title: { fr: "Qualité", en: "Quality" },
    body: {
      fr: "Des travaux rigoureux, supervisés et soumis à des contrôles qualité afin de garantir des livrables fiables, cohérents et conformes aux exigences professionnelles.",
      en: "Rigorous, supervised work subject to quality controls to ensure reliable, consistent deliverables that meet professional requirements.",
    },
  },
  {
    id: "standards",
    status: "confirmed",
    title: { fr: "Standards internationaux", en: "International standards" },
    body: {
      fr: "Une équipe intégrant une compétence ACCA et une maîtrise des référentiels internationaux IFRS et ISA, associée à une connaissance approfondie de l’environnement OHADA.",
      en: "A team with ACCA expertise and a command of the international IFRS and ISA frameworks, combined with in-depth knowledge of the OHADA environment.",
    },
  },
  {
    id: "international-cooperation",
    status: "confirmed",
    title: { fr: "Coopération internationale", en: "International cooperation" },
    body: {
      fr: "Le cabinet collabore avec différents cabinets partenaires, ce qui lui permet de réaliser des missions conjointes apportant une valeur ajoutée plus importante. Les interventions de TATY & Associés ont couvert les principaux pays d'Afrique de l'Ouest, du Centre et de l'Est : Côte d'Ivoire, Burkina Faso, Guinée, Sénégal, Bénin, Niger, Nigéria, Cameroun, Centrafrique, République Démocratique du Congo, Tchad, Congo-Brazzaville, Burundi et Madagascar.",
      en: "The firm collaborates with several partner firms, enabling joint engagements that bring added value to clients. TATY & Associés' engagements have covered the main countries of West, Central and East Africa: Côte d'Ivoire, Burkina Faso, Guinea, Senegal, Benin, Niger, Nigeria, Cameroon, Central African Republic, Democratic Republic of Congo, Chad, Congo-Brazzaville, Burundi and Madagascar.",
    },
  },
];
