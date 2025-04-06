import React, { useState } from 'react';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* Header Section */}
      <header className="bg-green-800 text-white py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4 px-4">
          {/* Logo */}
          <a href="#home">
            <img src="/images/logo.png" alt="Fermata Logo" className="h-20 w-20" />
          </a>
          {/* Title */}
          <h1 className="text-2xl font-bold">Fermata Lifestyle Reset Centre</h1>
        </div>
      </header>

      {/* Navbar Section */}
      <nav className="bg-green-900 text-white shadow-lg py-3 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 py-2 md:py-4">
          {/* Main Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="hover:text-green-300 transition">Home</a>
            <a href="#offerings" className="hover:text-green-300 transition">Our Offerings</a>
 
            <a href="#contact" className="hover:text-green-300 transition">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;