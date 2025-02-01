import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({ images = [], title, slidesPerView = 1 }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  if (!images || images.length === 0) return <p>No hay imágenes disponibles</p>;

  return (
    <div className="relative w-full h-[300px] md:h-[400px]">
      <Swiper
        onSwiper={(swiper) => {
          // Esperar a que se rendericen las flechas para asignar los refs
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy(); // Destruye la navegación actual
            swiper.navigation.init();    // Re-inicializa la navegación
            swiper.navigation.update();  // Actualiza la navegación
          }, 0);
          console.log("✅ Swiper inicializado:", swiper);
        }}
        slidesPerView={slidesPerView}
        spaceBetween={10}
        loop={true}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Imagen ${index + 1} de ${title}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flechas de navegación con refs */}
      <div ref={prevRef} className="swiper-button-prev custom-prev" />
      <div ref={nextRef} className="swiper-button-next custom-next" />
    </div>
  );
};

export default Slider;
