import { motion } from 'framer-motion'
import { HiPhone, HiMail } from 'react-icons/hi'
import { useState } from 'react'
import { parties } from '../data/parties'
import JoinModal from './JoinModal'
import { FuturePlans } from './vision'

const Parties = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <section id="parties" className="py-12 bg-white  relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                    src="/NFP.png"
                    alt="Logo"
                    className="opacity-10 w-2/3 max-w-md object-contain"
                />
            </div>

            <div className="relative z-10">
                <div className="mb-12 px-[10%]">
                    <div className="flex items-center justify-between bg-gray-100 p-6 ">
                        <div className="flex items-center">
                            <HiPhone className="text-2xl text-nfp-blue mr-4" />
                            <div>
                                <h2 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70">Support en Ligne</h2>
                                <p className="text-lg text-nfp-blue font-semibold">+237 670 000 000</p>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-nfp-blue text-white px-5 py-2  font-semibold flex items-center"
                        >
                            Nous Contacter <HiMail className="ml-2" />
                        </motion.button>
                    </div>
                </div>

                <div className="mb-12 px-[10%]">
                    <div className="border-t border-gray-300 pt-8">
                        <div className="w-[6rem] h-1 bg-nfp-yellow mb-2"></div>
                        <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2] mb-6">
                            Ensemble Nous Pouvons Y Arriver
                        </h2>
                        <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 leading-relaxed max-w-3xl">
                            Notre alliance rassemble les forces vives de la nation pour construire un avenir meilleur
                            pour le Cameroun. Chaque parti membre apporte son expertise et sa vision pour créer
                            une synergie au service du développement national et du bien-être des citoyens.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 px-[10%]">
                    <div className="lg:w-2/3 space-y-6">
                        <h2 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70 mb-4 border-b pb-2">Parties Membres</h2>

                        {parties.map((party, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-200  p-6"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gray-100 p-2 flex items-center justify-center ">
                                            <img
                                                src={party.partyLogo}
                                                alt={`Logo ${party.name}`}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70 mb-1">
                                                    {party.name}
                                                </h3>
                                            </div>
                                        </div>

                                        <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 mb-4 line-clamp-3">
                                            {party.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="text-sm text-gray-500">
                                                <span>Membre fondateur</span>
                                            </div>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="text-nfp-blue font-semibold flex items-center"
                                            >
                                                En savoir plus
                                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="lg:w-1/3 pb-12">
                        <div className="bg-gray-50 border border-gray-200  p-6 sticky top-6">
                            <div className="mb-8">
                                <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70 mb-4">Rejoignez le Mouvement</h3>
                                <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 mb-6">
                                    Rejoignez notre alliance et participez à la construction d'un avenir meilleur
                                    pour le Cameroun. Votre engagement et vos idées sont essentiels pour créer
                                    le changement que nous souhaitons voir dans notre nation.
                                </p>

                                <motion.button
                                    onClick={() => setIsModalOpen(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full border border-nfp-blue text-nfp-blue  font-semibold py-3 px-4  mb-6"
                                >
                                    Rejoindre Maintenant
                                </motion.button>
                            </div>

                            <div className="bg-white border border-gray-200 p-6  mb-8">
                                <h4 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70 mb-4">Votre Voix Compte</h4>
                                <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 mb-4">
                                    Chaque opinion compte dans notre démarche collective. Participez aux consultations,
                                    partagez vos idées et contribuez à façonner les politiques qui impacteront
                                    positivement notre communauté et notre pays.
                                </p>

                            </div>



                        </div>
                    </div>
                </div>
                {/* ici  */}
                <FuturePlans />


            </div>
            <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}

export default Parties