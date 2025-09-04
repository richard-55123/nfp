import { motion } from 'framer-motion'
import {  HiStar, HiHeart, HiUsers } from 'react-icons/hi'

const Hero = () => {
   

    return (
        <section id="home" className="relative bg-gradient-to-r from-nfp-blue to-nfp-blue/90 text-nfp-white min-h-screen flex items-center px-[6.5%]">
            {/* Background avec dégradé et motifs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-nfp-yellow/10 transform skew-x-12"></div>
            </div>
            {/* Éléments d'arrière-plan animés */}
            <div className="absolute inset-0 z-1 overflow-hidden ">
                <motion.div 
                    className="absolute -top-20 -left-20 w-72 h-72 bg-nfp-yellow/20 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-10 right-10 w-64 h-64 bg-nfp-yellow/10 rounded-full"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                <motion.div 
                    className="absolute top-1/2 left-1/4 w-40 h-40 bg-nfp-white/5 rounded-full"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            {/* Overlay avec motif géométrique */}
            <div className="absolute inset-0 z-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="inline-flex items-center gap-2 bg-nfp-yellow/10 px-4 py-2 mb-6"
                        >
                            <HiStar className="text-nfp-yellow" />
                            <span className="text-nfp-yellow font-medium">Nouveau Départ Politique</span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight "
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.9 }}
                        >
                            Une <span className="text-nfp-yellow">Nouvelle Force</span> Émerge pour le Cameroun
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl mb-8 font-light leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            La NOUVELLES FORCES POLITIQUES pour la <strong>prospérité</strong>, 
                            l'<strong>unité nationale</strong> et le <strong>développement durable</strong>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 md:mb-16"
                        >
                            <motion.button
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px -5px rgba(255, 203, 5, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-nfp-yellow text-nfp-blue font-bold px-8 py-4 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                            >
                                <HiUsers className="text-lg" />
                                Rejoindre le Mouvement
                            </motion.button>

                            <motion.button
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "rgba(255, 255, 255, 0.15)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-nfp-white text-nfp-white font-bold px-8 py-4 hover:bg-nfp-white/10 transition-all flex items-center gap-2"
                            >
                                <HiHeart className="text-lg" />
                                Découvrir nos Valeurs
                            </motion.button>
                        </motion.div>

                        
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:w-2/5 relative"
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative"
                        >
                            <div className="bg-nfp-yellow/20 p-6 transform rotate-2">
                                <div className="bg-white/10 backdrop-blur-md p-6 shadow-2xl transform -rotate-2 border border-nfp-white/20">
                                    <img
                                        src="/NFP.png"
                                        alt="Nouvelle Force Politique - Alliance pour le Cameroun"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                            
                            {/* Élément décoratif */}
                            <motion.div 
                                className="absolute -top-4 -right-4 bg-nfp-yellow text-nfp-blue p-2 shadow-lg"
                                animate={{
                                    rotate: [0, 10, 0, -10, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <HiStar className="text-xl" />
                            </motion.div>
                        </motion.div>

                        {/* Citation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="mt-8 p-4 bg-nfp-blue/80 backdrop-blur-sm border-l-4 border-nfp-yellow"
                        >
                            <p className="italic text-nfp-white/90">
                                "Ensemble, nous bâtissons un avenir meilleur pour toutes les régions du Cameroun"
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            
        </section>
    )
}

export default Hero