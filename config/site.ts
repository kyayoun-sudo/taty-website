/**
 * CENTRAL SITE CONFIGURATION
 * -----------------------------------------------------------------------
 * Single source of truth for firm identity, contact details, office
 * locations and social links. Every page/component should import from
 * here instead of hard-coding these values.
 *
 * Anything not yet confirmed by TATY & Associés is marked with a
 * "TO BE PROVIDED" / "[...]" placeholder. Replace the value in place —
 * no other file needs to change.
 * -----------------------------------------------------------------------
 */

export const siteConfig = {
  // ---- Identity -----------------------------------------------------
  // Confirmed by TATY & Associés (cabinet presentation document, Sept. 2026).
  firmName: "TATY & Associés",
  legalName: "TATY & ASSOCIÉS SARL",
  shortName: "T&A",
  tagline: {
    fr: "[SIGNATURE / TAGLINE OFFICIELLE À FOURNIR]",
    en: "[OFFICIAL TAGLINE TO BE PROVIDED]",
  },
  foundingYear: 2015 as number | null,

  // ---- Logo -----------------------------------------------------------
  // Drop the official files in /public/images/logo and update the paths.
  logo: {
    light: "/images/logo/logo-placeholder.svg",
    dark: "/images/logo/logo-placeholder.svg",
    favicon: "/favicon.ico",
  },

  // ---- Contact ----------------------------------------------------------
  // Confirmed by TATY & Associés.
  contact: {
    phone: "+225 07 11 34 52 35",
    phoneSecondary: "+225 27 22 26 41 98 / +225 07 49 49 76 7",
    email: "info@taty.info",
    recruitmentEmail: "[EMAIL RECRUTEMENT]",
  },

  // ---- Offices ------------------------------------------------------
  // Add further offices as additional array entries — components that
  // list offices already iterate over this array.
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
      mapEmbedUrl: "", // Google Maps embed URL — TO BE PROVIDED
      mapQuery: "Cocody Riviera, Abidjan, Côte d'Ivoire",
    },
  ],
workingHours: {
  fr: "8 h à 18 h",
  en: "8:00 AM to 6:00 PM",
},
  // ---- Social -----------------------------------------------------------
  // Leave a value empty ("") to hide that icon in the footer/header.
  social: {
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
    youtube: "",
  },

  // ---- Legal / registrations -----------------------------------------
  // Confirmed by TATY & Associés.
  registrations: {
    professionalOrder: "Ordre des Experts-Comptables de Côte d'Ivoire (OECCI) — n° 22.0158.2.21.L",
    registrationNumber: "N° CC : 1553985 R — Centre des Impôts des II Plateaux 2 (Régime fiscal du réel simplifié)",
    rccm: "CI-ABJ-2015-B-26750",
    legalForm: "Société à Responsabilité Limitée (SARL)",
    shareCapital: "1 000 000 F CFA",
  },
} as const;

export type SiteConfig = typeof siteConfig;
