import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MdLocationOn, MdDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { events } from '../data/events';

interface EventCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
    variant?: "blue" | "yellow" | "dark";
    location?: string;
    date?: string;
}

const EventCard: React.FC<EventCardProps> = ({
    image,
    title,
    description,
    link,
    variant = "blue",
    location,
    date
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
            className="overflow-hidden shadow-lg rounded-lg flex flex-col bg-white min-w-[300px] md:min-w-[369px] mx-4 h-full"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-40 md:h-48 object-cover"
            />

            <div className={`p-6 flex flex-col justify-between flex-1 ${getVariantClasses()}`}>
                <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold mb-3">
                    {title}
                </h3>

                <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 flex-1">
                    {description}
                </p>


                <div className="flex items-center gap-6 mb-4 text-[.85rem] md:text-[1rem] text-gray-600">
                    {location && (
                        <div className="flex items-center gap-1">
                            <MdLocationOn className="w-4 h-4 text-nfp-yellow" />
                            <span>{location}</span>
                        </div>
                    )}
                    {date && (
                        <div className="flex items-center gap-1">
                            <MdDateRange className="w-4 h-4 text-nfp-yellow" />
                            <span>{date}</span>
                        </div>
                    )}
                </div>

                <a
                    href={link}
                    className="text-[.95rem] md:text-[1.1rem] font-semibold uppercase tracking-wide underline text-nfp-yellow mt-auto"
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
                    setTimeout(() => setCurrentIndex(0), 50);
                    return nextIndex;
                }
                return nextIndex;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [events.length]);

    return (
        <section className="relative text-white px-[10%] bg-[url('/integral.png')] bg-cover bg-center bg-fixed border-none">
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 pt-12 text-center">
                <div className='flex justify-center'>
                    <div className="w-[6rem] h-1 bg-nfp-yellow mb-2"></div>
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

            <div className="relative z-20 mt-16 overflow-hidden" ref={containerRef}>
                <motion.div
                    className="flex"
                    animate={{ x: -currentIndex * cardWidth }}
                    transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
                >
                    {duplicatedEvents.map((event, index) => (
                        <div key={index} className="event-card">
                            <EventCard {...event} />
                        </div>
                    ))}
                </motion.div>
                <div className='flex justify-center mt-12'>
                    <Link to={'/evenements'}>
                        <button className="bg-secondary text-white px-6 py-3.5 hover:bg-nfp-blue/90 transition-colors">
                            En savoir plus
                        </button>
                    </Link>
                    <div></div>
                </div>
            </div>

            <div className="pb-20" />
        </section>
    );
};

export default EventsSection;
