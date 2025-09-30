import React from "react";

interface ImageSectionProps {
  src: string;
  alt?: string;
  caption?: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ src, alt = "Image", caption }) => {
  return (
    <section className="w-full py-16 bg-nfp.white flex flex-col items-center justify-center">
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-soft">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
        />
        {caption && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-nfp.blue text-nfp.white text-sm sm:text-base px-4 py-2 rounded-xl shadow-bold">
            {caption}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageSection;
