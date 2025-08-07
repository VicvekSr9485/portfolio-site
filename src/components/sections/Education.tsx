import React from 'react';
import type { Education } from '../../types';
import Card from '../common/Card';

const EducationSection: React.FC = () => {
  const educationList: Education[] = [
    {
      id: 1,
      degree: "B.Sc. Computer Science",
      institution: "IU International University of Applied Sciences",
      period: "07/2024 - 06/2027",
      location: "Bad Honnef, Germany"
    },
    {
      id: 2,
      degree: "B.Sc. Agricultural Extension & Rural Development",
      institution: "University of Ibadan",
      period: "09/2019 - 02/2025",
      location: "Ibadan, Oyo State Nigeria"
    },
    {
      id: 3,
      degree: "National Diploma | Science Laboratory Technology",
      institution: "Crown Polytechnic",
      period: "10/2015 - 10/2017",
      location: "Odo Ado Ekiti State, Nigeria"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          Education
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500 mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationList.map((edu) => (
            <Card key={edu.id} className="p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{edu.degree}</h3>
              <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
              <p className="text-slate-500">{edu.period}</p>
              <p className="text-slate-500">{edu.location}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;