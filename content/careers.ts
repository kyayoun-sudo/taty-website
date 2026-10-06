import type { LocalizedText } from "@/lib/i18n";
import type { ContentStatus } from "@/lib/content-status";

export interface CareerTrack {
  id: string;
  status: ContentStatus;
  title: LocalizedText;
  description: LocalizedText;
}

export const careerTracks: CareerTrack[] = [
  {
    id: "internships",
    status: "draft",
    title: { fr: "Stages", en: "Internships" },
    description: {
      fr: "[INFORMATIONS SUR LES STAGES À FOURNIR PAR TATY & ASSOCIÉS]",
      en: "[INTERNSHIP INFORMATION TO BE PROVIDED BY TATY & ASSOCIÉS]",
    },
  },
  {
    id: "graduate",
    status: "draft",
    title: { fr: "Jeunes diplômés", en: "Graduate opportunities" },
    description: {
      fr: "[INFORMATIONS SUR LE RECRUTEMENT DE JEUNES DIPLÔMÉS À FOURNIR]",
      en: "[GRADUATE RECRUITMENT INFORMATION TO BE PROVIDED]",
    },
  },
  {
    id: "experienced",
    status: "draft",
    title: { fr: "Professionnels expérimentés", en: "Experienced professionals" },
    description: {
      fr: "[INFORMATIONS SUR LE RECRUTEMENT DE PROFILS EXPÉRIMENTÉS À FOURNIR]",
      en: "[EXPERIENCED-HIRE RECRUITMENT INFORMATION TO BE PROVIDED]",
    },
  },
];
