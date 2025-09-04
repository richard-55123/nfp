import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const Footer = () => {
    return (
        <footer className="bg-nfp-blue text-nfp-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-[6.5%] py-8 md:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="sm:col-span-2 lg:col-span-1"
                    >
                        <h3 className="text-lg sm:text-xl font-heading font-bold mb-3 md:mb-4">NOUVELLES FORCES POLITIQUES</h3>
                        <p className="text-nfp-white/80 mb-4 text-sm md:text-base">
                            Unis pour une vision commune de prospérité et de développement national.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social media icons would go here */}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <h4 className="text-base md:text-lg font-heading font-bold mb-3 md:mb-4">Liens Rapides</h4>
                        <ul className="space-y-1 md:space-y-2">
                            {['Accueil', 'À propos', 'Partis', 'Activités', 'Contact'].map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={`#${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`} 
                                        className="text-nfp-white/80 hover:text-nfp-yellow transition-colors text-sm md:text-base"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <h4 className="text-base md:text-lg font-heading font-bold mb-3 md:mb-4">Partis Membres</h4>
                        <ul className="space-y-1 md:space-y-2">
                            <li>
                                <a 
                                    href="https://ang-nga.org/" 
                                    className="text-nfp-white/80 hover:text-nfp-yellow transition-colors text-sm md:text-base"
                                >
                                    ANG (L'Alliance Nouvelle Génération)
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://ang-nga.org/" 
                                    className="text-nfp-white/80 hover:text-nfp-yellow transition-colors text-sm md:text-base"
                                >
                                    PTN (Parti du Triangle National)
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="sm:col-span-2 lg:col-span-1"
                    >
                        <h4 className="text-base md:text-lg font-heading font-bold mb-3 md:mb-4">Contact</h4>
                        <div className="space-y-2 md:space-y-3">
                            <div className="flex items-start">
                                <HiLocationMarker className="mr-2 text-nfp-yellow mt-1 flex-shrink-0" />
                                <span className="text-nfp-white/80 text-sm md:text-base">
                                    Siège National, BP : 8361 Deido, Douala, Cameroun
                                </span>
                            </div>
                            <div className="flex items-center">
                                <HiPhone className="mr-2 text-nfp-yellow flex-shrink-0" />
                                <span className="text-nfp-white/80 text-sm md:text-base">
                                    +237 673 712 522
                                </span>
                            </div>
                            <div className="flex items-center">
                                <HiMail className="mr-2 text-nfp-yellow flex-shrink-0" />
                                <span className="text-nfp-white/80 text-sm md:text-base">
                                    info@nfp-pnf.org
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-nfp-white/20 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-nfp-white/70 flex flex-col md:flex-row items-center justify-center text-sm md:text-base"
                    >
                        <span>© 2025 NOUVELLES FORCES POLITIQUES</span>
                        <span className="hidden md:inline mx-2">-</span>
                        <span className="mt-1 md:mt-0">
                            Powered and Designed by <a href="https://franchise-it-tech.com/" className="hover:text-nfp-yellow transition-colors">Franchise IT</a>
                        </span>
                    </motion.p>
                </div>
            </div>
        </footer>
    )
}

export default Footer