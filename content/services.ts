import type { LocalizedText } from "@/lib/i18n";
import type { ContentStatus } from "@/lib/content-status";

export interface ServiceLine {
  title: LocalizedText;
  status: ContentStatus;
}

export interface ServiceCategory {
  slug: string;
  icon: string; // simple key used by ServiceIcon component
  title: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  lines: ServiceLine[];
  status: ContentStatus;
}

const toBeConfirmed: LocalizedText = {
  fr: "[À CONFIRMER PAR TATY & ASSOCIÉS]",
  en: "[TO BE CONFIRMED BY TATY & ASSOCIÉS]",
};

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
      { status: "confirmed", title: { fr: "Commissariat aux comptes", en: "Statutory audit" } },
      { status: "confirmed", title: { fr: "Commissariat aux apports et à la fusion", en: "Audit of contributions and mergers" } },
      { status: "confirmed", title: { fr: "Expertise judiciaire", en: "Judicial expert appraisal" } },
      { status: "confirmed", title: { fr: "Audit comptable et financier", en: "Financial and accounting audit" } },
      { status: "confirmed", title: { fr: "Audit d'acquisition ou de cession", en: "Acquisition or disposal audit" } },
      { status: "confirmed", title: { fr: "Audit d'investigation", en: "Investigation audit" } },
      { status: "confirmed", title: { fr: "Audit informatique", en: "IT audit" } },
      { status: "confirmed", title: { fr: "Audit en passation de marchés", en: "Procurement audit" } },
      { status: "confirmed", title: { fr: "Audit technique", en: "Technical audit" } },
      { status: "confirmed", title: { fr: "Audit des projets de développement", en: "Audit of development projects" } },
    ],
  },
  {
    slug: "comptabilite-reporting",
    icon: "accounting",
    status: "confirmed",
    title: { fr: "Comptabilité", en: "Accounting & Reporting" },
    shortDescription: {
      fr: "Organisation comptable, tenue de comptes, formation et contrôle interne.",
      en: "Accounting organisation, bookkeeping, training and internal control.",
    },
    description: {
      fr: "T&A accompagne les entreprises et organisations dans la structuration, la fiabilisation et la mise à niveau de leur fonction comptable.",
      en: "T&A supports companies and organisations in structuring, strengthening and upgrading their accounting function.",
    },
    lines: [
      { status: "confirmed", title: { fr: "Mise en place de l'organisation et du système comptable", en: "Setting up the accounting organisation and system" } },
      { status: "confirmed", title: { fr: "Acquisition de logiciel comptable, paramétrage et formation", en: "Accounting software acquisition, set-up and training" } },
      { status: "confirmed", title: { fr: "Revue de comptabilité et assistance à l'arrêté des comptes", en: "Accounting review and closing assistance" } },
      { status: "confirmed", title: { fr: "Analyse et apurement des comptes", en: "Account analysis and clean-up" } },
      { status: "confirmed", title: { fr: "Mise à niveau et reconstitution de la comptabilité", en: "Accounting upgrade and reconstitution" } },
      { status: "confirmed", title: { fr: "Formation et encadrement du personnel comptable", en: "Training and supervision of accounting staff" } },
      { status: "confirmed", title: { fr: "Analyse de contrôle interne et rédaction de manuels de procédures", en: "Internal control analysis and procedures manual drafting" } },
    ],
  },
  {
    slug: "conseil-financier",
    icon: "advisory",
    status: "confirmed",
    title: { fr: "Conseil aux Organisations", en: "Financial & Organisational Advisory" },
    shortDescription: {
      fr: "Évaluation d'entreprise, due diligence, conduite du changement et pilotage de la gestion.",
      en: "Business valuation, due diligence, change management and management steering.",
    },
    description: {
      fr: "Le cabinet accompagne la conduite du changement des organisations : direction, stratégie, développement et financement, jusqu'au suivi opérationnel de la gestion courante.",
      en: "The firm supports organisations through change — direction, strategy, development and financing — through to the day-to-day steering of operations.",
    },
    lines: [
      { status: "confirmed", title: { fr: "Évaluation d'entreprises et de titres de sociétés", en: "Business and securities valuation" } },
      { status: "confirmed", title: { fr: "Conduite du changement : direction, stratégie, développement, financement", en: "Change management: direction, strategy, development, financing" } },
      { status: "confirmed", title: { fr: "Due diligence et accompagnement lors d'achats et de ventes de sociétés", en: "Due diligence and support for company acquisitions and disposals" } },
      { status: "confirmed", title: { fr: "Externalisation de fonctions direction, comptables, sociales et administratives", en: "Outsourcing of management, accounting, HR and administrative functions" } },
      { status: "confirmed", title: { fr: "Comptabilité analytique et budgétaire, contrôle de gestion, tableaux de bord", en: "Cost and budgetary accounting, management control, dashboards" } },
      { status: "confirmed", title: { fr: "Gestion de trésorerie et des stocks, optimisation des coûts", en: "Cash and inventory management, cost optimisation" } },
      { status: "confirmed", title: { fr: "Situations intermédiaires, reporting et commentaire de gestion", en: "Interim statements, reporting and management commentary" } },
    ],
  },
  {
    slug: "risque-controle-conformite",
    icon: "risk",
    status: "draft",
    title: { fr: "Risque, Contrôle Interne & Conformité", en: "Risk, Internal Control & Compliance" },
    shortDescription: {
      fr: "Revue des dispositifs de contrôle interne, des processus et des risques.",
      en: "Internal control, process and risk reviews, and compliance support.",
    },
    description: toBeConfirmed,
    lines: [
      { status: "draft", title: { fr: "Revue du contrôle interne", en: "Internal control reviews" } },
      { status: "draft", title: { fr: "Revue de processus", en: "Process reviews" } },
      { status: "draft", title: { fr: "Évaluation des risques", en: "Risk assessment" } },
      { status: "draft", title: { fr: "Accompagnement conformité", en: "Compliance support" } },
    ],
  },
  {
    slug: "ifrs-reporting-international",
    icon: "ifrs",
    status: "draft",
    title: { fr: "IFRS & Reporting International", en: "IFRS & International Reporting" },
    shortDescription: {
      fr: "Conseil IFRS, conversion et reporting de groupe à l'international.",
      en: "IFRS advisory, conversion, and group / component reporting.",
    },
    description: toBeConfirmed,
    lines: [
      { status: "draft", title: { fr: "Conseil IFRS", en: "IFRS advisory" } },
      { status: "draft", title: { fr: "Conversion aux normes IFRS", en: "IFRS conversion" } },
      { status: "draft", title: { fr: "Reporting de groupe", en: "Group reporting" } },
      { status: "draft", title: { fr: "Reporting de composante", en: "Component reporting" } },
      { status: "draft", title: { fr: "Accompagnement au reporting international", en: "International reporting support" } },
    ],
  },
  {
    slug: "esg-durabilite",
    icon: "esg",
    status: "draft",
    title: { fr: "ESG & Durabilité", en: "ESG & Sustainability" },
    shortDescription: {
      fr: "Préparation ESG, reporting de durabilité et dispositifs de contrôle associés.",
      en: "ESG readiness, sustainability reporting and related controls.",
    },
    description: toBeConfirmed,
    lines: [
      { status: "draft", title: { fr: "Diagnostic de maturité ESG", en: "ESG readiness" } },
      { status: "draft", title: { fr: "Reporting de durabilité", en: "Sustainability reporting" } },
      { status: "draft", title: { fr: "Contrôles ESG", en: "ESG controls" } },
      { status: "draft", title: { fr: "Préparation à l'assurance ESG", en: "ESG assurance preparation" } },
    ],
  },
  {
    slug: "technologie-transformation-finance",
    icon: "technology",
    status: "draft",
    title: { fr: "Technologie & Transformation Finance", en: "Technology & Finance Transformation" },
    shortDescription: {
      fr: "Optimisation des processus finance, data analytics et accompagnement ERP.",
      en: "Finance process optimisation, data analytics and ERP support.",
    },
    description: toBeConfirmed,
    lines: [
      { status: "draft", title: { fr: "Optimisation des processus finance", en: "Finance process optimisation" } },
      { status: "draft", title: { fr: "Data analytics", en: "Data analytics" } },
      { status: "draft", title: { fr: "Accompagnement ERP", en: "ERP support" } },
      { status: "draft", title: { fr: "Conseil SAP", en: "SAP-related advisory" } },
      { status: "draft", title: { fr: "Intégration de l'IA en finance et audit", en: "AI implementation for finance and audit" } },
    ],
  },
  {
    slug: "fiscalite-conseil-affaires",
    icon: "tax",
    status: "confirmed",
    title: { fr: "Conseil Financier, Juridique, Fiscal & Social", en: "Tax & Business Advisory" },
    shortDescription: {
      fr: "Le conseil financier, juridique, fiscal et social figure parmi les quatre grands domaines d'intervention du cabinet ; le détail des prestations reste à préciser.",
      en: "Financial, legal, tax and employment-law advisory is one of the firm's four core practice areas; the detailed scope of services is still to be confirmed.",
    },
    description: {
      fr: "Le conseil financier, juridique, fiscal et social fait partie des quatre grands domaines d'intervention du cabinet TATY & Associés, aux côtés de l'audit, de l'expertise comptable et du management/conseil en organisation. Le détail précis des prestations fiscales proposées reste à confirmer par le cabinet.",
      en: "Financial, legal, tax and employment-law advisory is one of TATY & Associés' four core practice areas, alongside audit, chartered accountancy and management/organisational advisory. The precise scope of the tax services on offer is still to be confirmed by the firm.",
    },
    lines: [],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
