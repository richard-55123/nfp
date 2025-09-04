import { motion } from 'framer-motion'
import { HiStar, HiUserGroup, HiArrowRight } from 'react-icons/hi'

const Parties = () => {
  const parties = [
    {
      name: "ANG (L'Alliance Nouvelle Génération)",
      leader: "DR.NGAKETCHA",
      leaderImage: "/ANG.jpg",
      partyLogo: "/ANG.png",
      ideology: "Centre-droit",
      color: "#076633",
      members: "",
      website: "https://ang-nga.org/"
    },
    {
      name: "PTN (Parti du Triangle National)",
      leader: "DR.NGAKETCHA",
      leaderImage: "/oneking.jpg",
      partyLogo: "/ptn.png",
      ideology: "Centre-gauche",
      color: "red",
      members: "",
      website: "https://ang-nga.org/"
    },
  ]

  const getColorClass = (color: string) => {
    switch(color) {
      case "#076633": return "bg-[#076633]"
      case "red": return "bg-red-500"
      case "green": return "bg-green-500"
      case "yellow": return "bg-yellow-500"
      case "purple": return "bg-purple-500"
      case "orange": return "bg-orange-500"
      default: return "bg-gray-500"
    }
  }

  const getGradientClass = (color: string) => {
    switch(color) {
      case "blue": return "from-blue-400/10 to-blue-600/10"
      case "red": return "from-red-400/10 to-red-600/10"
      case "green": return "from-green-400/10 to-green-600/10"
      case "yellow": return "from-yellow-400/10 to-yellow-600/10"
      case "purple": return "from-purple-400/10 to-purple-600/10"
      case "orange": return "from-orange-400/10 to-orange-600/10"
      default: return "from-gray-400/10 to-gray-600/10"
    }
  }

  return (
    <section id="parties" className="py-12 md:py-20 bg-gradient-to-br from-nfp-blue/5 to-nfp-white relative overflow-hidden">
      {/* Image de fond avec opacité réduite */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/NFP.png')" }}
      ></div>
      
      {/* Éléments décoratifs arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-nfp-yellow/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-nfp-blue/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-[6.5%] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-nfp-blue mb-4">
            Partis Membres
          </h2>
          <div className="w-20 h-1 bg-nfp-yellow mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-nfp-black/80 max-w-3xl mx-auto">
            Découvrez les partis politiques qui composent notre alliance et œuvrent ensemble 
            pour l'avenir du Cameroun.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {parties.map((party, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-0 bg-white  shadow-soft hover:shadow-bold transition-all overflow-hidden`}
            >
              {/* Section visuelle avec image et logo */}
              <div className={`lg:w-2/5 relative overflow-hidden min-h-64 md:min-h-80 ${getColorClass(party.color)}/10 bg-gradient-to-br ${getGradientClass(party.color)}`}>
                <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                  <div className="relative w-full h-48 md:h-64">
                    <motion.img 
                      src={party.leaderImage} 
                      alt={`Portrait de ${party.leader}`}
                      className="w-full h-full object-cover rounded-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32  p-2">
                      <img 
                        src={party.partyLogo} 
                        alt={`Logo ${party.name}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Section contenu */}
              <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-nfp-blue">
                      {party.name}
                    </h3>
                    <HiStar className="text-nfp-yellow text-xl md:text-2xl" />
                  </div>
                  
                  <div className="mb-4 md:mb-6">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className={`w-3 h-6 md:h-8 ${getColorClass(party.color)} mr-3`}></div>
                      <p className="text-lg md:text-xl font-semibold text-nfp-black">{party.leader}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div>
                        <p className="text-nfp-black/70 text-xs md:text-sm uppercase tracking-wide mb-1">Idéologie</p>
                        <p className="font-medium text-sm md:text-base">{party.ideology}</p>
                      </div>
                      <div>
                        <p className="text-nfp-black/70 text-xs md:text-sm uppercase tracking-wide mb-1">Membres</p>
                        <div className="flex items-center">
                          <HiUserGroup className="mr-2 text-nfp-blue text-sm md:text-base" />
                          <span className="font-semibold text-sm md:text-base">{party.members}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.a
                  href={party.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center text-nfp-blue font-medium group self-start mt-4 text-sm md:text-base"
                >
                  En savoir plus
                  <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#1E40AF" }}
            whileTap={{ scale: 0.95 }}
            className="bg-nfp-blue text-white font-heading font-bold px-6 py-3 md:px-8 md:py-4 shadow-soft hover:shadow-bold transition-all flex items-center mx-auto text-sm md:text-base"
          >
            Voir tous les partis membres
            <HiArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Parties