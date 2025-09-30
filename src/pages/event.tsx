import Banner from "../components/Banner"
import EvenementList from "../components/EventList"

function Evenment() {


    return (
        <>
            <Banner title={"Nouvelle Force Politique – Construire l’avenir ensemble"} subtitle="Nous portons la voix de chaque citoyen pour bâtir une société plus
                        équitable, respectueuse de l’environnement et tournée vers l’avenir.
                        Ensemble, faisons naître une France plus juste et solidaire." bgImage={"/images/integral.png"} 
                        overlayColor="absolute w-full h-full top-0 left-0 bg-secondary/20"
                        />
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