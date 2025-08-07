import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true 
}) => {
  const hoverClasses = hoverEffect 
    ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-2' 
    : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;