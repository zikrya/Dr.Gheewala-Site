import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">ANUP R. GHEEWALA, MD</h2>
            <p className="mt-2">Board Certified Plastic Surgeon</p>
            <p className="mt-2">3431 Guider Ave, Brooklyn, NY 11235</p>
            <p className="mt-2">Phone: (123) 456-7890</p>
            <p className="mt-2">Email: info@drgheewala.com</p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/faqs" className="hover:underline">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Hours of Operation</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 10:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>© 2024 ANUP R. GHEEWALA, MD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
