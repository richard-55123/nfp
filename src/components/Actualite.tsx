import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiCalendar, HiClock, HiUser, HiTag, HiSearch, HiFilter, HiShare, HiBookmark,  } from 'react-icons/hi'
import { useState,  } from 'react'

const Actualites = () => {
  const [activeCategory, setActiveCategory] = useState('toutes')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('recent')
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = [
    { id: 'toutes', name: 'Toutes les actualités' },
    { id: 'politique', name: 'Politique' },
    { id: 'economie', name: 'Économie' },
    { id: 'social', name: 'Social' },
    { id: 'international', name: 'International' },
    { id: 'culture', name: 'Culture' }
  ]

  const articles = [
    {
      id: 1,
      title: "L'Alliance Nouvelle Génération présente son programme économique",
      excerpt: "Découvrez les mesures phares proposées par l'ANG pour relancer l'économie camerounaise et créer des emplois durables.",
      content: `
        <p>L'Alliance Nouvelle Génération a dévoilé ce lundi son programme économique complet lors d'une conférence de presse à Yaoundé. Le plan s'articule autour de cinq axes principaux :</p>
        
        <h3>Relance industrielle</h3>
        <p>Un investissement de 200 milliards de FCFA est prévu pour moderniser les infrastructures industrielles et soutenir les PME innovantes.</p>
        
        <h3>Création d'emplois</h3>
        <p>Le programme prévoit la création de 50 000 emplois directs dans les secteurs prioritaires d'ici 2025.</p>
        
        <h3>Innovation numérique</h3>
        <p>Développement d'un pôle technologique national pour positionner le Cameroun comme leader numérique en Afrique centrale.</p>
        
        <p>Le Dr. Ngaketcha, leader de l'ANG, a déclaré : "Notre vision est de construire une économie résiliente qui profite à tous les Camerounais."</p>
      `,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "economie",
      date: "2023-10-15",
      readTime: "4 min",
      author: "Jean-Paul Mbida",
      tags: ["économie", "emploi", "innovation"],
      featured: true
    },
    {
      id: 2,
      title: "Grand rassemblement pour l'unité nationale à Douala",
      excerpt: "Des milliers de personnes attendues ce weekend pour célébrer les valeurs d'unité et de diversité du Cameroun.",
      content: `
        <p>Le mouvement "Unis pour le Cameroun" organise un grand rassemblement ce samedi à l'esplanade du Wouri à Douala. L'événement, qui réunira des représentants de tous les partis membres de l'alliance, vise à promouvoir le dialogue et la cohésion nationale.</p>
        
        <p>Au programme : des discours inspirants, des performances culturelles représentant la diversité des régions du Cameroun, et des tables rondes sur les défis nationaux.</p>
        
        <p>Plusieurs figures politiques de premier plan ont confirmé leur présence, dont Marie-Françoise Mbala du Mouvement Démocratique et Jean-Paul Akono de l'Alliance Progressiste.</p>
        
        <p>Les organisateurs attendent plus de 10 000 participants à cet événement qui se veut un moment fort de la vie politique camerounaise.</p>
      `,
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "politique",
      date: "2023-10-12",
      readTime: "3 min",
      author: "Martine Ngo",
      tags: ["unité", "rassemblement", "dialogue"],
      featured: true
    },
    {
      id: 3,
      title: "Nouveau plan éducatif pour la jeunesse camerounaise",
      excerpt: "Un programme ambitieux visant à réformer le système éducatif et mieux préparer les jeunes aux défis de demain.",
      content: `
        <p>Le parti du Triangle National a présenté son plan éducatif complet lors d'un forum dédié à la jeunesse à Yaoundé. Ce plan s'articule autour de trois piliers fondamentaux :</p>
        
        <h3>Modernisation des curricula</h3>
        <p>Introduction de cours d'éducation numérique, entrepreneuriat et développement durable dans tous les cycles d'enseignement.</p>
        
        <h3>Formation des enseignants</h3>
        <p>Programme de formation continue pour 20 000 enseignants d'ici 2024 aux nouvelles méthodes pédagogiques.</p>
        
        <h3>Infrastructures scolaires</h3>
        <p>Construction et rénovation de 500 établissements scolaires dans les zones rurales d'ici 2025.</p>
        
        <p>Ce plan éducatif a été élaboré en consultation avec des experts nationaux et internationaux de l'éducation.</p>
      `,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "social",
      date: "2023-10-10",
      readTime: "5 min",
      author: "Samuel Djemba",
      tags: ["éducation", "jeunesse", "réforme"]
    },
    {
      id: 4,
      title: "Le Cameroun renforce ses relations économiques avec l'Union Européenne",
      excerpt: "Signature d'un nouvel accord de partenariat économique qui ouvre de nouvelles perspectives pour les entreprises camerounaises.",
      content: `
        <p>Une délégation camerounaise conduite par des représentants de l'Alliance Nouvelle Génération a signé ce vendredi à Bruxelles un nouvel accord de partenariat économique avec l'Union Européenne.</p>
        
        <p>Cet accord, qui fait suite à deux années de négociations, offre un accès préférentiel au marché européen pour plusieurs produits camerounais, notamment :</p>
        
        <ul>
          <li>Les produits agricoles (cacao, café, banane)</li>
          <li>Les produits textiles</li>
          <li>Les services numériques</li>
        </ul>
        
        <p>En retour, le Cameroun s'engage à moderniser ses normes sanitaires et environnementales selon les standards internationaux.</p>
        
        <p>Les experts économiques estiment que cet accord pourrait générer une croissance supplémentaire de 2% du PIB sur les cinq prochaines années.</p>
      `,
      image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "international",
      date: "2023-10-08",
      readTime: "4 min",
      author: "Alain Foka",
      tags: ["économie", "UE", "partenariat"]
    },
    {
      id: 5,
      title: "Festival des cultures nationales : une célébration de la diversité camerounaise",
      excerpt: "La 5ème édition du festival mettra à l'honneur les traditions et le patrimoine culturel de toutes les régions du pays.",
      content: `
        <p>La cinquième édition du Festival des Cultures Nationales se tiendra du 25 au 30 novembre à Bamenda. Cet événement majeur, soutenu par plusieurs partis membres de l'alliance, célèbre la richesse et la diversité culturelle du Cameroun.</p>
        
        <h3>Au programme de cette édition :</h3>
        
        <ul>
          <li>Spectacles de danses traditionnelles de toutes les régions</li>
          <li>Exposition d'artisanat et d'œuvres d'art contemporain</li>
          <li>Dégustation de spécialités culinaires locales</li>
          <li>Conférences sur la préservation du patrimoine culturel</li>
          <li>Concours de jeunes talents artistiques</li>
        </ul>
        
        <p>Le festival est gratuit et ouvert à tous. Les organisateurs attendent plus de 20 000 visiteurs sur les cinq jours d'événement.</p>
        
        <p>Cette initiative s'inscrit dans le cadre des efforts pour promouvoir le dialogue interculturel et renforcer la cohésion nationale.</p>
      `,
      image: "https://images.unsplash.com/photo-1544531585-9847b68c8fad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "culture",
      date: "2023-10-05",
      readTime: "4 min",
      author: "Chantal Effa",
      tags: ["culture", "festival", "diversité"]
    },
    {
      id: 6,
      title: "Lancement d'un programme de santé communautaire dans les zones rurales",
      excerpt: "Une initiative visant à améliorer l'accès aux soins de santé primaires dans les communautés les plus isolées.",
      content: `
        <p>Le Mouvement Démocratique a lancé ce mercredi un programme ambitieux de santé communautaire ciblant les zones rurales du Cameroun. Ce programme, d'une durée de trois ans, vise à réduire les inégalités d'accès aux soins de santé.</p>
        
        <h3>Les principales actions du programme :</h3>
        
        <ul>
          <li>Formation de 500 agents de santé communautaire</li>
          <li>Équipement de 100 centres de santé avec du matériel de base</li>
          <li>Campagnes de vaccination et de dépistage mobile</li>
          <li>Sensibilisation aux pratiques sanitaires essentielles</li>
        </ul>
        
        <p>Le programme bénéficiera initialement à 50 communautés dans cinq régions du pays, avec pour objectif de toucher 200 000 personnes d'ici fin 2024.</p>
        
        <p>Ce projet est soutenu par plusieurs organisations internationales de santé et sera évalué régulièrement pour mesurer son impact.</p>
      `,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "social",
      date: "2023-10-03",
      readTime: "3 min",
      author: "Dr. Lucien Mbarga",
      tags: ["santé", "communauté", "rural"]
    }
  ]

  const filteredArticles = articles
    .filter(article => 
      activeCategory === 'toutes' || article.category === activeCategory
    )
    .filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'recent') {
        return new Date(b.date) - new Date(a.date)
      } else if (sortBy === 'popular') {
        // Simuler un tri par popularité (en réalité, on pourrait utiliser le nombre de vues)
        return b.id - a.id
      }
      return 0
    })

  const featuredArticles = articles.filter(article => article.featured)

  const openArticleModal = (article) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeArticleModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-[6.5%]">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-nfp-blue mb-10 text-center"
            >
              Articles à la Une
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => openArticleModal(article)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-nfp-yellow text-nfp-blue font-medium rounded-full text-sm">
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <HiCalendar className="mr-1" />
                      <span className="mr-4">{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                      <HiClock className="mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-nfp-blue mb-3 group-hover:text-nfp-yellow transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <HiUser className="text-nfp-yellow mr-2" />
                        <span className="text-sm font-medium">{article.author}</span>
                      </div>
                      
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center text-nfp-blue font-medium text-sm"
                      >
                        Lire la suite
                        <HiArrowRight className="ml-2" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories & Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-[6.5%]">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Categories */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 mb-10"
              >
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      activeCategory === category.id
                        ? 'bg-nfp-blue text-white'
                        : 'bg-white text-nfp-blue hover:bg-nfp-blue/10'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </motion.div>

              {/* Sort & Filter */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between mb-8"
              >
                <div className="flex items-center">
                  <HiFilter className="text-nfp-blue mr-2" />
                  <span className="text-sm font-medium">Trier par :</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="ml-2 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nfp-yellow"
                  >
                    <option value="recent">Plus récent</option>
                    <option value="popular">Plus populaire</option>
                  </select>
                </div>
                
                <span className="text-sm text-gray-500">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} trouvé{filteredArticles.length !== 1 ? 's' : ''}
                </span>
              </motion.div>

              {/* Articles List */}
              <div className="space-y-8">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article, index) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                      onClick={() => openArticleModal(article)}
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 relative overflow-hidden">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-nfp-yellow text-nfp-blue font-medium rounded-full text-sm">
                              {categories.find(cat => cat.id === article.category)?.name}
                            </span>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <HiCalendar className="mr-1" />
                            <span className="mr-4">{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                            <HiClock className="mr-1" />
                            <span>{article.readTime}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-nfp-blue mb-3 group-hover:text-nfp-yellow transition-colors">
                            {article.title}
                          </h3>
                          
                          <p className="text-gray-700 mb-4">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs flex items-center">
                                <HiTag className="mr-1 text-nfp-yellow" />
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <HiUser className="text-nfp-yellow mr-2" />
                              <span className="text-sm font-medium">{article.author}</span>
                            </div>
                            
                            <motion.button
                              whileHover={{ x: 5 }}
                              className="flex items-center text-nfp-blue font-medium text-sm"
                            >
                              Lire la suite
                              <HiArrowRight className="ml-2" />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <HiSearch className="text-4xl text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-600">Aucun article trouvé</h3>
                    <p className="text-gray-500 mt-2">Essayez de modifier vos critères de recherche ou de filtrage.</p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="sticky top-6 space-y-8"
              >
                {/* Newsletter */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-bold text-nfp-blue mb-4">Restez informé</h3>
                  <p className="text-gray-700 mb-4">
                    Inscrivez-vous à notre newsletter pour recevoir les dernières actualités directement dans votre boîte mail.
                  </p>
                  
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nfp-yellow"
                    />
                    <button
                      type="submit"
                      className="w-full bg-nfp-blue text-white py-2 rounded-md font-medium hover:bg-nfp-blue/90 transition-colors"
                    >
                      S'inscrire
                    </button>
                  </form>
                </div>

                {/* Popular Tags */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-bold text-nfp-blue mb-4">Tags populaires</h3>
                  <div className="flex flex-wrap gap-2">
                    {['économie', 'politique', 'éducation', 'santé', 'culture', 'jeunesse', 'innovation', 'développement'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-nfp-blue hover:text-white transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-bold text-nfp-blue mb-4 flex items-center">
                    <HiCalendar className="mr-2 text-nfp-yellow" />
                    Événements à venir
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { date: "18 Oct", title: "Réunion des jeunes militants", location: "Yaoundé" },
                      { date: "22 Oct", title: "Conférence sur l'économie", location: "Douala" },
                      { date: "25 Oct", title: "Cérémonie d'adhésion", location: "En ligne" },
                      { date: "28 Oct", title: "Forum sur l'éducation", location: "Bafoussam" }
                    ].map((event, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-start p-3 bg-gray-50 hover:bg-nfp-blue/5 cursor-pointer rounded-lg"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-nfp-blue text-white flex items-center justify-center font-bold mr-3 rounded-md">
                          {event.date}
                        </div>
                        <div>
                          <p className="font-medium text-nfp-blue">{event.title}</p>
                          <p className="text-sm text-gray-500">{event.location}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {isModalOpen && selectedArticle && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={closeArticleModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  
                  <button
                    onClick={closeArticleModal}
                    className="absolute top-4 right-4 bg-white/90 text-nfp-blue p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <HiX className="text-xl" />
                  </button>
                  
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-nfp-yellow text-nfp-blue font-medium rounded-full text-sm">
                      {categories.find(cat => cat.id === selectedArticle.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-6">
                      <HiCalendar className="mr-1" />
                      <span>{new Date(selectedArticle.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    
                    <div className="flex items-center mr-6">
                      <HiClock className="mr-1" />
                      <span>{selectedArticle.readTime} de lecture</span>
                    </div>
                    
                    <div className="flex items-center">
                      <HiUser className="mr-1" />
                      <span>Par {selectedArticle.author}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-nfp-blue mb-6">
                    {selectedArticle.title}
                  </h2>
                  
                  <div 
                    className="prose max-w-none mb-8"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  />
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedArticle.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-gray-600 hover:text-nfp-blue">
                        <HiShare className="mr-1" />
                        Partager
                      </button>
                      
                      <button className="flex items-center text-gray-600 hover:text-nfp-blue">
                        <HiBookmark className="mr-1" />
                        Sauvegarder
                      </button>
                    </div>
                    
                    <button
                      onClick={closeArticleModal}
                      className="bg-nfp-blue text-white px-6 py-2 rounded-md font-medium hover:bg-nfp-blue/90 transition-colors"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Actualites