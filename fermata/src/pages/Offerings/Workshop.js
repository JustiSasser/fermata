import React from 'react';

const Workshop = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-900 mb-4">Workshops & Events</h1>
      <img src="/images/workshop.jpg" alt="Workshop" className="w-full h-64 object-cover rounded-lg mb-6" />
      <p className="text-lg text-gray-800 mb-4">
        Our workshops are designed to inspire and empower individuals through engaging sessions focused on personal growth, journaling, and community building. 
        Join us for a transformative experience that encourages self-reflection and connection with others.
      </p>
      <h2 className="text-2xl font-semibold text-green-800 mb-2">What to Expect:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Interactive sessions led by experienced facilitators.</li>
        <li>Opportunities for personal reflection and group discussions.</li>
        <li>Tools and techniques to cultivate positive habits.</li>
        <li>Networking with like-minded individuals.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-green-800 mb-2">Upcoming Workshops:</h2>
      <p className="text-gray-700 mb-4">Stay tuned for our upcoming workshops. We look forward to welcoming you!</p>
    </div>
  );
};

export default Workshop;