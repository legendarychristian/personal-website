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
            initial={{ opacity: 0, y: 0}}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: 0}} // Smooth fade out on exit
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="min-h-screen bg-offWhite flex flex-col items-center justify-center px-10 py-20 font-nunito"
        >
            <section className="min-h-screen bg-offWhite flex flex-col items-center justify-center px-10 py-20 font-nunito">
                <h1 className="text-5xl font-bold text-darkGreen mb-6">Page Title Here</h1>
                <p className="text-xl text-gray-700 max-w-3xl text-center mb-8">
                    This is the detailed information about the research topic.
                </p>
                {/* Exit Button to Research Section */}
                <button
                    onClick={handleBack}
                    className="px-6 py-3 bg-lightGreen text-white font-bold rounded-lg shadow-lg hover:bg-darkGreen transition duration-300"
                >
                    ← Back to Research
                </button>
            </section>
        </motion.section>
    );
}
