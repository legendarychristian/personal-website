"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [currentSection, setCurrentSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const getColorClass = () => {
    switch (currentSection) {
      case "home":
      case "projects":
        return "text-b3";
      case "research":
      case "about":
        return "text-b1";
      default:
        return "text-b4";
    }
  };

  return (
    <header className="hidden md:flex fixed top-0 left-0 w-full bg-transparent items-center justify-between px-6 py-4 z-50">
      <div className="flex justify-between w-full">
        {/* Navigation Menu */}
        <nav className="flex gap-8">
          <a href="#home" className={`text-md font-openSans transition py-2 ${getColorClass()}`}>
            Home
          </a>
          <a href="#projects" className={`text-md font-openSans transition py-2 ${getColorClass()}`}>
            Projects
          </a>
          <a href="#research" className={`text-md font-openSans transition py-2 ${getColorClass()}`}>
            Research
          </a>
          <a href="#about" className={`text-md font-openSans transition py-2 ${getColorClass()}`}>
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
