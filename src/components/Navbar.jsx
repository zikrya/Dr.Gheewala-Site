import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    // If the page has been scrolled down 50 pixels or more, set hasScrolled to true
    // Adjust this number based on when you want the Navbar to change color
    setHasScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-[1000] w-full transition-all duration-200 lg:px-8 py-2 lg:py-4 ${
        hasScrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center text-white px-4 lg:px-0'>
        <h1 className='text-xl lg:text-2xl'>Anup R. Gheewala, MD</h1>
        <nav className='hidden lg:flex space-x-4 text-lg'>
          <h2>Locations</h2>
          <h2>Free Virtual Consultations</h2>
          <h2>Contact</h2>
        </nav>
        {/* Optional: Implement a hamburger menu for mobile */}
      </div>
    </div>
  );
};

export default Navbar;
