import EvenementList from "../components/EventList"

function Evenment() {


    return (
        <>
            <div className="relative h-[60vh] min-h-[500px] overflow-hidden px-[10%] flex flex-col  md:justify-center lg:md:justify-center justify-center">

                <img
                    src="/integral.png"
                    alt="banniere_fnp"
                    className="absolute w-full h-full z-[0] object-cover top-0 left-0"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-secondary/20"></div>

                {/* <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-secondary/70 via-secondary/40 to-secondary/10"></div> */}

                {/* Contenu principal */}
                <div className="relative flex flex-col gap-5 w-full md:w-[70%] lg:w-[60%] ">
                    <h1 className="text-[1.8rem] sm:text-[2.2rem] md:text-[3.2rem] leading-[1.2] text-white font-extrabold drop-shadow-lg animate-fadeInUp">
                        Les Partis – Une vision pour demain
                    </h1>
                    <span className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-white font-medium drop-shadow animate-fadeInUp">
                        Notre mission est de porter haut les aspirations de chacun, de bâtir
                        une nation solidaire et tournée vers l’avenir. Ensemble, transformons
                        nos idées en actions concrètes pour une société plus juste et plus
                        inclusive.
                    </span>
                   
                </div>

            </div>
            <EvenementList />

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

export default Evenment