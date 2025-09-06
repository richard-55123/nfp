import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiChartBar, HiUsers, HiGlobe, HiLightBulb, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const FuturePlanSection = () => {
    // Plans futurs de la NFP
    const futurePlans = [
        {
            title: "Réforme Économique Nationale",
            period: "2025-2026",
            icon: <HiChartBar className="text-3xl text-nfp-yellow" />,
            description: "Restructuration complète du système économique pour une redistribution équitable des richesses et la création d'emplois durables.",
            objectives: [
                "Création de 500 000 emplois en 2 ans",
                "Soutien aux PME et entrepreneurs locaux",
                "Réforme fiscale progressive"
            ],
            image: "/plan/pme.png",
            status: "En préparation",
        },
        {
            title: "Programme Éducatif Révolutionnaire",
            period: "2026-2027",
            icon: <HiLightBulb className="text-3xl text-nfp-yellow" />,
            description: "Transformation du système éducatif pour l'adapter aux défis du 21ème siècle et former la prochaine génération de leaders.",
            objectives: [
                "Gratuité de l'éducation de base",
                "Modernisation des programmes scolaires",
                "Formation professionnelle accessible à tous"
            ],
            image: "/plan/etudiant.png",
            status: "Phase de consultation",
        },
        {
            title: "Initiative de Gouvernance Participative",
            period: "2025-2030",
            icon: <HiUsers className="text-3xl text-nfp-yellow" />,
            description: "Implémentation d'un modèle de gouvernance inclusive où les citoyens contribuent directement aux décisions politiques.",
            objectives: [
                "Assemblées citoyennes régionales",
                "Plateforme digitale de participation",
                "Transparence totale des décisions gouvernementales"
            ],
            image: "/plan/gouvernement.png",
            status: "Lancement imminent",
        },
        {
            title: "Projet d'Infrastructure National",
            period: "2025-2030",
            icon: <HiGlobe className="text-3xl text-nfp-yellow" />,
            description: "Modernisation des infrastructures pour connecter toutes les régions et stimuler le développement économique.",
            objectives: [
                "Réseau routier national rénové",
                "Accès universel à l'eau potable",
                "Développement des énergies renouvelables"
            ],
            image: "/plan/infrastructure.png",
            status: "Étude de faisabilité",
        }
    ];

    // État pour le carrousel
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Fonction pour passer à la slide suivante
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % futurePlans.length);
    };

    // Fonction pour passer à la slide précédente
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + futurePlans.length) % futurePlans.length);
    };

    // Auto-play du carrousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change toutes les 5 secondes

        return () => clearInterval(interval);
    }, [isAutoPlaying]);



    return (
        <section id="future-plans" className="py-20 bg-gradient-to-br from-nfp-blue/5 via-nfp-white to-nfp-yellow/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-nfp-yellow/10 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-nfp-blue/10 translate-y-1/2 -translate-x-1/2"></div>

            {/* <div className="absolute inset-0 opacity-10 z-0">
                <img
                    src="/pays.png"
                    alt="Background valeurs"
                    className="w-full h-full object-cover"
                />
            </div> */}

            <div className="container mx-auto lg:px-[10%] px-[6.5%] relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-nfp-blue mb-4 md:mb-6 leading-tight">
                        Plan Politique <span className="text-nfp-yellow">2025-2030</span>
                    </h2>
                    <div className="w-20 h-1 bg-nfp-yellow mx-auto mb-6"></div>
                    <p className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl text-nfp-black/90 leading-normal xs:leading-relaxed sm:leading-relaxed mb-4 xs:mb-5 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
                        La Nouvelle Force Politique présente son plan stratégique pour transformer le Cameroun en une nation prospère,
                        juste et souveraine. Découvrez les piliers de notre projet de société qui place le citoyen au cœur de toutes les décisions.
                    </p>
                </motion.div>



                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >

                    <div
                        className="relative bg-white shadow-soft-xl border border-nfp-blue/10 overflow-hidden"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {futurePlans.map((plan, index) => (
                                    <div key={index} className="w-full flex-shrink-0">
                                        <div className="grid md:grid-cols-2 gap-0">
                                            <div className="h-64 md:h-auto">
                                                <img
                                                    src={plan.image}
                                                    alt={plan.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="p-8">
                                                <div className="flex items-center mb-4">
                                                    <div className="bg-nfp-blue/10 p-2 mr-4">
                                                        {plan.icon}
                                                    </div>
                                                    <div>
                                                        <span className="text-nfp-blue/70 text-sm">{plan.period}</span>
                                                        <h4 className="text-xl font-heading font-bold text-nfp-blue">{plan.title}</h4>
                                                    </div>
                                                </div>

                                                <p className="text-nfp-black/80 mb-4">{plan.description}</p>

                                                <div className="grid grid-cols-2 gap-4 mb-4">
                                                    <div>
                                                        <p className="text-sm text-nfp-blue/70">Statut</p>
                                                        <p className="font-medium text-nfp-blue">{plan.status}</p>
                                                    </div>

                                                </div>

                                                {/* <button className="bg-nfp-blue text-white px-6 py-2 font-medium hover:bg-nfp-blue/90 transition-colors">
                                                    En savoir plus
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-nfp-blue p-2 shadow-md hover:bg-white transition-colors"
                            aria-label="Slide précédent"
                        >
                            <HiChevronLeft className="text-2xl" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-nfp-blue p-2 shadow-md hover:bg-white transition-colors"
                            aria-label="Slide suivant"
                        >
                            <HiChevronRight className="text-2xl" />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {futurePlans.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 ${currentSlide === index ? 'bg-nfp-yellow' : 'bg-white/70'} hover:bg-nfp-yellow/80 transition-colors`}
                                    aria-label={`Aller au slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-nfp-blue to-nfp-blue/90 text-white p-8 md:p-12 shadow-soft-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                            Rejoignez la Révolution Citoyenne
                        </h3>
                        <p className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl text-nfp-black/90 text-nfp-white leading-normal xs:leading-relaxed sm:leading-relaxed mb-4 xs:mb-5 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
                            Ces plans ambitieux ne deviendront réalité qu'avec votre soutien et participation active.
                            Ensemble, construisons le Cameroun de demain.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-nfp-yellow text-nfp-blue font-bold py-3 px-6 flex items-center justify-center"
                            >
                                Soutenir nos projets
                            </motion.button>
                            {/* <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-white text-white font-bold py-3 px-6"
                            >
                                Télécharger le plan complet
                            </motion.button> */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FuturePlanSection;