"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverEnter = () => setHoveredLink(true);
    const handleLinkHoverLeave = () => setHoveredLink(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', () => setHidden(true));
    window.addEventListener('mouseenter', () => setHidden(false));

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverEnter);
      link.addEventListener('mouseleave', handleLinkHoverLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', () => setHidden(true));
      window.removeEventListener('mouseenter', () => setHidden(false));

      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverEnter);
        link.removeEventListener('mouseleave', handleLinkHoverLeave);
      });
    };
  }, []);

  // Hide the custom cursor on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null;
  }

  return (
    <>
      <div 
        className={cn(
          "fixed pointer-events-none z-50 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary bg-background transition-transform duration-200 ease-out",
          clicked && "scale-90",
          hoveredLink && "scale-150 bg-primary/10",
          hidden && "opacity-0"
        )}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
        }}
      />
      <div 
        className={cn(
          "fixed pointer-events-none z-50 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-transform duration-300 ease-out",
          clicked && "scale-75",
          hoveredLink && "scale-0",
          hidden && "opacity-0"
        )}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }}
      />
    </>
  );
};

export default CustomCursor;