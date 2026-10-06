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
      fr: "L'indépendance et la confidentialité sont des valeurs essentielles à notre profession. Nous attachons une grande importance au respect total du secret professionnel, pendant et après la réalisation de chaque mission.",
      en: "Independence and confidentiality are essential values of our profession. We attach great importance to the complete observance of professional secrecy, both during and after each engagement.",
    },
  },
  {
    id: "ethics",
    status: "confirmed",
    title: { fr: "Éthique", en: "Ethics" },
    body: {
      fr: "Nous faisons de l'éthique professionnelle un pilier de nos interventions. Grâce à cela, nous entretenons une réputation d'implication, de fiabilité et d'honnêteté intellectuelle auprès des entreprises et des institutions.",
      en: "We make professional ethics a cornerstone of our engagements. This has earned us a reputation for commitment, reliability and intellectual honesty with the companies and institutions we serve.",
    },
  },
  {
    id: "quality",
    status: "confirmed",
    title: { fr: "Qualité", en: "Quality" },
    body: {
      fr: "Nos travaux sont systématiquement soumis à des contrôles qualité pour garantir des prestations conformes aux normes et pratiques internationales. Nous avons mis en place un système de contrôle qualité conforme à la Norme internationale ISQC1, assurant que nos collaborateurs respectent les normes professionnelles. Conformément à cette norme, nous disposons d'un manuel de contrôle qualité détaillant les politiques et procédures requises.",
      en: "Our work is systematically subject to quality controls to ensure services that comply with international standards and practices. We have implemented a quality control system compliant with the International Standard on Quality Control (ISQC1), ensuring that our staff adhere to professional standards. In line with this standard, we maintain a quality control manual detailing the required policies and procedures.",
    },
  },
  {
    id: "standards",
    status: "confirmed",
    title: { fr: "Normes professionnelles", en: "Professional standards" },
    body: {
      fr: "L'application des exigences de la norme ISQC1 garantit la conformité de nos travaux aux normes professionnelles de l'IFAC (Fédération Internationale des Experts-Comptables). Le cabinet est par ailleurs équipé d'outils conformes au référentiel comptable de l'OHADA : Auditsoft Premier (logiciel d'audit et de commissariat conforme à l'OHADA) et XCOA Liasse fiscale (édition et vérification des états financiers SYSCOHADA et SYCEBNL).",
      en: "The application of the ISQC1 requirements ensures our work complies with the professional standards of IFAC (the International Federation of Accountants). The firm is also equipped with tools aligned with the OHADA accounting framework: Auditsoft Premier (an OHADA-compliant audit software) and XCOA Liasse fiscale (for producing and checking SYSCOHADA and SYCEBNL financial statements).",
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
