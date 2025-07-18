import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated';
  className?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'default', 
  className = '' 
}) => {
  const baseClasses = 'bg-white rounded-lg p-4 sm:p-6';
  const variantClasses = {
    default: 'border border-gray-200',
    elevated: 'shadow-lg hover:shadow-xl transition-shadow duration-300'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};
