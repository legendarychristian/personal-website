"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [currentSection, setCurrentSection] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null, // Use the viewport as the root
            threshold: 0.9, // 60% of the section must be visible
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

    // Define different colors for each section
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
        <header className="fixed top-0 left-0 w-full bg-transparent flex items-center justify-between px-10 py-4 z-50">
            <nav className={`hidden md:flex gap-8 ${getColorClass()}`}>
                <a href="#home" className="text-md font-openSans transition">
                    Home
                </a>
                <a href="#projects" className="text-md font-openSans transition">
                    Projects
                </a>
                <a href="#research" className="text-md font-openSans transition">
                    Research
                </a>
                <a href="#about" className="text-md font-openSans transition">
                    About
                </a>
            </nav>
        </header>
    );
}
