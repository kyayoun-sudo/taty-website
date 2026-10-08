import type { LocalizedText } from "@/lib/i18n";
import type { ContentStatus } from "@/lib/content-status";

export interface ServiceLine {
  title: LocalizedText;
  status: ContentStatus;
}

export interface ServiceCategory {
  slug: string;
  icon: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  lines: ServiceLine[];
  status: ContentStatus;
}

export const services: ServiceCategory[] = [
  {
    slug: "audit-assurance",
    icon: "audit",
    status: "confirmed",
    title: { fr: "Audit & Missions Légales", en: "Audit & Assurance" },
    shortDescription: {
      fr: "Commissariat aux comptes, audit comptable et financier et missions légales.",
      en: "Statutory audit, financial and accounting audit and legal engagements.",
    },
    description: {
      fr: "Le cabinet offre une gamme complète de services d'audit et de missions légales, adaptés aux besoins spécifiques de chaque entreprise ou organisation. Ces travaux sont systématiquement soumis à des contrôles qualité conformes à la norme ISQC1.",
      en: "The firm offers a complete range of audit and statutory services, tailored to each company's or organisation's specific needs. This work is systematically subject to quality controls compliant with the ISQC1 standard.",
    },
    lines: [
      {
        status: "confirmed",
        title: { fr: "Commissariat aux comptes", en: "Statutory audit" },
      },
      {
        status: "confirmed",
        title: {
          fr: "Commissariat aux apports et à la fusion",
          en: "Audit of contributions and mergers",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Expertise judiciaire",
          en: "Judicial expert appraisal",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Audit comptable et financier",
          en: "Financial and accounting audit",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Audit d'acquisition ou de cession",
          en: "Acquisition or disposal audit",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Audit d'investigation",
          en: "Investigation audit",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Audit informatique",
          en: "IT audit",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Audit en passation de marchés",
          en: "Procurement audit",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Audit technique",
          en: "Technical audit",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Audit des projets de développement",
          en: "Audit of development projects",
        },
      },
    ],
  },

  {
    slug: "comptabilite-reporting",
    icon: "accounting",
    status: "confirmed",
    title: {
      fr: "Comptabilité",
      en: "Accounting & Reporting",
    },
    shortDescription: {
      fr: "Organisation comptable, tenue de comptes, formation et contrôle interne.",
      en: "Accounting organisation, bookkeeping, training and internal control.",
    },
    description: {
      fr: "T&A accompagne les entreprises et organisations dans la structuration, la fiabilisation et la mise à niveau de leur fonction comptable.",
      en: "T&A supports companies and organisations in structuring, strengthening and upgrading their accounting function.",
    },
    lines: [
      {
        status: "confirmed",
        title: {
          fr: "Mise en place de l'organisation et du système comptable",
          en: "Setting up the accounting organisation and system",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Acquisition de logiciel comptable, paramétrage et formation",
          en: "Accounting software acquisition, set-up and training",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Revue de comptabilité et assistance à l'arrêté des comptes",
          en: "Accounting review and closing assistance",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Analyse et apurement des comptes",
          en: "Account analysis and clean-up",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Mise à niveau et reconstitution de la comptabilité",
          en: "Accounting upgrade and reconstitution",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Formation et encadrement du personnel comptable",
          en: "Training and supervision of accounting staff",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Analyse de contrôle interne et rédaction de manuels de procédures",
          en: "Internal control analysis and procedures manual drafting",
        },
      },
    ],
  },

  {
    slug: "conseil-financier",
    icon: "advisory",
    status: "confirmed",
    title: {
      fr: "Conseil aux Organisations",
      en: "Financial & Organisational Advisory",
    },
    shortDescription: {
      fr: "Évaluation d'entreprise, due diligence, conduite du changement et pilotage de la gestion.",
      en: "Business valuation, due diligence, change management and management steering.",
    },
    description: {
      fr: "Le cabinet accompagne la conduite du changement des organisations : direction, stratégie, développement et financement, jusqu'au suivi opérationnel de la gestion courante.",
      en: "The firm supports organisations through change — direction, strategy, development and financing — through to the day-to-day steering of operations.",
    },
    lines: [
      {
        status: "confirmed",
        title: {
          fr: "Évaluation d'entreprises et de titres de sociétés",
          en: "Business and securities valuation",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Conduite du changement : direction, stratégie, développement, financement",
          en: "Change management: direction, strategy, development, financing",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Due diligence et accompagnement lors d'achats et de ventes de sociétés",
          en: "Due diligence and support for company acquisitions and disposals",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Externalisation de fonctions direction, comptables, sociales et administratives",
          en: "Outsourcing of management, accounting, HR and administrative functions",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Comptabilité analytique et budgétaire, contrôle de gestion, tableaux de bord",
          en: "Cost and budgetary accounting, management control, dashboards",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Gestion de trésorerie et des stocks, optimisation des coûts",
          en: "Cash and inventory management, cost optimisation",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Situations intermédiaires, reporting et commentaire de gestion",
          en: "Interim statements, reporting and management commentary",
        },
      },
    ],
  },

  {
    slug: "risque-controle-conformite",
    icon: "risk",
    status: "confirmed",
    title: {
      fr: "Risque, Contrôle Interne & Conformité",
      en: "Risk, Internal Control & Compliance",
    },
    shortDescription: {
      fr: "Évaluation des risques, revue des dispositifs de contrôle interne, des processus et de la conformité.",
      en: "Risk assessment, internal control, process reviews and compliance support.",
    },
    description: {
      fr: "TATY & Associés accompagne les organisations dans l'identification, l'évaluation et la maîtrise de leurs risques. Le cabinet intervient dans la revue des dispositifs de contrôle interne, l'analyse des processus, l'identification des faiblesses opérationnelles et l'accompagnement à la mise en place de dispositifs de conformité adaptés.",
      en: "TATY & Associés supports organisations in identifying, assessing and managing their risks. The firm reviews internal control frameworks and business processes, identifies operational weaknesses and supports the implementation of appropriate compliance arrangements.",
    },
    lines: [
      {
        status: "confirmed",
        title: {
          fr: "Revue du contrôle interne",
          en: "Internal control reviews",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Revue et optimisation des processus",
          en: "Process review and optimisation",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Évaluation et cartographie des risques",
          en: "Risk assessment and mapping",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Accompagnement conformité",
          en: "Compliance support",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Diagnostic des dispositifs de contrôle",
          en: "Control framework assessment",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Recommandations et plans d'amélioration",
          en: "Recommendations and improvement plans",
        },
      },
    ],
  },

  {
    slug: "ifrs-reporting-international",
    icon: "ifrs",
    status: "confirmed",
    title: {
      fr: "IFRS & Reporting International",
      en: "IFRS & International Reporting",
    },
    shortDescription: {
      fr: "Conseil IFRS, conversion aux normes internationales et accompagnement au reporting de groupe.",
      en: "IFRS advisory, conversion to international standards and support for group reporting.",
    },
    description: {
      fr: "TATY & Associés accompagne les entreprises dans l'application des normes IFRS, la conversion de leurs états financiers, l'analyse des problématiques comptables complexes ainsi que la préparation du reporting financier destiné aux groupes et partenaires internationaux.",
      en: "TATY & Associés supports companies in applying IFRS standards, converting financial statements, addressing complex accounting matters and preparing financial reporting for international groups and stakeholders.",
    },
    lines: [
      {
        status: "confirmed",
        title: {
          fr: "Conseil et assistance IFRS",
          en: "IFRS advisory and support",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Conversion aux normes IFRS",
          en: "IFRS conversion",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Reporting de groupe",
          en: "Group reporting",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Reporting de composante",
          en: "Component reporting",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Accompagnement au reporting international",
          en: "International reporting support",
        },
      },
    ],
  },

  {
    slug: "esg-durabilite",
    icon: "esg",
    status: "confirmed",
    title: {
      fr: "ESG & Durabilité",
      en: "ESG & Sustainability",
    },
    shortDescription: {
      fr: "Diagnostic ESG, reporting de durabilité, dispositifs de contrôle et préparation à l'assurance.",
      en: "ESG assessment, sustainability reporting, controls and assurance readiness.",
    },
    description: {
      fr: "TATY & Associés accompagne les organisations dans la structuration de leur démarche ESG et de durabilité, depuis l'évaluation de leur niveau de maturité jusqu'à la préparation du reporting, au renforcement des dispositifs de contrôle et à la préparation des informations de durabilité en vue d'une assurance indépendante.",
      en: "TATY & Associés supports organisations in structuring their ESG and sustainability approach, from maturity assessment to sustainability reporting, strengthening related controls and preparing sustainability information for independent assurance.",
    },
    lines: [
      {
        status: "confirmed",
        title: {
          fr: "Diagnostic de maturité ESG",
          en: "ESG maturity assessment",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Reporting de durabilité",
          en: "Sustainability reporting",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Contrôles et processus ESG",
          en: "ESG controls and processes",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Préparation à l'assurance des informations de durabilité",
          en: "Sustainability assurance readiness",
        },
      },
    ],
  },

  {
    slug: "technologie-transformation-finance",
    icon: "technology",
    status: "confirmed",
    title: {
      fr: "Technologie & Transformation Finance",
      en: "Technology & Finance Transformation",
    },
    shortDescription: {
      fr: "Transformation de la fonction finance, data analytics, ERP, SAP et intégration de l'intelligence artificielle.",
      en: "Finance transformation, data analytics, ERP, SAP and artificial intelligence integration.",
    },
    description: {
      fr: "TATY & Associés accompagne les organisations dans la transformation et la modernisation de leurs fonctions finance, comptabilité et audit. Le cabinet intervient sur l'optimisation des processus, l'exploitation des données, l'accompagnement ERP et SAP ainsi que l'intégration de solutions d'intelligence artificielle et d'automatisation.",
      en: "TATY & Associés supports organisations in transforming and modernising their finance, accounting and audit functions. The firm provides support in process optimisation, data analytics, ERP and SAP projects, as well as the integration of artificial intelligence and automation solutions.",
    },
    lines: [
      {
        status: "confirmed",
        title: {
          fr: "Optimisation et automatisation des processus finance",
          en: "Finance process optimisation and automation",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Data analytics",
          en: "Data analytics",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Accompagnement ERP",
          en: "ERP support",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Conseil et accompagnement SAP",
          en: "SAP advisory and support",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Intégration de l'IA en finance, comptabilité et audit",
          en: "AI implementation for finance, accounting and audit",
        },
      },
      {
        status: "confirmed",
        title: {
          fr: "Digitalisation de la fonction finance",
          en: "Finance function digitalisation",
        },
      },
    ],
  },

  {
    slug: "fiscalite-conseil-affaires",
    icon: "tax",
    status: "confirmed",
    title: {
      fr: "Conseil Financier, Juridique, Fiscal & Social",
      en: "Tax & Business Advisory",
    },
    shortDescription: {
      fr: "Conseil financier, juridique, fiscal et social pour accompagner les entreprises dans leurs opérations et leurs obligations.",
      en: "Financial, legal, tax and employment advisory supporting businesses in their operations and obligations.",
    },
    description: {
      fr: "Le conseil financier, juridique, fiscal et social fait partie des domaines d'intervention de TATY & Associés. Le cabinet accompagne les entreprises et organisations sur les problématiques liées à leur gestion financière, leurs obligations fiscales et sociales ainsi qu'aux enjeux juridiques associés à leurs activités.",
      en: "Financial, legal, tax and employment advisory forms part of TATY & Associés' areas of expertise. The firm supports companies and organisations with financial management, tax and employment obligations and legal matters related to their activities.",
    },
    lines: [],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
