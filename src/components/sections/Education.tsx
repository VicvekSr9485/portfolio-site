import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import type { Education } from '../../types';
import RevealOnScroll from '../common/RevealOnScroll';

const EducationSection: React.FC = () => {
  const educationList: Education[] = [
    {
      id: 1,
      degree: "B.Sc. Computer Science",
      institution: "IU International University of Applied Sciences",
      location: "Bad Honnef, Germany"
    },
    {
      id: 2,
      degree: "B.Sc. Agricultural Extension & Rural Development",
      institution: "University of Ibadan",
      location: "Ibadan, Oyo State Nigeria"
    },
    {
      id: 3,
      degree: "National Diploma | Science Laboratory Technology",
      institution: "Crown Polytechnic",
      location: "Odo Ado Ekiti State, Nigeria"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationList.map((edu, index) => (
            <RevealOnScroll 
              key={edu.id} 
              className="bg-secondary p-8 rounded-2xl shadow-lg border border-white/5 hover:shadow-primary/10 transition-all duration-300 group"
              delay={index * 0.1}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 border border-white/5">
                <FontAwesomeIcon icon={faGraduationCap} className="text-primary text-xl group-hover:text-background transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
              <p className="text-muted font-medium mb-4">{edu.institution}</p>
              
              <div className="flex flex-col gap-2 text-sm text-muted/80">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;