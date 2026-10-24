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
      fr: "Vous préparez un diplôme en comptabilité, audit, finance ou gestion ? Développez vos compétences au contact de nos équipes et découvrez les exigences du métier à travers des missions concrètes. Adressez-nous votre candidature en précisant votre formation, vos dates et la durée souhaitée du stage.",
      en: "Studying accounting, audit, finance or management? Develop your skills alongside our teams and discover the demands of the profession through practical assignments. Tell us about your studies, availability and preferred internship duration.",
    },
  },
  {
    id: "graduate",
    status: "confirmed",
    title: { fr: "Jeunes diplômés", en: "Graduate opportunities" },
    description: {
      fr: "Vous souhaitez débuter votre carrière en audit, expertise comptable ou conseil ? Mettez votre curiosité, votre rigueur et votre esprit d’équipe au service de missions variées. Présentez-nous votre parcours et les domaines dans lesquels vous souhaitez évoluer.",
      en: "Looking to start your career in audit, accounting or advisory? Bring your curiosity, rigour and team spirit to a variety of assignments. Tell us about your background and the areas in which you would like to grow.",
    },
  },
  {
    id: "experienced",
    status: "confirmed",
    title: { fr: "Professionnels expérimentés", en: "Experienced professionals" },
    description: {
      fr: "Vous disposez d’une expérience en audit, comptabilité, fiscalité, conseil ou transformation finance ? Partagez votre expertise et contribuez à l’accompagnement de nos clients. Présentez vos compétences, vos réalisations et votre projet professionnel.",
      en: "Experienced in audit, accounting, tax, advisory or finance transformation? Share your expertise and contribute to our client engagements. Tell us about your skills, achievements and career goals.",
    },
  },
];
