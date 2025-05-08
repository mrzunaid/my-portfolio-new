"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "../lib/utils";

const AboutSection = () => {
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
      id=""
      className="py-20 h-screen snap-start md:py-32 px-24 bg-[#4731d4] text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div data-animate>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#C8F25F] mb-6 leading-tight">
              Over the <br /> years,
            </h2>
            <div className="space-y-5 text-white text-lg leading-relaxed w-2/3">
              <p>
                I've contributed to building products for businesses across
                different regions—ranging from marketing websites to dynamic,
                data-driven applications—with a strong focus on performance,
                accessibility, and clean UI implementation.
              </p>
              <p>
                I specialize in developing responsive and maintainable frontend
                interfaces, turning designs into seamless experiences using
                modern frameworks and tools.
              </p>
              <p>
                I’ve collaborated with cross-functional teams to deliver
                scalable solutions, streamline UI workflows, and ensure
                consistency across products.
              </p>
              <p>
                Whether it's enhancing design systems, optimizing components, or
                improving page speed, I'm always focused on writing efficient
                and elegant code.
              </p>
            </div>
          </div>

          {/* Illustration / Image */}
          <div data-animate data-animate-delay="1">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src="/about.png"
                alt="About illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
