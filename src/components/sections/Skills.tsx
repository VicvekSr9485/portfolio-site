import React from 'react';
import type { Skill } from '../../types';
import Card from '../common/Card';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { id: 1, name: "Git", icon: "fab fa-git-alt" },
    { id: 2, name: "GitHub", icon: "fab fa-github" },
    { id: 3, name: "Java", icon: "fab fa-java" },
    { id: 4, name: "JavaScript", icon: "fab fa-js-square" },
    { id: 5, name: "Python", icon: "fab fa-python" },
    { id: 6, name: "Linux", icon: "fab fa-linux" },
    { id: 7, name: "Caching", icon: "fas fa-database" },
    { id: 8, name: "Nginx", icon: "fas fa-server" },
    { id: 9, name: "Rust", icon: "fas fa-code" },
    { id: 10, name: "C", icon: "fas fa-code" },
    { id: 11, name: "Shell Scripting", icon: "fas fa-terminal" },
    { id: 12, name: "Kubernetes", icon: "fas fa-cloud" },
    { id: 13, name: "Cloud-Natives", icon: "fas fa-cloud" },
    { id: 14, name: "AI/ML", icon: "fas fa-brain" },
    { id: 15, name: "Pandas", icon: "fas fa-chart-bar" },
    { id: 16, name: "LangChain", icon: "fas fa-robot" }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          Technical Skills
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500 mt-2"></span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <Card key={skill.id} className="w-32 h-32 flex flex-col items-center justify-center p-4">
              <i className={`${skill.icon} text-3xl text-blue-600 mb-3`}></i>
              <h4 className="text-center font-medium">{skill.name}</h4>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;