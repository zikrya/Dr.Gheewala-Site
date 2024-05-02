import React from 'react';

const Doctor = () => {
  return (
    <div className="flex flex-col md:flex-row items-start bg-gray-50 p-4 md:p-8 gap-4 md:gap-8">
      <div className="flex flex-col bg-white p-4 md:p-6 rounded-lg shadow-md w-full md:w-1/3 h-[435px]">
        <img
          src="./dr-anup-gheewala.jpeg"
          alt="Dr. Norman M. Rowe"
          className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-gray-300 mx-auto"
        />
        <div className="text-center mt-4 md:mt-0">
          <h2 className="text-xl md:text-2xl font-semibold">Dr. Anup R. Gheewala MD</h2>
          <p className="text-sm md:text-md mt-2">Board Certified Plastic Surgeon</p>
          <a
            href="/profile"
            className="text-red-600 hover:text-red-800 transition-colors mt-4 text-xs md:text-sm"
          >
            VIEW PROFILE →
          </a>
        </div>
      </div>
      <div className='flex flex-col gap-4 md:w-2/3'>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <blockquote className="text-md italic">
        "excellent doctor! with extensive experience in his field of plastic surgery. With a big responsive heart and sensitive towards patients. I am very pleased with the work of this doctor and his individual attitude towards everyone who needs his help. Thank you for prolonging our youth and self-confidence"
        </blockquote>
        <p className="mt-4 text-right text-sm">— Dina Kogan</p>
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <blockquote className="text-md italic">
        "I would like to thank Dr. Anup R. Gheewala. Last year, my child had a tick's head embedded in his cheek, almost near the eye. No one could pull out this piece, the child was four years old and he did not sit still. The doctor not only was able to pull out a tiny piece of the tick, he did it flawless. The child did not have a trace of it left. I am very grateful and impressed with this doctor's professionalism."
        </blockquote>
        <p className="mt-4 text-right text-sm">— kate spasskova</p>
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <blockquote className="text-md italic">
        "I was so impressed with Dr. Gheewala. His expertise, communication skills, and excellent mannerism was superb. I was so happy with my results words cannot express it. His staff was also pleasant and made me feel comfortable throughout my whole process. Highly. Highly recommended."
        </blockquote>
        <p className="mt-4 text-right text-sm">— Donna Armstrong</p>
      </div>
      </div>
    </div>
  );
};

export default Doctor;

