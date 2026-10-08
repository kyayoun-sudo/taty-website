import type { LocalizedText } from "@/lib/i18n";
import type { ContentStatus } from "@/lib/content-status";

export interface Industry {
  slug: string;
  title: LocalizedText;
  status: ContentStatus;
}

export const industries: Industry[] = [
  {
    slug: "biens-de-consommation",
    status: "confirmed",
    title: {
      fr: "Biens de consommation",
      en: "Consumer goods",
    },
  },
  {
    slug: "industrie-manufacturiere",
    status: "confirmed",
    title: {
      fr: "Industrie manufacturière",
      en: "Manufacturing",
    },
  },
  {
    slug: "agriculture",
    status: "confirmed",
    title: {
      fr: "Agriculture",
      en: "Agriculture",
    },
  },
  {
    slug: "mines-ressources-naturelles",
    status: "confirmed",
    title: {
      fr: "Mines & ressources naturelles",
      en: "Mining & natural resources",
    },
  },
  {
    slug: "energie",
    status: "confirmed",
    title: {
      fr: "Énergie",
      en: "Energy",
    },
  },
  {
    slug: "infrastructures",
    status: "confirmed",
    title: {
      fr: "Infrastructures",
      en: "Infrastructure",
    },
  },
  {
    slug: "banque-services-financiers",
    status: "confirmed",
    title: {
      fr: "Banque & services financiers",
      en: "Banking & financial services",
    },
  },
  {
    slug: "technologie",
    status: "confirmed",
    title: {
      fr: "Technologie",
      en: "Technology",
    },
  },
  {
    slug: "secteur-public",
    status: "confirmed",
    title: {
      fr: "Secteur public",
      en: "Public sector",
    },
  },
  {
    slug: "ong-organisations-internationales",
    status: "confirmed",
    title: {
      fr: "ONG & organisations internationales",
      en: "NGOs & international organisations",
    },
  },
];
