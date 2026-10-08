import type { LocalizedText } from "@/lib/i18n";
import type { ContentStatus } from "@/lib/content-status";

export interface TeamMember {
  id: string;
  status: ContentStatus;
  photo: string;
  name: LocalizedText;
  role: LocalizedText;
  qualifications: LocalizedText[];
  expertise: LocalizedText[];
  industries: LocalizedText[];
  languages: LocalizedText[];
  bio: LocalizedText;
  linkedin: string | null;
}

type TeamMemberInput = Omit<TeamMember, "photo">;

const teamMembers: TeamMemberInput[] = [
  {
    id: "taty-hippolyte-landry",
    status: "confirmed",
    name: {
      fr: "TATY Hippolyte Landry",
      en: "TATY Hippolyte Landry",
    },
    role: {
      fr: "Associé-Gérant, Expert-comptable diplômé",
      en: "Managing Partner, Chartered Accountant",
    },
    qualifications: [
      {
        fr: "Diplôme d'expertise comptable (DEC), diplôme d'État français (2015)",
        en: "French Chartered Accountancy Diploma (DEC), French State diploma (2015)",
      },
      {
        fr: "Inscrit au tableau de l'Ordre des Experts-Comptables de Côte d'Ivoire — n° 22.0158.2.21.L",
        en: "Registered with the Institute of Chartered Accountants of Côte d'Ivoire — no. 22.0158.2.21.L",
      },
      {
        fr: "Accréditation Manager Spécialiste en passation des marchés — ESG, Université du Québec à Montréal (2023)",
        en: "Procurement Management Specialist accreditation — ESG, Université du Québec à Montréal (2023)",
      },
    ],
    expertise: [
      {
        fr: "Audit financier de projets de développement",
        en: "Financial audit of development projects",
      },
      {
        fr: "Passation des marchés",
        en: "Procurement",
      },
      {
        fr: "Expertise comptable",
        en: "Chartered accountancy",
      },
    ],
    industries: [
      {
        fr: "Projets et programmes de développement (bailleurs multilatéraux)",
        en: "Development projects and programmes (multilateral donors)",
      },
    ],
    languages: [
      {
        fr: "Français — excellent",
        en: "French — excellent",
      },
      {
        fr: "Anglais — bon",
        en: "English — good",
      },
      {
        fr: "Espagnol — moyen",
        en: "Spanish — average",
      },
    ],
    bio: {
      fr: "Associé fondateur du cabinet TATY & Associés depuis novembre 2015, Monsieur TATY conçoit et conduit la stratégie de développement du cabinet. Expert-comptable comptant 26 ans d'expérience professionnelle, il est commissaire aux comptes de plusieurs sociétés en Côte d'Ivoire et a été signataire des rapports de nombreuses missions d'audit de projets financés par des bailleurs multilatéraux (Banque Africaine de Développement, Banque Mondiale, FIDA, GAVI, entre autres) en Côte d'Ivoire et dans plusieurs pays d'Afrique.",
      en: "Founding partner of TATY & Associés since November 2015, Mr. TATY designs and drives the firm's development strategy. A chartered accountant with 26 years of professional experience, he is the statutory auditor of several companies in Côte d'Ivoire and has signed the reports of numerous audit engagements for projects financed by multilateral donors (the African Development Bank, the World Bank, IFAD, GAVI, among others) in Côte d'Ivoire and several other African countries.",
    },
    linkedin: null,
  },

  {
    id: "ouattara-navaga",
    status: "confirmed",
    name: {
      fr: "OUATTARA Navaga",
      en: "OUATTARA Navaga",
    },
    role: {
      fr: "Consultant-associé, Directeur de mission, Expert-comptable diplômé",
      en: "Associate Consultant, Engagement Director, Chartered Accountant",
    },
    qualifications: [
      {
        fr: "Diplôme Français d'Expert-Comptable (DEC), diplôme d'État (2021)",
        en: "French Chartered Accountancy Diploma (DEC), State diploma (2021)",
      },
      {
        fr: "Inscrit au tableau de l'Ordre des Experts-Comptables de Côte d'Ivoire — n° 21.0249.1.15.L",
        en: "Registered with the Institute of Chartered Accountants of Côte d'Ivoire — no. 21.0249.1.15.L",
      },
      {
        fr: "Master Comptabilité, Audit et Contrôle — ESCAE Niamey (2015)",
        en: "Master's in Accounting, Audit and Control — ESCAE Niamey (2015)",
      },
    ],
    expertise: [
      {
        fr: "Audit financier de projets de développement",
        en: "Financial audit of development projects",
      },
      {
        fr: "Stratégie et développement du cabinet",
        en: "Firm strategy and development",
      },
    ],
    industries: [],
    languages: [
      {
        fr: "Français — bon",
        en: "French — good",
      },
      {
        fr: "Anglais — moyen",
        en: "English — average",
      },
    ],
    bio: {
      fr: "Associé du cabinet depuis 2022 après plus de vingt ans passés à différents postes chez TATY & Associés (assistant, senior, manager), Monsieur OUATTARA compte 24 ans d'expérience professionnelle, dont 5 ans en tant qu'expert-comptable. Il a conduit de nombreuses missions d'audit de projets financés par des bailleurs de fonds internationaux en Côte d'Ivoire et en Afrique.",
      en: "A partner at the firm since 2022 after more than twenty years in various roles at TATY & Associés (assistant, senior, manager), Mr. OUATTARA has 24 years of professional experience, including 5 years as a chartered accountant. He has led numerous audit engagements for projects financed by international donors in Côte d'Ivoire and across Africa.",
    },
    linkedin: null,
  },

  {
    id: "kouame-christian",
    status: "confirmed",
    name: {
      fr: "KOUAME Christian",
      en: "KOUAME Christian",
    },
    role: {
      fr: "Consultant-associé, Directeur de mission, Expert-comptable",
      en: "Associate Consultant, Engagement Director, Chartered Accountant",
    },
    qualifications: [
      {
        fr: "Expert-comptable diplômé (Bac+8)",
        en: "Qualified Chartered Accountant (Bac+8)",
      },
    ],
    expertise: [
      {
        fr: "Audit et supervision de missions",
        en: "Audit and engagement supervision",
      },
    ],
    industries: [],
    languages: [],
    bio: {
      fr: "12 ans d'expérience professionnelle. En qualité d'auditeur et manager, Monsieur KOUAME élabore et exécute les axes essentiels des programmes de travail, en assure la synthèse et rédige les projets de rapports des missions confiées au cabinet.",
      en: "12 years of professional experience. As auditor and manager, Mr. KOUAME develops and executes the key work programme areas, prepares the summaries, and drafts the report proposals for the firm's engagements.",
    },
    linkedin: null,
  },

  {
    id: "komenan-paul-yann",
    status: "confirmed",
    name: {
      fr: "Paul Yann Cédric Komenan",
      en: "Paul Yann Cédric Komenan",
    },
    role: {
      fr: "Consultant-associé, Expert-comptable (ACCA)",
      en: "Associate Consultant, Chartered Certified Accountant (ACCA)",
    },
    qualifications: [
      {
        fr: "Expert-comptable ACCA (Association of Chartered Certified Accountants), qualification reconnue dans 182 pays (2021–2025)",
        en: "ACCA (Association of Chartered Certified Accountants) Chartered Certified Accountant, internationally recognised in 182 countries (2021–2025)",
      },
      {
        fr: "MSc in Professional Accountancy, University of London (2025 – en cours)",
        en: "MSc in Professional Accountancy, University of London (2025 – in progress)",
      },
      {
        fr: "BSc (Hons) Comptabilité Appliquée, Oxford Brookes University, mention Bien / Upper Second Class (2022–2025)",
        en: "BSc (Hons) Applied Accounting, Oxford Brookes University, Upper Second Class Honours (2022–2025)",
      },
      {
        fr: "Maîtrise & Licence Économie, Université Félix Houphouët-Boigny (2011–2016)",
        en: "Master's & Bachelor's in Economics, Université Félix Houphouët-Boigny (2011–2016)",
      },
      {
        fr: "Procédure d'inscription à l'Ordre des Experts-Comptables de France en cours, par équivalence ACCA (épreuves de droit et déontologie prévues en décembre 2026)",
        en: "Registration process with the French Institute of Chartered Accountants (Ordre des Experts-Comptables) under way, via ACCA equivalence (law and professional ethics exams scheduled for December 2026)",
      },
    ],
    expertise: [
      {
        fr: "Normes IFRS, US GAAP, SYSCOHADA et Plan Comptable Français",
        en: "IFRS, US GAAP, SYSCOHADA and French GAAP (Plan Comptable Français)",
      },
      {
        fr: "Audit, reporting financier et consolidation",
        en: "Audit, financial reporting and consolidation",
      },
      {
        fr: "ERP et outils : SAP, BlackLine, Oracle, SunSystems, Excel avancé",
        en: "ERP and tools: SAP, BlackLine, Oracle, SunSystems, advanced Excel",
      },
      {
        fr: "Transformation du cabinet, standardisation méthodologique et développement international",
        en: "Firm transformation, methodology standardisation and international development",
      },
    ],
    industries: [
      {
        fr: "Énergie (ExxonMobil, Baker Hughes)",
        en: "Energy (ExxonMobil, Baker Hughes)",
      },
      {
        fr: "Pharmaceutique (Groupe Roche, Novartis)",
        en: "Pharmaceuticals (Roche Group, Novartis)",
      },
      {
        fr: "Services financiers (DLL)",
        en: "Financial services (DLL)",
      },
    ],
    languages: [
      {
        fr: "Français — langue maternelle",
        en: "French — native",
      },
      {
        fr: "Anglais — bilingue",
        en: "English — bilingual",
      },
      {
        fr: "Italien — conversationnel",
        en: "Italian — conversational",
      },
      {
        fr: "Espagnol — conversationnel",
        en: "Spanish — conversational",
      },
    ],
    bio: {
      fr: "Expert-comptable ACCA et économiste comptant plus de 10 ans d'expérience internationale en finance, reporting et audit entre l'Europe, l'Asie et l'Afrique, avec la maîtrise de plusieurs référentiels comptables (IFRS, US GAAP, SYSCOHADA, Plan Comptable Français). Avant de rejoindre TATY & Associés en 2026 en tant que Consultant-associé (Audit, Transformation & Développement International), il a occupé des postes de comptable senior et de contrôleur comptable au sein de groupes internationaux tels que Roche, Baker Hughes, ExxonMobil et Tata Consultancy Services. Au sein du cabinet, il pilote des missions d'audit, la standardisation des méthodologies et de la documentation, ainsi que la stratégie de développement international du cabinet, incluant le projet TATY France et la structuration d'un réseau international de cabinets partenaires. Il est également l'auteur de plusieurs publications sur les normes comptables et l'inclusion financière en Afrique (SSRN, Academia.edu).",
      en: "An ACCA-qualified chartered accountant and economist with more than 10 years of international experience in finance, reporting and audit across Europe, Asia and Africa, with command of several accounting frameworks (IFRS, US GAAP, SYSCOHADA, French GAAP). Before joining TATY & Associés in 2026 as Associate Consultant (Audit, Transformation & International Business Development), he held senior accountant and financial controller roles at international groups including Roche, Baker Hughes, ExxonMobil and Tata Consultancy Services. At the firm, he leads audit engagements, the standardisation of methodology and documentation, and the firm's international development strategy, including the TATY France project and the structuring of an international network of partner firms. He is also the author of several publications on accounting standards and financial inclusion in Africa (SSRN, Academia.edu).",
    },
    linkedin: null,
  },

  {
    id: "kouakou-charles",
    status: "confirmed",
    name: {
      fr: "KOUAKOU Charles",
      en: "KOUAKOU Charles",
    },
    role: {
      fr: "Chef de mission, Expert senior en passation de marchés",
      en: "Engagement Manager, Senior Procurement Specialist",
    },
    qualifications: [
      {
        fr: "Bac+5",
        en: "Bac+5 (Master's level)",
      },
    ],
    expertise: [
      {
        fr: "Passation des marchés",
        en: "Procurement",
      },
    ],
    industries: [],
    languages: [],
    bio: {
      fr: "13 ans d'expérience professionnelle au sein du cabinet.",
      en: "13 years of professional experience at the firm.",
    },
    linkedin: null,
  },

  {
    id: "aho-loyo-melaine",
    status: "confirmed",
    name: {
      fr: "AHO Loyo Mélaine Alexandrine",
      en: "AHO Loyo Mélaine Alexandrine",
    },
    role: {
      fr: "Chef de mission, Spécialiste en passation de marchés",
      en: "Engagement Manager, Procurement Specialist",
    },
    qualifications: [
      {
        fr: "Bac+4",
        en: "Bac+4",
      },
    ],
    expertise: [
      {
        fr: "Passation des marchés",
        en: "Procurement",
      },
    ],
    industries: [],
    languages: [],
    bio: {
      fr: "13 ans d'expérience professionnelle au sein du cabinet.",
      en: "13 years of professional experience at the firm.",
    },
    linkedin: null,
  },

  {
    id: "beugre-stephane",
    status: "confirmed",
    name: {
      fr: "BEUGRE Boye Vinny Stéphane Chrisostome",
      en: "BEUGRE Boye Vinny Stéphane Chrisostome",
    },
    role: {
      fr: "Chef de mission, Auditeur sénior en passation des marchés",
      en: "Engagement Manager, Senior Procurement Auditor",
    },
    qualifications: [
      {
        fr: "Bac+5",
        en: "Bac+5 (Master's level)",
      },
    ],
    expertise: [
      {
        fr: "Audit, passation des marchés",
        en: "Audit, procurement",
      },
    ],
    industries: [],
    languages: [],
    bio: {
      fr: "8 ans d'expérience professionnelle au sein du cabinet.",
      en: "8 years of professional experience at the firm.",
    },
    linkedin: null,
  },

  {
    id: "konan-yannick",
    status: "confirmed",
    name: {
      fr: "KONAN Yannick Stéphane",
      en: "KONAN Yannick Stéphane",
    },
    role: {
      fr: "Auditeur sénior, Spécialiste en passation des marchés",
      en: "Senior Auditor, Procurement Specialist",
    },
    qualifications: [
      {
        fr: "Bac+4",
        en: "Bac+4",
      },
    ],
    expertise: [
      {
        fr: "Audit, passation des marchés",
        en: "Audit, procurement",
      },
    ],
    industries: [],
    languages: [],
    bio: {
      fr: "5 ans d'expérience professionnelle au sein du cabinet.",
      en: "5 years of professional experience at the firm.",
    },
    linkedin: null,
  },

  {
    id: "kouyate-ismael",
    status: "confirmed",
    name: {
      fr: "KOUYATE Ismaël",
      en: "KOUYATE Ismaël",
    },
    role: {
      fr: "Auditeur financier et comptable",
      en: "Financial and Accounting Auditor",
    },
    qualifications: [
      {
        fr: "Bac+4",
        en: "Bac+4",
      },
    ],
    expertise: [
      {
        fr: "Audit financier et comptable",
        en: "Financial and accounting audit",
      },
    ],
    industries: [],
    languages: [],
    bio: {
      fr: "3 ans d'expérience professionnelle au sein du cabinet.",
      en: "3 years of professional experience at the firm.",
    },
    linkedin: null,
  },

  {
    id: "dagnogo-awa",
    status: "confirmed",
    name: {
      fr: "DAGNOGO Awa",
      en: "DAGNOGO Awa",
    },
    role: {
      fr: "Réviseur comptable",
      en: "Accounting Reviewer",
    },
    qualifications: [
      {
        fr: "Bac+3",
        en: "Bac+3",
      },
    ],
    expertise: [
      {
        fr: "Révision comptable",
        en: "Accounting review",
      },
    ],
    industries: [],
    languages: [],
    bio: {
      fr: "4 ans d'expérience professionnelle au sein du cabinet.",
      en: "4 years of professional experience at the firm.",
    },
    linkedin: null,
  },

  {
    id: "koffi-auriane",
    status: "confirmed",
    name: {
      fr: "KOFFI Auriane",
      en: "KOFFI Auriane",
    },
    role: {
      fr: "Réviseur comptable",
      en: "Accounting Reviewer",
    },
    qualifications: [
      {
        fr: "Bac+3",
        en: "Bac+3",
      },
    ],
    expertise: [
      {
        fr: "Révision comptable",
        en: "Accounting review",
      },
    ],
    industries: [],
    languages: [],
    bio: {
      fr: "2 ans d'expérience professionnelle au sein du cabinet.",
      en: "2 years of professional experience at the firm.",
    },
    linkedin: null,
  },

  {
    id: "yoboue-nguessan",
    status: "confirmed",
    name: {
      fr: "YOBOUE N'Guessan",
      en: "YOBOUE N'Guessan",
    },
    role: {
      fr: "Auditeur informatique",
      en: "IT Auditor",
    },
    qualifications: [
      {
        fr: "Bac+5",
        en: "Bac+5 (Master's level)",
      },
    ],
    expertise: [
      {
        fr: "Audit informatique",
        en: "IT audit",
      },
    ],
    industries: [],
    languages: [],
    bio: {
      fr: "10 ans d'expérience professionnelle au sein du cabinet.",
      en: "10 years of professional experience at the firm.",
    },
    linkedin: null,
  },

  {
    id: "seka-cedric",
    status: "confirmed",
    name: {
      fr: "SEKA Cédric",
      en: "SEKA Cédric",
    },
    role: {
      fr: "Informaticien",
      en: "IT Specialist",
    },
    qualifications: [
      {
        fr: "Bac+3",
        en: "Bac+3",
      },
    ],
    expertise: [
      {
        fr: "Systèmes d'information",
        en: "Information systems",
      },
    ],
    industries: [],
    languages: [],
    bio: {
      fr: "5 ans d'expérience professionnelle au sein du cabinet.",
      en: "5 years of professional experience at the firm.",
    },
    linkedin: null,
  },

  {
    id: "kacou-chimene",
    status: "confirmed",
    name: {
      fr: "KACOU Chimène",
      en: "KACOU Chimène",
    },
    role: {
      fr: "Auditeur financier et comptable",
      en: "Financial and Accounting Auditor",
    },
    qualifications: [
      {
        fr: "Bac+4",
        en: "Bac+4",
      },
    ],
    expertise: [
      {
        fr: "Audit financier et comptable",
        en: "Financial and accounting audit",
      },
    ],
    industries: [],
    languages: [],
    bio: {
      fr: "2 ans d'expérience professionnelle au sein du cabinet.",
      en: "2 years of professional experience at the firm.",
    },
    linkedin: null,
  },

  {
    id: "koffi-samira",
    status: "confirmed",
    name: {
      fr: "KOFFI Samira",
      en: "KOFFI Samira",
    },
    role: {
      fr: "Auditeur financier et comptable",
      en: "Financial and Accounting Auditor",
    },
    qualifications: [
      {
        fr: "Bac+4",
        en: "Bac+4",
      },
    ],
    expertise: [
      {
        fr: "Audit financier et comptable",
        en: "Financial and accounting audit",
      },
    ],
    industries: [],
    languages: [],
    bio: {
      fr: "2 ans d'expérience professionnelle au sein du cabinet.",
      en: "2 years of professional experience at the firm.",
    },
    linkedin: null,
  },

  {
    id: "ande-yvan",
    status: "confirmed",
    name: {
      fr: "ANDE Yvan",
      en: "ANDE Yvan",
    },
    role: {
      fr: "Auditeur financier et comptable",
      en: "Financial and Accounting Auditor",
    },
    qualifications: [
      {
        fr: "Bac+3",
        en: "Bac+3",
      },
    ],
    expertise: [
      {
        fr: "Audit financier et comptable",
        en: "Financial and accounting audit",
      },
    ],
    industries: [],
    languages: [],
    bio: {
      fr: "1 an d'expérience professionnelle au sein du cabinet.",
      en: "1 year of professional experience at the firm.",
    },
    linkedin: null,
  },
];

// Photos attendues dans public/assets/<id>.jpg.
export const team: TeamMember[] = teamMembers.map((member) => ({
  ...member,
  photo: `/assets/${member.id}.jpg`,
}));
