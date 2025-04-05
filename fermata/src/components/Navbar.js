import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto">
        {/* Main Navigation Links */}
        <div className="flex justify-between items-center">
          <Link to="/" className="hover:text-green-300 transition">Home</Link>
          <Link to="/offerings" className="hover:text-green-300 transition">Offerings</Link>
        </div>

        {/* Sub-navigation for Offerings */}
        <div className="flex justify-center space-x-6 mt-2">
          <Link to="/offerings/wellness" className="hover:text-green-300 transition">Wellness</Link>
          <Link to="/offerings/faith" className="hover:text-green-300 transition">Faith</Link>
          <Link to="/offerings/coaching" className="hover:text-green-300 transition">Coaching</Link>
          <Link to="/offerings/detox" className="hover:text-green-300 transition">Detox</Link>
          <Link to="/offerings/retreat" className="hover:text-green-300 transition">Retreat</Link>
          <Link to="/offerings/workshop" className="hover:text-green-300 transition">Workshop</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;