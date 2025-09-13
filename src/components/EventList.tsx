import { events } from "../data/events";
import EventCard from "./CartEvent";

function EvenementList() {
  return (
    <section className="px-[10%] py-16 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-nfp-blue">
        Nos Événements à Venir
      </h1>

      <div className="flex flex-col gap-12">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
}

export default EvenementList;
