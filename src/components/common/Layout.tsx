import React from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Oso Olamide</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-800 hover:text-blue-600 font-medium">Home</a>
            <a href="#about" className="text-slate-800 hover:text-blue-600 font-medium">About</a>
            <a href="#experience" className="text-slate-800 hover:text-blue-600 font-medium">Experience</a>
            <a href="#education" className="text-slate-800 hover:text-blue-600 font-medium">Education</a>
            <a href="#skills" className="text-slate-800 hover:text-blue-600 font-medium">Skills</a>
            <a href="#projects" className="text-slate-800 hover:text-blue-600 font-medium">Projects</a>
            <a href="#certifications" className="text-slate-800 hover:text-blue-600 font-medium">Certifications</a>
            <a href="#contact" className="text-slate-800 hover:text-blue-600 font-medium">Contact</a>
          </nav>
          <button className="md:hidden text-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      <main>
        {children || <Outlet />}
      </main>
      
      <footer className="bg-slate-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.linkedin.com/in/oso-olamide/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Oso Olamide Sunday. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;