import React from 'react';

const Coaching = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-40">
      <header className="bg-green-900 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Life Coaching & Mentoring</h1>
      </header>
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <img
          src="/images/coaching.jpg"
          alt="Life Coaching"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-semibold mb-4">Transform Your Life</h2>
        <p className="text-lg leading-relaxed mb-6">
          Our Life Coaching & Mentoring program is designed to help you navigate transitions and rediscover your purpose. 
          With personalized one-on-one coaching sessions in a serene natural setting, you will gain clarity, set achievable goals, 
          and develop actionable plans to create the life you desire.
        </p>
        <h3 className="text-2xl font-semibold mb-4">What to Expect:</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Personalized coaching sessions tailored to your needs</li>
          <li>Tools and strategies for effective goal setting</li>
          <li>Support in overcoming obstacles and challenges</li>
          <li>Access to resources for ongoing personal development</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Join us at Fermata for a transformative experience that will empower you to take charge of your life and achieve your dreams.
        </p>
        <div className="text-center mt-8">
          <a
            href="https://wa.me/27832933334?text=Hi%20Fermata!%20I'm%20interested%20in%20the%20Life%20Coaching%20&%20Mentoring%20program."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-900 text-white py-3 px-8 rounded-full text-lg font-medium shadow-lg hover:bg-green-800 transition"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Coaching;