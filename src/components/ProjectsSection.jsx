import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import project1 from '../assets/nora-profile.jpg'; // ✳️ بدّليهم بصور حقيقية
import project2 from '../assets/nora-profile.jpg';
import project3 from '../assets/nora-profile.jpg';

const projects = [
  {
    title: 'Portfolio App',
    description: 'Mobile app built with Flutter to showcase personal projects and skills.',
    image: project1,
    github: 'https://github.com/nora-dev/portfolio-app',
    demo: 'https://drive.google.com/your-apk-link',
  },
  {
    title: 'Medical AI Web App',
    description: 'Detect diseases based on symptoms using trained AI models.',
    image: project2,
    github: 'https://github.com/nora-dev/ai-doctor',
    demo: '',
  },
  {
    title: 'Employee Manager',
    description: 'Flutter app with CSV import & full CRUD for managing employees.',
    image: project3,
    github: 'https://github.com/nora-dev/employee-manager',
    demo: '',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-300 mb-4">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Here are a few of the apps and web projects I've worked on recently.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-purple-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white text-lg"
                >
                  <FaGithub />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white text-lg"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
