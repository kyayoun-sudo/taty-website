import type { LocalizedText } from "@/lib/i18n";
import type { ContentStatus } from "@/lib/content-status";

export interface Industry {
  slug: string;
  title: LocalizedText;
  status: ContentStatus;
}

export const industries: Industry[] = [
  { slug: "biens-de-consommation", status: "draft", title: { fr: "Biens de consommation", en: "Consumer goods" } },
  { slug: "industrie-manufacturiere", status: "draft", title: { fr: "Industrie manufacturière", en: "Manufacturing" } },
  { slug: "agriculture", status: "draft", title: { fr: "Agriculture", en: "Agriculture" } },
  { slug: "mines-ressources-naturelles", status: "draft", title: { fr: "Mines & ressources naturelles", en: "Mining & natural resources" } },
  { slug: "energie", status: "draft", title: { fr: "Énergie", en: "Energy" } },
  { slug: "infrastructures", status: "draft", title: { fr: "Infrastructures", en: "Infrastructure" } },
  { slug: "banque-services-financiers", status: "draft", title: { fr: "Banque & services financiers", en: "Banking & financial services" } },
  { slug: "technologie", status: "draft", title: { fr: "Technologie", en: "Technology" } },
  { slug: "secteur-public", status: "draft", title: { fr: "Secteur public", en: "Public sector" } },
  { slug: "ong-organisations-internationales", status: "draft", title: { fr: "ONG & organisations internationales", en: "NGOs & international organisations" } },
];
