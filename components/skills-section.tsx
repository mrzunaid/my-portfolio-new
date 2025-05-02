"use client";

import { useRef, useEffect } from 'react';
import { Code, Palette, Cpu, Database, Globe, LineChart } from 'lucide-react';
import { cn } from '../lib/utils';

interface Skill {
  category: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
}

const skills: Skill[] = [
  {
    category: "Frontend Development",
    icon: <Code size={32} />,
    items: ["React", "Vue.js", "Next.js", "TypeScript", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "Responsive Design"],
    color: "var(--chart-1)",
  },
  {
    category: "UI/UX Design",
    icon: <Palette size={32} />,
    items: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility"],
    color: "var(--chart-2)",
  },
  {
    category: "Backend Development",
    icon: <Database size={32} />,
    items: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"],
    color: "var(--chart-3)",
  },
  {
    category: "DevOps & Tools",
    icon: <Cpu size={32} />,
    items: ["Git", "GitHub/GitLab", "CI/CD", "Docker", "AWS", "Vercel", "Testing", "Performance Optimization"],
    color: "var(--chart-4)",
  },
  {
    category: "Digital Marketing",
    icon: <Globe size={32} />,
    items: ["SEO", "Analytics", "Content Strategy", "Social Media", "Email Marketing", "Conversion Optimization"],
    color: "var(--chart-5)",
  },
  {
    category: "Data Visualization",
    icon: <LineChart size={32} />,
    items: ["D3.js", "Chart.js", "Recharts", "Dashboard Design", "Data Analysis", "Interactive Visualizations"],
    color: "var(--primary)",
  },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    skillRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      skillRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 h-screen snap-start md:py-32 bg-background/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/5 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-chart-2/5 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={headingRef}
          className={cn(
            "mb-16 text-center opacity-0 translate-y-8 transition-all duration-700 ease-out",
            "animate-in:opacity-100 animate-in:translate-y-0"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, design capabilities, and professional 
            expertise across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              ref={el => skillRefs.current[index] = el}
              className={cn(
                "bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 opacity-0 scale-95 transition-all duration-700 ease-out",
                "animate-in:opacity-100 animate-in:scale-100",
                { "delay-100": index % 3 === 0 },
                { "delay-200": index % 3 === 1 },
                { "delay-300": index % 3 === 2 }
              )}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 rounded-lg" style={{ color: skill.color, backgroundColor: `color-mix(in srgb, ${skill.color} 15%, transparent)` }}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: skill.color }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;