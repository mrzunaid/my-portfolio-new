"use client";

import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-background/20 z-50">
      <div 
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ScrollIndicator;