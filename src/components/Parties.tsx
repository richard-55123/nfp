import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiCalendar, HiHeart } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import { parties } from '../data/parties'
import JoinModal from './JoinModal'

const Parties = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [announcements] = useState([
        {
            id: 1,
            title: "Grand rassemblement pour l'unité nationale",
            date: "15 Octobre 2025",
            type: "événement",
            excerpt: "Rejoignez-nous pour une journée de discussions et de célébrations autour des valeurs qui nous unissent.",
            image: "/NP.png"
        },
        {
            id: 2,
            title: "Nouveau programme économique",
            date: "12 Octobre 2025",
            type: "annonce",
            excerpt: "Découvrez notre plan pour relancer l'économie et créer des emplois durables.",
            image: "/NP.png"
        },
        {
            id: 3,
            title: "Consultation citoyenne nationale",
            date: "20 Octobre 2025",
            type: "consultation",
            excerpt: "Participez à notre grande consultation nationale pour construire ensemble l'avenir du pays.",
            image: "/NP.png"
        },
        {
            id: 4,
            title: "Lancement de la campagne jeunesse",
            date: "5 Octobre 2025",
            type: "campagne",
            excerpt: "Une nouvelle initiative pour impliquer les jeunes dans la vie politique et sociale.",
            image: "/NP.png"
        }
    ])

    const [currentAnnouncement, setCurrentAnnouncement] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAnnouncement((prev) => (prev + 1) % announcements.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [announcements.length])

    return (
        <section id="parties" className="py-12 bg-gradient-to-br from-nfp-blue/5 to-nfp-white relative overflow-hidden">
            {/* Image de fond ajoutée ici */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                style={{ backgroundImage: "url('/NFP.png')" }}
            ></div>

            {/* Éléments décoratifs géométriques */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 border-t-4 border-l-4 border-nfp-yellow/20"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 border-b-4 border-r-4 border-nfp-blue/20"></div>
            </div>

            <div className="container mx-auto lg:px-[10%] px-[6.5%] relative z-10">

                <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <div className="w-20 h-1 bg-nfp-yellow mb-4"></div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-nfp-blue mb-4 md:mb-6 leading-tight">
                        Partis Membres <span className="text-nfp-yellow">Membres</span><br /> Pour Le Cameroun
                    </h2>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-nfp-black/90 leading-relaxed mb-6 md:mb-8"
                >
                    <strong className="font-semibold text-nfp-blue">Découvrez</strong> les partis politiques qui composent notre alliance et œuvrent ensemble
                    pour l'avenir du Cameroun.
                </motion.p>


                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Section des partis - Gauche */}
                    <div className="lg:w-2/3 space-y-2">
                        {parties.map((party, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/80 hover:bg-gray-50/80 transition-all duration-300 border-b border-gray-200 last:border-b-0 backdrop-blur-sm"
                            >
                                <div className="py-8">
                                    <div className="flex flex-col md:flex-row items-start md:items-center px-5 gap-6">
                                        {/* Logo et couleur identitaire */}
                                        <div className="flex-shrink-0 flex items-start">
                                            <div className="relative">
                                                <div
                                                    className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 p-2 flex items-center justify-center"
                                                    style={{ boxShadow: `0 4px 14px 0 ${party.color}40` }}
                                                >
                                                    <img
                                                        src={party.partyLogo}
                                                        alt={`Logo ${party.name}`}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div
                                                    className="absolute -bottom-2 -right-2 w-6 h-6"
                                                    style={{ backgroundColor: party.color }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Informations du parti */}
                                        <div className="flex-grow">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                                                <h3 className="text-xl md:text-2xl font-bold text-nfp-blue">
                                                    {party.name}
                                                </h3>

                                                <div className="flex items-center gap-3">
                                                    <span className="px-3 py-1 text-xs font-semibold bg-gray-100 text-nfp-blue">
                                                        {party.ideology}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-nfp-black/70 mb-4">
                                                {party.description}
                                            </p>

                                            <div className="flex items-center justify-between">
                                               

                                                <motion.a
                                                    href={party.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ x: 5 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="flex items-center text-nfp-blue font-medium text-sm"
                                                >
                                                    Site officiel
                                                    <HiArrowRight className="ml-2" />
                                                </motion.a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Section des actualités et annonces - Droite */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="sticky top-6 bg-white/90 shadow-lg border border-gray-200 p-6 backdrop-blur-sm"
                        >

                            {/* Carousel des annonces */}
                            <div className="relative h-96 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {announcements.map((announcement, index) => (
                                        index === currentAnnouncement && (
                                            <motion.div
                                                key={announcement.id}
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -50 }}
                                                transition={{ duration: 0.5 }}
                                                className="absolute inset-0"
                                            >
                                                {/* Image de l'annonce avec superposition de dégradé */}
                                                <div className="h-40 bg-gray-200 mb-4 relative overflow-hidden">
                                                    <img
                                                        src={announcement.image}
                                                        alt={announcement.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-r from-nfp-blue/70 to-nfp-yellow/70 flex items-center justify-center">
                                                        <span className="text-white font-bold text-xl">{announcement.type.toUpperCase()}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                                    <HiCalendar className="mr-2" />
                                                    <span>{announcement.date}</span>
                                                </div>

                                                <h4 className="text-lg font-bold text-nfp-blue mb-3">{announcement.title}</h4>
                                                <p className="text-gray-700 mb-4">{announcement.excerpt}</p>

                                            </motion.div>
                                        )
                                    ))}
                                </AnimatePresence>

                                {/* Indicateurs de slide */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                                    {announcements.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentAnnouncement(index)}
                                            className={`w-2 h-2 rounded-full ${index === currentAnnouncement ? 'bg-nfp-blue' : 'bg-gray-300'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Appel à l'action */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="mt-8 p-4 bg-gradient-to-r from-nfp-blue to-nfp-blue/80 text-white text-center"
                            >
                                <HiHeart className="text-2xl mx-auto mb-2" />
                                <h4 className="font-bold mb-2">Rejoignez le mouvement</h4>
                                <p className="text-sm mb-3">Soyez acteur du changement</p>
                                <motion.button
                                    onClick={() => setIsModalOpen(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-nfp-blue px-4 py-2 font-bold w-full"
                                >
                                    Adhérer maintenant
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#1E40AF" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-nfp-blue text-white font-semibold px-8 py-4 shadow-md hover:shadow-lg transition-all flex items-center mx-auto"
                    >
                        Voir tous les partis membres
                        <HiArrowRight className="ml-2" />
                    </motion.button>
                </motion.div>
            </div>
            <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}

export default Parties