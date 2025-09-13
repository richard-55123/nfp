import ContactSection from "../components/Contact"
import FaqSection from "../components/FaqSection"

function Contact() {
    

    return (
        <>
            <div className="relative h-[60vh] min-h-[500px] overflow-hidden">

                <img
                    src="/contact.png"
                    alt="banniere_fnp"
                    className="absolute w-full h-full z-[0] object-cover top-0 left-0"
                />

                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-secondary/70 via-secondary/40 to-secondary/10"></div>

                {/* Contenu principal */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-5">
                    <div className="bg-white/10 p-8 transform hover:scale-105 transition-transform duration-700">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary/90 mb-4 animate-fadeInUp">
                            Contactez-nous
                        </h1>
                        <span className="text-lg md:text-xl text-black/80 font-medium max-w-2xl animate-fadeInUp delay-300">
                            Une question, une suggestion ou l'envie de collaborer ? Nous sommes à votre écoute et ravis d'échanger avec vous.
                        </span>
                    </div>

                </div>
            </div>
            <FaqSection/>
            <ContactSection />


            <style>{`
                @keyframes float1 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(10px, -15px) rotate(5deg); }
                }
                @keyframes float2 {
                    0%, 100% { transform: translate(0, 0) rotate(45deg); }
                    50% { transform: translate(-15px, 10px) rotate(35deg); }
                }
                @keyframes float3 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(5px, 15px) scale(1.1); }
                }
                @keyframes dash {
                    to { stroke-dashoffset: 0; }
                }
                @keyframes fadeInUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-float1 {
                    animation: float1 8s ease-in-out infinite;
                }
                .animate-float2 {
                    animation: float2 10s ease-in-out infinite;
                }
                .animate-float3 {
                    animation: float3 12s ease-in-out infinite;
                }
                .animate-dash {
                    stroke-dasharray: 10;
                    stroke-dashoffset: 100;
                    animation: dash 20s linear infinite;
                }
                .delay-1000 {
                    animation-delay: 1s;
                }
                .animate-fadeInUp {
                    opacity: 0;
                    animation: fadeInUp 0.8s forwards;
                }
                .animate-fadeInUp.delay-300 {
                    animation-delay: 0.3s;
                }
            `}</style>
        </>
    )
}

export default Contact