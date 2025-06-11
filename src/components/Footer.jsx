import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-100 dark:bg-gray-900 py-6 mt-20 text-center">
      <div className="flex justify-center gap-6 text-purple-700 dark:text-purple-300 text-xl mb-3">
        <a href="mailto:norashraf.dev@gmail.com">
          <FaEnvelope className="hover:text-purple-900 dark:hover:text-white transition" />
        </a>
        <a href="https://linkedin.com/in/noraaashraf" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-purple-900 dark:hover:text-white transition" />
        </a>
        <a href="https://github.com/nora-dev" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-purple-900 dark:hover:text-white transition" />
        </a>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Nora Ashraf. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
