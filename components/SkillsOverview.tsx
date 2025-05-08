"use client";
import { useRef, useEffect } from "react";

const SkillsOverview = () => {

    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        }
      );
  
      const animatedElements =
        sectionRef.current?.querySelectorAll("[data-animate]");
      animatedElements?.forEach((el) => observer.observe(el));
  
      return () => {
        animatedElements?.forEach((el) => observer.unobserve(el));
      };
    }, []);

    return (
        <section
          ref={sectionRef}
      id="skillOverview"
        className="relative h-screen snap-start w-full bg-[#f9f9f9] py-80 px-24 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 ">
            {/* Design Section */}
            <div className="relative flex flex-col justify-center my-auto -mt-20">
              {/* Dotted grid background */}
              <div className="absolute top-0 left-0 -translate-x-8 -translate-y-8">
                <svg width="100" height="100" className="opacity-30">
                  <defs>
                    <pattern id="dot-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="1" fill="#4831d4" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#dot-grid)" />
                </svg>
              </div>
    
              <h2 className="text-5xl md:text-6xl font-extrabold text-[#4831d4] mb-6">Design</h2>
              <p className="text-sm md:text-base text-[#3d155f] max-w-lg leading-7">
              I'm not a traditional designer working in Illustrator, but I focus on translating designs into clean, responsive, and accessible user interfaces. You’ll usually find me fine-tuning stylesheets, adjusting layouts, and ensuring a smooth front-end experience.
              </p>
    
              {/* Dots below */}
              <div className="mt-10 flex gap-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 border-2 border-[#4831d4] rounded-full bg-white"
                  ></div>
                ))}
              </div>
            </div>
    
            {/* Engineering Section */}
            <div className="relative flex flex-col justify-end text-right mt-36">
              {/* Dotted grid background */}
              <div className="absolute bottom-60 right-60 translate-x-8 -translate-y-8">
                <svg width="100" height="100" className="opacity-50">
                  <defs>
                    <pattern id="dot-grid-right" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="1" fill="#4831d4" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#dot-grid-right)" />
                </svg>
              </div>
    
              <h2 className="text-5xl md:text-6xl font-extrabold text-[#4831d4] mb-6 text-right">Engineering</h2>
              <p className="text-sm md:text-base text-[#3d155f] max-w-lg ml-auto text-left leading-7">
              When building JavaScript applications, I bring the right tools and the flexibility to go beyond them—delivering fast, scalable, and resilient solutions. Performance and scalability aren’t just buzzwords—they’re built into everything I ship.
              </p>
    
              {/* Side dots */}
              <div className="absolute left-[90%] -bottom-12 transform -translate-x-1/2 flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 border-2 border-[#4831d4] rounded-full bg-white"
                  ></div>
                ))}
              </div>
    
              {/* Step line icon */}
              <div className="absolute right-200 top-40">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <polyline
                    points="0,10 10,10 10,20 20,20 20,30 30,30 30,40"
                    fill="none"
                    stroke="#4831d4"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      );
  };
  
  export default SkillsOverview;
  