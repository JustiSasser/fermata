import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Navigation Links */}
        <div className="flex space-x-6 items-center">
          <Link to="/" className="hover:text-green-300 transition">Home</Link>
          <div className="relative group">
            <button className="hover:text-green-300 transition">Offerings</button>
            <div className="absolute hidden group-hover:block bg-green-800 text-white mt-2 rounded shadow-lg">
              <Link to="/offerings/wellness" className="block px-4 py-2 hover:bg-green-700">Wellness</Link>
              <Link to="/offerings/faith" className="block px-4 py-2 hover:bg-green-700">Faith</Link>
              <Link to="/offerings/coaching" className="block px-4 py-2 hover:bg-green-700">Coaching</Link>
              <Link to="/offerings/detox" className="block px-4 py-2 hover:bg-green-700">Detox</Link>
              <Link to="/offerings/retreat" className="block px-4 py-2 hover:bg-green-700">Retreat</Link>
              <Link to="/offerings/workshop" className="block px-4 py-2 hover:bg-green-700">Workshop</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;