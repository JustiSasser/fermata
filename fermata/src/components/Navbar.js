import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (hash) => {
    if (location.pathname !== '/') {
      // Navigate to the home page and scroll to the section
      navigate(`/#${hash}`);
    } else {
      // Scroll to the section on the current page
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Header Section */}
      <header className="bg-green-800 text-white py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4 px-4">
          {/* Logo */}
          <a href="/" onClick={() => handleNavigation('home')}>
            <img src="/images/logo.png" alt="Fermata Logo" className="h-16 w-16" />
          </a>
          {/* Title */}
          <h1 className="text-2xl font-bold">Fermata Lifestyle Reset Centre</h1>
        </div>
      </header>

      {/* Navbar Section */}
      <nav className="bg-green-900 text-white shadow-lg py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 py-2 md:py-4">
          {/* Main Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <button
              onClick={() => handleNavigation('home')}
              className="hover:text-green-300 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('offerings')}
              className="hover:text-green-300 transition"
            >
              Our Offerings
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="hover:text-green-300 transition"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;