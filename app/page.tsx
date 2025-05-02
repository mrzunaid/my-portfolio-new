import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import ProjectsSection from "../components/projects-section";
import SkillsSection from "../components/skills-section";
import ExperienceSection from "../components/experience-section";
import ContactSection from "../components/contact-section";
import ScrollIndicator from "../components/scroll-indicator";
import SkillsOverview from "../components/SkillsOverview";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <SkillsOverview />
        <AboutSection />
        <ProjectsSection />
        {/* <SkillsSection /> */}
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
