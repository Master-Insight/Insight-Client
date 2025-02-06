// src/components/SliderCard.jsx
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CardSamples from "../../components/samples/CardVerticalSamples";
import CardServices from "../../components/services/CardVerticalService";

const components = {
  CardServices,
  CardSamples,
};

const SliderCard = ({ title, collection, CardComponent }) => {
  // determina componente a usar
  const Component = components[CardComponent];
  if (!Component) {
    return <p>Error: Componente no encontrado</p>;
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // Se desactiva el loop para mejor control de las flechas
    align: "start",
    slidesToScroll: 1,
  });


  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [showArrows, setShowArrows] = useState(false);

  console.log("CardComponent recibido:", CardComponent);
  useEffect(() => {
    if (!emblaApi) return;
    console.log("Embla inicializado", emblaApi);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    // Determinar si las flechas deben mostrarse (si hay más elementos que los visibles)
    const totalSlides = collection.length;
    const visibleSlides = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;

    setShowArrows(totalSlides > visibleSlides);

    updateButtons();
  }, [emblaApi, collection.length]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla w-full relative overflow-hidden">
      {/* Título */}
      <h2 className="text-4xl font-bold text-center mb-8 font-title text-primary-DEFAULT">
        {title}
      </h2>

      {/* Carrusel */}
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex justify-evenly">
          {collection.map((item, index) => (
            <div
              className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-2"
              key={index}
            >
              <Component item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Flechas de navegación (solo si es necesario) */}
      {showArrows && (
        <>
          <button
            className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md ${canScrollPrev ? "opacity-100" : "opacity-50 cursor-not-allowed"
              }`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            ←
          </button>
          <button
            className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md ${canScrollNext ? "opacity-100" : "opacity-50 cursor-not-allowed"
              }`}
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            →
          </button>
        </>
      )}
    </div>
  );
};

export default SliderCard;
