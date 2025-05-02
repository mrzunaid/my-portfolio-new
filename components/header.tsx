"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { ThemeToggle } from '../components/theme-toggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg py-3 shadow-md" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          href="#home" 
          className="text-xl font-bold relative overflow-hidden group"
        >
          {/* <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Portfolio</span> */}
          <span className="inline-block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium relative overflow-hidden transition-colors",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                pathname === item.href ? "text-primary" : "text-foreground/80 hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-foreground p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out md:hidden overflow-hidden",
        isOpen ? "max-h-screen py-4" : "max-h-0"
      )}>
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "py-2 px-4 text-lg font-medium transition-colors rounded-md",
                pathname === item.href 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground/80 hover:bg-primary/5 hover:text-foreground"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;