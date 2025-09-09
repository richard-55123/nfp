import { useRef } from 'react';
import { motion } from 'framer-motion';
import { HiPhotograph, HiX } from 'react-icons/hi';
import type { SectionProps } from '../../types/JoinModalTypes';

const PartyLogoSection = ({ formData, setFormData }: SectionProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

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
              className="absolute -top-2 -right-2 bg-red-500 text-white p-1 hover:bg-red-600 transition-colors rounded-full"
            >
              <HiX className="text-lg" />
            </button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-nfp-blue/20 p-8 text-center w-full">
            <HiPhotograph className="text-4xl text-nfp-blue/40 mx-auto mb-2" />
            <p className="block text-black text-[.8rem] md:text-[.87rem] text-nfp-blue/60">Aucun logo sélectionné</p>
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
            className="flex-1 text-[.8rem] md:text-[1.3rem]  font-bold bg-nfp-blue text-white py-3 px-4 text-center cursor-pointer hover:bg-nfp-blue/90 transition-colors font-medium"
          >
            Choisir un logo
          </label>
          
          {formData.partyLogoPreview && (
            <button
              type="button"
              onClick={handleRemoveLogo}
              className="flex-1 bg-red-500 text-white py-3 px-4 hover:bg-red-600 transition-colors font-medium"
            >
              Supprimer
            </button>
          )}
        </div>
        
        <p className="text-nfp-blue/60 text-sm text-center">
          Formats supportés: JPG, PNG, SVG. Taille max: 5MB.
        </p>
      </div>
    </motion.div>
  );
};

export default PartyLogoSection;