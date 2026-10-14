/**
 * CENTRAL SITE CONFIGURATION
 * -----------------------------------------------------------------------
 * Single source of truth for firm identity, contact details, office
 * locations and social links.
 * -----------------------------------------------------------------------
 */

export const siteConfig = {
  firmName: "TATY & Associés",
  legalName: "TATY & ASSOCIÉS SARL",
  shortName: "T&A",
  tagline: {
    fr: "Rigueur. Indépendance. Confiance.",
    en: "Rigour. Independence. Trust.",
  },
  foundingYear: 2015 as number | null,

  logo: {
    light: "/images/logo/logo-placeholder.svg",
    dark: "/images/logo/logo-placeholder.svg",
    favicon: "/favicon.ico",
  },

  contact: {
    phone: "+225 07 11 34 52 35",
    phoneSecondary: "+225 27 22 26 41 98 / +225 07 49 49 76 7",
    email: "info@taty.info",
    recruitmentEmail: "info@taty.info",
  },

  offices: [
    {
      id: "abidjan-hq",
      name: "Siège social",
      isHeadquarters: true,
      addressLines: [
        "Cocody - Riviéra 5, Bvd. G 50, Laurier 9",
        "27 BP 257 Abidjan 27",
        "Abidjan, Côte d'Ivoire",
      ],
      mapEmbedUrl: "",
      mapQuery: "Cocody Riviera, Abidjan, Côte d'Ivoire",
    },
  ],
  workingHours: {
    fr: "8 h à 18 h",
    en: "8:00 AM to 6:00 PM",
  },

  social: {
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
    youtube: "",
  },

  registrations: {
    professionalOrder: "Ordre des Experts-Comptables de Côte d'Ivoire (OECCI) — n° 22.0158.2.21.L",
    registrationNumber: "N° CC : 1553985 R — Centre des Impôts des II Plateaux 2 (Régime fiscal du réel simplifié)",
    rccm: "CI-ABJ-2015-B-26750",
    legalForm: "Société à Responsabilité Limitée (SARL)",
    shareCapital: "1 000 000 F CFA",
  },
} as const;

export type SiteConfig = typeof siteConfig;
