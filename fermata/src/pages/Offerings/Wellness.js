import React from 'react';
import { Link } from 'react-router-dom';


const Wellness = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-900 mb-4">Wellness Programs</h1>
      <img src="/images/wellness.jpg" alt="Wellness Programs" className="w-full h-64 object-cover mb-4 rounded-lg shadow-md" />
      <p className="text-lg text-gray-800 mb-4">
        Our Wellness Programs offer 7–21 day immersive journeys designed to reset your body and mind through nutrition, rest, and movement. 
        Experience a holistic approach to wellness that nurtures your physical, mental, and spiritual well-being.
      </p>
      <h2 className="text-2xl font-semibold text-green-800 mb-2">What to Expect:</h2>
      <ul className="list-disc list-inside mb-4 text-gray-800">
        <li>Personalized nutrition plans</li>
        <li>Guided meditation and mindfulness sessions</li>
        <li>Physical activities tailored to your needs</li>
        <li>Supportive community environment</li>
      </ul>
      <h2 className="text-2xl font-semibold text-green-800 mb-2">Join Us:</h2>
      <p className="text-lg text-gray-800 mb-6">
        Whether you're looking to rejuvenate your body, clear your mind, or reconnect with your spirit, our Wellness Programs are here to guide you on your journey.
      </p>
      <div className="text-center">
        <a
          href="https://wa.me/27832933334?text=Hi%20Fermata!%20I'm%20interested%20in%20the%20Wellness%20Programs."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-900 text-white py-3 px-8 rounded-full text-lg font-medium shadow-lg hover:bg-green-800 transition"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Wellness;