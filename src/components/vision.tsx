import { useState } from "react";

export const FuturePlans = () => {
    const plans = [
        {
            title: "Des pas vers un meilleur avenir",
            description: "Nous poserons les fondations d'une société juste, prospère et durable, en harmonie avec son environnement. Notre projet combine modernisation économique et progrès social, innovation technologique et préservation de nos patrimoines. Par une planification rigoureuse et une exécution déterminée, nous garantirons que chaque mesure contribue à construire l'avenir radieux que méritent nos concitoyens.",
            image: "/meilleur.png",
        },
        {
            title: "Conduire la Nation vers l'avant",
            description: "Notre vision est de bâtir une nation unie où chaque citoyen trouve sa place et contribue à l'édification collective. Nous mettrons en œuvre des politiques inclusives qui valorisent la diversité tout en renforçant notre identité commune. Par des investissements stratégiques dans l'éducation, les infrastructures et l'innovation, nous créerons les conditions d'une prospérité partagée et durable pour les générations futures.",
            image: "/conduite.png",
        },
        {
            title: "Un plan audacieux pour un changement positif",
            description: "Notre programme transformateur convertira les défis structurels en opportunités de croissance et de modernisation. Nous instaurerons une gouvernance transparente et participative, redonnant ainsi confiance aux citoyens en leurs institutions. Des réformes économiques courageuses stimuleront l'entrepreneuriat et l'emploi, tandis que notre politique sociale protégera les plus vulnérables et garantira l'égalité des chances pour tous.",
            image: "/pans.png",
        },
        {
            title: "Relever les défis de front",
            description: "Nous aborderons avec détermination et lucidité les défis complexes de notre temps : transition écologique, souveraineté numérique, justice sociale et sécurité nationale. Notre approche sera résolument pragmatique, fondée sur l'écoute permanente des territoires et des citoyens. Chaque décision sera expliquée, chaque action évaluée, dans un souci constant de redevabilité et d'efficacité au service de l'intérêt général.",
            image: "/assemble.png",
        },
        {
            title: "Transformer les promesses en progrès",
            description: "Notre engagement se traduira par un plan d'action concret et mesurable, avec des objectifs clairs et des échéances précises. Nous mettrons en place un système de suivi transparent permettant à chaque citoyen de vérifier l'avancement de nos réformes. Des indicateurs de performance régulièrement publiés attesteront de la réalisation effective de nos engagements et de leur impact positif sur la qualité de vie de la population.",
            image: "/progres.png",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="py-16 flex flex-col lg:flex-row gap-12 bg-gradient-to-r from-nfp-blue/10 to-nfp-darkblue/10  px-[10%]">
            <div className="flex-1">
                <h2 className="font-bold mb-8 relative pb-3 text-3xl lg:text-4xl text-black/70
                               after:content-[''] after:absolute after:left-0 after:bottom-0 
                               after:w-16 after:h-1 after:bg-nfp-yellow">
                    Questions clés et priorités
                </h2>

                <div className="space-y-4">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`p-5 cursor-pointer border-l-4 transition-all duration-300 rounded-r-lg
                                ${activeIndex === index
                                    ? "text-nfp-darkblue border-nfp-yellow bg-nfp-lightblue shadow-lg transform translate-x-2"
                                    : "text-nfp-darkblue/80 border-nfp-darkblue/20 hover:bg-nfp-lightblue/50 hover:border-nfp-blue border-b"
                                }`}
                        >
                            <div className="flex items-center">
                                <span className={`mr-4 font-bold text-lg ${activeIndex === index ? "text-nfp-yellow" : "text-nfp-darkblue/60"}`}>
                                    {index + 1}.
                                </span>
                                <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold">{plan.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1">
                <h2 className="font-bold mb-8 relative pb-3 text-3xl lg:text-4xl text-black/70
                               after:content-[''] after:absolute after:left-0 after:bottom-0 
                               after:w-16 after:h-1 after:bg-nfp-yellow">
                    Notre vision en action
                </h2>

                <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-nfp-darkblue/30 to-transparent pointer-events-none z-10"></div>
                    <img
                        src={plans[activeIndex].image}
                        alt={plans[activeIndex].title}
                        className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                <div className="mt-8 p-6 bg-white shadow-lg border-t-4 border-nfp-yellow ">
                    <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70 mb-4">
                        {plans[activeIndex].title}
                    </h3>
                    <p className=" leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70">
                        {plans[activeIndex].description}
                    </p>

                    <div className="flex mt-8 space-x-3 justify-center">
                        {plans.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-4 h-4 transition-all duration-300 rounded-full ${activeIndex === index ? "bg-nfp-yellow scale-125" : "bg-nfp-darkblue/30 hover:bg-nfp-darkblue/50"
                                    }`}
                                aria-label={`Aller à la diapositive ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};