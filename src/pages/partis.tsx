import { BiCheckCircle } from "react-icons/bi";
import Parties from "../components/Parties";
import Banner from "../components/Banner";

function Parti() {
    return (
        <section>
            <Banner
                title={"Les Partis – Une vision pour demain"}
                subtitle=" Notre mission est de porter haut les aspirations de chacun, de bâtir
                        une nation solidaire et tournée vers l’avenir. Ensemble, transformons
                        nos idées en actions concrètes pour une société plus juste et plus
                        inclusive."
                bgImage={"/images/4.jpg"}
                overlayColor="absolute w-full h-full top-0 left-0 bg-black/60"
            />

            <section className="px-[10%] py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-5">
                    <div className="w-[6rem] h-1 bg-nfp-yellow"></div>
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2] mb-6">
                        Nous sommes des citoyens engagés
                        <br /> pour un avenir progressiste.
                    </h2>
                    <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70">
                        Nous croyons que chaque voix compte et que l’action collective
                        peut transformer notre société. Ensemble, nous portons une
                        vision d’espoir, de justice et de solidarité.
                    </p>
                    <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70">
                        Notre engagement repose sur des valeurs claires : défendre la
                        dignité humaine, promouvoir l’égalité des chances et construire
                        un avenir durable pour les générations à venir.
                    </p>

                    <div className="flex flex-col gap-3 mt-3">
                        <div className="flex items-center gap-2">
                            <BiCheckCircle className="text-secondary w-5 h-5" />
                            <span className="text-[.9rem] md:text-[1.07rem] text-black/70 font-medium">
                                Proposer et défendre des lois au service du peuple
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiCheckCircle className="text-secondary w-5 h-5" />
                            <span className="text-[.9rem] md:text-[1.07rem] text-black/70 font-medium">
                                Préparer et accompagner la jeunesse vers la réussite
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                    <img
                        src="/images/3.jpg"
                        alt="progressive"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            <Parties />

            <section className="text-center py-16 bg-gradient-to-br from-nfp-blue/5 via-white to-nfp-yellow/5">
                <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70 mb-6">
                    Prêt à agir avec nous ?
                </h3>
                <p className="text-[.9rem] md:text-[1.07rem] text-black/70 font-medium mb-8">
                    Ensemble, construisons une société plus juste, solidaire et tournée vers l’avenir.
                </p>
                <button className="bg-secondary text-white px-6 py-3.5 hover:bg-nfp-blue/90 transition-colors">
                    Rejoindre le mouvement
                </button>
            </section>
        </section>
    );
}

export default Parti;
