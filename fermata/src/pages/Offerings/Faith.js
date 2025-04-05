import React from 'react';

const Faith = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-900 mb-4">Faith-Based Retreats</h1>
      <img src="/images/faith.jpg" alt="Faith-Based Retreat" className="w-full h-64 object-cover rounded-lg mb-6" />
      <p className="text-lg text-gray-800 mb-4">
        Our Faith-Based Retreats offer a unique opportunity to reconnect your spirit with God and restore inner peace. 
        These guided experiences are designed to help you deepen your faith, reflect on your life, and find clarity in your spiritual journey.
      </p>
      <h2 className="text-2xl font-semibold text-green-800 mb-2">What to Expect:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Daily devotionals and prayer sessions</li>
        <li>Group discussions and sharing circles</li>
        <li>Personal reflection time in nature</li>
        <li>Guided meditation and mindfulness practices</li>
        <li>Supportive community of fellow seekers</li>
      </ul>
      <p className="text-lg text-gray-800">
        Join us for a transformative experience that nurtures your spirit and fosters a deeper connection with your faith. 
        Whether you are seeking renewal, guidance, or simply a moment of peace, our Faith-Based Retreats are here for you.
      </p>
    </div>
  );
};

export default Faith;