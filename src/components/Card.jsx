import React from 'react';

function Card( { image, title, headline, url } ) {
  return (
    <div
      className="relative w-full h-64 md:h-80 overflow-hidden shadow-lg cursor-pointer"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={() => window.open(url, '_blank')}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
        <h2 className="text-white text-2xl md:text-3xl font-bree">{title}</h2>
        <p className="text-white text-sm md:text-sm md:mt-2">{headline}</p>
      </div>
    </div>
  );
}

export default Card;
