import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import JoinModalHeader from './FormModal/JoinModalHeader';
import SuccessMessage from './FormModal/SuccessMessage';
import JoinModalForm from './FormModal/JoinModalForm';
import type { FormData } from '../types/JoinModalTypes';


interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinModal = ({ isOpen, onClose }: JoinModalProps) => {
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
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
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-0 md:p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: '100%', x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: '100%', x: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white/95 backdrop-blur-md shadow-2xl border border-nfp-blue/10 w-full h-full md:h-auto md:max-h-screen md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:rounded-lg overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <JoinModalHeader onClose={onClose} />
              
              <div className="p-4 md:p-6 h-[calc(100vh-76px)] md:max-h-[80vh] overflow-y-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-nfp-yellow/10 p-6 mb-6 border border-nfp-yellow/20"
                >
                  <p className="text-nfp-blue text-center italic text-[.9rem] md:text-[1.07rem]">
                    "Ensemble, nous bâtissons un avenir meilleur pour toutes les régions du Cameroun"
                  </p>
                </motion.div>
                
                {isSubmitted ? (
                  <SuccessMessage />
                ) : (
                  <JoinModalForm 
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={handleSubmit}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default JoinModal;