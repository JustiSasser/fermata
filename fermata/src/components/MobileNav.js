import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-green-900 text-white shadow-lg">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-green-700"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/offerings"
            className="block px-4 py-2 hover:bg-green-700"
            onClick={() => setIsOpen(false)}
          >
            Offerings
          </Link>
          <Link
            to="/offerings/wellness"
            className="block px-4 py-2 hover:bg-green-700"
            onClick={() => setIsOpen(false)}
          >
            Wellness
          </Link>
          <Link
            to="/offerings/faith"
            className="block px-4 py-2 hover:bg-green-700"
            onClick={() => setIsOpen(false)}
          >
            Faith
          </Link>
          <Link
            to="/offerings/coaching"
            className="block px-4 py-2 hover:bg-green-700"
            onClick={() => setIsOpen(false)}
          >
            Coaching
          </Link>
          <Link
            to="/offerings/detox"
            className="block px-4 py-2 hover:bg-green-700"
            onClick={() => setIsOpen(false)}
          >
            Detox
          </Link>
          <Link
            to="/offerings/retreat"
            className="block px-4 py-2 hover:bg-green-700"
            onClick={() => setIsOpen(false)}
          >
            Retreat
          </Link>
          <Link
            to="/offerings/workshop"
            className="block px-4 py-2 hover:bg-green-700"
            onClick={() => setIsOpen(false)}
          >
            Workshop
          </Link>
        </div>
      )}
    </div>
  );
}

export default MobileNav;