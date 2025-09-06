import { motion } from 'framer-motion';
import { HiPaperAirplane } from 'react-icons/hi';

const SuccessMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-nfp-yellow/20 border border-nfp-yellow/30 text-nfp-blue p-8 text-center"
    >
      <HiPaperAirplane className="text-4xl text-nfp-yellow mx-auto mb-4" />
      <h4 className="font-bold text-2xl mb-3">Demande envoyée avec succès!</h4>
      <p className="text-lg">Nous étudierons votre candidature et vous recontacterons dans les plus brefs délais.</p>
      <p className="mt-4 text-nfp-blue/80">Merci pour votre engagement.</p>
    </motion.div>
  );
};

export default SuccessMessage;