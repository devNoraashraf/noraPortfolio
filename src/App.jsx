import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

function App() {
  
  return (
    
      <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
         <ContactSection />
        <ProjectsSection />
        
        <Footer />
      </div>
   
  );
}

export default App;
