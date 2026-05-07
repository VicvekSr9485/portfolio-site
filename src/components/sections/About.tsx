import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from '../common/RevealOnScroll';

const About: React.FC = () => {
  const strengths = [
    "Multi-Agent LLM Pipelines", "Voice AI", "RAG Systems", "Workflow Orchestration",
    "FastAPI", "API Design", "System Design", "Technical Communication"
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
            <h3 className="text-2xl font-semibold text-primary mb-6">Fullstack AI Software Engineer</h3>
            <p className="text-muted mb-4 text-lg leading-relaxed">
              Fullstack AI Software Engineer with 3+ years of experience shipping production-grade software, AI workflows, and API-driven automation. I design multi-agent LLM pipelines, integrate AI APIs (OpenAI, Gemini, Claude), and architect scalable backend services with FastAPI and Python, alongside the modern frontends that make them usable.
            </p>
            <p className="text-muted mb-4 text-lg leading-relaxed">
              My background spans the full stack: clean database schemas, modular service integrations, TDD workflows, and developer-friendly documentation. I bring that engineering discipline into AI systems such as voice agents, RAG, and workflow orchestration for remote, cross-functional teams.
            </p>
            <p className="text-muted mb-8 text-lg leading-relaxed">
              I'm adept at client-facing technical communication, debugging across complex stacks, and documenting systems for clean handoff, so the things I build keep working long after I ship them.
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
              <div className="relative bg-secondary p-8 rounded-2xl shadow-xl border border-foreground/5">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-background/50 rounded-xl border border-foreground/5">
                    <h4 className="text-3xl font-bold text-primary mb-1">3+</h4>
                    <p className="text-sm text-muted">Years Experience</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl border border-foreground/5">
                    <h4 className="text-3xl font-bold text-primary mb-1">10+</h4>
                    <p className="text-sm text-muted">Projects Completed</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl border border-foreground/5">
                    <h4 className="text-3xl font-bold text-primary mb-1">5+</h4>
                    <p className="text-sm text-muted">Happy Clients</p>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl border border-foreground/5">
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