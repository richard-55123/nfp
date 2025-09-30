import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const PresentationSection: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="relative h-[100vh] w-full flex items-center justify-center text-center overflow-hidden">

            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/nfp.mp4"
                autoPlay
                loop
                muted
                playsInline
            />


            <div className="absolute inset-0 bg-gradient-to-r from-green-700/40 via-yellow-600/40 "></div>
            {/* <div className="absolute inset-0 bg-black/50"></div> */}


            <motion.div
                className="relative z-10 max-w-4xl px-6"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >

                <div className="flex justify-center gap-6 mb-6">
                    <Dialog.Root open={open} onOpenChange={setOpen}>
                        <Dialog.Trigger asChild>
                            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center border-2 border-white cursor-pointer hover:scale-105 transition">
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-7 h-7 ml-1 text-nfp-yellow"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </Dialog.Trigger>

                        <Dialog.Portal>
                            <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
                            <Dialog.Content asChild>
                                <motion.div
                                    className="fixed inset-0 flex items-center justify-center z-50 px-4"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative bg-black rounded-2xl overflow-hidden w-full max-w-4xl aspect-video shadow-2xl">

                                        <video
                                            className="w-full h-full object-cover"
                                            src="/videos/nfp.mp4"
                                            autoPlay
                                            controls
                                            playsInline
                                        />

                                        <Dialog.Close asChild>
                                            <button className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition">
                                                <X className="w-5 h-5" />
                                            </button>
                                        </Dialog.Close>
                                    </div>
                                </motion.div>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                </div>

                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] text-white">
                    Nouvelle Force Politique <br />
                    <span className="text-yellow-400">Unité – Justice – Progrès</span>
                </h2>

                <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] mt-8 max-w-3xl mx-auto text-white ">
                    Ensemble, construisons l’avenir du Cameroun.
                    Une vision nouvelle, portée par le peuple, pour un pays plus juste, plus fort et plus uni.
                </p>

                <div className='flex justify-center mt-12'>
                    <Link to={'/about'}>
                        <button className="bg-secondary text-white px-6 py-3.5 hover:bg-nfp-blue/90 transition-colors">
                            En savoir plus
                        </button>
                    </Link>
                    <div></div>
                </div>
            </motion.div>
        </section>
    );
};

export default PresentationSection;
