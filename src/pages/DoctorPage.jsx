import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';

const DoctorPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'user' },
    { id: 'specialization', label: 'Specialization', icon: 'star' },
    { id: 'training', label: 'Training', icon: 'graduation-cap' },
    { id: 'certifications', label: 'Certifications', icon: 'certificate' },
  ];

  const content = {
    overview: {
      title: "Overview",
      content: "Dr. Anup R. Gheewala is a distinguished plastic surgeon in Brooklyn, New York, affiliated with multiple prestigious hospitals in the area. With over two decades of transformative experience, he combines artistic vision with surgical precision to help patients achieve their aesthetic goals. Dr. Gheewala received his medical degree from Topiwala National Medical College and has since established himself as a leading figure in plastic and reconstructive surgery."
    },
    specialization: {
      title: "Areas of Expertise",
      content: [
        {
          title: "Aesthetic/Cosmetic Plastic Surgery",
          description: "Comprehensive facial rejuvenation, body contouring, and aesthetic enhancement procedures"
        },
        {
          title: "Breast Reconstruction",
          description: "Advanced techniques in breast reconstruction and augmentation"
        },
        {
          title: "Hand Surgery",
          description: "Specialized procedures for hand trauma, reconstruction, and aesthetic improvement"
        },
        {
          title: "Facial Plastic and Reconstructive Surgery",
          description: "Innovative approaches to facial restoration and enhancement"
        }
      ]
    },
    training: {
      title: "Training and Education",
      content: [
        {
          period: "1990-1993",
          institution: "SUNY Downstate Health Sciences University",
          role: "Residency, Plastic Surgery",
          location: "New York"
        },
        {
          period: "1984-1990",
          institution: "BronxCare Health System",
          role: "Residency, Surgery",
          location: "New York"
        },
        {
          period: "1980-1984",
          institution: "Topiwala National Medical College",
          role: "Medical School",
          location: "Mumbai, India"
        }
      ]
    },
    certifications: {
      title: "Certifications & Licensure",
      content: [
        {
          title: "American Board of Plastic Surgery",
          status: "Board Certified in Plastic Surgery",
          icon: "verified"
        },
        {
          title: "New York State Medical License",
          status: "Active through 2026",
          icon: "check-circle"
        },
        {
          title: "New Jersey State Medical License",
          status: "Active",
          icon: "check-circle"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-[400px]">
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl overflow-hidden shadow-xl">
              <div className="px-8 pt-12 pb-8 text-center">
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
                  <img
                    src="/dr-anup-gheewala.jpeg"
                    alt="Dr. Anup R. Gheewala"
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                  />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Dr. Anup R. Gheewala
                </h1>
                <p className="text-rose-100 text-lg mb-4">
                  Board Certified Plastic Surgeon
                </p>
                <div className="flex justify-center gap-2">
                  <span className="px-4 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm">
                    20+ Years Experience
                  </span>
                  <span className="px-4 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm">
                    Board Certified
                  </span>
                </div>
              </div>

              <div className="px-4 pb-8">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full px-6 py-4 text-left rounded-xl transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-white text-rose-600 shadow-lg'
                          : 'text-white hover:bg-white/10 hover:shadow-md'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[600px]"
                >
                  {activeTab === 'overview' ? (
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-600 leading-relaxed">
                        {content[activeTab].content}
                      </p>
                    </div>
                  ) : activeTab === 'specialization' ? (
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                        {content[activeTab].title}
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {content[activeTab].content.map((item, index) => (
                          <div
                            key={index}
                            className="bg-rose-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                          >
                            <h3 className="font-semibold text-rose-600 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : activeTab === 'training' ? (
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                        {content[activeTab].title}
                      </h2>
                      <div className="space-y-6">
                        {content[activeTab].content.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl"
                          >
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {item.institution}
                              </h3>
                              <p className="text-rose-600">{item.role}</p>
                              <p className="text-gray-500 text-sm">
                                {item.location}
                              </p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <span className="inline-block px-4 py-1 bg-white rounded-full text-rose-600 text-sm font-medium shadow-sm">
                                {item.period}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                        {content[activeTab].title}
                      </h2>
                      <div className="space-y-6">
                        {content[activeTab].content.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-4 p-6 bg-white border border-rose-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                              <svg
                                className="w-6 h-6 text-rose-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {item.title}
                              </h3>
                              <p className="text-rose-600">{item.status}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorPage;