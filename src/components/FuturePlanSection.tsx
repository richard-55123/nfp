import React, { useEffect, useState } from 'react';
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
            className="overflow-hidden shadow-xl flex flex-col bg-white min-w-[300px] md:min-w-[350px] mx-4"
        >
            <img src={image} alt={title} className="w-full h-40 md:h-48 object-cover" />
            <div
                className={`p-6 flex flex-col justify-between flex-1 ${getVariantClasses()}`}
            >
                <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold mb-3">{title}</h3>
                <p className="text-[.95rem] md:text-[1.1rem] mb-4 opacity-90 leading-relaxed">
                    {description}
                </p>
                <a
                    href={link}
                    className= "text-[.95rem] md:text-[1.1rem] font-semibold uppercase tracking-wide underline text-nfp-blue"
                        
                >
                    Voir Détails
                </a>
            </div>
        </motion.div>
    );
};

const EventsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const events = [
        {
            image: "/plan/gouvernement.png",
            title: "Élever la jeunesse",
            description: "Donner aux jeunes les outils pour transformer leurs rêves en réalités durables.",
            link: "#",
            variant: "blue"
        },
        {
            image: "/plan/etudiant.png",
            title: "Santé & Éducation",
            description: "Encourager l'accès équitable à la santé et à l'éducation, piliers du changement social.",
            link: "#",
            variant: "yellow"
        },
        {
            image: "/plan/pme.png",
            title: "Unité & Prospérité",
            description: "Rassembler les communautés autour de valeurs communes pour bâtir une nation plus unie.",
            link: "#",
            variant: "blue"
        }
    ];

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [events.length]);

    return (
        <section className="relative text-white">
            <div className="absolute top-0 left-0 w-full h-[500px]">
                <img
                    src="/possible.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-nfp-blue/70" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-center">
                <div className='flex justify-center'>
                    <div className="w-[6rem] h-1 bg-nfp-yellow mb-2 item-center"></div>
                </div>
                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] mb-4">
                    De vraies voix. Un vrai changement.
                </h2>
                <p className="max-w-3xl mx-auto text-[.95rem] md:text-[1.1rem] opacity-90 leading-relaxed">
                    Ensemble, nous construisons une société plus juste et plus forte.
                    Chaque rencontre, chaque forum, chaque action est une pierre posée
                    vers un avenir transformé.
                </p>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 mt-16 overflow-hidden">
                <motion.div 
                    className="flex"
                    animate={{ x: -currentIndex * 402 }}
                    transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
                >
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            image={event.image}
                            title={event.title}
                            description={event.description}
                            link={event.link}
                            variant={event.variant as "blue" | "yellow" | "dark"}
                        />
                    ))}
                </motion.div>
            </div>

            <div className="pb-20" />
        </section>
    );
};

export default EventsSection;