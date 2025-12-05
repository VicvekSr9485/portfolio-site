import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  disabled?: boolean;
  className?: string;
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
  className = ''
}) => {
  const baseClasses = 'px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 tracking-wide';
  
  const variantClasses = {
    primary: 'bg-primary text-background hover:bg-cyan-300 hover:shadow-lg shadow-primary/20 font-bold',
    secondary: 'bg-secondary text-text hover:bg-slate-700 hover:shadow-lg shadow-black/30 border border-white/5',
    outline: 'border border-primary text-primary hover:bg-primary/10',
    ghost: 'text-muted hover:text-primary hover:bg-white/5'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:transform-none' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={rel} 
        className={classes}
      >
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