"use client";
import { useEffect, useRef } from "react";
import { useSection } from "../components/SectionContext";
import HeroSection from "../components/hero-section";
import SkillsOverview from "../components/SkillsOverview";
import AboutSection from "../components/about-section";
import ProjectsSection from "../components/projects-section";
import ContactSection from "../components/contact-section";

export default function Home() {
  const { setCurrentSection } = useSection();

  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: "hero", ref: heroRef },
      { id: "skills", ref: skillsRef },
      { id: "about", ref: aboutRef },
      { id: "projects", ref: projectsRef },
      { id: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setCurrentSection(visible.target.id);
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [setCurrentSection]);

  return (
    <main>
      <section id="hero" ref={heroRef}><HeroSection /></section>
      <section id="skills" ref={skillsRef}><SkillsOverview /></section>
      <section id="about" ref={aboutRef}><AboutSection /></section>
      <section id="projects" ref={projectsRef}><ProjectsSection /></section>
      <section id="contact" ref={contactRef}><ContactSection /></section>
    </main>
  );
}
