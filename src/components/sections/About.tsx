import React, { useState } from 'react';

const About: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
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
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Full-Stack Software Engineer</h3>
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
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main profile image with effects */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-200 shadow-xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <img 
                  src="/images/profile.png" 
                  alt="Oso Olamide Sunday" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-500 transition-all duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-amber-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold shadow-lg transform transition-all duration-500 group-hover:rotate-12">
                <span className="text-xs text-center">PRO</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold shadow-lg transform transition-all duration-500 group-hover:-rotate-12">
                <span className="text-xs text-center">DEV</span>
              </div>
              
              {/* Glow effect on hover */}
              {isHovered && (
                <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl -z-10 animate-pulse"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;