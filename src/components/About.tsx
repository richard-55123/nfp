import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiUsers, HiGlobe, HiHeart, HiLightningBolt, HiStar, HiFlag } from 'react-icons/hi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })
  
  const values = [
    {
      icon: <HiUsers className="text-4xl md:text-5xl text-nfp-yellow" />,
      title: "Union Nationale",
      description: "Une alliance historique qui transcende les clivages traditionnels pour bâtir un Cameroun uni, fort et solidaire."
    },
    {
      icon: <HiLightningBolt className="text-4xl md:text-5xl text-nfp-yellow" />,
      title: "Énergie Transformative",
      description: "Une force nouvelle qui impulse le changement et modernise les institutions pour une gouvernance efficace."
    },
    {
      icon: <HiGlobe className="text-4xl md:text-5xl text-nfp-yellow" />,
      title: "Développement Durable",
      description: "Une vision écologique et économique qui préserve nos ressources tout en créant de la prospérité pour tous."
    },
    {
      icon: <HiHeart className="text-4xl md:text-5xl text-nfp-yellow" />,
      title: "Justice Sociale",
      description: "Un engagement ferme pour l'équité, l'accès aux soins, à l'éducation et à des conditions de vie dignes."
    },
    {
      icon: <HiStar className="text-4xl md:text-5xl text-nfp-yellow" />,
      title: "Excellence",
      description: "Une exigence de qualité dans l'action publique et la gestion des affaires de l'État au service des citoyens."
    },
    {
      icon: <HiFlag className="text-4xl md:text-5xl text-nfp-yellow" />,
      title: "Souveraineté",
      description: "Une affirmation de notre indépendance et de notre identité dans le concert des nations."
    }
  ]

  // Animation variants - CORRIGÉ
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const // Correction du type pour 'ease'
      }
    }
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const // Correction du type pour 'ease'
    }
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-nfp-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 ">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 items-center px-[6.5%]"
        >
          <div>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="w-20 h-1 bg-nfp-yellow mb-4"></div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-nfp-blue mb-4 md:mb-6 leading-tight">
                Une <span className="text-nfp-yellow">Nouvelle Force</span> Pour Le Cameroun
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-nfp-black/90 leading-relaxed mb-6 md:mb-8"
            >
              La <strong className="font-semibold text-nfp-blue">Nouvelle Force Politique</strong> incarne l'élan révolutionnaire qui propulse le Cameroun vers son destin glorieux. Une alliance inédite qui réunit les forces vives de la nation autour d'un projet commun de renaissance.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-nfp-blue text-white px-6 py-3 font-medium hover:bg-nfp-blue/90 transition-colors">
                Rejoindre le mouvement
              </button>
              <button className="border border-nfp-blue text-nfp-blue px-6 py-3 font-medium hover:bg-nfp-blue/5 transition-colors">
                En savoir plus
              </button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-64 sm:h-80 md:h-96 bg-nfp-blue/10">
              <img 
                src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Rassemblement politique de la Nouvelle Force Politique" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nfp-blue/70 to-transparent flex items-end p-4 md:p-6">
                <motion.span 
                  className="text-nfp-yellow font-heading font-bold text-lg md:text-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Ensemble pour la renaissance camerounaise
                </motion.span>
              </div>
            </div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-32 h-32 md:w-40 md:h-40 bg-nfp-yellow z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-nfp-blue/90 text-white flex items-center justify-center p-3 md:p-4 text-center font-heading font-bold text-sm md:text-base">
                Nouvelle Ère Politique
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Values Section with background image */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 relative py-16 md:py-24"
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img 
              src="/pays.png" 
              alt="Background valeurs" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-nfp-blue/90"></div>
          </div>
          
          <div className="relative z-10 text-center mb-12 md:mb-16">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading font-bold text-nfp-white mb-4"
            >
              Nos Valeurs Fondatrices
            </motion.h3>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-nfp-yellow mx-auto"
            ></motion.div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white/10 backdrop-blur-md p-6 md:p-8 border border-nfp-yellow/20 group relative overflow-hidden"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-nfp-yellow/5 to-nfp-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex justify-center mb-6"
                    animate={floatingAnimation}
                  >
                    <div className="p-3 bg-nfp-yellow/10 group-hover:bg-nfp-yellow/20 transition-colors">
                      {value.icon}
                    </div>
                  </motion.div>
                  
                  <h4 className="text-xl md:text-2xl font-heading font-bold text-nfp-white mb-4 text-center">
                    {value.title}
                  </h4>
                  
                  <p className="text-nfp-white/90 text-center text-lg md:text-xl text-nfp-black/90 leading-relaxed mb-6 md:mb-8">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mission Section - MODIFIÉ pour inversion sur mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-nfp-blue text-nfp-white"
        >
          <div className="grid md:grid-cols-2">
            {/* Image en premier sur mobile, second sur desktop */}
            <div className="relative h-64 sm:h-80 md:h-auto order-1 md:order-2">
              <img 
                src="/mission.png" 
                alt="Mission de la Nouvelle Force Politique" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-nfp-blue/70 flex items-center justify-center p-4">
                <motion.h3 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center"
                >
                  Notre Mission <span className="text-nfp-yellow">Transformatrice</span>
                </motion.h3>
              </div>
            </div>
            
            {/* Texte en second sur mobile, premier sur desktop */}
            <div className="p-6 md:p-8 lg:p-10 order-2 md:order-1">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6 md:mb-8 text-lg leading-relaxed text-lg md:text-xl text-nfp-black/90 mb-6 md:mb-8 text-nfp-white"
              >
                Porter une <strong>vision audacieuse</strong> qui réinvente la politique camerounaise, en plaçant le citoyen au cœur de toutes les actions et décisions. Nous œuvrons pour un Cameroun réconcilié avec lui-même, prospère et influent sur la scène internationale.
              </motion.p>
              
              <motion.ul 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-3 md:space-y-4 mb-6 md:mb-8"
              >
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-nfp-yellow text-xl mr-3">■</span>
                  <span>Créer une synergie inédite entre toutes les sensibilités politiques</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-nfp-yellow text-xl mr-3">■</span>
                  <span>Moderniser l'État et renforcer la démocratie participative</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-nfp-yellow text-xl mr-3">■</span>
                  <span>Positionner le Cameroun comme leader africain du XXIe siècle</span>
                </motion.li>
              </motion.ul>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <button className="bg-nfp-yellow text-nfp-blue px-6 py-3 font-bold hover:bg-nfp-yellow/90 transition-colors w-full sm:w-auto">
                  Découvrir notre programme
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About