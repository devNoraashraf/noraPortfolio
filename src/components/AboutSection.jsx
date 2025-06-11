import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-20 bg-white dark:bg-gray-900">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          I’m a Computer Science graduate (Class of 2024) with a strong passion for mobile and web development.
          I specialize in building cross-platform applications using Flutter and crafting responsive UIs with modern web technologies.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
        {[
          {
            title: '🎓 Education',
            text: 'BSc in Computer Science – 2024',
          },
          {
            title: '🛠 Focus',
            text: 'Mobile Apps with Flutter & Front-End Web',
          },
          {
            title: '📦 Tools',
            text: 'Flutter, React, Firebase, Git, Figma',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-purple-50 dark:bg-gray-800 p-4 rounded-xl shadow-md"
          >
            <h4 className="text-purple-700 dark:text-purple-300 font-semibold mb-1">{item.title}</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
