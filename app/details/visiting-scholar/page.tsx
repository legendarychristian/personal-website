"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function VisitingScholar() {
    const router = useRouter();

    const handleBack = () => {
        router.push("/"); // Navigate to Home
        setTimeout(() => {
            document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
        }, 100); // Scroll after a small delay to ensure navigation is complete
    };


    return (
        <motion.section
            key="detail-page"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }} // Smooth fade out on exit
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="min-h-screen bg-offWhite flex flex-col items-center justify-center px-10 py-20 font-nunito"
        >
            <div className="max-w-5xl">
                <h1 className="text-5xl font-bold font-nunito text-darkGreen mb-6 text-center">Visiting Scholar: Social Vulnerability Study</h1>

                <h1 className="text-3xl font-bold font-nunito text-darkGreen mb-6 text-center pt-10">Why</h1>
                <p className="text-xl text-gray-700 mb-6">
                    Power outages disrupt access to essential resources like clean water, food, and healthcare, disproportionately
                    affecting vulnerable communities. Understanding how outages influence mortality rates at a granular level can
                    help policymakers and emergency responders mitigate risks and protect lives.
                </p>

                <h1 className="text-3xl font-bold font-nunito text-darkGreen mb-6 text-center pt-10">What</h1>
                <p className="text-xl text-gray-700 mb-6">
                    This project analyzes power outage data (2016–2024) from the Department of Energy (DOE) alongside mortality
                    data and social vulernability data from the Centers for Disease Control (CDC) to identify trends at the county and zip code level.
                    By examining social, economic, climate, and weather factors, we aim to quantify the relationship
                    between power outages and mortality rates over time.
                </p>

                <h1 className="text-3xl font-bold font-nunito text-darkGreen mb-6 text-center pt-10">How</h1>
                <p className="text-xl text-gray-700 mb-8">
                    Using statistical modeling and data visualization, we uncover patterns that reveal which communities are
                    most at risk during outages. The insights from this study will empower stakeholders to implement targeted
                    interventions, improve disaster preparedness, and develop resilience strategies to reduce preventable deaths
                    linked to power disruptions.
                </p>

                {/* Image Section */}
                <div className="flex justify-center">
                    <a href="/images/poster.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-4 cursor-pointer group">
                        <div className="w-36 h-36 rounded-xl bg-transparent flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                            <img src="/images/poster.png" alt="Paper" className="w-full h-full object-contain" />
                        </div>
                    </a>
                </div>

                {/* Back Button */}
                <button
                    onClick={handleBack}
                    className="mt-8 px-6 py-3 bg-lightGreen text-white font-bold rounded-lg shadow-lg hover:bg-darkGreen transition duration-300"
                >
                    ← Back to Research
                </button>
            </div>
        </motion.section>
    );
}
