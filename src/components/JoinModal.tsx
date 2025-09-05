import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiX, HiUser, HiPhone, HiLocationMarker, 
  HiClipboardList, HiStar,  HiBriefcase, 
  HiCalendar, HiLightningBolt, HiUserGroup,
  HiPhotograph
} from 'react-icons/hi';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  age: string;
  phone: string;
  profession: string;
  city: string;
  region: string;
  motivation: string;
  skills: string;
  experience: string;
  availability: string;
  partyLogo: File | null;
  partyLogoPreview: string;
}

const JoinModal = ({ isOpen, onClose }: JoinModalProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    age: '',
    phone: '',
    profession: '',
    city: '',
    region: '',
    motivation: '',
    skills: '',
    experience: '',
    availability: '',
    partyLogo: null,
    partyLogoPreview: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          partyLogo: file,
          partyLogoPreview: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setFormData(prev => ({
      ...prev,
      partyLogo: null,
      partyLogoPreview: ''
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire ici
    console.log(formData);
    // Fermer le modal après soumission
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-0 md:p-4"
            onClick={onClose}
          >
            {/* Modal avec animation de bas en haut sur mobile et de droite à gauche sur desktop */}
            <motion.div
              initial={{ opacity: 0, y: '100%', x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: '100%', x: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-gradient-to-b from-nfp-blue to-nfp-dark-blue backdrop-blur-md shadow-2xl border-t-2 border-nfp-yellow/40 w-full h-full md:h-auto md:max-h-screen md:max-w-3xl lg:max-w-2xl xl:max-w-xl md:rounded-none overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* En-tête du modal */}
              <div className="bg-gradient-to-r from-nfp-yellow to-nfp-yellow/90 text-nfp-blue p-4 flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 shadow-lg">
                    <img src="/NFP.png" alt="Logo NFP" className="h-14 w-14 md:h-16 md:w-16 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">Rejoindre le Mouvement</h3>
                    <p className="text-sm text-nfp-blue/80">Nouvelles Forces Politiques</p>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="text-nfp-blue hover:text-nfp-blue/70 transition-colors p-1 hover:bg-nfp-blue/10"
                  aria-label="Fermer"
                >
                  <HiX className="text-2xl md:text-3xl" />
                </button>
              </div>
              
              {/* Corps du modal */}
              <div className="p-4 md:p-6 h-[calc(100vh-76px)] md:max-h-[80vh] overflow-y-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-nfp-blue/30 p-4 mb-6 border border-nfp-yellow/20"
                >
                  <p className="text-nfp-white/90 text-center italic">
                    "Ensemble, nous bâtissons un avenir meilleur pour toutes les régions du Cameroun"
                  </p>
                </motion.div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Section Logo du parti politique */}
                  <div className="bg-nfp-blue/40 p-4 border border-nfp-yellow/10">
                    <h4 className="text-nfp-yellow font-bold mb-4 flex items-center gap-2">
                      <HiPhotograph className="text-lg" />
                      Logo du parti politique
                    </h4>
                    
                    <div className="flex flex-col items-center justify-center gap-4">
                      {formData.partyLogoPreview ? (
                        <div className="relative">
                          <img 
                            src={formData.partyLogoPreview} 
                            alt="Aperçu du logo" 
                            className="max-h-40 max-w-full object-contain mx-auto"
                          />
                          <button
                            type="button"
                            onClick={handleRemoveLogo}
                            className="absolute -top-2 -right-2 bg-red-500 text-white p-1 hover:bg-red-600 transition-colors"
                          >
                            <HiX className="text-lg" />
                          </button>
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-nfp-yellow/40 p-8 text-center">
                          <HiPhotograph className="text-4xl text-nfp-yellow/60 mx-auto mb-2" />
                          <p className="text-nfp-white/70">Aucun logo sélectionné</p>
                        </div>
                      )}
                      
                      <div className="flex flex-col sm:flex-row gap-3 w-full">
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept="image/*"
                          className="hidden"
                          id="partyLogo"
                        />
                        <label
                          htmlFor="partyLogo"
                          className="flex-1 bg-nfp-blue/70 border border-nfp-yellow/30 text-nfp-white py-2 px-4 text-center cursor-pointer hover:bg-nfp-blue/90 transition-colors"
                        >
                          Choisir un logo
                        </label>
                        
                        {formData.partyLogoPreview && (
                          <button
                            type="button"
                            onClick={handleRemoveLogo}
                            className="flex-1 bg-red-500/80 border border-red-300 text-white py-2 px-4 hover:bg-red-600/90 transition-colors"
                          >
                            Supprimer
                          </button>
                        )}
                      </div>
                      
                      <p className="text-nfp-white/60 text-sm text-center">
                        Formats supportés: JPG, PNG, SVG. Taille max: 5MB.
                      </p>
                    </div>
                  </div>

                  {/* Section Informations Personnelles */}
                  <div className="bg-nfp-blue/40 p-4 border border-nfp-yellow/10">
                    <h4 className="text-nfp-yellow font-bold mb-4 flex items-center gap-2">
                      <HiUser className="text-lg" />
                      Informations Personnelles
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <label htmlFor="firstName" className="block text-nfp-white/80 mb-2 text-sm font-medium">Prénom *</label>
                        <div className="relative">
                          <HiUser className="absolute left-3 top-3 text-nfp-yellow/80" />
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-3 py-3 bg-nfp-blue/30 border border-nfp-yellow/20 text-nfp-white focus:outline-none focus:ring-2 focus:ring-nfp-yellow/50 focus:border-nfp-yellow/50 transition-all"
                            placeholder="Votre prénom"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="lastName" className="block text-nfp-white/80 mb-2 text-sm font-medium">Nom *</label>
                        <div className="relative">
                          <HiUser className="absolute left-3 top-3 text-nfp-yellow/80" />
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-3 py-3 bg-nfp-blue/30 border border-nfp-yellow/20 text-nfp-white focus:outline-none focus:ring-2 focus:ring-nfp-yellow/50 focus:border-nfp-yellow/50 transition-all"
                            placeholder="Votre nom"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="relative">
                        <label htmlFor="age" className="block text-nfp-white/80 mb-2 text-sm font-medium">Âge *</label>
                        <div className="relative">
                          <HiCalendar className="absolute left-3 top-3 text-nfp-yellow/80" />
                          <input
                            type="number"
                            id="age"
                            name="age"
                            min="18"
                            max="100"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-3 py-3 bg-nfp-blue/30 border border-nfp-yellow/20 text-nfp-white focus:outline-none focus:ring-2 focus:ring-nfp-yellow/50 focus:border-nfp-yellow/50 transition-all"
                            placeholder="Votre âge"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="phone" className="block text-nfp-white/80 mb-2 text-sm font-medium">Téléphone *</label>
                        <div className="relative">
                          <HiPhone className="absolute left-3 top-3 text-nfp-yellow/80" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-3 py-3 bg-nfp-blue/30 border border-nfp-yellow/20 text-nfp-white focus:outline-none focus:ring-2 focus:ring-nfp-yellow/50 focus:border-nfp-yellow/50 transition-all"
                            placeholder="Votre numéro de téléphone"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section Localisation */}
                  <div className="bg-nfp-blue/40 p-4 border border-nfp-yellow/10">
                    <h4 className="text-nfp-yellow font-bold mb-4 flex items-center gap-2">
                      <HiLocationMarker className="text-lg" />
                      Localisation
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <label htmlFor="profession" className="block text-nfp-white/80 mb-2 text-sm font-medium">Profession *</label>
                        <div className="relative">
                          <HiBriefcase className="absolute left-3 top-3 text-nfp-yellow/80" />
                          <input
                            type="text"
                            id="profession"
                            name="profession"
                            value={formData.profession}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-3 py-3 bg-nfp-blue/30 border border-nfp-yellow/20 text-nfp-white focus:outline-none focus:ring-2 focus:ring-nfp-yellow/50 focus:border-nfp-yellow/50 transition-all"
                            placeholder="Votre profession"
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="city" className="block text-nfp-white/80 mb-2 text-sm font-medium">Ville *</label>
                        <div className="relative">
                          <HiLocationMarker className="absolute left-3 top-3 text-nfp-yellow/80" />
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-3 py-3 bg-nfp-blue/30 border border-nfp-yellow/20 text-nfp-white focus:outline-none focus:ring-2 focus:ring-nfp-yellow/50 focus:border-nfp-yellow/50 transition-all"
                            placeholder="Votre ville"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label htmlFor="region" className="block text-nfp-white/80 mb-2 text-sm font-medium">Région *</label>
                      <div className="relative">
                        <HiLocationMarker className="absolute left-3 top-3 text-nfp-yellow/80" />
                        <select
                          id="region"
                          name="region"
                          value={formData.region}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-3 py-3 bg-nfp-blue/30 border border-nfp-yellow/20 text-nfp-white focus:outline-none focus:ring-2 focus:ring-nfp-yellow/50 focus:border-nfp-yellow/50 transition-all appearance-none"
                        >
                          <option value="">Sélectionnez votre région</option>
                          <option value="Adamaoua">Adamaoua</option>
                          <option value="Centre">Centre</option>
                          <option value="Est">Est</option>
                          <option value="Extrême-Nord">Extrême-Nord</option>
                          <option value="Littoral">Littoral</option>
                          <option value="Nord">Nord</option>
                          <option value="Nord-Ouest">Nord-Ouest</option>
                          <option value="Ouest">Ouest</option>
                          <option value="Sud">Sud</option>
                          <option value="Sud-Ouest">Sud-Ouest</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section Motivation et Compétences */}
                  <div className="bg-nfp-blue/40 p-4 border border-nfp-yellow/10">
                    <h4 className="text-nfp-yellow font-bold mb-4 flex items-center gap-2">
                      <HiLightningBolt className="text-lg" />
                      Motivation et Compétences
                    </h4>
                    
                    <div className="relative mb-4">
                      <label htmlFor="motivation" className="block text-nfp-white/80 mb-2 text-sm font-medium">Pourquoi souhaitez-vous rejoindre le mouvement ? *</label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        rows={3}
                        required
                        className="w-full px-3 py-3 bg-nfp-blue/30 border border-nfp-yellow/20 text-nfp-white focus:outline-none focus:ring-2 focus:ring-nfp-yellow/50 focus:border-nfp-yellow/50 transition-all"
                        placeholder="Expliquez vos motivations pour rejoindre notre mouvement..."
                      ></textarea>
                    </div>

                    <div className="relative mb-4">
                      <label htmlFor="skills" className="block text-nfp-white/80 mb-2 text-sm font-medium">Vos compétences et domaines d'expertise *</label>
                      <textarea
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        rows={2}
                        required
                        className="w-full px-3 py-3 bg-nfp-blue/30 border border-nfp-yellow/20 text-nfp-white focus:outline-none focus:ring-2 focus:ring-nfp-yellow/50 focus:border-nfp-yellow/50 transition-all"
                        placeholder="Décrivez vos compétences et domaines d'expertise..."
                      ></textarea>
                    </div>

                    <div className="relative">
                      <label htmlFor="experience" className="block text-nfp-white/80 mb-2 text-sm font-medium">Expérience politique ou associative</label>
                      <textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-3 py-3 bg-nfp-blue/30 border border-nfp-yellow/20 text-nfp-white focus:outline-none focus:ring-2 focus:ring-nfp-yellow/50 focus:border-nfp-yellow/50 transition-all"
                        placeholder="Avez-vous une expérience en politique ou dans des associations ?"
                      ></textarea>
                    </div>
                  </div>

                  {/* Section Engagement */}
                  <div className="bg-nfp-blue/40 p-4 border border-nfp-yellow/10">
                    <h4 className="text-nfp-yellow font-bold mb-4 flex items-center gap-2">
                      <HiUserGroup className="text-lg" />
                      Engagement
                    </h4>
                    
                    <div className="relative">
                      <label htmlFor="availability" className="block text-nfp-white/80 mb-2 text-sm font-medium">Disponibilité pour l'engagement *</label>
                      <div className="relative">
                        <HiClipboardList className="absolute left-3 top-3 text-nfp-yellow/80" />
                        <select
                          id="availability"
                          name="availability"
                          value={formData.availability}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-3 py-3 bg-nfp-blue/30 border border-nfp-yellow/20 text-nfp-white focus:outline-none focus:ring-2 focus:ring-nfp-yellow/50 focus:border-nfp-yellow/50 transition-all appearance-none"
                        >
                          <option value="">Sélectionnez votre disponibilité</option>
                          <option value="plein-temps">Disponible à plein temps</option>
                          <option value="partiel">Disponible à temps partiel</option>
                          <option value="weekend">Disponible les weekends</option>
                          <option value="soirees">Disponible en soirées</option>
                          <option value="ponctuel">Disponible ponctuellement</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(255, 203, 5, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-nfp-yellow to-nfp-yellow/90 text-nfp-blue font-bold py-4 mt-6 flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <HiStar className="text-xl" />
                    Rejoindre le Mouvement
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default JoinModal;