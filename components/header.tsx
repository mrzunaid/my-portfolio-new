"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import Image from "next/image";
import { ThemeToggle } from "../components/theme-toggle";
import { useSection } from "../components/SectionContext";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const { currentSection } = useSection();

  const imageSrc =
  currentSection === "skills" ||
  currentSection === "projects" ||
  currentSection === "contact"
    ? "/menu.png"
    : "/zunaid-logo-preview.png";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      {/* Top right toggle button */}
      <div className="flex items-center space-x-4">
        {/* <ThemeToggle /> */}
        <Image src={imageSrc} alt="About illustration" fill className="z-50 !w-44 !h-44 ml-12" />
        <button
          onClick={toggleMenu}
          className=" w-24 h-24 absolute top-12 right-12 z-50 "
          aria-label="Toggle menu"
        >
          <Image src="/menu-new.png" alt="About illustration" fill className=" " />
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
                className="text-xl font-medium text-primary"
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
                hello@zunaid.dev
              </a>
            </div>
          </div>

          {/* Footer Socials */}
          <div className="flex gap-6 text-sm text-primary">
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
          </div>
        </nav>
      </div>
    </div>
  );
};
