import React from 'react';
import type { Experience } from '../../types';
import Card from '../common/Card';

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      position: "Full Stack Software Engineer & AI Solutions Intern",
      company: "PARI Technologies",
      period: "12/2024 - 04/2025",
      location: "Malaysia | Remote",
      responsibilities: [
        "Increased model prediction accuracy by 18% by fine-tuning and retraining Random Forest and Gaussian predictive models",
        "Reduced AI integration time by 30% by developing reusable APIs for AI chatbots and agents",
        "Increased user engagement by 15% by integrating AI-driven features into full-stack web applications",
        "Reduced data acquisition time by 40% through automated scraping scripts"
      ]
    },
    {
      id: 2,
      position: "Software Engineer",
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
    {
      id: 3,
      position: "Lab Record Officer",
      company: "Jaja Clinic, University of Ibadan Health Service",
      period: "06/2021 - 11/2021",
      location: "Ibadan, Oyo State, Nigeria",
      responsibilities: [
        "Reduced data retrieval time by 25% by reorganizing laboratory record books for over 50 records",
        "Improved data accuracy by 50% by systematically logging up to 1,000 lab test results monthly",
        "Delivered each test result to necessary outlets, decreasing the hospital's clients wait-time"
      ]
    },
    {
      id: 4,
      position: "Lab Scientist Intern",
      company: "Christ Hope Hospital, Osoko",
      period: "10/2017 - 09/2018",
      location: "Ibadan, Oyo State, Nigeria",
      responsibilities: [
        "Assisted in conducting diagnostic tests and analyzing samples under supervision",
        "Maintained laboratory equipment and ensured accurate data recording",
        "Supported quality control procedures to uphold hospital standards",
        "Gained hands-on experience with clinical chemistry, hematology, and microbiology techniques"
      ]
    },
    {
      id: 5,
      position: "Lab Scientist Intern",
      company: "Ile Abiye Hospital",
      period: "06/2017 - 05/2018",
      location: "Ado-Ekiti, Ekiti State, Nigeria",
      responsibilities: [
        "Assisted in conducting diagnostic tests, sample collection, and analyzing samples",
        "Maintained laboratory equipment and ensured accurate data recording",
        "Supported quality control procedures to uphold hospital standards",
        "Gained hands-on experience with clinical chemistry, hematology, and microbiology techniques"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          Work Experience
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500 mt-2"></span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-1/2 px-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{exp.position}</h3>
                  <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
                  <p className="text-slate-500 text-sm mb-4">{exp.period} | {exp.location}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-slate-600">{resp}</li>
                    ))}
                  </ul>
                </Card>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-md z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;