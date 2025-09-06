import React from 'react'

function Heros() {
  return (
    <div className='px-[10%] py-6 flex flex-col justify-center relative h-[calc(100vh-133px)] bg-green-800'>
      <img src="/images/ban2.jpg" alt='bannieère_fnp' className='absolute w-full h-full z-[0] object-cover top-0 left-0' />
      <div className="absolute w-full h-full top-0 left-0 bg-secondary/10"></div>
      <div className="relative w-[70%] flex flex-col gap-5">
            <h1 className='text-[3.2rem] leading-[1.2] text-primary/90 font-extrabold'>Nouvelle Force Politique – Ensemble, faisons bouger les choses !</h1>
            <span className='text-[1.05rem] text-black/65 font-medium'>Nous croyons au pouvoir de l’action collective. Nous donnons la parole à chacun et transformons les idées en solutions concrètes. Notre objectif : construire une société plus juste, plus inclusive et tournée vers l’avenir. Rejoignez-nous et devenez acteur du changement !</span>
      </div>
    </div>
  )
}

export default Heros
