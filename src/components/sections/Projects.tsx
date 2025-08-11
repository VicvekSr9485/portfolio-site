import React from 'react';
import type { Project } from '../../types';
import Card from '../common/Card';
import Button from '../common/Button';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Bug Tracking System",
      description: "A robust bug tracking and issue management system that helps development teams identify, track, and resolve software defects efficiently.",
      image: "images/bugtracker.png",
      technologies: ["React", "Java", "Springboot", "PostgreSQL", "JWT Authentication"],
      liveUrl: "https://bug-tracking-system-xi.vercel.app/",
      githubUrl: "https://github.com/VicvekSr9485/Bug-Tracking-System"
    },
    {
      id: 2,
      title: "MERN AI Chat Assistant",
      description: "An intelligent chat application powered by the Gemini API, built with the MERN stack. It enables users to have interactive AI-driven conversations, manage chat history securely, and experience a responsive, user-friendly interface.",
      image: "images/chat-assistant.png",
      technologies: ["React", "Nodejs", "Express", "MongoDB", "JWT", "Gemini API", "Material UI"],
      liveUrl: "https://mern-ai-assistant.vercel.app/",
      githubUrl: "https://github.com/VicvekSr9485/MERN-AI-ASSISTANT"
    },
    {
      id: 3,
      title: "FriendNet Image Sharing Platform",
      description: "A modern image-sharing web application built with React and Sanity CMS, featuring Google OAuth authentication. Users can securely upload, browse, and search for images in a responsive interface with real-time updates powered by Sanity.",
      image: "images/friendnet.png",
      technologies: ["React", "Tailwind CSS", "Sanity CMS", "Google OAuth", "JavaScript"],
      liveUrl: "https://pixella.vercel.app/",
      githubUrl: "https://github.com/VicvekSr9485/FriendNet"
    },
  ];
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500 mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant="primary" 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    <i className="fab fa-github mr-2"></i> GitHub
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;