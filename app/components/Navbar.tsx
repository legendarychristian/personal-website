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
        return "text-b3";
      case "projects":
        return "text-b3";
      case "research":
        return "text-b1";
      case "about":
        return "text-b1";
      default:
        return "text-b4";
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent flex items-center justify-between px-6 py-4 z-50">
      <div className="flex justify-between w-full">
        {/* Hamburger Menu Button for smaller screens */}
        <button
          className="md:hidden text-b3 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:gap-8 absolute md:static top-16 left-0 w-full bg-b1 md:bg-transparent p-4 md:p-0 z-40`}
        >
          <a href="#home" className={`block md:inline-block text-md font-openSans transition py-2 ${getColorClass()}`}>
            Home
          </a>
          <a href="#projects" className={`block md:inline-block text-md font-openSans transition py-2 ${getColorClass()}`}>
            Projects
          </a>
          <a href="#research" className={`block md:inline-block text-md font-openSans transition py-2 ${getColorClass()}`}>
            Research
          </a>
          <a href="#about" className={`block md:inline-block text-md font-openSans transition py-2 ${getColorClass()}`}>
            About
          </a>
        </nav>
      </div>
    </header>
  );
}