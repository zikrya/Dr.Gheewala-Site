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
    <div className="bg-white shadow-md rounded-xl p-8 max-w-2xl mx-auto my-12">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">Schedule A Free Consultation</h2>
      <p className="text-gray-600 text-sm mb-8">*Consult fee for cosmetic services only</p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Name"
            className="border-b-2 border-gray-200 w-full focus:outline-none focus:border-pink-300 transition duration-300"
          />
          <input
            type="text"
            name='from_phone'
            value={formData.from_phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border-b-2 border-gray-200 w-full focus:outline-none focus:border-pink-300 transition duration-300"
          />
        </div>
        <input
          type="email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          placeholder="Email"
          className="border-b-2 border-gray-200 w-full focus:outline-none focus:border-pink-300 transition duration-300"
        />
        <textarea
          placeholder="How can we help?"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="border-b-2 border-gray-200 w-full focus:outline-none focus:border-pink-300 transition duration-300"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-pink-600 to-pink-200 group-hover:from-pink-600 group-hover:to-pink-200 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
            Send →
          </span>
        </button>
      </form>
    </div>
  )
}

export default ContactForm;

