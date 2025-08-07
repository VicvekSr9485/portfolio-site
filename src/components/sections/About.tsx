import React from 'react';

const About: React.FC = () => {
  const strengths = [
    "Adaptability", "Team Player", "Creativity", "Time Management", 
    "Attention to Detail", "Resilience", "Problem Solving", "Effective Communication"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          About Me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500 mt-2"></span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Dedicated Software Engineer</h3>
            <p className="text-slate-600 mb-4">
              I'm a Full Stack Software Engineer with a strong background in backend development and team collaboration. I excel in teamwork and communication, ensuring that both technical and collaborative tasks are executed efficiently.
            </p>
            <p className="text-slate-600 mb-4">
              With experience in designing sophisticated software architecture with efficient load-balancing, caching, and avoiding Single-Point-of-Failure (SPOF), I bring robust solutions to complex problems.
            </p>
            <p className="text-slate-600 mb-6">
              My recent work in AI solutions has improved model prediction accuracy by 18% and reduced integration time by 30%, demonstrating my ability to deliver measurable results.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {strengths.map((strength, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {strength}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-200 shadow-xl">
              <img 
                src="https://via.placeholder.com/500x500" 
                alt="Oso Olamide Sunday" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;