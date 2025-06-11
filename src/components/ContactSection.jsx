import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-purple-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-300 mb-6">
          Contact Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
          Feel free to reach out if you're interested in working together, collaborating, or just saying hi!
        </p>

        <div className="flex justify-center gap-6 text-purple-700 dark:text-purple-300 text-2xl mb-6">
          <a href="mailto:norashraf.dev@gmail.com">
            <FaEnvelope className="hover:text-purple-900 dark:hover:text-purple-100 transition" />
          </a>
          <a href="https://linkedin.com/in/noraaashraf" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-purple-900 dark:hover:text-purple-100 transition" />
          </a>
          <a href="https://github.com/nora-dev" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-purple-900 dark:hover:text-purple-100 transition" />
          </a>
        </div>

        <a
          href="/cv.pdf"  // تأكدي إن ملف الـ CV اسمه كده ومحطوط داخل مجلد public
          download
          className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white dark:bg-white dark:text-purple-700 dark:hover:bg-gray-200 font-semibold py-2 px-6 rounded-full shadow-md transition"
        >
          Download CV <FaFileDownload />
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
