import { motion, useInView, type Variants } from 'framer-motion'
import { HiCalendar, HiUsers, HiArrowRight, HiX, HiSpeakerphone } from 'react-icons/hi'
import { HiMapPin } from 'react-icons/hi2'
import { useRef, useState } from 'react'
import { events } from '../data/events'

// Interface pour les événements
interface Event {
  title: string;
  date: string;
  location: string;
  participants: string;
  description: string;
  image: string;
}

const Activities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (event: Event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const spotlightVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  }

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <section id="activities" className="py-12 md:py-20 bg-nfp-white relative overflow-hidden">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute top-0 right-0 w-1/3 h-72 bg-nfp-blue/5 -translate-y-1/2 translate-x-1/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-nfp-yellow/5 translate-y-1/2 -translate-x-1/4 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-[6.5%] relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-12 md:mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-nfp-blue/10 text-nfp-blue rounded-full mb-4 md:mb-6">
              <HiSpeakerphone className="mr-2" />
              <span className="font-medium">Actualités en vedette</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-nfp-blue mb-4 md:mb-6">
              Agenda <span className="text-nfp-yellow">Politique</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-nfp-blue to-nfp-yellow mx-auto mb-6 md:mb-8"></div>
            <p className="text-lg md:text-xl text-nfp-black/80 max-w-3xl mx-auto leading-relaxed">
              Suivez les événements marquants et les activités qui façonnent 
              le paysage politique camerounais.
            </p>
          </motion.div>

          {/* Section d'événement spécial en vedette - Placé en premier */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl mb-12 md:mb-16 shadow-lg md:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-nfp-blue to-nfp-blue/90 z-0"></div>
            
            <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-0">
              {/* Contenu texte */}
              <div className="p-6 md:p-12 text-nfp-white order-2 md:order-1">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block px-3 py-1 md:px-4 md:py-2 bg-nfp-yellow/20 text-nfp-yellow rounded-full mb-4 md:mb-6 text-sm md:text-base font-medium"
                >
                  Événement Principal
                </motion.span>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-4xl font-heading font-bold mb-4 md:mb-6"
                >
                  Congrès Annuel de l'Alliance
                </motion.h3>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-3 md:space-y-4 mb-6 md:mb-8"
                >
                  <div className="flex items-center">
                    <HiCalendar className="mr-3 md:mr-4 text-nfp-yellow text-lg md:text-xl" />
                    <span className="text-base md:text-lg">15-17 Janvier 2024</span>
                  </div>
                  <div className="flex items-center">
                    <HiMapPin className="mr-3 md:mr-4 text-nfp-yellow text-lg md:text-xl" />
                    <span className="text-base md:text-lg">Palais des Congrès, Yaoundé</span>
                  </div>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-nfp-white/90 mb-6 md:mb-8 leading-relaxed text-sm md:text-base"
                >
                  Un rassemblement historique pour discuter des stratégies de développement, 
                  de paix et de prospérité pour le Cameroun. Rejoignez les leaders politiques 
                  et les experts pour construire ensemble l'avenir de notre nation.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-nfp-yellow text-nfp-blue font-heading font-bold px-6 py-3 md:px-8 md:py-4 hover:bg-nfp-yellow/90 transition-colors text-sm md:text-base"
                  >
                    S'inscrire maintenant
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-nfp-white text-nfp-white font-heading font-bold px-6 py-3 md:px-8 md:py-4 hover:bg-nfp-white/10 transition-colors text-sm md:text-base"
                  >
                    Voir le programme
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Image de l'événement principal */}
              <motion.div 
                variants={spotlightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative h-64 md:h-auto order-1 md:order-2"
              >
                <img 
                  src="/event-main.jpg" 
                  alt="Congrès Annuel de l'Alliance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-nfp-blue/70 to-transparent md:bg-gradient-to-l md:from-nfp-blue/70 md:to-transparent"></div>
                
                {/* Compte à rebours visuel superposé */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-nfp-white/90 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-lg md:text-xl font-heading font-bold text-nfp-blue mb-1">15-17</div>
                    <div className="text-xs md:text-sm font-heading font-bold text-nfp-blue">Janvier</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline des événements */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-nfp-blue to-nfp-yellow -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center gap-6 md:gap-8 group`}
                >
                  {/* Point sur la timeline */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-nfp-blue rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                  
                  {/* Carte d'événement */}
                  <motion.div 
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(30, 64, 175, 0.15)"
                    }}
                    className="w-full md:w-5/12 bg-white p-6 md:p-8 shadow-soft border-l-4 border-nfp-blue group-hover:border-nfp-yellow transition-all duration-500"
                  >
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-nfp-blue/10 text-nfp-blue text-xs md:text-sm font-medium rounded-full">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-nfp-blue mb-3 md:mb-4">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center text-nfp-black/70 text-sm md:text-base">
                        <HiMapPin className="mr-2 md:mr-3 text-nfp-blue text-sm md:text-base" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-nfp-black/70 text-sm md:text-base">
                        <HiUsers className="mr-2 md:mr-3 text-nfp-blue text-sm md:text-base" />
                        <span>{event.participants} participants attendus</span>
                      </div>
                    </div>
                    
                    <p className="text-nfp-black/70 mb-4 md:mb-6 leading-relaxed line-clamp-3 text-sm md:text-base">
                      {event.description}
                    </p>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openModal(event)}
                      className="flex items-center text-nfp-blue font-medium group-hover:text-nfp-yellow transition-colors text-sm md:text-base"
                    >
                      Voir les détails
                      <HiArrowRight className="ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>

                  {/* Image de l'événement */}
                  <div className="w-full md:w-5/12 h-48 md:h-64 bg-gray-200 overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modale de détails d'événement */}
      {isModalOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
              >
                <HiX className="text-xl text-nfp-blue" />
              </button>
              
              <div className="h-48 md:h-80 bg-gray-200">
                <img 
                  src={selectedEvent?.image || ''} 
                  alt={selectedEvent?.title || ''}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-nfp-blue/10 text-nfp-blue text-sm font-medium rounded-full">
                  {selectedEvent?.date}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-nfp-blue mb-4">
                {selectedEvent?.title}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-nfp-black/70">
                  <HiMapPin className="mr-3 text-nfp-blue text-lg" />
                  <span className="text-lg">{selectedEvent?.location}</span>
                </div>
                <div className="flex items-center text-nfp-black/70">
                  <HiUsers className="mr-3 text-nfp-blue text-lg" />
                  <span className="text-lg">{selectedEvent?.participants} participants attendus</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-heading font-bold text-nfp-blue mb-3">Description</h4>
                <p className="text-nfp-black/70 leading-relaxed">
                  {selectedEvent?.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-nfp-blue text-white font-heading font-bold px-6 py-3 rounded-lg hover:bg-nfp-blue/90 transition-colors"
                >
                  S'inscrire à cet événement
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeModal}
                  className="border border-nfp-blue text-nfp-blue font-heading font-bold px-6 py-3 rounded-lg hover:bg-nfp-blue/5 transition-colors"
                >
                  Fermer
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Activities