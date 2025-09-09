import { motion } from 'framer-motion';
import { HiLocationMarker, HiBriefcase } from 'react-icons/hi';
import type { SectionProps } from '../../types/JoinModalTypes';

const LocationSection = ({ formData, setFormData }: SectionProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      <h4 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70 mb-4 flex items-center gap-2">
        <HiLocationMarker className="text-lg" />
        Localisation
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="profession" className="block text-black text-[.8rem] md:text-[.87rem] mb-2">Profession *</label>
          <div className="relative">
            <HiBriefcase className="absolute left-3 top-3 text-nfp-blue/60" />
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 border border-nfp-blue/20 text-nfp-blue focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all"
              placeholder="Votre profession"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="city" className="block text-black text-[.8rem] md:text-[.87rem] mb-2">Ville *</label>
          <div className="relative">
            <HiLocationMarker className="absolute left-3 top-3 text-nfp-blue/60" />
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 border border-nfp-blue/20 text-nfp-blue focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all"
              placeholder="Votre ville"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="region" className="block text-black text-[.8rem] md:text-[.87rem] mb-2">Région *</label>
        <div className="relative">
          <HiLocationMarker className="absolute left-3 top-3 text-nfp-blue/60" />
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-3 py-3 border border-nfp-blue/20 text-nfp-blue focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all appearance-none"
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
    </motion.div>
  );
};

export default LocationSection;