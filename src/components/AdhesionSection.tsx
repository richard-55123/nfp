import React from 'react';
import { motion } from 'framer-motion';

const AdhesionSection: React.FC = () => {
    return (
        <section className="relative py-20 ">
            <div className="grid md:grid-cols-2 gap-8 items-center px-[10%]">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1"
                >
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-[2px] bg-nfp-yellow mr-3"></div>
                        <span className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-secondary">
                            Rejoignez la NFP
                        </span>
                    </div>
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2] mb-6">
                        Ensemble, construisons un avenir meilleur
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2 relative"
                >
                    <div className="relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-500">
                        <img
                            src="/adhesion.png"
                            alt="Rejoindre la NFP"
                            className="w-full object-cover"
                        />

                    </div>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center px-[10%] lg:pr-[10%] lg:pl-0">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden hover:scale-105 transition-transform duration-500"
                >
                    <img
                        src="/vous.png"
                        alt="Rejoindre la NFP"
                        className="w-full object-cover rounded-lg"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className=""
                >
                    <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 max-w-3xl mb-6">
                        La Nouvelle Force Politique (NFP) vous invite à participer activement à notre mouvement pour transformer la société.
                        Engagez-vous, prenez part aux discussions et contribuez à nos initiatives pour un futur plus juste et progressiste.
                    </p>
                    <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 max-w-3xl mb-6">
                        Engagez-vous dès maintenant et faites partie de notre mouvement pour un futur plus juste et progressiste.
                        Votre voix compte et vos actions feront la différence.
                    </p>
                    <button

                        className="border border-nfp-blue text-nfp-blue px-6 py-3.5 hover:bg-nfp-blue/5 transition-colors text-underligne"
                    >
                        Rejoindre maintenant
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default AdhesionSection;
