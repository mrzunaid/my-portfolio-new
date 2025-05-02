"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { cn } from '../lib/utils';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen snap-start px-24 flex flex-col justify-center items-center pt-20 overflow-hidden bg-[#C8F25F]"
    >
      <div className="absolute inset-0 bg-[#3C2DFF] w-2/3 z-0" />

      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="text-white max-w-xl lg:pl-10 text-left">
          <h1
            ref={headingRef}
            className={cn(
              'text-4xl md:text-6xl font-bold mb-6 text-[#C8F25F] opacity-0 -translate-y-8 transition-all duration-1000 ease-out',
              'animate-in:opacity-100 animate-in:translate-y-0'
            )}
          >
            Frontend <br /> Developer.
          </h1>
          <p
            ref={subtitleRef}
            className={cn(
              'text-base md:text-lg text-white max-w-md mb-8 opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out',
              'animate-in:opacity-100 animate-in:translate-y-0'
            )}
          >
            I like to craft solid and scalable frontend products with great user experiences.
          </p>

          <div
            ref={ctaRef}
            className={cn(
              'flex flex-col md:flex-row gap-4 text-sm text-white opacity-0 scale-95 transition-all duration-1000 delay-500 ease-out',
              'animate-in:opacity-100 animate-in:scale-100'
            )}
          >
            <p className="max-w-sm">Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
            <p className="max-w-sm">Proven experience building successful products for clients across several countries.</p>
          </div>
        </div>

        <div className="relative w-72 h-72 mt-10 lg:mt-0">
          {/* <Image
            src="https://mir-s3-cdn-cf.behance.net/user/100/4b86bb978250995.65d59e4edeca0.png"
            alt="Profile"
            className="rounded-lg object-cover shadow-xl"
            fill
          /> */}
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="text-[#3C2DFF]" />
      </button>
    </section>
  );
};

export default HeroSection;
