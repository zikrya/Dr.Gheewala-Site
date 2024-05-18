import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
        from_phone: '',
      });

      const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
      };

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const result = await emailjs.send(
            'service_bfrvb31', // Replace it with your EmailJS service ID
            'template_abm51uf', // Replace it with your EmailJS template ID
            formData,
            '1Cy0GqiyBUo22RyuE' // Replace it with your EmailJS user ID
          );
          console.log('Email successfully sent!', result.text);
          // Clear form or show success message
        } catch (error) {
          console.error('Failed to send email. Error: ', error);
          // Show error message
        }
      };

      return (
        <div className="flex flex-col items-center bg-white py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-gray-800 mb-2">Schedule</h2>
          <p className="text-2xl font-light text-gray-800 mb-4">A Free Consultation</p>
          <p className="text-gray-600 text-sm mb-8">*Consult fee for cosmetic services only</p>
          <form className="w-full max-w-lg space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Name"
                className="border-b border-gray-400 w-full focus:outline-none focus:border-pink-300 transition duration-300 p-2"
              />
              <input
                type="text"
                name="from_phone"
                value={formData.from_phone}
                onChange={handleChange}
                placeholder="Phone"
                className="border-b border-gray-400 w-full focus:outline-none focus:border-pink-300 transition duration-300 p-2"
              />
            </div>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="Email"
              className="border-b border-gray-400 w-full focus:outline-none focus:border-pink-300 transition duration-300 p-2"
            />
            <textarea
              placeholder="How can we help?"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-b border-gray-400 w-full focus:outline-none focus:border-pink-300 transition duration-300 p-2"
              rows="4"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-pink-600 rounded-full shadow-md hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-200"
              >
                Send →
              </button>
            </div>
          </form>
        </div>
      );
}

export default ContactForm;

