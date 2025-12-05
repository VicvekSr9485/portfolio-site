import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import type { Experience } from '../../types';
import RevealOnScroll from '../common/RevealOnScroll';

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      position: "Fullstack AI Engineer",
      company: "SRHIN (Slum and Rural Health Initiative)",
      period: "2025 - Present",
      location: "Remote",
      responsibilities: [
        "Engineered modular backend services powering conversational health assistant platforms using Python, FastAPI, and Chromadb",
        "Designed clean, scalable database schemas for language detection, FAQ retrieval, and patient interaction logs",
        "Implemented TDD workflows using Pytest to ensure reliable service behavior before feature rollout",
        "Built structured API endpoints with clear documentation for internal teams and external collaborators",
        "Developed agentic and retrieval pipelines with deterministic logic, ensuring predictable service behavior"
      ]
    },
    {
      id: 2,
      position: "AI Solutions Intern / Full Stack Engineer",
      company: "PARI Technologies",
      period: "12/2024 - 04/2025",
      location: "Malaysia | Remote",
      responsibilities: [
        "Built production-grade Python APIs for RAG chat systems, embedding pipelines, and document retrieval workflows",
        "Implemented modular backend components enabling service reuse across multiple deployments",
        "Followed test-first engineering practices to validate service logic before integration",
        "Designed and optimized database schemas for storing embeddings, session histories, and document metadata",
        "Wrote developer-focused documentation to support onboarding and service integration at scale"
      ]
    },
    {
      id: 3,
      position: "Software Engineer Trainee",
      company: "ALX",
      period: "02/2022 - 03/2023",
      location: "Remote",
      responsibilities: [
        "Training in Software Engineering (Backend Specialization)",
        "Successfully managed several projects, resulting in improved project completion rate",
        "Utilized Git for version control",
        "Developed and deployed server-side applications",
        "Cross-functional team collaborations",
        "Designed sophisticated software architecture with efficient load-balancing, caching, while avoiding Single-Point-of-Failure (SPOF)"
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </RevealOnScroll>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2 ml-6 md:ml-0 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-primary to-transparent h-[50%]"
              animate={{ top: ["-50%", "100%"] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
          </div>
          
          {experiences.map((exp, index) => (
            <RevealOnScroll 
              key={exp.id} 
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              delay={index * 0.1}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-md z-10 transform md:-translate-x-1/2 ml-3 md:ml-0"></div>
              
              <div className="md:w-1/2"></div>
              
              <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="bg-secondary p-6 rounded-2xl shadow-lg border border-white/5 relative hover:shadow-primary/5 transition-all duration-300 text-left">
                  {/* Arrow for desktop */}
                  <div className={`hidden md:block absolute top-6 w-4 h-4 bg-secondary border-t border-l border-white/5 transform rotate-45 ${index % 2 === 0 ? '-left-2.5 border-t-0 border-l-0 border-b border-l' : '-right-2.5 border-b-0 border-r-0 border-t border-r'}`}></div>
                  
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3 border border-primary/20">
                    {exp.period}
                  </span>
                  
                  <h3 className="text-xl font-bold text-text mb-1">{exp.position}</h3>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-muted text-sm mb-4 flex items-center gap-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {exp.location}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-muted text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;