import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="Fermata logo" className="h-16 transition duration-300 hover:scale-110 hover:drop-shadow-lg cursor-pointer" />
          <div>
            <h1 className="text-4xl md:text-5xl text-white font-extrabold tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Fermata
            </h1>
            <p className="text-sm text-green-200 tracking-widest uppercase mt-1 font-light">Lifestyle Reset Centre</p>
          </div>
        </div>
        <nav className="space-x-6 hidden md:block">
          <Link to="/offerings/coaching" className="hover:text-green-300 transition">Coaching</Link>
          <Link to="/offerings/detox" className="hover:text-green-300 transition">Detox</Link>
          <Link to="/offerings/faith" className="hover:text-green-300 transition">Faith</Link>
          <Link to="/offerings/retreat" className="hover:text-green-300 transition">Retreat</Link>
          <Link to="/offerings/wellness" className="hover:text-green-300 transition">Wellness</Link>
          <Link to="/offerings/workshop" className="hover:text-green-300 transition">Workshop</Link>
          <Link to="#contact" className="hover:text-green-300 transition">Contact</Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;