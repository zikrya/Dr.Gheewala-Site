import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import AboutMe from '../components/AboutMe';
import HomeSlideShow from '../components/HomeSlideShow';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration of animations in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <HomeSlideShow />
      <div data-aos="fade-up" className='pt-3'> {/* AOS animation */}
        <AboutMe />
      </div>
    </>
  );
};

export default Home;
