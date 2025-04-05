import React from 'react';

const Detox = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-900 mb-4">Digital Detox</h1>
      <img src="/images/detox.jpg" alt="Digital Detox" className="w-full h-64 object-cover mb-6" />
      <p className="text-lg text-gray-800 mb-4">
        Unplug from distractions and reconnect with nature, peace, and your core self. Our Digital Detox program is designed to help you step away from the noise of everyday life and immerse yourself in a serene environment.
      </p>
      <h2 className="text-2xl font-semibold text-green-800 mb-2">What to Expect:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Guided nature walks to rejuvenate your spirit.</li>
        <li>Mindfulness and meditation sessions to center your thoughts.</li>
        <li>Workshops on healthy habits and self-care practices.</li>
        <li>Time for reflection and personal growth.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-green-800 mb-2">Duration:</h2>
      <p className="text-lg text-gray-800 mb-4">Our Digital Detox program ranges from 3 to 7 days, allowing you to choose the experience that best fits your needs.</p>
      <h2 className="text-2xl font-semibold text-green-800 mb-2">Join Us:</h2>
      <p className="text-lg text-gray-800 mb-4">
        Ready to disconnect and recharge? Contact us to learn more about our upcoming Digital Detox retreats and how to reserve your spot.
      </p>
    </div>
  );
};

export default Detox;