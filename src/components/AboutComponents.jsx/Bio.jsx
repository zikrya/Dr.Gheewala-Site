import React from 'react';
import { motion } from 'framer-motion';

const Bio = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-blue-50 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            Elevate Your Essence with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
              New York's Premier
            </span>{' '}
            Plastic Surgery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              Embrace the artistry of aesthetic transformation with Dr. Anup R. Gheewala, a maestro of plastic surgery based in Brooklyn. With a storied 20-year history and partnerships with illustrious institutions like NYC Health and Long Island Jewish Medical Center, Dr. Gheewala blends unparalleled skill with compassionate care across a spectrum of reconstructive and cosmetic services.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <div className="text-3xl font-bold text-pink-600 mb-1">20+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">5k+</div>
                <div className="text-sm text-gray-600">Procedures</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Insurance & Accessibility</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Accessibility is paramount; hence, Dr. Gheewala welcomes a variety of insurance plans including:
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {['Medicare', 'Blue Cross', 'United Healthcare', 'Aetna', 'Cigna', 'Oxford'].map((insurance) => (
                <li key={insurance} className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{insurance}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bio;


