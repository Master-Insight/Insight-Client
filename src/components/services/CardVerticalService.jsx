// src/components/services/CardVertical.jsx
import React from 'react';

const CardVerticalService = ({ item }) => {
  const { title, description, id, price, maintenance, image, tags } = item
  return (
    <div className="w-72 mx-auto">
      <a href={`/services/${id}`}>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-evenly hover:shadow-lg transform hover:scale-105 transition-all min-h-[466px]">
          {/* Imagen del servicio */}
          <img
            src={image}
            alt={title}
            className="rounded-lg h-40 w-full object-cover"
          />

          {/* Título del servicio */}
          <h3 className="text-xl font-bold">{title}</h3>

          {/* Descripción del servicio */}
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>

          {/* Precio y mantenimiento (opcional) */}
          {/* <div className="text-gray-800 text-sm">
            <p><strong>Precio:</strong> ${price}</p>
            <p><strong>Mantenimiento:</strong> ${maintenance}/mes</p>
          </div> */}

          {/* Etiquetas (tags) */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary text-white text-xs font-bold py-1 px-2 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardVerticalService;