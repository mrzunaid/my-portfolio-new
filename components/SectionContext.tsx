"use client";

import { createContext, useContext, useState } from "react";

const SectionContext = createContext({
  currentSection: "hero",
  setCurrentSection: (_: string) => {},
});

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = useState("hero");
  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);
