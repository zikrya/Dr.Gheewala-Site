import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  const backgroundImage = 'https://normanrowemd.com/wp-content/uploads/2022/03/about.png';


  return (
    <div className="h-screen flex bg-black overflow-hidden">
      {/* Left Side - About Me Container with AOS animation */}
      <div className="w-1/2 p-12 space-y-6 text-white flex flex-col justify-center items-center" data-aos="fade-right" data-aos-offset="300">
        <h2 className="text-4xl font-bold">A B O U T</h2>
        <h1 className="text-6xl font-bold uppercase">Anup R. Gheewala, MD</h1>
        <p className="text-lg text-center">
          Our team at Anup R. Gheewala, MD is a group of experienced professionals...
          {/* Content truncated for brevity */}
        </p>
        <Link to='/about' className="bg-white text-black px-6 py-3 rounded-full font-medium shadow-md mt-8">
          About Us →
        </Link>
      </div>

      {/* Right Side - Image with AOS animation */}
      <div className="w-1/2 relative" data-aos="fade-left" data-aos-offset="300">
        {/* This div will have the background image */}
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      </div>
    </div>
  );
};

export default AboutMe;
