import React from "react";

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  variant?: "blue" | "yellow" | "dark";
  location?: string;
  date?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  description,
  link,
  location,
  date,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center overflow-hidden  transition-shadow">
      <div className="w-full h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-[250px] md:h-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col justify-center">
        {date && (
          <p className="text-sm text-red-500 flex items-center mb-2">
            <span className="mr-2"></span> {date}
          </p>
        )}
        <h2 className="text-2xl md:text-3xl font-extrabold text-nfp-blue mb-4">
          {title}
        </h2>
        <p className="text-gray-600 mb-4">{description}</p>
        {location && (
          <p className="text-sm text-gray-500 mb-2"> {location}</p>
        )}
        <a
          href={link}
          className="text-nfp-blue font-semibold hover:underline inline-flex items-center"
        >
          Voir l’événement →
        </a>
      </div>
    </div>
  );
};

export default EventCard;
