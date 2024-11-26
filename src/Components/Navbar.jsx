import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // Cleanup timeout when component unmounts
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleMouseEnter = () => {
    // Clear any existing timeout and show the icons
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to hide the icons after 5 seconds
    const timeout = setTimeout(() => {
      setIsHovered(false);
    }, 5000);
    setHoverTimeout(timeout);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg p-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-gray-100 font-bold text-2xl cursor-pointer hover:text-purple-500 transition duration-300 transform hover:scale-105 animate-pulse">
        &lt; PasswordManager /&gt;
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 items-center">
        <li
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="/"
            className="text-gray-300 text-lg hover:text-purple-400 transition duration-300 transform hover:scale-110"
          >
            Alisha Khatun
          </a>
          {/* Bubbling Icons */}
          {isHovered && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex gap-4 bg-gray-800 p-4 rounded-xl shadow-lg">
              <a
                href="https://github.com/Alisha1302/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-500 transition duration-300 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.017c-3.338.726-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.987-.4 3.007-.404 1.02.004 2.047.137 3.007.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.625-5.474 5.92.429.37.813 1.096.813 2.21v3.284c0 .318.218.69.824.573C20.565 21.797 24 17.302 24 12 24 5.373 18.627 0 12 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/alisha-khatun/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-500 transition duration-300 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    d="M20.452 20.452h-3.656v-5.586c0-1.33-.024-3.041-1.853-3.041-1.853 0-2.137 1.447-2.137 2.945v5.682h-3.656V9h3.511v1.561h.051c.49-.929 1.69-1.907 3.479-1.907 3.717 0 4.402 2.447 4.402 5.63v6.167zM5.337 7.433a2.12 2.12 0 11-.004-4.238 2.12 2.12 0 01.004 4.238zM6.958 20.452H3.716V9h3.242v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.452c.979 0 1.777-.774 1.777-1.729V1.729C24 .774 23.204 0 22.225 0z"
                  />
                </svg>
              </a>
              <a
                href="https://www.hackerrank.com/profile/alisha13022003ak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-500 transition duration-300 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    d="M9.599 16.799l1.201 1.201-4.8 4.8L0 20.4l9.599-3.601zm6.002-6.002l-3.6 1.201-1.2-1.2L21.6 0l2.4 6-8.399 4.797zm-.001 8.399l6 2.399-2.399-6L21.6 6l-2.4-2.4-9.6 9.599z"
                  />
                </svg>
              </a>
            </div>
          )}
        </li>
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
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-300 hover:text-purple-500 transition duration-300 transform hover:scale-110"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <a
            href="/"
            className="text-white text-2xl"
          >
            Alisha Khatun
          </a>
          <div className="flex gap-6">
            <a
              href="https://github.com/Alisha1302/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition duration-300 transform hover:scale-110"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alisha-khatun/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition duration-300 transform hover:scale-110"
            >
              LinkedIn
            </a>
            <a
              href="https://www.hackerrank.com/profile/alisha13022003ak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition duration-300 transform hover:scale-110"
            >
              HackerRank
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
