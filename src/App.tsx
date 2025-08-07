import React from 'react';
import Layout from './components/common/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import ExperienceSection from './components/sections/Experience';
import EducationSection from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <ExperienceSection />
      <EducationSection />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </Layout>
  );
};

export default App;