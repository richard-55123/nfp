import { motion } from 'framer-motion'
import { HiCalendar, HiUsers } from 'react-icons/hi'
import { HiMapPin } from 'react-icons/hi2'

const Activities = () => {
  const events = [
    {
      title: "Sommet National pour la Paix",
      date: "15 Octobre 2023",
      location: "Yaoundé, Cameroun",
      participants: "500+",
      description: "Discussion sur les mécanismes de consolidation de la paix et de cohésion nationale."
    },
    {
      title: "Forum Économique",
      date: "22 Novembre 2023",
      location: "Douala, Cameroun",
      participants: "300+",
      description: "Stratégies pour le développement économique durable et la création d'emplois."
    },
    {
      title: "Conférence sur l'Éducation",
      date: "10 Décembre 2023",
      location: "Bafoussam, Cameroun",
      participants: "250+",
      description: "Réforme du système éducatif pour mieux préparer la jeunesse camerounaise."
    }
  ]

  return (
    <section id="activities" className="py-20 bg-nfp-white">
      <div className="container mx-auto px-[6.5%]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-nfp-blue mb-4">
            Activités et Événements
          </h2>
          <div className="w-20 h-1 bg-nfp-yellow mx-auto mb-6"></div>
          <p className="text-lg text-nfp-black/80 max-w-3xl mx-auto">
            Découvrez nos prochains événements et activités qui rassemblent les acteurs politiques 
            pour discuter de l'avenir du Cameroun.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-nfp-blue to-nfp-blue/90 text-nfp-white rounded-2xl shadow-soft overflow-hidden hover:shadow-bold transition-all"
            >
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-4">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <HiCalendar className="mr-2 text-nfp-yellow" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <HiMapPin className="mr-2 text-nfp-yellow" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <HiUsers className="mr-2 text-nfp-yellow" />
                    <span>{event.participants} participants</span>
                  </div>
                </div>
                
                <p className="text-nfp-white/90 mb-6">
                  {event.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-nfp-yellow text-nfp-blue py-2 rounded-lg font-sans font-medium hover:bg-nfp-yellow/90 transition-colors"
                >
                  S'inscrire
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-nfp-blue/5 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-nfp-blue mb-6">
                Prochain Grand Événement
              </h3>
              <div className="mb-6 p-4 bg-nfp-yellow/10 rounded-xl">
                <h4 className="text-xl font-heading font-bold text-nfp-blue mb-2">
                  Congrès Annuel de l'Alliance
                </h4>
                <p className="text-nfp-black/70 mb-2">
                  <span className="font-semibold">Date:</span> 15-17 Janvier 2024
                </p>
                <p className="text-nfp-black/70 mb-2">
                  <span className="font-semibold">Lieu:</span> Palais des Congrès, Yaoundé
                </p>
                <p className="text-nfp-black/70">
                  <span className="font-semibold">Thème:</span> "Unis pour un Cameroun prospère et pacifique"
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-nfp-blue text-white font-heading font-bold px-6 py-3 rounded-lg hover:bg-nfp-blue/90 transition-colors"
              >
                Voir le programme complet
              </motion.button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-64 h-64 bg-nfp-blue/10 rounded-full flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-5xl font-heading font-bold text-nfp-blue mb-2">15-17</div>
                    <div className="text-xl font-heading font-bold text-nfp-blue">Janvier</div>
                    <div className="text-lg font-sans text-nfp-blue/80 mt-2">2024</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Activities