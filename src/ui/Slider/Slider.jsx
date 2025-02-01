import useEmblaCarousel from "embla-carousel-react";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Slider = ({ images = [] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);

  // Función para actualizar el índice cuando cambia el slide
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect(); // Establece el índice inicial
  }, [emblaApi]);

  // Navegar a un slide específico (para los dots)
  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  // Manejo del clic en la imagen para hacer zoom
  const toggleZoom = (image) => {
    setZoomedImage(zoomedImage === image ? null : image);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Slider principal */}
      <div className="overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <div className="flex-none w-full cursor-pointer" key={index} onClick={() => toggleZoom(img)}>
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots de navegación */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? "bg-blue-500 scale-125" : "bg-gray-400"
              }`}
          />
        ))}
      </div>

      {/* Imagen en Zoom */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
          >
            <motion.img
              src={zoomedImage}
              alt="Imagen ampliada"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Slider;
