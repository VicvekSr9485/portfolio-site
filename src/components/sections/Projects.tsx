import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faBookReader } from '@fortawesome/free-solid-svg-icons';
import type { Project } from '../../types';
import Button from '../common/Button';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="bg-secondary rounded-2xl overflow-hidden shadow-lg border border-white/5 flex flex-col h-full relative group perspective-1000"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
      
      <div className="h-64 overflow-hidden relative group" style={{ transform: "translateZ(50px)" }}>
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
          {project.liveUrl === project.githubUrl && project.liveUrl.includes('linkedin.com') ? (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-primary rounded-full text-background hover:bg-white transition-colors transform hover:scale-110"
              title="Read Article"
            >
              <FontAwesomeIcon icon={faBookReader} />
            </a>
          ) : (
            <>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary rounded-full text-background hover:bg-white transition-colors transform hover:scale-110"
                title="View Live Site"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-secondary border border-primary text-primary rounded-full hover:bg-primary hover:text-background transition-colors transform hover:scale-110"
                title="View Code"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </>
          )}
        </div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted mb-6 flex-grow leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-background text-xs font-medium text-primary rounded-full border border-primary/20 relative overflow-hidden group/tag"
            >
              <span className="relative z-10">{tech}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-100%] group-hover/tag:translate-x-[100%] transition-transform duration-1000"></div>
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Agentic Enterprise AI System",
      description: "A production-ready Level 3 Modular Monolith Agent Swarm using Google ADK. Features a hierarchical architecture with an orchestrator supervising five specialized agents, Agent-to-Agent (A2A) protocol, HITL workflows, and persistent session memory.",
      image: "/images/enterprise-agents.png",
      technologies: ["Python", "Google ADK", "SQLite", "Hugging Face", "Multi-Agent Systems"],
      liveUrl: "https://agentic-enterprise-platform.vercel.app/",
      githubUrl: "https://github.com/VicvekSr9485/Agentic-Enterprise-Platform"
    },
    {
      id: 2,
      title: "Conversational AI Research Automation",
      description: "Python backend for multi-agent workflow automation handling task routing, document processing, and reporting. Built with clear separation of concerns and reusable utility modules.",
      image: "/images/ai-research-generator.png",
      technologies: ["Python", "FastAPI", "LangChain", "Workflow Automation"],
      liveUrl: "https://multi-agents-workflow-automation.vercel.app/",
      githubUrl: "https://github.com/VicvekSr9485/multi-agents-workflow-automation"
    },
    {
      id: 3,
      title: "Bug Tracking System",
      description: "A scalable backend using Spring Boot and PostgreSQL. Features a fully relational database schema, secure authentication flows, and comprehensive CRUD services with proper test coverage.",
      image: "/images/bugtracker.png",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JUnit", "REST API"],
      liveUrl: "https://bug-tracking-system-xi.vercel.app/",
      githubUrl: "https://github.com/VicvekSr9485/Bug-Tracking-System"
    },
    {
      id: 4,
      title: "Scalable Rental Marketplace Database",
      description: "Designed and implemented a fully normalized relational database (21+ entities) for an Airbnb-style platform. Engineered conflict-free booking workflows, property management, and secure payment processing.",
      image: "/images/datamart.png",
      technologies: ["SQL", "Database Design", "Normalization", "Data Integrity"],
      liveUrl: "https://www.linkedin.com/pulse/building-scalable-rental-company-database-from-oso-olamide--htxvf",
      githubUrl: "https://www.linkedin.com/pulse/building-scalable-rental-company-database-from-oso-olamide--htxvf"
    },
    {
      id: 5,
      title: "FriendNet Image Sharing Platform",
      description: "A modern image-sharing web application built with React and Sanity CMS, featuring Google OAuth authentication. Users can securely upload, browse, and search for images in a responsive interface with real-time updates powered by Sanity.",
      image: "images/friendnet.png",
      technologies: ["React", "Tailwind CSS", "Sanity CMS", "Google OAuth", "JavaScript"],
      liveUrl: "https://pixella.vercel.app/",
      githubUrl: "https://github.com/VicvekSr9485/FriendNet"
    }
  ];
  
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my expertise in full-stack development and AI integration.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;