import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiMail, HiPhone, HiPaperAirplane, HiClock, HiLocationMarker } from 'react-icons/hi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation d'envoi réussi
    setIsSubmitted(true)
    // Réinitialiser après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-nfp-blue/5 via-nfp-white to-nfp-yellow/10 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-nfp-yellow/10 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nfp-blue/10 translate-y-1/2 -translate-x-1/2"></div>

      {/* Image de fond agrandie et plus visible */}
      <div className="absolute left-0 top-0 w-full md:w-2/3 h-full opacity-15 md:opacity-20 z-0">
        <img
          src="/monumentOne.png" // Remplacez par le chemin de votre image
          alt="Décoration de fond"
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className="absolute bottom-20 right-8 w-28 h-36 md:w-36 md:h-44 opacity-80">
        <img
          src="/loveCamer.png"
          alt="Image politique 2"
          className="w-full h-full object-cover shadow-md"
        />
      </div>

      <div className="container mx-auto lg:px-[10%] px-[6.5%] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-nfp-blue mb-2 md:mb-4 leading-tight">
            Rejoignez la <span className="text-nfp-yellow">Révolution</span> Citoyenne
          </h2>
          <div className="w-20 h-1 bg-nfp-yellow mx-auto mb-4"></div>
          <p className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl text-nfp-black/90 leading-normal xs:leading-relaxed sm:leading-relaxed mb-4 xs:mb-5 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 ">
            Votre voix compte dans cette alliance historique. Que vous soyez citoyen engagé,
            expert passionné ou simplement curieux de contribuer au renouveau camerounais,
            nous sommes à votre écoute.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-3xl font-heading font-bold text-nfp-blue mb-4"
            >
              Connectons-nous pour <span className="text-nfp-yellow">bâtir</span> ensemble
            </motion.h3>

            <div className="space-y-3.5">
              <motion.div
                variants={itemVariants}
                className="flex items-start bg-white/90 backdrop-blur-sm p-5 border border-nfp-blue/10"
              >
                <div className="bg-nfp-blue/10 p-3 mr-4 flex-shrink-0">
                  <HiMail className="text-nfp-blue text-xl" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-nfp-blue mb-1">Courrier Électronique</h4>
                  <p className="text-nfp-black/70 mb-2">Pour les échanges détaillés et collaborations</p>
                  <p className="text-nfp-blue font-medium">info@nfp-pnf.org</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start bg-white/90 backdrop-blur-sm p-5 border border-nfp-blue/10"
              >
                <div className="bg-nfp-blue/10 p-3 mr-4 flex-shrink-0">
                  <HiPhone className="text-nfp-blue text-xl" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-nfp-blue mb-1">Ligne Directe</h4>
                  <p className="text-nfp-black/70 mb-2">Pour un contact immédiat avec notre équipe</p>
                  <p className="text-nfp-blue font-medium">+237 673 712 522 / +237 694 25 83 89 (WhatsApp disponible)</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start bg-white/90 backdrop-blur-sm p-5 border border-nfp-blue/10"
              >
                <div className="bg-nfp-blue/10 p-3 mr-4 flex-shrink-0">
                  <HiLocationMarker className="text-nfp-blue text-xl" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-nfp-blue mb-1">Siège de l'Alliance</h4>
                  <p className="text-nfp-black/70 mb-2">Venez échanger directement avec nous</p>
                  <p className="text-nfp-blue font-medium">Siège National, BP : 8361 Deido, Douala, Cameroun</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-nfp-yellow/10 p-6 border border-nfp-yellow/20 mt-8"
              >
                <div className="flex items-center mb-3">
                  <HiClock className="text-nfp-yellow text-xl mr-2" />
                  <h4 className="font-heading font-bold text-nfp-blue">Disponibilités</h4>
                </div>
                <p className="text-nfp-black/70">
                  <span className="font-medium">Lundi - Vendredi:</span> 8h00 - 18h00<br />
                  <span className="font-medium">Samedi:</span> 9h00 - 16h00 (permanence exceptionnelle)<br />
                  <span className="font-medium">Dimanche:</span> Sur rendez-vous pour causes urgentes
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/95 shadow-soft-xl p-8 border border-nfp-blue/10 relative overflow-hidden">
              {/* Élément décoratif */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-nfp-yellow/10 -translate-y-1/2 translate-x-1/2"></div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl font-heading font-bold text-nfp-blue mb-2 relative z-10"
              >
                Votre message catalyseur de changement
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-nfp-black/70 mb-4 relative z-10"
              >
                Chaque idée, chaque suggestion, chaque question est une pierre à l'édifice de la Nouvelle Force Politique.
              </motion.p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-nfp-yellow/20 border border-nfp-yellow/30 text-nfp-blue p-6 text-center"
                >
                  <HiPaperAirplane className="text-4xl text-nfp-yellow mx-auto mb-3" />
                  <h4 className="font-heading font-bold text-lg mb-2">Message envoyé avec succès!</h4>
                  <p>Nous vous recontacterons dans les plus brefs délais. Merci pour votre engagement.</p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-nfp-blue">
                        Votre identité *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nom et prénoms"
                        className="w-full px-4 py-3 border border-nfp-blue/20 focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-nfp-blue">
                        Votre email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="adresse@exemple.cm"
                        className="w-full px-4 py-3 border border-nfp-blue/20 focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-nfp-blue mb-2">
                      Objet de votre message *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de discussion"
                      className="w-full px-4 py-3 border border-nfp-blue/20 focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-nfp-blue mb-2">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Dites-nous comment vous souhaitez contribuer au renouveau..."
                      className="w-full px-4 py-3 border border-nfp-blue/20 focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 85, 170, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-nfp-blue to-nfp-blue/90 text-white py-4 font-sans font-medium transition-all flex items-center justify-center group"
                  >
                    <span>Transmettre mon message</span>
                    <HiPaperAirplane className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact