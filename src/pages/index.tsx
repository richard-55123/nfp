// import Hero from '../components/Hero'
import About from '../components/About'
import Pourquoi from '../components/Pourquoi'
import Heros from '../components/Heros'
import FuturePlanSection from '../components/FuturePlanSection'
import { parties } from '../data/parties'
import AdhesionSection from '../components/AdhesionSection'
import ContactSection from '../components/Contact'
import { Link } from 'react-router-dom'
import { FuturePlans } from '../components/vision'
import Testimonials from '../components/Testimonials'
import PresentationSection from '../components/PresentationSection'
// import ImageSection from '../components/ImageSection'
// import FaqSection from '../components/FaqSection'
// import Activities from '../components/Activities'

function Index() {
  return (
    <>
      <Heros />
      <About />
      <Pourquoi />
      <section className="px-[10%] lg:pr-[10%] lg:pl-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="hidden lg:flex items-center justify-center border-gray-300 h-full">
            <img
              src="/images/11.jpg"
              alt="Espace Publicitaire"
              className="object-cover w-full h-full "
            />
          </div>

          <div className="lg:col-span-2 py-12 flex flex-col">
            <div className="flex flex-col items-center gap-6 mb-12">
              <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2] ">
                Nos Membres – La Nouvelle Force Politique
              </h2>
              <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 ">
                Derrière chaque idée, il y a des citoyens engagés. Nos membres incarnent
                la diversité et l’énergie de notre mouvement. Ensemble, nous faisons vivre
                la démocratie et portons les aspirations du peuple camerounais.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {parties.slice(0, 3).map((party, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start p-6 gap-2 border border-dashed border-l-0"
                >
                  <img
                    src={party.partyLogo}
                    alt={party.name}
                    className="w-24 h-24 object-contain flex-shrink-0 mx-auto sm:mx-0"
                  />
                  <div className="flex flex-col gap-2 text-center sm:text-left text-[.8rem] md:text-[1.3rem] font-heading font-bold">
                    <h3
                      className="font-extrabold"
                      style={{ color: party.color }}
                    >
                      {party.name}
                    </h3>
                    <p className="text-black/70">
                      {party.description}
                    </p>
                    <a
                      href={party.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-semibold underline"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              ))}

              {/* Bouton vers la page des partis */}
              <div className="flex justify-center">
                <Link to={'/partis'}>
                  <button className="border border-nfp-blue text-nfp-blue px-6 py-3.5 hover:bg-nfp-blue/5 transition-colors">
                    En savoir plus
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      <PresentationSection />
      <FuturePlans />
      <FuturePlanSection />
      <AdhesionSection />
      {/* <ImageSection src={'/images/3.jpg'}/> */}
      {/* <FaqSection/> */}
      {/* <Activities /> */}
      <Testimonials />
      <ContactSection />
    </>
  )
}

export default Index