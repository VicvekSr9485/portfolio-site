import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from '../common/RevealOnScroll';

const About: React.FC = () => {
  const strengths = [
    "Engineering Excellence", "System Design", "TDD", "Scalability", 
    "Modular Architecture", "API Design", "Problem Solving", "Maintainability"
  ];
  
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </RevealOnScroll>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <RevealOnScroll className="md:w-1/2" delay={0.2}>
            <h3 className="text-2xl font-semibold text-primary mb-6">Full Stack & AI Systems Engineer</h3>
            <p className="text-muted mb-4 text-lg leading-relaxed">
              Full Stack Engineer with 3+ years of hands-on experience building production-grade systems, scalable APIs, and robust architectures. I have a proven ability to design modular service integrations, implement Test Driven Development (TDD) workflows, and deliver high-velocity, high-reliability engineering output.
            </p>
            <p className="text-muted mb-4 text-lg leading-relaxed">
              I am experienced in designing clean database schemas, writing developer-friendly documentation, and building real-world service logic including authentication, messaging, workflow automation, and retrieval systems.
            </p>
            <p className="text-muted mb-8 text-lg leading-relaxed">
              My focus is on engineering excellence, correctness, and maintainability, ensuring that every system I build is robust, scalable, and ready for production.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {strengths.map((strength, index) => (
                <motion.span 
                  key={index} 
                  className="px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary hover:text-background transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {strength}
                </motion.span>
              ))}
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll className="md:w-1/2 flex justify-center" delay={0.4}>
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-primary/30 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-secondary p-8 rounded-2xl shadow-xl border border-white/5">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-background/50 rounded-xl border border-white/5">
                    <h4 className="text-3xl font-bold text-primary mb-1">3+</h4>
                    <p className="text-sm text-muted">Years Experience</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl border border-white/5">
                    <h4 className="text-3xl font-bold text-primary mb-1">10+</h4>
                    <p className="text-sm text-muted">Projects Completed</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl border border-white/5">
                    <h4 className="text-3xl font-bold text-primary mb-1">5+</h4>
                    <p className="text-sm text-muted">Happy Clients</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl border border-white/5">
                    <h4 className="text-3xl font-bold text-primary mb-1">24/7</h4>
                    <p className="text-sm text-muted">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;