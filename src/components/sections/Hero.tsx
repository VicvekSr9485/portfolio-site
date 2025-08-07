import React from 'react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-40">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-down">Oso Olamide Sunday</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 animate-fade-in-up">
          Full Stack Software Engineer with expertise in backend development and AI solutions
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
          <Button variant="primary" href="#experience">View My Experience</Button>
          <Button variant="outline" href="#projects">See My Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;