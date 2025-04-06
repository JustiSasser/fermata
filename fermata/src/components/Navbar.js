import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

function Navbar() {
  return (
    <nav className="bg-green-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 py-2 md:py-4">
        {/* Logo */}
        <Link to="/">
          <img src="/images/logo.png" alt="Fermata Logo" className="h-16" />
        </Link>

        {/* Main Navigation Links */}
        <div className="flex space-x-6 items-center">
          <Link to="/" className="hover:text-green-300 transition">Home</Link>
          <a href="#offerings" className="hover:text-green-300 transition">Offerings</a>
        </div>
      </div>

        {/* Mobile Navigation */}
        <MobileNav />


    </nav>
  );
}

export default Navbar;