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
    status: "confirmed",
    title: { fr: "Stages", en: "Internships" },
    description: {
      fr: "Vous préparez une formation en audit, comptabilité ou finance ? Présentez-nous votre parcours, vos objectifs et vos disponibilités pour un stage.",
      en: "Studying audit, accounting or finance? Tell us about your background, goals and availability for an internship.",
    },
  },
  {
    id: "graduate",
    status: "confirmed",
    title: { fr: "Jeunes diplômés", en: "Graduate opportunities" },
    description: {
      fr: "Vous souhaitez débuter votre carrière en cabinet ? Adressez-nous votre candidature en précisant vos domaines d'intérêt et votre formation.",
      en: "Ready to start your career in professional services? Send us your application, outlining your education and areas of interest.",
    },
  },
  {
    id: "experienced",
    status: "confirmed",
    title: { fr: "Professionnels expérimentés", en: "Experienced professionals" },
    description: {
      fr: "Vous disposez d'une expérience en audit, comptabilité ou conseil ? Échangeons sur votre expertise et votre projet professionnel.",
      en: "Experienced in audit, accounting or advisory? Tell us about your expertise and career goals.",
    },
  },
];
