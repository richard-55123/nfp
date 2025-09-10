import { BiCheckCircle } from "react-icons/bi";
import { parties } from "../data/parties";

function Parti() {
    return (
        <section>
            {/* Bannière */}
            <div className="px-[10%] py-6 flex flex-col justify-center relative h-[calc(100vh-133px)]">
                <img
                    src="/choix.jpg"
                    alt="Bannière du parti"
                    className="absolute w-full h-full z-[0] object-cover top-0 left-0"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-black/40"></div>
                <div className="relative flex flex-col gap-5 w-full md:w-[70%] lg:w-[60%]">
                    <h1 className="text-[1.8rem] sm:text-[2.2rem] md:text-[3.2rem] leading-[1.2] text-white font-extrabold drop-shadow-lg">
                        Les Partis – Une vision pour demain
                    </h1>
                    <span className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-gray-100 font-medium drop-shadow">
                        Notre mission est de porter haut les aspirations de chacun, de bâtir
                        une nation solidaire et tournée vers l’avenir. Ensemble, transformons
                        nos idées en actions concrètes pour une société plus juste et plus
                        inclusive.
                    </span>
                </div>
            </div>

            {/* Intro */}
            <section className="px-[10%] py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                    <img
                        src="/possible.png"
                        alt="progressive"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col gap-5">
                    <div className="w-[6rem] h-1 bg-nfp-yellow mb-2"></div>
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
            </section>


            <section className="pt-12 ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">


                    <div className="flex items-center justify-center border-gray-300 h-full">
                        <img
                            src="/progres.png"
                            alt="Espace Publicitaire"
                            className="object-cover w-full h-full"
                        />
                    </div>


                    <div className="lg:col-span-2 py-12 flex flex-col px-[10%]">
                        <div className="flex flex-col items-center gap-6 mb-12">
                            <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2] text-center">
                                Nos Membres – La Nouvelle Force Politique
                            </h2>
                            <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 text-center max-w-3xl">
                                Derrière chaque idée, il y a des citoyens engagés. Nos membres incarnent
                                la diversité et l’énergie de notre mouvement. Ensemble, nous faisons vivre
                                la démocratie et portons les aspirations du peuple camerounais.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8">
                            {parties.map((party, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row items-start gap-6 border border-dashed p-6 rounded-lg"
                                >
                                    {/* Logo du parti */}
                                    <img
                                        src={party.partyLogo}
                                        alt={party.name}
                                        className="w-24 h-24 object-contain flex-shrink-0 mx-auto sm:mx-0"
                                    />

                                    {/* Texte */}
                                    <div className="flex flex-col gap-2 text-center sm:text-left text-[.8rem] md:text-[1.3rem] font-heading font-bold">
                                        <h3
                                            className="font-extrabold"
                                            style={{ color: party.color }}
                                        >
                                            {party.name}
                                        </h3>
                                        <p className="text-black/70 leading-relaxed">
                                            {party.description}
                                        </p>
                                        <a
                                            href={party.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary text-sm font-semibold hover:underline"
                                        >
                                            Voir plus
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>




        </section>
    );
}

export default Parti;
