import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { parties } from "../data/parties"
import JoinModal from "./JoinModal"
import { FuturePlans } from "./vision"
import { events } from "../data/events"

const Parties = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % events.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="parties" className="bg-white relative">
            {/* <div
                className="fixed top-0 left-0 w-full h-full opacity-5 z-0"
                style={{
                    backgroundImage: "url('/NFP.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transform: "scale(1.1)"
                }}
            ></div> */}

            <div className="relative z-10">
                <div className="mb-12 px-[10%]">
                    <div className="border-t border-gray-300 pt-8">
                        <div className="w-[6rem] h-1 bg-nfp-yellow mb-2"></div>
                        <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2] mb-6">
                            Ensemble Nous Pouvons Y Arriver
                        </h2>
                        <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 max-w-3xl">
                            Notre alliance rassemble les forces vives de la nation pour
                            construire un avenir meilleur pour le Cameroun. Chaque parti membre
                            apporte son expertise et sa vision pour créer une synergie au
                            service du développement national et du bien-être des citoyens.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 px-[10%]">
                    <div className="lg:w-2/3 space-y-6">
                        <h2 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70 mb-4 border-b pb-2">
                            Partis Membres
                        </h2>

                        {parties.map((party, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-100  flex items-center justify-center rounded-md border border-gray-200 mx-auto md:mx-0">
                                            <img
                                                src={party.partyLogo}
                                                alt={`Logo ${party.name}`}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-grow text-center md:text-left">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                            <div>
                                                <h3 className="text-sm md:text-[1.3rem] font-heading font-bold text-black/70 mb-1">
                                                    {party.name}
                                                </h3>
                                                <span className="text-xs text-nfp-blue bg-nfp-blue/10 px-2 py-1 rounded-full">
                                                    Membre fondateur
                                                </span>
                                            </div>
                                        </div>

                                        <p className="leading-relaxed text-sm md:text-[1.07rem] text-black/70 mb-4 line-clamp-4 md:line-clamp-3">
                                            {party.description}
                                        </p>

                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                            <div className="text-xs md:text-sm text-gray-500 text-center md:text-left">
                                                Contribution à l'alliance
                                            </div>
                                            <motion.a
                                                href={party.website}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="text-nfp-blue font-semibold flex items-center justify-center hover:text-nfp-yellow transition-colors"
                                            >
                                                En savoir plus
                                                <svg
                                                    className="ml-1 w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        ))}
                    </div>

                    <div className="lg:w-1/3 pb-12">


                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-6 shadow-sm">
                            <div className="relative w-full h-[22rem] overflow-hidden mb-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="relative w-full h-full">
                                            <img
                                                src={events[currentIndex].image}
                                                alt={events[currentIndex].title}
                                                className="w-full h-full object-cover rounded-xl"
                                            />
                                            <div className="absolute inset-0 bg-black/50 rounded-xl flex flex-col justify-center items-start px-8 md:px-16">
                                                <motion.h3
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="text-white text-[.8rem] md:text-[1.3rem] font-heading font-bold mb-2"
                                                >
                                                    {events[currentIndex].title}
                                                </motion.h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                    {events.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? "bg-nfp-yellow scale-125" : "bg-gray-400"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70 mb-4">
                                    Rejoignez le Mouvement
                                </h3>
                                <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 mb-6">
                                    Rejoignez notre alliance et participez à la construction d'un
                                    avenir meilleur pour le Cameroun. Votre engagement et vos
                                    idées sont essentiels pour créer le changement que nous
                                    souhaitons voir dans notre nation.
                                </p>

                                <motion.button
                                    onClick={() => setIsModalOpen(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full border border-nfp-blue text-nfp-blue font-semibold py-3 px-4 mb-6 hover:bg-nfp-blue hover:text-white transition-colors"
                                >
                                    Rejoindre Maintenant
                                </motion.button>
                            </div>

                            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8 shadow-sm">
                                <h4 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70 mb-4">
                                    Votre Voix Compte
                                </h4>
                                <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 mb-4">
                                    Chaque opinion compte dans notre démarche collective.
                                    Participez aux consultations, partagez vos idées et contribuez
                                    à façonner les politiques qui impacteront positivement notre
                                    communauté et notre pays.
                                </p>
                                <div className="flex justify-center mt-4">
                                    <div className="flex space-x-1">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="w-2 h-2 bg-nfp-yellow rounded-full"
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FuturePlans />
            </div>

            <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}

export default Parties