import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
    {
        question: "Comment puis-je adhérer à la NFP ?",
        answer:
            "Vous pouvez adhérer en remplissant le formulaire d'adhésion disponible sur notre site. Une fois validé, vous recevrez une confirmation et serez intégré dans nos activités locales."
    },
    {
        question: "Quels sont les avantages d'être membre ?",
        answer:
            "En tant que membre, vous participez activement à la construction du projet politique, vous êtes informé en priorité de nos événements, et vous pouvez proposer et soutenir des initiatives citoyennes."
    },
    {
        question: "L'adhésion est-elle payante ?",
        answer:
            "L'adhésion à la NFP est gratuite. Toutefois, chacun peut contribuer volontairement pour soutenir nos actions et renforcer notre mouvement."
    },
    {
        question: "Puis-je m'impliquer localement dans ma région ?",
        answer:
            "Oui ! La NFP est un mouvement ancré dans les territoires. Vous pouvez rejoindre un comité local, participer à des projets et représenter vos idées au sein du mouvement."
    }
];

const FaqSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="py-12 px-[10%] ">
            <div className="mx-auto flex flex-col md:flex-row gap-12">
                <div className="md:w-2/5 text-left">
                    <img
                        src="/rassemblement.png"
                        alt="Questions fréquentes - Nouvelle Force Politique"
                        className="w-full h-full object-cover"
                    />

                </div>

                <div className="md:w-3/5">
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2]">
                        Questions fréquentes
                    </h2>
                    <p className="mt-4 leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 mb-12">
                        Retrouvez ici les réponses aux questions les plus posées sur la
                        Nouvelle Force Politique (NFP).
                    </p>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div key={index} className="overflow-hidden rounded-md">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className={`w-full flex justify-between items-center px-6 py-4 text-left transition text-[.8rem] md:text-[1.3rem] font-heading font-bold ${isActive
                                            ? "bg-secondary text-white"
                                            : "bg-white border border-gray-300 text-back/70 hover:bg-gray-100"
                                            }`}
                                    >
                                        {faq.question}
                                        {isActive ? (
                                            <FiMinus className="text-xl" />
                                        ) : (
                                            <FiPlus className="text-xl" />
                                        )}
                                    </button>

                                    {isActive && (
                                        <div className="px-6 py-4 bg-white border border-t-0 border-gray-300 leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;