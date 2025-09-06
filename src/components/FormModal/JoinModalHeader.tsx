import { HiX } from 'react-icons/hi';

interface JoinModalHeaderProps {
  onClose: () => void;
}

const JoinModalHeader = ({ onClose }: JoinModalHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-nfp-blue to-nfp-blue/90 text-white p-4 md:p-6 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <div className="bg-white p-1 shadow-lg rounded">
          <img src="/NFP.png" alt="Logo NFP" className="h-14 w-14 md:h-16 md:w-16 object-contain" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold">Rejoindre le Mouvement</h3>
          <p className="text-sm text-white/80">Nouvelles Forces Politiques</p>
        </div>
      </div>
      <button 
        onClick={onClose}
        className="text-white hover:text-white/70 transition-colors p-1 hover:bg-white/10 rounded"
        aria-label="Fermer"
      >
        <HiX className="text-2xl md:text-3xl" />
      </button>
    </div>
  );
};

export default JoinModalHeader;