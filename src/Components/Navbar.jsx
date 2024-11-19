import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg p-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-gray-100 font-bold text-2xl cursor-pointer hover:text-purple-500 transition duration-300 transform hover:scale-105 animate-pulse">
        &lt; PasswordManager /&gt;
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6">
        {['Home', 'About', 'Contact', 'Website'].map((item, index) => (
          <li key={index}>
            <a
              href="/"
              className="text-gray-300 text-lg hover:text-purple-400 transition duration-300 transform hover:scale-110"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu for Mobile */}
      <div
        className="md:hidden text-gray-300 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      {/* Full-Screen Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-6">
          {['Home', 'About', 'Contact', 'Website'].map((item, index) => (
            <a
              key={index}
              href="/"
              className="text-gray-100 text-2xl font-semibold hover:text-purple-400 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* Close Button */}
          <button
            className="mt-6 text-gray-300 text-lg border border-gray-700 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Close Menu
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
