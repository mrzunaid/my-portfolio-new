"use client";

import { useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: [
      "Led the development of a complete e-commerce platform using Next.js and Tailwind CSS",
      "Implemented responsive designs and animations that increased user engagement by 40%",
      "Mentored junior developers and established best practices for the frontend team"
    ]
  },
  {
    id: 2,
    role: "UI/UX Designer & Developer",
    company: "Creative Solutions",
    period: "2020 - 2022",
    description: [
      "Designed and developed user interfaces for web and mobile applications",
      "Created design systems that reduced design inconsistencies and development time",
      "Collaborated with marketing teams to optimize conversion rates through A/B testing"
    ]
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: [
      "Built responsive websites for clients across various industries",
      "Implemented SEO strategies that improved search rankings for client websites",
      "Integrated CMS solutions for easy content management"
    ]
  },
  {
    id: 4,
    role: "Frontend Intern",
    company: "StartUp Hub",
    period: "2017 - 2018",
    description: [
      "Assisted in developing frontend components using React",
      "Learned and applied best practices for web accessibility and performance",
      "Participated in code reviews and contributed to open-source projects"
    ]
  }
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    experienceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      experienceRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-20 h-screen snap-start md:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={headingRef}
          className={cn(
            "mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out",
            "animate-in:opacity-100 animate-in:translate-y-0"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            My professional journey has equipped me with diverse experiences and valuable skills.
            Below is a timeline of my career progression.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px md:ml-0 z-0"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                ref={el => experienceRefs.current[index] = el} 
                className={cn(
                  "relative z-10 opacity-0 translate-y-8 transition-all duration-700 ease-out",
                  "animate-in:opacity-100 animate-in:translate-y-0",
                  { "delay-100": index === 0 },
                  { "delay-200": index === 1 },
                  { "delay-300": index === 2 },
                  { "delay-400": index === 3 }
                )}
              >
                <div className={cn(
                  "flex flex-col md:flex-row items-start",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}>
                  <div className="flex-1 md:px-8">
                    <div className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="md:w-8 flex justify-center md:justify-start">
                    <div className={cn(
                      "w-3 h-3 rounded-full bg-primary ring-4 ring-background mt-6 md:mt-0",
                      "relative left-0 md:left-auto md:absolute md:top-6 md:left-1/2 md:-ml-1.5"
                    )}></div>
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;