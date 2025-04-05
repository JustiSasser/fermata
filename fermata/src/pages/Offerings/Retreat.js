import React from 'react';

const Retreat = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-900 mb-4">Residential Retreats</h1>
      <img src="/images/retreat.jpg" alt="Residential Retreat" className="w-full h-64 object-cover rounded-lg mb-6" />
      <p className="text-lg text-gray-800 mb-4">
        Experience serene African-style lodgings designed for deep rest and spiritual rejuvenation. Our residential retreats offer a peaceful environment where you can disconnect from the chaos of daily life and reconnect with your inner self.
      </p>
      <h2 className="text-2xl font-semibold text-green-800 mb-2">What to Expect:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Comfortable accommodations in a tranquil setting.</li>
        <li>Guided meditation and mindfulness sessions.</li>
        <li>Healthy, nourishing meals prepared with local ingredients.</li>
        <li>Opportunities for personal reflection and growth.</li>
        <li>Access to nature trails and outdoor activities.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-green-800 mb-2">Join Us:</h2>
      <p className="text-lg text-gray-800">
        Whether you're seeking a weekend getaway or a longer retreat, our programs are tailored to help you find peace and clarity. Contact us to learn more about upcoming retreats and how to reserve your spot.
      </p>
    </div>
  );
};

export default Retreat;