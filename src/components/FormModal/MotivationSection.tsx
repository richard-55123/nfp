import { motion } from 'framer-motion';
import { HiLightningBolt } from 'react-icons/hi';
import type { SectionProps } from '../../types/JoinModalTypes';

const MotivationSection = ({ formData, setFormData }: SectionProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <h4 className="text-nfp-blue font-bold text-xl mb-4 flex items-center gap-2">
        <HiLightningBolt className="text-lg" />
        Motivation et Compétences
      </h4>
      
      <div className="mb-6">
        <label htmlFor="motivation" className="block text-sm font-medium text-nfp-blue mb-2">Pourquoi souhaitez-vous rejoindre le mouvement ? *</label>
        <textarea
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          rows={3}
          required
          className="w-full px-4 py-3 border border-nfp-blue/20 text-nfp-blue focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all"
          placeholder="Expliquez vos motivations pour rejoindre notre mouvement..."
        ></textarea>
      </div>

      <div className="mb-6">
        <label htmlFor="skills" className="block text-sm font-medium text-nfp-blue mb-2">Vos compétences et domaines d'expertise *</label>
        <textarea
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          rows={2}
          required
          className="w-full px-4 py-3 border border-nfp-blue/20 text-nfp-blue focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all"
          placeholder="Décrivez vos compétences et domaines d'expertise..."
        ></textarea>
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-nfp-blue mb-2">Expérience politique ou associative</label>
        <textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows={2}
          className="w-full px-4 py-3 border border-nfp-blue/20 text-nfp-blue focus:ring-2 focus:ring-nfp-yellow focus:border-transparent transition-all"
          placeholder="Avez-vous une expérience en politique ou dans des associations ?"
        ></textarea>
      </div>
    </motion.div>
  );
};

export default MotivationSection;