// src/components/SliderCard.jsx
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const SliderCard = ({ title, collection, CardComponent }) => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToShow: 2 }, // 2 elementos en pantallas pequeñas
      '(min-width: 1024px)': { slidesToShow: 4 }, // 4 elementos en pantallas grandes
    },
  });

  return (
    <div className="embla w-full overflow-hidden">
      {/* Título del Slider */}
      <h2 className="text-4xl font-bold text-center mb-8 font-title text-primary-DEFAULT">
        {title}
      </h2>

      {/* Contenedor del Carrusel */}
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex justify-evenly">
          {collection.map((item, index) => (
            <div
              className="embla__slide flex-[0_0_calc(100%/4)] min-w-0 sm:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/4)]"
              key={index}
            >
              <CardComponent item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderCard;