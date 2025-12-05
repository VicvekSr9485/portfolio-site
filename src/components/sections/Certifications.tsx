import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import type { Certification } from '../../types';

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Kubernetes and Cloud Native Associate",
      issuer: "The Linux Foundation",
      date: "2025"
    },
    {
      id: 2,
      title: "Kubernetes and Cloud Native Essentials LFS250",
      issuer: "The Linux Foundation",
      date: "2025"
    },
    {
      id: 3,
      title: "Fundamentals of AI/ML in Precision Medicine",
      issuer: "Stanford Data Ocean, Department of Genetics, Stanford University",
      date: "2025"
    },
    {
      id: 4,
      title: "Fundamentals of Data Science in Precision Medicine and Cloud Computing",
      issuer: "Stanford Data Ocean, Department of Genetics, Stanford University",
      date: "2025"
    },
    {
      id: 5,
      title: "Full-Stack Software Engineer | Backend Specialization",
      issuer: "ALX",
      date: "2023"
    },
    {
      id: 6,
      title: "Introduction to Agile Development and Scrum",
      issuer: "IBM: Coursera",
      date: "2023"
    },
    {
      id: 7,
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      issuer: "IBM: Coursera",
      date: "2023"
    },
    {
      id: 8,
      title: "Google IT Support Professional",
      issuer: "Google: Coursera",
      date: "2021"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.id} 
              className="bg-secondary p-6 rounded-2xl shadow-md border border-white/5 hover:shadow-primary/10 transition-all duration-300 group flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300 border border-white/5">
                  <FontAwesomeIcon icon={faCertificate} className="text-primary text-lg group-hover:text-background transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text leading-tight group-hover:text-primary transition-colors">{cert.title}</h3>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-white/5">
                <p className="text-muted font-medium text-sm mb-1">{cert.issuer}</p>
                <p className="text-muted/60 text-xs flex items-center gap-1">
                  <FontAwesomeIcon icon={faCalendarCheck} /> Issued: {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;