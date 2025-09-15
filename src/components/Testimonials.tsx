import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/swiper-bundle.css";
import { testimonials } from "../data/testimonials";

const Testimonials: React.FC = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <section className="relative py-16 px-[10%] ">
            <div className="absolute bottom-0 left-1/4 w-1/2 h-1 border-b-4 border-nfp-blue z-0"></div>
            <div className="absolute left-0 top-1/4 h-1/2 w-1 border-l-4 border-nfp-blue z-0"></div>
            <div className="absolute right-0 top-1/4 h-1/2 w-1 border-r-4 border-nfp-blue z-0"></div>

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 items-center z-10">
                <div className="text-center lg:text-left">
                    <p className="text-[.8rem] md:text-[1.3rem] font-heading font-bold text-secondary mb-2">— Testimonials</p>
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2] mb-4">
                        Que disent les supporters
                    </h2>
                    <p className="leading-relaxed text-[.9rem] md:text-[1.07rem] text-black/70 max-w-3xl">
                        Découvrez pourquoi notre communauté fait confiance à notre mission et la soutient. Voici ce qu'ils disent de leur expérience avec nous.
                    </p>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        pagination={{
                            el: ".custom-pagination",
                            clickable: true,
                            renderBullet: (className) => {
                                return `<span class="${className} bg-nfp-yellow w-8 h-1 rounded-full mx-1 inline-block"></span>`;
                            },
                        }}
                        onSwiper={(swiper) => {
                            setSwiperInstance(swiper);
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2 },
                            1280: { slidesPerView: 3 },
                        }}
                        className="pb-16"
                    >
                        {testimonials.map((t) => (
                            <SwiperSlide key={t.id}>
                                <div className="bg-white rounded-lg shadow-lg p-6 relative h-[320px] transition-all duration-300 hover:shadow-xl flex flex-col">
                                    <div className="absolute top-4 right-4">
                                        <div className="w-10 h-10 bg-nfp-yellow rounded-full flex items-center justify-center">
                                            <FaQuoteRight className="text-white text-sm" />
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-4">
                                        <div className="relative">
                                            <img
                                                src={t.image}
                                                alt={t.name}
                                                className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                                            />
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-nfp-yellow rounded-full flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="font-bold text-lg text-gray-800">{t.name}</h3>
                                            <p className="text-nfp-yellow text-sm">{t.role}</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed overflow-hidden flex-grow">
                                        {t.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="custom-pagination flex justify-center mt-6"></div>
                    </Swiper>

                    <div className="absolute bottom-0 right-0 flex space-x-2 z-10">
                        <button
                            ref={prevRef}
                            className="w-10 h-10 bg-nfp-yellow rounded-full flex items-center justify-center text-white hover:bg-yellow-500 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button
                            ref={nextRef}
                            className="w-10 h-10 bg-nfp-yellow rounded-full flex items-center justify-center text-white hover:bg-yellow-500 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Animation gradient CSS */}
            <style>{`
        @keyframes borderGradient {
          0%, 100% { border-color: #1e40af; } /* border-nfp-blue */
          50% { border-color: #facc15; } /* border-nfp-yellow */
        }
        .animate-border-gradient {
          animation: borderGradient 3s infinite;
        }
      `}</style>
        </section>
    );
};

export default Testimonials;