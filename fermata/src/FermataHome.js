import React from 'react';
import useToggle from '../utils/useToggle';

function FermataHome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-800 font-sans">
      <section className="relative h-[600px] overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Nature Retreat"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-5xl font-bold mb-4 drop-shadow-xl animate-fade-in-up">Pause. Reflect. Restart.</h2>
          <p className="text-xl max-w-2xl animate-fade-in-up delay-300">
            A sanctuary rooted in African soil, guiding you through healing and transformation—mind, body, and spirit.
          </p>
        </div>
      </section>

      <section id="offerings" className="py-20 px-6 bg-white">
        <h3 className="text-4xl font-bold text-center text-green-900 mb-14">Our Offerings</h3>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {[{
            title: 'Wellness Programs', img: 'wellness.jpg', desc: '7–21 day immersive journeys to reset your body and mind through nutrition, rest, and movement.'
          },{
            title: 'Faith-Based Retreats', img: 'faith.jpg', desc: 'Christian-guided experiences to reconnect your spirit with God and restore inner peace.'
          },{
            title: 'Life Coaching & Mentoring', img: 'coaching.jpg', desc: 'Navigate transitions and rediscover purpose with one-on-one coaching in a natural setting.'
          },{
            title: 'Digital Detox', img: 'detox.jpg', desc: 'Unplug from distractions and reconnect with nature, peace, and your core self.'
          },{
            title: 'Residential Retreats', img: 'retreat.jpg', desc: 'Serene African-style lodgings for deep rest and spiritual rejuvenation.'
          },{
            title: 'Workshops & Events', img: 'workshop.jpg', desc: 'Engage in inspiring sessions focused on journaling, habits, and community growth.'
          }].map(({ title, img, desc }) => (
            <div key={title} className="bg-green-50 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 overflow-hidden">
              <img src={`/images/${img}`} alt={title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2 text-green-800">{title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-100 to-green-200 text-center" id="contact">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold text-green-900 mb-6">Start Your Reset Journey</h3>
          <p className="text-lg text-gray-800 mb-8">
            Whether you're facing burnout, life transitions, or seeking spiritual renewal — Fermata invites you to pause and begin again.
          </p>
          <a
            href="https://wa.me/27832933334?text=Hi%20Fermata!%20I'm%20interested%20in%20a%20reset%20program."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-900 text-white py-4 px-10 rounded-full text-lg font-medium shadow-lg hover:bg-green-800 transition"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-green-800 text-white p-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Fermata Lifestyle Reset Centre. All rights reserved.</p>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/27832933334?text=Hi%20Fermata!"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 p-4 rounded-full shadow-lg text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </main>
  );
}

export default FermataHome;