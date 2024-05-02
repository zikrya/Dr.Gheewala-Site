import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const location = useLocation(); // Get location object
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    // Apply scroll logic only on the homepage
    if (location.pathname === '/') {
      setHasScrolled(window.scrollY > 50);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]); // Re-run effect when path changes

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine navbar background based on path and scroll position
  const navbarClass = location.pathname === '/' && !hasScrolled ? 'bg-transparent' : 'bg-black';

  return (
    <div className={`sticky top-0 z-[1000] w-full transition-all duration-200 p-5 ${navbarClass}`}>
      <div className='flex justify-between items-center px-4 py-2 text-white'>
        <h1 className='text-xl'>ANUP R. GHEEWALA, MD</h1>
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
        </button>
        {/* The main nav now always hidden, shown via menu button */}
        <nav className={`fixed inset-0 bg-black bg-opacity-90 w-full h-full flex flex-col items-center justify-between transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={toggleMenu} className="self-end p-4">
            <XMarkIcon className="h-8 w-8 text-white" />
          </button>
          <div className="flex flex-col items-center justify-center space-y-8">
            <Link to="/" className="text-white text-2xl">Home</Link>
            <Link to="/about" className="text-white text-2xl">About Us</Link>
            <a href="#breast" className="text-white text-2xl">Breast</a>
            <a href="#body" className="text-white text-2xl">Body</a>
            <a href="#face" className="text-white text-2xl">Face</a>
          </div>
          <div className="pb-8">
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;



