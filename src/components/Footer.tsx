import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    HiMail,
    HiPhone,
    HiLocationMarker,
    HiChevronUp,
    HiArrowUp,
    HiX
} from 'react-icons/hi'
import {
    FaFacebookF,
    FaLinkedinIn,
} from 'react-icons/fa'
import { parties } from '../data/parties'

interface MenuItem {
    name: string;
    id: string;
}

interface Party {
    name: string;
    partyLogo: string;
    website: string;
}

const Footer = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [activeSection, setActiveSection] = useState<string>('home')
    const [showLegalModal, setShowLegalModal] = useState<boolean>(false)
    const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        const handleScroll = () => {
            toggleVisibility()

            // Déterminer la section active
            const sections = ['home', 'about', 'parties', 'activities', 'contact']
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const position = element.offsetTop
                    if (scrollPosition >= position) {
                        setActiveSection(section)
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    const menuItems: MenuItem[] = [
        { name: 'Accueil', id: 'home' },
        { name: 'À propos', id: 'about' },
        { name: 'Partis', id: 'parties' },
        { name: 'Activités', id: 'activities' },
        { name: 'Contact', id: 'contact' },
    ]

    // Modale pour les mentions légales
    const LegalModal = () => (
        <AnimatePresence>
            {showLegalModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                    onClick={() => setShowLegalModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Mentions Légales</h3>
                                <button
                                    onClick={() => setShowLegalModal(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <HiX size={24} />
                                </button>
                            </div>

                            <div className="prose prose-lg text-gray-700">
                                <h4 className="text-xl font-semibold text-nfp-blue mb-3">Éditeur du site</h4>
                                <p>Nouvelles Forces Politiques (NFP)<br />
                                    Siège Social : BP 8361 Deido, Douala, Cameroun<br />
                                    Téléphone : +237 673 712 522<br />
                                    Email : info@nfp-pnf.org</p>


                                <h4 className="text-xl font-semibold text-nfp-blue mt-6 mb-3">Constructeur :</h4>
                                <p>Nom : Franchise IT<br />
                                    URL : www.franchise-it-tech.com<br />
                                    Adresse : Montréal, Canada</p>

                                <p className="text-sm text-gray-500 mt-10 pt-4 border-t border-gray-200">
                                    Dernière mise à jour : 06 09 2025
                                </p>

                            </div>

                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={() => setShowLegalModal(false)}
                                    className="bg-nfp-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )

    // Modale pour la politique de confidentialité
    const PrivacyModal = () => (
        <AnimatePresence>
            {showPrivacyModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                    onClick={() => setShowPrivacyModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Politique de Confidentialité - NFP</h3>
                                <button
                                    onClick={() => setShowPrivacyModal(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <HiX size={24} />
                                </button>
                            </div>

                            <div className="prose prose-lg text-gray-700">
                                <h4 className="text-xl font-semibold text-nfp-blue mb-3">Introduction</h4>
                                <p>Le Nouvelle Force Politique (NFP) s'engage à protéger et respecter votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.</p>

                                <h4 className="text-xl font-semibold text-nfp-blue mt-6 mb-3">1. Collecte des données personnelles</h4>
                                <p>Le NFP collecte uniquement les données strictement nécessaires au bon fonctionnement du site web et à la communication avec ses membres ou visiteurs. Ces données peuvent inclure :</p>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Nom et prénom</li>
                                    <li>Adresse email</li>
                                    <li>Numéro de téléphone (facultatif)</li>
                                    <li>Profession ou affiliation politique (facultatif)</li>
                                    <li>Données de navigation (via cookies)</li>
                                </ul>

                                <h4 className="text-xl font-semibold text-nfp-blue mt-6 mb-3">2. Utilisation des données</h4>
                                <p>Les informations que nous collectons sont utilisées pour :</p>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Répondre aux demandes d'information ou de contact</li>
                                    <li>Gérer les inscriptions aux activités, événements et newsletters</li>
                                    <li>Améliorer l'expérience utilisateur sur le site</li>
                                    <li>Communiquer sur les actions et les propositions du NFP</li>
                                    <li>Respecter nos obligations légales</li>
                                </ul>
                                <p className="mt-2">Aucune donnée personnelle n'est vendue ou transmise à des tiers à des fins commerciales.</p>

                                <h4 className="text-xl font-semibold text-nfp-blue mt-6 mb-3">3. Cookies</h4>
                                <p>Le site utilise des cookies afin de mesurer l'audience et de faciliter la navigation. Vous pouvez configurer votre navigateur pour refuser les cookies ou être informé de leur utilisation.</p>

                                <h4 className="text-xl font-semibold text-nfp-blue mt-6 mb-3">4. Conservation des données</h4>
                                <p>Nous conservons vos données personnelles seulement aussi longtemps que nécessaire pour les finalités pour lesquelles elles ont été collectées, conformément à la législation en vigueur.</p>

                                <h4 className="text-xl font-semibold text-nfp-blue mt-6 mb-3">5. Vos droits</h4>
                                <p>Conformément à la loi camerounaise sur la protection des données, vous disposez des droits suivants :</p>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Droit d'accès à vos données personnelles</li>
                                    <li>Droit de rectification des données inexactes</li>
                                    <li>Droit à l'effacement de vos données</li>
                                    <li>Droit de limitation du traitement</li>
                                    <li>Droit d'opposition au traitement</li>
                                </ul>
                                <p className="mt-2">Pour exercer ces droits, veuillez nous contacter à l'adresse suivante :<br />
                                    Email : info@nfp-cameroun.org</p>

                                <h4 className="text-xl font-semibold text-nfp-blue mt-6 mb-3">6. Sécurité des données</h4>
                                <p>Le NFP met en œuvre des mesures techniques et organisationnelles afin de protéger les données personnelles contre tout accès non autorisé, perte ou destruction.</p>

                                <h4 className="text-xl font-semibold text-nfp-blue mt-6 mb-3">7. Modifications de la politique de confidentialité</h4>
                                <p>La présente politique peut être modifiée à tout moment pour se conformer à l'évolution de la législation ou du fonctionnement du site. Toute modification majeure sera annoncée clairement sur le site.</p>

                                <p className="mt-6 font-semibold">Dernière mise à jour 06 09 2025</p>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={() => setShowPrivacyModal(false)}
                                    className="bg-nfp-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )

    return (
        <footer className="relative bg-gray-900 text-white overflow-hidden">
            {/* Pattern d'arrière-plan */}
            {/* <div className="absolute inset-0 bg-nfp-blue/5 bg-pattern"></div> */}

            {/* Éléments décoratifs */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-nfp-yellow rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-nfp-yellow rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto lg:px-[10%] px-[6.5%] py-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
                    {/* Colonne Logo et description */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="flex flex-col h-full py-8">
                            <div className="flex items-center mb-6">
                                <div className="relative flex items-center mr-4">
                                    <div className="absolute -inset-3 bg-nfp-white/40 " />
                                    <img
                                        src="/NFP.png"
                                        alt="NFP"
                                        className="h-17 w-auto object-contain z-10 drop-shadow-lg"
                                    />
                                </div>
                                {/* <div className="text-xl font-bold text-nfp-white">
                                    NOUVELLES FORCES<br />POLITIQUES
                                </div> */}
                            </div>

                            <p className="text-gray-300 mb-6 max-w-md">
                                Le Nouvelle Forces Politiques est une coalition engagée pour
                                le progrès et le développement national. Rejoignez-nous dans
                                notre mission pour un avenir meilleur.
                            </p>

                            
                            
                            {/* Social Media Links */}
                            <div className="flex space-x-4 mt-auto">
                                {[
                                    { icon: FaFacebookF, url: "#", label: "Facebook" },
                                    { icon: FaLinkedinIn, url: "#", label: "LinkedIn" },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gray-800 hover:bg-nfp-yellow text-white p-3 rounded-full transition-colors duration-300 shadow-md"
                                        aria-label={`Suivez-nous sur ${social.label}`}
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Liens Rapides */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="py-4"
                    >
                        <h4 className="text-lg font-bold mb-5 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-nfp-yellow">
                            Liens Rapides
                        </h4>
                        <ul className="space-y-3">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <motion.button
                                        onClick={() => scrollToSection(item.id)}
                                        whileHover={{ x: 5 }}
                                        className={`text-gray-300 hover:text-nfp-yellow transition-colors flex items-center group w-full text-left ${activeSection === item.id ? 'text-nfp-yellow' : ''
                                            }`}
                                    >
                                        <span className={`w-1 h-1 bg-nfp-yellow rounded-full mr-2 ${activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                            } transition-opacity`}></span>
                                        {item.name}
                                    </motion.button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Partis Membres */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="py-4"
                    >
                        <h4 className="text-lg font-bold mb-5 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-nfp-yellow">
                            Partis Membres
                        </h4>
                        <div className="space-y-4">
                            {parties.slice(0, 3).map((party: Party, index: number) => (
                                <motion.a
                                    key={index}
                                    href={party.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 5 }}
                                    className="block group"
                                >
                                    <div className="flex items-center p-3 bg-gray-800 hover:bg-gray-700 transition-colors shadow-md">
                                        <div className="flex-shrink-0 mr-3">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                                                <img
                                                    src={party.partyLogo}
                                                    alt={party.name}
                                                    className="w-10 h-10 object-contain"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-white truncate group-hover:text-nfp-yellow transition-colors">
                                                {party.name.split(' (')[0]}
                                            </p>
                                            <p className="text-xs text-gray-300 truncate">
                                                {party.name.split('(')[1]?.replace(')', '')}
                                            </p>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                            {parties.length > 3 && (
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-nfp-yellow text-sm font-medium mt-2 flex items-center"
                                >
                                    Voir tous les partis
                                    <HiChevronUp className="ml-1 transform rotate-90" />
                                </motion.button>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="py-4"
                    >
                        <h4 className="text-lg font-bold mb-5 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-nfp-yellow">
                            Contact
                        </h4>
                        <div className="space-y-4">
                            <motion.div
                                className="flex items-start"
                                whileHover={{ x: 3 }}
                            >
                                <div className="bg-nfp-yellow/20 p-2 rounded-full mr-3 flex-shrink-0">
                                    <HiLocationMarker className="text-nfp-yellow text-sm" />
                                </div>
                                <span className="text-gray-300 text-sm">
                                    Siège National, BP : 8361 Deido, Douala, Cameroun
                                </span>
                            </motion.div>
                            <motion.div
                                className="flex items-center"
                                whileHover={{ x: 3 }}
                            >
                                <div className="bg-nfp-yellow/20 p-2 rounded-full mr-3 flex-shrink-0">
                                    <HiPhone className="text-nfp-yellow text-sm" />
                                </div>
                                <span className="text-gray-300 text-sm">
                                    +237 673 712 522
                                </span>
                            </motion.div>
                            <motion.div
                                className="flex items-center"
                                whileHover={{ x: 3 }}
                            >
                                <div className="bg-nfp-yellow/20 p-2 rounded-full mr-3 flex-shrink-0">
                                    <HiMail className="text-nfp-yellow text-sm" />
                                </div>
                                <span className="text-gray-300 text-sm">
                                    info@nfp-pnf.org
                                </span>
                            </motion.div>
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="mt-6">
                            <h5 className="text-sm font-semibold mb-3">Restez informé</h5>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="bg-gray-800 text-white text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-nfp-yellow w-full border border-gray-700"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-nfp-yellow text-gray-900 px-4 py-3 text-sm font-medium hover:bg-yellow-500 transition-colors"
                                >
                                    S'inscrire
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <div className="text-gray-400 text-sm flex flex-col md:flex-row items-center mb-4 md:mb-0">
                        <span>© 2025 NOUVELLES FORCES POLITIQUES. Tous droits réservés.</span>
                        <span className="hidden md:inline mx-2">-</span>
                        <span className="flex items-center mt-1 md:mt-0">
                            Made with by
                            <a
                                href="https://franchise-it-tech.com/"
                                className="ml-1 text-nfp-yellow hover:underline transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Franchise IT
                            </a>
                        </span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm">
                        <button
                            onClick={() => setShowLegalModal(true)}
                            className="text-gray-400 hover:text-nfp-yellow transition-colors"
                        >
                            Mentions légales
                        </button>
                        <button
                            onClick={() => setShowPrivacyModal(true)}
                            className="text-gray-400 hover:text-nfp-yellow transition-colors"
                        >
                            Politique de confidentialité
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Back to Top Button */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        onClick={scrollToTop}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        className="fixed bottom-6 right-6 bg-nfp-yellow text-gray-900 p-3 rounded-full shadow-lg z-50"
                        aria-label="Retour en haut"
                    >
                        <HiArrowUp className="w-5 h-5" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Modales */}
            <LegalModal />
            <PrivacyModal />

            <style>{`
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
        </footer>
    )
}

export default Footer