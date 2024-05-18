import React from 'react';

const LocationBio = () => {
  const address = '3431 Guider Ave, Brooklyn, NY 11235';
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const images = [
    'https://source.unsplash.com/random/1920x1080/?brooklyn',
    'https://source.unsplash.com/random/1920x1080/?newyork',
    'https://source.unsplash.com/random/1920x1080/?city',
    'https://source.unsplash.com/random/1920x1080/?building',
    'https://source.unsplash.com/random/1920x1080/?architecture',
    'https://source.unsplash.com/random/1920x1080/?street'
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100 overflow-hidden">
      {/* Collage Background */}
      <div className="absolute inset-0 grid grid-cols-3 gap-2 p-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <div className="relative z-10 text-center text-white p-12 rounded-lg shadow-lg bg-black bg-opacity-60 max-w-4xl mx-auto">
        <h2 className="text-5xl font-semibold mb-6">Come See us!</h2>
        <p className="text-3xl font-light mb-8">{address}</p>
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-lg font-medium text-white bg-pink-600 rounded-full shadow-md hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-200 transition-transform transform hover:scale-105"
        >
          View on Google Maps →
        </a>
      </div>
    </div>
  );
};

export default LocationBio;

