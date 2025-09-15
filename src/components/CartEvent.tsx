import React from "react";

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  date?: string;
  location?: string;
}

const EventCard: React.FC<EventCardProps> = ({ 
  image, 
  title, 
  description, 
  link, 
  date, 
  location 
}) => {
  // Gestion de la date si elle est undefined
  let day = "N/A";
  let month = "N/A";
  let year = "N/A";
  
  if (date) {
    const eventDate = new Date(date);
    day = eventDate.getDate().toString();
    month = eventDate.toLocaleString("en-US", { month: "short" });
    year = eventDate.getFullYear().toString();
  }

  return (
    <div className="flex flex-col md:flex-row overflow-hidden border-b h-48">
      
      <div className="relative md:w-2/5 h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 bg-nfp-blue text-white px-2 py-1 text-center rounded text-xs">
          <span className="block font-bold">{day}</span>
          <span className="block">{month}</span>
          <span className="block">{year}</span>
        </div>
      </div>

      <div className="md:w-3/5 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70 mb-1 line-clamp-1">{title}</h2>
          <p className="text-gray-500 text-sm mb-1">{date} | {location}</p>
          <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 max-w-3xl line-clamp-2">{description}</p>
        </div>
        <a href={link} className="text-nfp-blue font-semibold text-sm hover:underline mt-2">
          + INFO
        </a>
      </div>
    </div>
  );
};

export default EventCard;