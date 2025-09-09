import { motion } from 'framer-motion';
import { HiUserGroup, HiClipboardList } from 'react-icons/hi';
import type { SectionProps } from '../../types/JoinModalTypes';

const EngagementSection = ({ formData, setFormData }: SectionProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
        <HiUserGroup className="text-lg" />
        Engagement
      </h4>
      
      <div>
        <label htmlFor="availability" className="block text-black text-[.8rem] md:text-[.87rem] mb-2">Disponibilité pour l'engagement *</label>
        <div className="relative">
          <HiClipboardList className="absolute left-3 top-3 text-nfp-blue/60" />
          <select
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-3 py-3 border border-nfp-blue/20 text-nfp-blue focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all appearance-none"
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
    </motion.div>
  );
};

export default EngagementSection;