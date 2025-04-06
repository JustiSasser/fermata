import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import useToggle from '../utils/useToggle';

function Navbar() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-green-800 text-white text-center py-2">
        <h1 className="text-xl font-bold">Fermata Lifestyle Reset Centre</h1>
      </header>

      {/* Navbar Section */}
      <nav className="bg-green-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 py-2 md:py-4">
          {/* Logo */}
          <Link to="/">
            <img src="/images/logo.png" alt="Fermata Logo" className="h-16" />
          </Link>

          {/* Main Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-green-300 transition">Home</Link>
            <Link to="/offerings" className="hover:text-green-300 transition">Offerings</Link>
          </div>

          {/* Mobile Navigation */}
          <button className="md:hidden text-white focus:outline-none">
            {/* Hamburger Icon */}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;