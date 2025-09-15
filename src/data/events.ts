
interface EventCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
    variant?: "blue" | "yellow" | "dark";
    location?: string;
    date?: string;
}

export const events: EventCardProps[] = [
  {
    image: "/plan/gouvernement.png",
    title: "Grand Rassemblement National de la Jeunesse",
    description:
      "La jeunesse au cœur du changement : ateliers, débats et propositions pour donner une voix forte aux nouvelles générations.",
    link: "#",
    variant: "blue",
    location: "Paris",
    date: "12 Septembre 2025",
  },
  {
    image: "/plan/etudiant.png",
    title: "Forum Économique pour un Cameroun Prospère",
    description:
      "Un espace de dialogue entre économistes, étudiants et entrepreneurs pour repenser notre modèle économique et préparer l’avenir.",
    link: "#",
    variant: "yellow",
    location: "Lyon",
    date: "18 Septembre 2025",
  },
  {
    image: "/plan/pme.png",
    title: "Convention Nationale sur la Transition Écologique",
    description:
      "Présentation d’un plan ambitieux pour concilier écologie, justice sociale et création d’emplois durables dans tous les territoires.",
    link: "#",
    variant: "blue",
    location: "Marseille",
    date: "25 Septembre 2025",
  },
  {
    image: "/ecoute.png",
    title: "Rencontres Territoriales – Le Cameroun à l’Écoute",
    description:
      "Une tournée nationale pour écouter les citoyens, recueillir leurs propositions et bâtir ensemble un projet de transformation sociale.",
    link: "#",
    variant: "dark",
    location: "Toulouse",
    date: "30 Septembre 2025",
  },
  {
    image: "/plan/economique.png",
    title: "Sommet National des PME et de l’Innovation",
    description:
      "Un rendez-vous stratégique pour soutenir les petites et moyennes entreprises, encourager l’innovation et défendre la souveraineté économique.",
    link: "#",
    variant: "yellow",
    location: "Bordeaux",
    date: "5 Octobre 2025",
  },
  {
    image: "/plan/formation.png",
    title: "Assises de la Formation et de l’Emploi",
    description:
      "Réflexions collectives avec enseignants, étudiants et acteurs économiques pour moderniser la formation et garantir l’accès à l’emploi pour tous.",
    link: "#",
    variant: "blue",
    location: "Lille",
    date: "10 Octobre 2025",
  },
];
