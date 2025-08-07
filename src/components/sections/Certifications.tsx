import React from 'react';
import type { Certification } from '../../types';
import Card from '../common/Card';

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
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          Certifications
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500 mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{cert.title}</h3>
              <p className="text-blue-600 font-medium mb-1">{cert.issuer}</p>
              <p className="text-slate-500">{cert.date}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;