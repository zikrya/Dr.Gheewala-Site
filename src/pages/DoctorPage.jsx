import React, { useState } from 'react';
import Footer from '../components/Footer';

const DoctorPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const content = {
    overview: () => (
      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        Dr. Anup R. Gheewala is a plastic surgeon in Brooklyn, New York and is affiliated with multiple hospitals in the area. He received his medical degree from Topiwala National Medical College and has been in practice for over 20 years.
      </p>
    ),
    specialization: () => (
      <>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Specialization Areas</h3>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">Plastic surgeons repair or replace skin tissue, bone, and other tissues. They also do reconstructive surgery on hands and face (craniofacial).</p>
        <ul className="list-disc pl-8 text-gray-700 leading-relaxed text-lg space-y-2">
          <li>Aesthetic/Cosmetic Plastic Surgery</li>
          <li>Breast Reconstruction</li>
          <li>Hand</li>
          <li>Facial Plastic and Reconstructive Surgery</li>
        </ul>
      </>
    ),
    training: () => (
      <>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Training and Education</h3>
        <ul className="list-disc pl-8 text-gray-700 leading-relaxed text-lg space-y-2">
          <li>BronxCare Health System - Residency, Surgery, 1984-1990</li>
          <li>SUNY Downstate Health Sciences University - Residency, Plastic Surgery, 1990-1993</li>
          <li>Topiwala National Medical College - Medical School</li>
        </ul>
      </>
    ),
    certifications: () => (
      <>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Certifications & Licensure</h3>
        <ul className="list-disc pl-8 text-gray-700 leading-relaxed text-lg space-y-2">
          <li>American Board of Plastic Surgery - Certified in Plastic Surgery</li>
          <li>NJ State Medical License - Active through</li>
          <li>NY State Medical License - Active through 2026</li>
        </ul>
      </>
    ),
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto max-w-5xl bg-white shadow-lg rounded-lg">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-blue-600 rounded-l-lg p-8 flex flex-col items-center">
            <img
              src="./dr-anup-gheewala.jpeg"
              alt="Dr. Anup R. Gheewala"
              className="w-56 h-56 rounded-full border-4 border-white shadow-md"
            />
            <div className="mt-6 text-white text-center">
              <h1 className="text-3xl font-bold">Dr. Anup R. Gheewala</h1>
              <p className="text-lg mt-2">Board Certified Plastic Surgeon</p>
            </div>
            <div className="flex flex-col w-full mt-8">
              {Object.keys(content).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`py-4 text-white w-full ${activeTab === key ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-700 focus:outline-none transition duration-300 mt-2 rounded-lg`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3 p-8">
            <div className="bg-gray-50 p-10 rounded-lg shadow-md min-h-screen">
              {content[activeTab]()}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DoctorPage;

