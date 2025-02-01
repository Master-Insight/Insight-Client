const Slider = ({ images = [], title, slidesPerView = 1 }) => {
  if (!images || images.length === 0) return <p>No hay imágenes disponibles</p>;

  return (
    <div className="relative w-full h-[300px] md:h-[400px]">
      <p>aca va carousel</p>
    </div>
  );
};

export default Slider;
