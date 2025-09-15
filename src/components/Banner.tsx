import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Banner {
  title: string;
  subtitle?: string;
  bgImage: string;
  overlayColor?: string;
}

interface Lien {
  name: string;
  href: string;
}

const Banner: React.FC<Banner> = ({
  title,
  subtitle,
  bgImage,
  overlayColor = "bg-black/70",
}) => {
  const location = useLocation();

  // Vos liens définis
  const liens: Lien[] = [
    { name: "Accueil", href: "/" },
    { name: "Qui sommes-nous ?", href: "/about" },
    { name: "Partis membres", href: "/partis" },
    { name: "Évènements", href: "/evenements" },
    { name: "Contact", href: "/contact" },
  ];

  // Trouver le nom de la page active basé sur l'URL
  const getActivePageName = () => {
    if (location.pathname === "/") return "Accueil";

    const matchingLink = liens.find(lien =>
      lien.href !== "/" && location.pathname.startsWith(lien.href)
    );

    return matchingLink ? matchingLink.name : "";
  };

  const generateBreadcrumbs = () => {
    const activePageName = getActivePageName();

    return (
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-white/80 hover:text-white transition-colors">
          Accueil
        </Link>
        {activePageName && activePageName !== "Accueil" && (
          <>
            <span className="text-white/50">/</span>
            <span className="text-white font-medium">{activePageName}</span>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="relative h-[60vh] min-h-[500px] overflow-hidden px-[10%] flex flex-col justify-center">
      <img
        src={bgImage}
        alt="banniere"
        className="absolute w-full h-full object-cover top-0 left-0 z-0"
      />

      <div className={`absolute w-full h-full top-0 left-0 ${overlayColor}`}></div>

      {/* Fil d'Ariane en bas à gauche */}
      <div className="absolute bottom-6 left-8 z-10">
        <div className="flex items-center text-sm md:text-base bg-black/40 backdrop-blur-sm px-4 py-2">
          {generateBreadcrumbs()}
        </div>
      </div>

      <div className="relative flex flex-col gap-5 w-full md:w-[70%] lg:w-[60%] border border-4 p-4 border-r-0 border-t-0 border-primary">
        <h1 className="text-[1.8rem] sm:text-[2.2rem] md:text-[3.2rem] leading-[1.2] text-white font-extrabold drop-shadow-lg animate-fadeInUp">
          {title}
        </h1>
        {subtitle && (
          <span className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-gray-100 font-medium drop-shadow animate-fadeInUp">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default Banner;