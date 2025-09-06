// import Hero from '../components/Hero'
import About from '../components/About'
import Parties from '../components/Parties'
import Contact from '../components/Contact'
import Heros from '../components/Heros'
import Pourquoi from '../components/Pourquoi'
// import Activities from '../components/Activities'

function Index() {
      return (
            <>
                  <Heros />
                  <About />
                  <Pourquoi />
                  {/* Values Section with background image */}
                  {/* <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 relative py-16 md:py-24"
        >
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
        </motion.div> */}

                  {/* Mission Section - MODIFIÉ pour inversion sur mobile */}
                  {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-nfp-blue text-nfp-white"
        >
          <div className="grid md:grid-cols-2">
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
        </motion.div> */}
                  <Parties />
                  {/* <Activities /> */}
                  <Contact />
            </>
      )
}

export default Index