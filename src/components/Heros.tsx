function Heros() {
  return (
    <div className="px-[10%] sm:px-[10%] py-4 sm:py-6 flex flex-col justify-center relative h-[50vh] sm:h-[70vh] md:h-[calc(100vh-133px)]">
      <img
        src="/images/4.jpg"
        alt="banniere_fnp"
        className="absolute w-full h-full z-[0] object-cover top-0 left-0"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-black/60"></div>

      <div className="relative flex flex-col gap-3 sm:gap-5 w-full md:w-[70%] lg:w-[60%] border border-4 p-4 border-r-0 border-t-0 border-primary">
        <h1 className="text-[1.4rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[3.2rem] leading-[1.2] text-white font-extrabold">
          Nouvelle Force Politique – Ensemble, faisons bouger les choses !
        </h1>
        <span className="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-white font-medium">
          Nous croyons au pouvoir de l'action collective. Nous donnons la parole
          à chacun et transformons les idées en solutions concrètes. Notre
          objectif : construire une société plus juste, plus inclusive et tournée
          vers l'avenir. Rejoignez-nous et devenez acteur du changement !
        </span>
      </div>
    </div>
  );
}

export default Heros;