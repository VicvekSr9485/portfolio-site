import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGitAlt, faGithub, faJava, faJsSquare, faPython, faLinux, faReact, faNodeJs, faDocker, faAws, faGoogle
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, faServer, faCode, faTerminal, faCloud, 
  faBrain, faChartBar, faRobot, faLayerGroup, faCheckCircle, faSync, faFileCode
} from '@fortawesome/free-solid-svg-icons';
import RevealOnScroll from '../common/RevealOnScroll';

// Create a mapping of icon names to icon objects
const iconMap: any = {
  "fab fa-git-alt": faGitAlt,
  "fab fa-github": faGithub,
  "fab fa-java": faJava,
  "fab fa-js-square": faJsSquare,
  "fab fa-python": faPython,
  "fab fa-linux": faLinux,
  "fab fa-react": faReact,
  "fab fa-node-js": faNodeJs,
  "fab fa-docker": faDocker,
  "fab fa-aws": faAws,
  "fab fa-google": faGoogle,
  "fas fa-database": faDatabase,
  "fas fa-server": faServer,
  "fas fa-code": faCode,
  "fas fa-terminal": faTerminal,
  "fas fa-cloud": faCloud,
  "fas fa-brain": faBrain,
  "fas fa-chart-bar": faChartBar,
  "fas fa-robot": faRobot,
  "fas fa-layer-group": faLayerGroup,
  "fas fa-check-circle": faCheckCircle,
  "fas fa-sync": faSync,
  "fas fa-file-code": faFileCode
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python (Advanced)", icon: "fab fa-python", color: "text-blue-500" },
        { name: "JavaScript/TypeScript", icon: "fab fa-js-square", color: "text-yellow-400" },
        { name: "Java", icon: "fab fa-java", color: "text-red-500" },
        { name: "Rust", icon: "fas fa-code", color: "text-orange-600" },
        { name: "C", icon: "fas fa-code", color: "text-blue-700" },
        { name: "SQL", icon: "fas fa-database", color: "text-blue-400" },
      ]
    },
    {
      title: "Backend Engineering",
      skills: [
        { name: "FastAPI", icon: "fas fa-server", color: "text-green-600" },
        { name: "NestJS", icon: "fab fa-node-js", color: "text-red-600" },
        { name: "Express.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "AsyncIO", icon: "fas fa-code", color: "text-purple-500" },
        { name: "REST API Design", icon: "fas fa-cloud", color: "text-blue-500" },
        { name: "Modular Architecture", icon: "fas fa-layer-group", color: "text-orange-400" },
        { name: "Pydantic", icon: "fas fa-code", color: "text-red-400" },
      ]
    },
    {
      title: "Data & AI",
      skills: [
        { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-600" },
        { name: "NoSQL", icon: "fas fa-database", color: "text-green-500" },
        { name: "Pandas", icon: "fas fa-chart-bar", color: "text-blue-900" },
        { name: "Model Fine-tuning", icon: "fas fa-brain", color: "text-purple-600" },
        { name: "LangChain", icon: "fas fa-robot", color: "text-green-600" },
        { name: "Google ADK", icon: "fab fa-google", color: "text-blue-500" },
        { name: "LLM Function Calling", icon: "fas fa-robot", color: "text-purple-500" },
        { name: "RAG & Embeddings", icon: "fas fa-brain", color: "text-yellow-500" },
        { name: "Workflow Orchestration", icon: "fas fa-chart-bar", color: "text-blue-400" },
      ]
    },
    {
      title: "Tools & Testing",
      skills: [
        { name: "Docker & Kubernetes", icon: "fab fa-docker", color: "text-blue-500" },
        { name: "Git", icon: "fab fa-git-alt", color: "text-orange-500" },
        { name: "Linux", icon: "fab fa-linux", color: "text-slate-400" },
        { name: "Shell Scripting", icon: "fas fa-terminal", color: "text-green-400" },
        { name: "Pytest & TDD", icon: "fas fa-check-circle", color: "text-green-500" },
        { name: "CI Workflows", icon: "fas fa-sync", color: "text-blue-400" },
        { name: "Swagger", icon: "fas fa-file-code", color: "text-green-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </RevealOnScroll>
        
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <RevealOnScroll 
              key={catIndex}
              className="bg-secondary p-6 rounded-2xl shadow-lg border border-white/5 hover:border-primary/20 transition-colors duration-300 h-full"
              delay={catIndex * 0.1}
            >

              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 ease-out transform scale-0 group-hover:scale-100"></div>
              
              <h3 className="text-xl font-bold mb-6 text-primary border-b border-white/10 pb-2 relative z-10">{category.title}</h3>
              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors cursor-default"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-background flex items-center justify-center mr-4 transition-colors border border-white/5`}>
                      <FontAwesomeIcon 
                        icon={iconMap[skill.icon] || faCode} 
                        className={`text-xl ${skill.color}`} 
                      />
                    </div>
                    <span className="font-medium text-muted hover:text-primary transition-colors">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;