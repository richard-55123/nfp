import { motion } from 'framer-motion'
import { useState } from 'react'
import JoinModal from './JoinModal'
import { Link } from 'react-router-dom'
// import { useRef } from 'react'
// import { HiUsers, HiGlobe, HiHeart, HiLightningBolt, HiStar, HiFlag } from 'react-icons/hi'

const About = () => {
  // const ref = useRef(null)
  // const isInView = useInView(ref, { once: true, margin: "-20%" })

  // const values = [
  //   {
  //     icon: <HiUsers className="text-4xl md:text-5xl text-nfp-yellow" />,
  //     title: "Union Nationale",
  //     description: "Une alliance historique qui transcende les clivages traditionnels pour bâtir un Cameroun uni, fort et solidaire."
  //   },
  //   {
  //     icon: <HiLightningBolt className="text-4xl md:text-5xl text-nfp-yellow" />,
  //     title: "Énergie Transformative",
  //     description: "Une force nouvelle qui impulse le changement et modernise les institutions pour une gouvernance efficace."
  //   },
  //   {
  //     icon: <HiGlobe className="text-4xl md:text-5xl text-nfp-yellow" />,
  //     title: "Développement Durable",
  //     description: "Une vision écologique et économique qui préserve nos ressources tout en créant de la prospérité pour tous."
  //   },
  //   {
  //     icon: <HiHeart className="text-4xl md:text-5xl text-nfp-yellow" />,
  //     title: "Justice Sociale",
  //     description: "Un engagement ferme pour l'équité, l'accès aux soins, à l'éducation et à des conditions de vie dignes."
  //   },
  //   {
  //     icon: <HiStar className="text-4xl md:text-5xl text-nfp-yellow" />,
  //     title: "Excellence",
  //     description: "Une exigence de qualité dans l'action publique et la gestion des affaires de l'État au service des citoyens."
  //   },
  //   {
  //     icon: <HiFlag className="text-4xl md:text-5xl text-nfp-yellow" />,
  //     title: "Souveraineté",
  //     description: "Une affirmation de notre indépendance et de notre identité dans le concert des nations."
  //   }
  // ]

  // Animation variants - CORRIGÉ
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2
  //     }
  //   }
  // }

  // const itemVariants = {
  //   hidden: { y: 50, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.7,
  //       ease: "easeOut" as const // Correction du type pour 'ease'
  //     }
  //   }
  // }

  // const floatingAnimation = {
  //   y: [0, -10, 0],
  //   transition: {
  //     duration: 4,
  //     repeat: Infinity,
  //     ease: "easeInOut" as const // Correction du type pour 'ease'
  //   }
  // }
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section id="about" className="py-12 md:py-20 px-[10%] relative overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center"
      >
        <div className='flex flex-col gap-4'>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="w-[6rem] h-1 bg-nfp-yellow mb-2"></div>
            <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2]">
              Qui sommes-nous ?
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[.9rem] md:text-[1.07rem] text-black/70"
          >
            <strong className="font-semibold text-primary/90">La Nouvelle Force Politique (NFP)</strong>  est un mouvement citoyen né de la volonté de construire une alternative crédible et moderne pour notre pays. Fondée sur les valeurs de justice sociale, d’unité nationale et de progrès durable, la NFP incarne une nouvelle manière de faire de la politique : plus proche des citoyens, plus transparente et tournée vers l’avenir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 font-bold text-[.9rem] mt-3 gap-4"
          >
            <button onClick={() => setIsModalOpen(true)} className="bg-secondary text-white px-6 py-3.5 hover:bg-nfp-blue/90 transition-colors">
              Rejoindre le mouvement
            </button>
            <Link to={'/About'}>
              <button className="border border-nfp-blue text-nfp-blue px-6 py-3.5 hover:bg-nfp-blue/5 transition-colors">
                En savoir plus
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full overflow-hidden rounded-[7px] bg-nfp-blue/10">
            <img
              src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Rassemblement politique de la Nouvelle Force Politique"
              className="top-0 left-0 w-full h-full object-cover object-right"
            />
            {/* <motion.span
                  className="absolute inset-0 bg-gradient-to-t from-nfp-blue/70 to-transparent text-nfp-yellow font-heading font-bold text-lg md:text-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Ensemble pour la renaissance camerounaise
                </motion.span> */}
          </div>

          {/* <motion.div
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-32 h-32 md:w-40 md:h-40 bg-nfp-yellow z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-nfp-blue/90 text-white flex items-center justify-center p-3 md:p-4 text-center font-heading font-bold text-sm md:text-base">
                Nouvelle Ère Politique
              </div>
            </motion.div> */}
        </motion.div>
      </motion.div>

      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default About