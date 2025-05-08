"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import Image from "next/image";
import { ThemeToggle } from "../components/theme-toggle";
import { useSection } from "../components/SectionContext";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const { currentSection } = useSection();

  // const imageSrc =
  // currentSection === "skills" ||
  // currentSection === "projects" ||
  // currentSection === "contact"
  //   ? "/menu.png"
  //   : "/zunaid-logo-preview.png";

  let imageSrc = "/zunaid-logo-preview.png";

  if (currentSection === "hero") {
    imageSrc = "/zunaid-logo-preview.png";
  } else if (
    currentSection === "skills" ||
    currentSection === "projects" ||
    currentSection === "contact"
  ) {
    imageSrc = "/z-logo.png";
  }
   else if (currentSection === "about") {
    imageSrc = "/z-logo2.png";
  }

  let width = 170;
  let height = 170;

  if ( currentSection === "skills" ||
    currentSection === "projects" ||
    currentSection === "contact" ||
    currentSection === "about") {
    width = 70;
    height = 70;
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      {/* Top right toggle button */}
      <div className="w-full flex items-center justify-between px-16 absolute top-2 left-0 z-50 h-[100px]">
  {/* Left image (logo or dynamic image) */}
  <Image
    src={imageSrc}
    alt="Section illustration"
    width={width}
    height={height}
    className=""
  />

  {/* Right menu button */}
  <button
    onClick={toggleMenu}
    className="relative w-24 h-24 flex items-center justify-center"
    aria-label="Toggle menu"
  >
    <Image
      src="/menu-new.png"
      alt="Menu icon"
      fill
      className="object-contain"
    />
  </button>
</div>



      {/* Slide-in Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-md transform transition-transform duration-500 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close icon */}
        <div className="absolute top-5 right-5">
          <button onClick={toggleMenu} aria-label="Close menu">
            <X className="text-primary" size={28} />
          </button>
        </div>

        {/* Menu Content */}
        <nav className="flex flex-col h-full justify-between p-8 pt-24 space-y-8">
          <div className="space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-primary px-2 hover:underline underline-offset-4 transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-8 space-y-2">
              <p className="uppercase text-muted-foreground text-xs tracking-widest">
                Say hello
              </p>
              <a
                href="mailto:hello@zunaid.dev"
                className="text-primary underline underline-offset-4"
              >
                zunaid883@gmail.com
              </a>
            </div>
          </div>

          {/* Footer Socials */}
          {/* <div className="flex gap-6 text-sm text-primary">
            <a href="#" aria-label="Twitter">
              TW
            </a>
            <a href="#" aria-label="GitHub">
              GH
            </a>
            <a href="#" aria-label="LinkedIn">
              LN
            </a>
            <a href="#" aria-label="YouTube">
              YT
            </a>
          </div> */}
        </nav>
      </div>
    </div>
  );
};
