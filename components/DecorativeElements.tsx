import React from 'react';

const DecorativeElements: React.FC = () => {
  return (
    <>
      {/* Animated gradient background - visible on light backgrounds */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-20 -right-20 w-80 h-80 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Curved lines */}
      <div className="hidden lg:block fixed left-20 top-1/3 w-40 h-40 pointer-events-none">
        <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5C30 30 30 90 75 115" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      
      <div className="hidden lg:block fixed right-10 bottom-20 w-40 h-40 pointer-events-none">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 55C25 35 75 35 95 5" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </>
  );
};

export default DecorativeElements;