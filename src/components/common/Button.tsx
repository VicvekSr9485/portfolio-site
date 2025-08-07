import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  type = 'button',
  target,
  rel,
  disabled = false,
}) => {
  const baseClasses = 'px-6 py-3 rounded-full font-medium transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]}`;
  
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;