import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import profile from '../assets/nora-profile.jpg';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-24 gap-12 bg-white dark:bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left md:w-1/2"
      >
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white leading-tight">
          Nora Ashraf
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Front-End & Flutter Developer passionate about clean code, modern UI, and building apps that matter.
        </p>

        <div className="flex gap-5 justify-center md:justify-start mt-6 text-purple-700 dark:text-purple-300 text-2xl">
          <a href="https://linkedin.com/in/noraaashraf" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-purple-900 dark:hover:text-purple-200 transition duration-300" />
          </a>
          <a href="https://github.com/nora-dev" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-purple-900 dark:hover:text-purple-200 transition duration-300" />
          </a>
          <a href="mailto:norashraf.dev@gmail.com">
            <FaEnvelope className="hover:text-purple-900 dark:hover:text-purple-200 transition duration-300" />
          </a>
        </div>

        <button className="mt-8 inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white dark:bg-white dark:text-purple-700 dark:hover:bg-gray-200 font-semibold py-2 px-6 rounded-full shadow-md transition">
          View My Projects <FaArrowRight />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/3"
      >
        <img
          src={profile}
          alt="Profile"
          className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
