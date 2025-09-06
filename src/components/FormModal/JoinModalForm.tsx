import { motion } from 'framer-motion';
import { HiPaperAirplane } from 'react-icons/hi';
import type { JoinModalFormProps } from '../../types/JoinModalTypes';
import PartyLogoSection from './PartyLogoSection';
import PersonalInfoSection from './PersonalInfoSection';
import LocationSection from './LocationSection';
import MotivationSection from './MotivationSection';
import EngagementSection from './EngagementSection';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const JoinModalForm = ({ formData, setFormData, onSubmit }: JoinModalFormProps) => {
  return (
    <motion.form 
      onSubmit={onSubmit} 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <PartyLogoSection formData={formData} setFormData={setFormData} />
      <PersonalInfoSection formData={formData} setFormData={setFormData} />
      <LocationSection formData={formData} setFormData={setFormData} />
      <MotivationSection formData={formData} setFormData={setFormData} />
      <EngagementSection formData={formData} setFormData={setFormData} />
      
      <motion.button
        variants={itemVariants}
        type="submit"
        whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 85, 170, 0.3)" }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-nfp-blue to-nfp-blue/90 text-white py-4 font-bold transition-all flex items-center justify-center group text-lg"
      >
        <span>Rejoindre le Mouvement</span>
        <HiPaperAirplane className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.form>
  );
};

export default JoinModalForm;