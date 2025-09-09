import { motion } from 'framer-motion';
import { HiUser, HiCalendar, HiPhone } from 'react-icons/hi';
import type { SectionProps } from '../../types/JoinModalTypes';

const PersonalInfoSection = ({ formData, setFormData }: SectionProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div 
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }
      }}
      className="bg-white p-6 border border-nfp-blue/10 shadow-soft-xl"
    >
      <h4 className="text-black/70 text-[.8rem] md:text-[1.3rem] font-bold text-xl mb-4 flex items-center gap-2">
        <HiUser className="text-lg" />
        Informations Personnelles
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-black text-[.8rem] md:text-[.87rem] mb-2">Prénom *</label>
          <div className="relative">
            <HiUser className="absolute left-3 top-3 text-nfp-blue/60" />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 border border-nfp-blue/20 text-nfp-blue focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all"
              placeholder="Votre prénom"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="lastName" className="block text-black text-[.8rem] md:text-[.87rem] mb-2">Nom *</label>
          <div className="relative">
            <HiUser className="absolute left-3 top-3 text-nfp-blue/60" />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 border border-nfp-blue/20 text-nfp-blue focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all"
              placeholder="Votre nom"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label htmlFor="age" className="block text-black text-[.8rem] md:text-[.87rem] mb-2">Âge *</label>
          <div className="relative">
            <HiCalendar className="absolute left-3 top-3 text-nfp-blue/60" />
            <input
              type="number"
              id="age"
              name="age"
              min="18"
              max="100"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 border border-nfp-blue/20 text-nfp-blue focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all"
              placeholder="Votre âge"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-black text-[.8rem] md:text-[.87rem] mb-2">Téléphone *</label>
          <div className="relative">
            <HiPhone className="absolute left-3 top-3 text-nfp-blue/60" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 border border-nfp-blue/20 text-nfp-blue focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all"
              placeholder="Votre numéro de téléphone"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalInfoSection;