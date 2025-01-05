import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Doctor = () => {
  const testimonials = [
    {
      quote: "Excellent doctor with extensive experience in plastic surgery. With a big responsive heart and sensitive towards patients. I am very pleased with the work of this doctor and his individual attitude towards everyone who needs his help. Thank you for prolonging our youth and self-confidence",
      author: "Dina Kogan",
      role: "Patient"
    },
    {
      quote: "I would like to thank Dr. Anup R. Gheewala. Last year, my child had a tick's head embedded in his cheek, almost near the eye. No one could pull out this piece, the child was four years old and he did not sit still. The doctor not only was able to pull out a tiny piece of the tick, he did it flawlessly. The child did not have a trace of it left. I am very grateful and impressed with this doctor's professionalism.",
      author: "Kate Spasskova",
      role: "Parent"
    },
    {
      quote: "I was so impressed with Dr. Gheewala. His expertise, communication skills, and excellent mannerism was superb. I was so happy with my results words cannot express it. His staff was also pleasant and made me feel comfortable throughout my whole process. Highly, highly recommended.",
      author: "Donna Armstrong",
      role: "Patient"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Doctor Profile Card */}
        <div className="lg:w-[400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            <div className="aspect-[4/5] relative">
              <img
                src="/dr-anup-gheewala.jpeg"
                alt="Dr. Anup R. Gheewala"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Dr. Anup R. Gheewala MD
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Board Certified Plastic Surgeon
              </p>
              <div className="flex justify-center gap-3 mb-6">
                <span className="px-4 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">
                  20+ Years Experience
                </span>
                <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                  Board Certified
                </span>
              </div>
              <Link
                to="/dr-anup-gheewala"
                className="block w-full py-3 px-6 text-center text-white font-medium rounded-full bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 transition-all duration-300"
              >
                View Full Profile
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="flex-1 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 relative"
            >
              <div className="absolute top-8 left-8 text-pink-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="pl-12">
                <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;