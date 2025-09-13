
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
            title: "Grand Rassemblement de la Jeunesse NFP",
            description: "Un événement majeur pour mobiliser la jeunesse autour des valeurs progressistes de la NFP.",
            link: "#",
            variant: "blue",
            location: "Paris",
            date: "12 Septembre 2025"
        },
        {
            image: "/plan/etudiant.png",
            title: "Forum Économique pour une France Prospère",
            description: "Experts, entrepreneurs et citoyens débattent des solutions économiques innovantes.",
            link: "#",
            variant: "yellow",
            location: "Lyon",
            date: "18 Septembre 2025"
        },
        {
            image: "/plan/pme.png",
            title: "Convention Nationale sur la Transition Écologique",
            description: "La NFP présente son plan ambitieux pour une transition écologique juste et créatrice d'emplois.",
            link: "#",
            variant: "blue",
            location: "Marseille",
            date: "25 Septembre 2025"
        },
        {
            image: "/ecoute.png",
            title: "Rencontres Territoriales : La NFP à l'Écoute des Citoyens",
            description: "Une tournée nationale pour recueillir la parole des Français et construire ensemble le programme de transformation sociale.",
            link: "#",
            variant: "dark",
            location: "Toulouse",
            date: "30 Septembre 2025"
        },
        {
            image: "/plan/economique.png",
            title: "Rencontres Territoriales : La NFP à l'Écoute des Citoyens",
            description: "Une tournée nationale pour recueillir la parole des Français et construire ensemble le programme de transformation sociale.",
            link: "#",
            variant: "dark",
            location: "Toulouse",
            date: "30 Septembre 2025"
        },
        {
            image: "/plan/formation.png",
            title: "Rencontres Territoriales : La NFP à l'Écoute des Citoyens",
            description: "Une tournée nationale pour recueillir la parole des Français et construire ensemble le programme de transformation sociale.",
            link: "#",
            variant: "dark",
            location: "Toulouse",
            date: "30 Septembre 2025"
        }
    ];
