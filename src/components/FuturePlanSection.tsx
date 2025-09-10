import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface EventCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
    variant?: "blue" | "yellow" | "dark";
}

const EventCard: React.FC<EventCardProps> = ({
    image,
    title,
    description,
    link,
    variant = "blue",
}) => {
    const getVariantClasses = () => {
        switch (variant) {
            case "yellow":
                return "text-black/70";
            case "dark":
                return "text-black/70";
            case "blue":
            default:
                return "text-black/70";
        }
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden shadow rounded-lg flex flex-col bg-white min-w-[300px] md:min-w-[369px] mx-4 h-full"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-40 md:h-48 object-cover"
            />

            <div
                className={`p-6 flex flex-col justify-between flex-1 ${getVariantClasses()}`}
            >
                <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold mb-3">
                    {title}
                </h3>

                <p className="text-[.95rem] md:text-[1.1rem] mb-4 opacity-90 leading-relaxed flex-1">
                    {description}
                </p>

                <a
                    href={link}
                    className="text-[.95rem] md:text-[1.1rem] font-semibold uppercase tracking-wide underline text-nfp-blue mt-auto"
                >
                    Voir Détails
                </a>
            </div>
        </motion.div>

    );
};

const EventsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const events = [
        {
            image: "/plan/gouvernement.png",
            title: "Grand Rassemblement de la Jeunesse NFP ",
            description: "Un événement majeur pour mobiliser la jeunesse autour des valeurs progressistes de la NFP. Débats, ateliers et tables rondes sur l'avenir de notre nation.",
            link: "#",
            variant: "blue"
        },
        {
            image: "/plan/etudiant.png",
            title: "Forum Économique pour une France Prospère",
            description: "Experts, entrepreneurs et citoyens débattent des solutions économiques innovantes portées par la NFP pour relancer l'économie nationale.",
            link: "#",
            variant: "yellow"
        },
        {
            image: "/plan/pme.png",
            title: "Convention Nationale sur la Transition Écologique",
            description: "La NFP présente son plan ambitieux pour une transition écologique juste et créatrice d'emplois dans tous les territoires.",
            link: "#",
            variant: "blue"
        },
        {
            image: "/ecoute.png",
            title: "Rencontres Territoriales : La NFP à l'Écoute des Citoyens",
            description: "Une tournée nationale pour recueillir la parole des Français et construire ensemble le programme de transformation sociale de la NFP.",
            link: "#",
            variant: "dark"
        }
    ];

    const duplicatedEvents = [...events, ...events, ...events];

    useEffect(() => {
        const updateCardWidth = () => {
            if (containerRef.current) {
                const card = containerRef.current.querySelector('.event-card');
                if (card) {
                    const style = window.getComputedStyle(card);
                    const width = card.getBoundingClientRect().width;
                    const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
                    setCardWidth(width + margin);
                }
            }
        };

        updateCardWidth();
        window.addEventListener('resize', updateCardWidth);

        return () => window.removeEventListener('resize', updateCardWidth);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;

                if (nextIndex >= events.length) {
                    setTimeout(() => {
                        setCurrentIndex(0);
                    }, 50);
                    return nextIndex;
                }

                return nextIndex;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [events.length]);

    return (
        <section className="relative text-white px-[10%]">
            <div className="absolute top-0 left-0 w-full h-[500px]">
                <img
                    src="/celebration.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-nfp-blue/70" />
            </div>

            <div className="relative z-10 pt-12 text-center">
                <div className='flex justify-center'>
                    <div className="w-[6rem] h-1 bg-nfp-yellow mb-2 item-center"></div>
                </div>
                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] mb-4">
                    Agenda des Événements NFP
                </h2>
                <p className="max-w-3xl mx-auto text-[.95rem] md:text-[1.1rem] opacity-90 leading-relaxed">
                    Ensemble, nous construisons une société plus juste et plus forte.
                    Chaque rencontre, chaque forum, chaque action est une pierre posée
                    vers un avenir transformé.
                </p>
            </div>

            <div className="relative z-20  mt-16 overflow-hidden" ref={containerRef}>
                <motion.div
                    className="flex"
                    animate={{ x: -currentIndex * cardWidth }}
                    transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
                >
                    {duplicatedEvents.map((event, index) => (
                        <div key={index} className="event-card">
                            <EventCard
                                image={event.image}
                                title={event.title}
                                description={event.description}
                                link={event.link}
                                variant={event.variant as "blue" | "yellow" | "dark"}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="pb-20" />
        </section>
    );
};

export default EventsSection;