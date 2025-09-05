import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiStar, HiFlag, HiUserGroup } from 'react-icons/hi'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Accueil', href: '#home', icon: <HiStar className="text-nfp-yellow" /> },
    { name: 'À propos', href: '#about', icon: <HiUserGroup className="text-nfp-yellow" /> },
    { name: 'Partis', href: '#parties', icon: <HiFlag className="text-nfp-yellow" /> },
    { name: 'Activités', href: '#activities', icon: <HiStar className="text-nfp-yellow" /> },
    { name: 'Contact', href: '#contact', icon: <HiUserGroup className="text-nfp-yellow" /> },
  ]

  return (
    <>
      {/* Bandeau supérieur avec logo et drapeau */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="w-full  shadow-md relative overflow-hidden "
      >
        {/* Éléments d'arrière-plan décoratifs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-nfp-yellow rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-nfp-yellow rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto py-3 relative z-10 px-[6.5%]">
          <div className="flex justify-between items-center">
            {/* Logo avec effet de rayonnement */}
            <div
              className="relative flex items-center">
              <div
                className="absolute -inset-3 bg-nfp-yellow/20 rounded-full"
              />
              <img
                src="/NFP.png"
                alt="NFP"
                className="h-9 md:h-9 w-auto object-cover z-10 drop-shadow-lg"
              />
            </div>

            {/* Titre central pour mobile */}
            <motion.div
              className="md:hidden text-nfp-white font-bold text-sm tracking-wide text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              NOUVELLES FORCES<br />POLITIQUES
            </motion.div>

            <motion.div
              className="relative flex items-center"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="absolute -inset-3 bg-nfp-yellow/20 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <img
                src="/embleme.png"
                alt="NFP"
                className="h-14 md:h-16 w-auto object-contain relative z-10 drop-shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Header principal avec effet de sticky avancé */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`sticky top-0 z-50 ${isScrolled ? 'bg-nfp-blue/95 backdrop-blur-md shadow-2xl' : 'bg-nfp-blue'} transition-all duration-300`}
      >
        <div className="container mx-auto  py-3 px-[6.5%]">
          <div className="flex justify-between items-center">
            {/* Titre du parti avec effet de profondeur - Desktop seulement */}
            <motion.div
              className="hidden md:flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-nfp-white font-bold text-xl tracking-wide relative">
                <div className="absolute -inset-x-2 -inset-y-1 bg-nfp-blue-dark/50 blur rounded-lg"></div>
                <span className="relative drop-shadow-md">NOUVELLES FORCES POLITIQUES</span>
              </div>
            </motion.div>

            {/* Desktop Navigation avec design politique moderne */}
            <nav className="hidden md:flex space-x-1 relative">
              {/* Élément décoratif arrière avec effet de vague */}
              <motion.div
                className="absolute inset-0 bg-nfp-yellow/10 rounded-full blur-md"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
              />

              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.a
                    href={item.href}
                    whileHover={{
                      y: -3,
                      transition: { type: "spring", stiffness: 500 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-nfp-white font-sans font-medium px-4 py-2 rounded-lg relative block transition-colors group flex items-center gap-2"
                  >
                    <span className="text-nfp-yellow">{item.icon}</span>
                    {item.name}

                    {/* Effet de soulignement animé avec vague */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-nfp-yellow origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Effet de fond au survol */}
                    <motion.div
                      className="absolute inset-0 bg-nfp-yellow/10 rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button avec design amélioré */}
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-nfp-white focus:outline-none p-2 rounded-lg bg-nfp-blue-dark/80 relative overflow-hidden group"
                aria-label="Menu mobile"
              >
                {/* Effet d'arrière-plan au survol */}
                <motion.div
                  className="absolute inset-0 bg-nfp-yellow"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <span className="relative z-10 flex items-center">
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiX size={28} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiMenu size={28} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>

                {/* Animation de pulsation */}
                <motion.div
                  className="absolute inset-0 border-2 border-nfp-yellow rounded-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </button>
            </motion.div>
          </div>

          {/* Mobile Navigation avec animation améliorée */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 bg-nfp-blue-dark/95 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-nfp-yellow/20"
              >
                <div className="flex flex-col space-y-2 py-4">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        x: 10,
                        backgroundColor: "rgba(255, 215, 0, 0.15)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="text-nfp-white font-sans font-medium px-6 py-4 mx-2 rounded-lg transition-colors flex items-center relative overflow-hidden"
                    >
                      {/* Ligne décorative animée */}
                      <motion.div
                        className="absolute left-0 top-0 h-full w-1 bg-nfp-yellow"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Icône */}
                      <span className="mr-3 text-nfp-yellow">
                        {item.icon}
                      </span>

                      {item.name}

                      {/* Animation de bordure */}
                      <motion.div
                        className="absolute inset-0 border border-nfp-yellow/30 rounded-lg"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.a>
                  ))}
                </div>

                {/* Footer du menu mobile */}
                <motion.div
                  className="border-t border-nfp-yellow/20 pt-4 pb-2 px-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-nfp-yellow/80 text-sm">Nouvelle Force Politique</p>
                  <p className="text-nfp-white/60 text-xs">Unis pour le Cameroun</p>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  )
}

export default Header