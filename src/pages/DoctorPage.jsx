import React, { useState } from 'react';

const DoctorPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const content = {
      overview: () => (
        <p>
          Dr. Anup R. Gheewala is a plastic surgeon in Brooklyn, New York and is affiliated with multiple hospitals in the area. He received his medical degree from Topiwala National Medical College and has been in practice for over 20 years.
        </p>
      ),
      specialization: () => (
        <>
          <h3 className="text-lg font-bold mb-4">Specialization Areas</h3>
          <p>Plastic surgeons repair or replace skin tissue, bone, and other tissues. They also do reconstructive surgery on hands and face (craniofacial).</p>
          <ul className="list-disc pl-8">
            <li>Aesthetic/Cosmetic Plastic Surgery</li>
            <li>Breast Reconstruction</li>
            <li>Hand</li>
            <li>Facial Plastic and Reconstructive Surgery</li>
          </ul>
        </>
      ),
      training: () => (
        <>
          <h3 className="text-lg font-bold">Training and Education</h3>
          <ul className="list-disc pl-8">
            <li><p>BronxCare Health System - Residency, Surgery, 1984-1990</p></li>
            <li><p>SUNY Downstate Health Sciences University - Residency, Plastic Surgery, 1990-1993</p></li>
            <li><p>Topiwala National Medical College - Medical School</p></li>
          </ul>
        </>
      ),
      certifications: () => (
        <>
          <h3 className="text-lg font-bold">Certifications & Licensure</h3>
          <ul className="list-disc pl-8">
            <li><p>American Board of Plastic Surgery - Certified in Plastic Surgery</p></li>
            <li><p>NJ State Medical License - Active through</p></li>
            <li><p>NY State Medical License - Active through 2026</p></li>
          </ul>
        </>
      )
    };

    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto bg-white shadow-lg rounded-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/4 bg-blue-500 rounded-l-lg p-5 flex flex-col items-center">
              <img
                src="./dr-anup-gheewala.jpeg"
                alt="Dr. Anup R. Gheewala"
                className="w-40 h-40 rounded-full border-4 border-white"
              />
              <div className="mt-4 text-white text-center">
                <h1 className="text-xl font-bold">Dr. Anup R. Gheewala</h1>
                <p className="text-md">Board Certified Plastic Surgeon</p>
              </div>
              <div className="flex flex-col w-full mt-6">
                {Object.keys(content).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`py-2 text-white w-full ${activeTab === key ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-700 focus:outline-none transition duration-300`}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:w-3/4 p-5">
              {content[activeTab]()}
            </div>
          </div>
        </div>
      </div>
    );
};

export default DoctorPage;
