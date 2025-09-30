import { useState, type FC } from "react";
import { FiUsers, FiTarget, FiHeart, FiFlag, FiBook } from "react-icons/fi";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import JoinModal from "../components/JoinModal";
import PresentationSection from "../components/PresentationSection";

const AboutNFP: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div className="bg-nfp-white text-nfp-black font-sans">
            <Banner title={"Nouvelle Force Politique"} subtitle="Une vision renouvelée pour le Cameroun de demain. Engagés depuis 2025 pour transformer notre pays." bgImage={"/images/2.jpg"} />
            {/* <section className="py-12 bg-white px-[10%]">
                <div className="">
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2]  mb-2">
                        Une nouvelle ère politique pour <br/> le Cameroun
                    </h2>
                    <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 max-w-2xl">
                        Fondée en 2025, la <span className="font-semibold text-nfp-blue">Nouvelle Force Politique (NFP)</span> incarne
                        la renaissance démocratique dont le Cameroun a besoin. Notre mouvement transcende les clivages traditionnels
                        pour rassembler toutes les énergies autour d'un projet de société moderne, inclusif et tourné vers l'avenir.
                    </p>
                </div>
            </section> */}


            <section className="px-[10%] py-12">
                <div className="">
                    <div className="text-center mb-16">
                        <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2] mb-4">
                            Notre histoire
                        </h2>
                        <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 max-w-2xl mx-auto">
                            Découvrez les origines d'un mouvement qui redéfinit le paysage politique camerounais
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-8">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-nfp-yellow flex items-center justify-center mr-4">
                                        <FiBook className="text-nfp-blue text-xl" />
                                    </div>
                                    <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-nfp-blue">Naissance d'une vision</h3>
                                </div>
                                <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 max-w-2xl mx-auto">
                                    La NFP est née en 2025 de la convergence de citoyens engagés, d'intellectuels et d'acteurs de la société civile
                                    convaincus que le Cameroun mérite mieux. Face aux défis persistants et aux opportunités naissantes, nous avons
                                    décidé d'incarner le changement que nous appelons de nos vœux.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-nfp-yellow flex items-center justify-center mr-4">
                                        <FiTarget className="text-nfp-blue text-xl" />
                                    </div>
                                    <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-nfp-blue">Notre raison d'être</h3>
                                </div>
                                <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 max-w-2xl mx-auto">
                                    Nous existons pour offrir une alternative crédible aux mod politiques épuisés, pour restaurer la confiance
                                    entre les citoyens et leurs institutions, et pour construire un Cameroun où chaque talent peut s'épanouir
                                    et contribuer à l'édification nationale.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/images/12.jpg"
                                alt="Histoire de la NFP"
                                className="rounded-3xl shadow-soft object-cover w-full h-[400px]"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-nfp-blue text-white p-6 rounded-2xl shadow-bold">
                                <h3 className="text-xl font-heading font-bold">2025</h3>
                                <p className="text-sm">Naissance de la NFP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PresentationSection/>
            <section className="bg-nfp-blue text-white py-20">
                <div className="text-center">
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold mb-4">Nos Valeurs Fondamentales</h2>
                    <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] mb-12 max-w-3xl mx-auto">Les piliers immuables qui guident chacune de nos actions et décisions</p>

                    <div className="grid md:grid-cols-3 gap-8 px-[10%]">
                        <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
                            <div className="bg-nfp-yellow text-nfp-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FiHeart className="text-2xl" />
                            </div>
                            <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold mb-4">Intégrité</h3>
                            <p className="leading-relaxed text-[.9rem] md:text-[1.07rem]">Nous pratiquons une politique de transparence radicale, où l'éthique guide chaque décision et où la reddition des comptes est systématique.</p>
                        </div>

                        <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
                            <div className="bg-whie text-nfp-blue bg-nfp-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FiFlag className="text-2xl" />
                            </div>
                            <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold mb-4">Patriotisme éclairé</h3>
                            <p className="leading-relaxed text-[.9rem] md:text-[1.07rem]">Notre amour pour le Cameroun se manifeste par un engagement sans faille pour son développement et son rayonnement, sans exclusive ni exclusive.</p>
                        </div>

                        <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
                            <div className="bg-nfp-yellow text-nfp-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FiUsers className="text-2xl" />
                            </div>
                            <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold mb-4">Inclusion radicale</h3>
                            <p className="leading-relaxed text-[.9rem] md:text-[1.07rem]">Nous bâtissons un mouvement où toutes les voix comptent, où la diversité est une force, et où chaque Camerounais trouve sa place sans discrimination.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials />
            <section className="relative bg-cover bg-center py-28 text-center text-white" style={{ backgroundImage: "url('/images/6.jpg')" }}>
                <div className="absolute inset-0 bg-nfp-blue/70"></div>
                <div className="container relative">
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold mb-6">
                        Ensemble, bâtissons le Cameroun de 2030
                    </h2>
                    <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] mb-10 max-w-2xl mx-auto">
                        Rejoignez les milliers de Camerounais qui ont déjà choisi d'écrire une nouvelle page de notre histoire commune
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => setIsModalOpen(true)} className="bg-secondary text-white px-6 py-3.5 hover:bg-nfp-blue/90 transition-colors">
                            Rejoindre le mouvement
                        </button>
                        <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-heading font-bold px-8 py-4  transition-all">
                            Faire un don
                        </button>
                    </div>
                </div>
            </section>
            <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default AboutNFP;