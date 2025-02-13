// src/components/samples/CardVerticalSamples.jsx
import React from 'react';

const CardVerticalSamples = ({ item }) => {
  const { title, description, users, media, deploy, images, slug } = item;

  return (
    <div className="w-72 mx-auto">
      <a href={`/samples/${slug}`}>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between gap-4 hover:shadow-lg transform hover:scale-105 transition-all min-h-[400px]">
          {/* Imagen del sample */}
          {images && images.length > 0 && (
            <img
              src={images[0]}
              alt={title}
              className="rounded-lg h-40 w-full object-cover"
            />
          )}

          {/* Título del sample */}
          <h3 className="text-xl font-bold">{title}</h3>

          {/* Descripción del sample */}
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>

          {/* Información adicional (usuarios y despliegue) */}
          <div className="text-gray-800 text-sm">
            {users && (
              <p>
                <strong>Usuarios relacionados:</strong> {users.join(', ')}
              </p>
            )}
            {deploy && (
              <p className='-mb-12'>
                <strong>Despliegue:</strong>{' '}
                <a
                  href={deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  {deploy}
                </a>
              </p>
            )}
          </div>

          {/* Botones para ver medios */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {media &&
              media.map((url, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-white text-xs font-bold py-1 px-2 rounded-full hover:bg-secondary-dark transition-colors"
                >
                  Ver Medio
                </a>
              ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardVerticalSamples;