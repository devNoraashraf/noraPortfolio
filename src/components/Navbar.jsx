import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  const navLinks = (
    <ul className="flex flex-col md:flex-row gap-6 text-gray-700 dark:text-gray-200 font-medium md:items-center">
      <li><a href="#home" onClick={closeMenu} className="hover:text-purple-600 dark:hover:text-purple-400 transition">Home</a></li>
      <li><a href="#about" onClick={closeMenu} className="hover:text-purple-600 dark:hover:text-purple-400 transition">About</a></li>
      <li><a href="#projects" onClick={closeMenu} className="hover:text-purple-600 dark:hover:text-purple-400 transition">Projects</a></li>
      <li><a href="#contact" onClick={closeMenu} className="hover:text-purple-600 dark:hover:text-purple-400 transition">Contact</a></li>
    </ul>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">Nora</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks}
        <button onClick={toggleTheme} className="text-purple-700 dark:text-purple-300 text-xl transition">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={toggleTheme} className="text-purple-700 dark:text-purple-300 text-xl transition">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={toggleMenu} className="text-purple-700 dark:text-purple-300 text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-md p-6 md:hidden animate-fade-in z-40">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
