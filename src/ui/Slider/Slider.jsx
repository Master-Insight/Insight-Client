import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = ({ images = [], title, slidesPerView = 1 }) => {
  if (!images || images.length === 0) return <p>No hay imágenes disponibles</p>;

  console.log("✅ Slider montado");
  console.log("🔗 Imágenes recibidas:", images);
  console.log("📌 Swiper importado correctamente:", Swiper);

  return (
    <div className="relative w-full h-[300px] md:h-[400px]">
      <Swiper
        onSwiper={(swiper) => console.log("✅ Swiper inicializado:", swiper)}
        slidesPerView={slidesPerView}
        spaceBetween={10}
        loop={true} // 🔥 Asegura que el slider sea continuo
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
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

      {/* 🔥 Flechas de navegación personalizadas */}
      <div className="swiper-button-prev custom-prev"></div>
      <div className="swiper-button-next custom-next"></div>
    </div>
  );
};

export default Slider;
