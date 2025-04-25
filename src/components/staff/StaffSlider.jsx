import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import company from "@config/company";

const StaffSlider = ({ staff = [] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const updateScrollState = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", updateScrollState);
    emblaApi.on("reInit", updateScrollState);
    updateScrollState();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Botón Izquierdo */}
      {canScrollPrev && (
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {/* Slider */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex justify-center gap-4">
          {staff.map((member, index) => (
            <a
              key={index}
              href={`/staff/${member.slug}`}
              className="flex flex-col items-center w-32 p-2"
            >
              <img
                src={member.data.photo || company.images.default.boy}
                alt={`Foto de ${member.data.fullName}`}
                className="w-24 h-24 object-cover rounded-full shadow-lg"
              />
              <h3 className="text-sm font-bold text-center mt-2">
                {member.data.fullName}
              </h3>
              <p className="text-xs text-gray-500 text-center">
                {member.data.roleIT[0]}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Botón Derecho */}
      {canScrollNext && (
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default StaffSlider;
