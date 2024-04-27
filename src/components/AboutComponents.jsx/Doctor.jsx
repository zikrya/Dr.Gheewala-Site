import React from 'react';

const Doctor = () => {
  return (
    <div className="flex flex-row items-start bg-gray-50 p-8">
      <div className="flex flex-col items-center mr-12">
        <img src="./dr-anup-gheewala.jpeg" alt="Dr. Norman M. Rowe" className="w-48 h-48 object-cover rounded-full border-4 border-gray-300" />
        <h2 className="text-xl font-semibold mt-4">Dr. Norman M. Rowe</h2>
        <p className="text-md">Board Certified Plastic Surgeon</p>
        <a href="/profile" className="text-red-600 hover:text-red-800 transition-colors mt-2 text-sm">
          VIEW PROFILE →
        </a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <blockquote className="text-md italic">
          "Had a fabulous experience for breast augmentation with Dr. Rowe and his staff. I was very apprehensive about the whole process as I wanted very small, natural implants, and was overwhelmed with information. But this staff and practice made the process seamless and helped me choose the RIGHT implant."
        </blockquote>
        <p className="mt-4 text-right text-sm">— A Grateful Patient</p>
      </div>
    </div>
  );
};

export default Doctor;

