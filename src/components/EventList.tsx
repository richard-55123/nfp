import { useState } from "react";
import { events } from "../data/events";
import EventCard from "./CartEvent";

function EvenementList() {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;
  const totalPages = Math.ceil(events.length / eventsPerPage);

  // Calculer les événements à afficher sur la page actuelle
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Gérer le changement de page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Générer les boutons de pagination
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    // Bouton Première page
    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-3 py-1 border rounded bg-white text-gray-700"
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(
          <span key="start-ellipsis" className="text-gray-600">
            ...
          </span>
        );
      }
    }

    // Boutons de pagination
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 border rounded ${currentPage === i
            ? "bg-nfp-blue text-white"
            : "bg-white text-gray-700"
            }`}
        >
          {i}
        </button>
      );
    }

    // Bouton Dernière page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="end-ellipsis" className="text-gray-600">
            ...
          </span>
        );
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-1 border rounded bg-white text-gray-700"
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <section className="px-[10%] py-12 bg-gray-50">
      <div className="mb-8">
        <div className="w-[6rem] h-1 bg-nfp-yellow mb-2"></div>
        <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2] mb-6">Événements à venir</h2>
        <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 max-w-3xl mb-4">
          Il y a {events.length} événements à venir - Page {currentPage} / {totalPages}
        </p>

        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {renderPaginationButtons()}
        </div>
      </div>

      <hr className="border-gray-300 mb-8" />

      {currentEvents.length > 0 && (
        <div className="bg-white mb-8 overflow-hidden">
          <div className="relative w-full h-72 md:h-96">
            <img
              src={currentEvents[0].image}
              alt={currentEvents[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <h2 className="text-white text-xl md:text-3xl font-heading font-bold">
                {currentEvents[0].title}
              </h2>
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-500 mb-4">
              {currentEvents[0].date} | {currentEvents[0].location}
            </p>
            <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 max-w-3xl mb-4">
              {currentEvents[0].description}
            </p>
            <a
              href={currentEvents[0].link}
              className="text-nfp-blue font-semibold hover:underline"
            >
              + INFO
            </a>
          </div>
        </div>

      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70">Événements à venir</h3>
            <div className="flex gap-2">
              <button
                className="text-nfp-yellow font-semibold disabled:text-gray-400"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                ◀ Prev
              </button>
              <button
                className="text-nfp-yellow font-semibold disabled:text-gray-400"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next ▶
              </button>
            </div>
          </div>

          <div className="space-y-6 ">
            {currentEvents.slice(1).map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6  sticky top-4">
            <h3 className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-black/70 mb-4">Event List</h3>
            <ul className="space-y-4">
              {events.map((event, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 items-start pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
                >
                  <div className="flex-shrink-0 mt-1">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 max-w-3xl">{event.title}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {event.date} | {event.location}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EvenementList;