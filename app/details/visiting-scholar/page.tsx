"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="min-h-screen bg-offWhite flex flex-col items-center justify-center px-4 sm:px-8 py-10 font-nunito"
        >
            <div className="max-w-2xl md:max-w-5xl font-openSans">
                <h1 className="text-3xl sm:text-5xl font-bold text-darkGreen mb-8 text-center">
                    Visiting Scholar: Social Vulnerability Study
                </h1>

                <h2 className="text-2xl sm:text-3xl font-bold text-darkGreen mb-4 text-center pt-6">"WHY"</h2>
                <p className="text-base sm:text-lg md:text-xl text-darkGreen font-light mb-6 leading-relaxed">
                    Power outages disrupt access to essential resources like clean water, food, and healthcare, disproportionately
                    affecting vulnerable communities. Understanding how outages influence mortality rates at a granular level can
                    help policymakers and emergency responders mitigate risks and protect lives.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-darkGreen mb-4 text-center pt-6">"WHAT"</h2>
                <p className="text-base sm:text-lg md:text-xl text-darkGreen font-light mb-6 leading-relaxed">
                    This project analyzes power outage data (2016–2024) from the Department of Energy (DOE) alongside mortality
                    data and social vulnerability data from the Centers for Disease Control (CDC) to identify trends at the county and zip code level.
                    By examining social, economic, climate, and weather factors, we aim to quantify the relationship
                    between power outages and mortality rates over time.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-darkGreen mb-4 text-center pt-6">"HOW"</h2>
                <p className="text-base sm:text-lg md:text-xl text-darkGreen font-light mb-8 leading-relaxed">
                    Using statistical modeling and data visualization, we uncover patterns that reveal which communities are
                    most at risk during outages. The insights from this study will empower stakeholders to implement targeted
                    interventions, improve disaster preparedness, and develop resilience strategies to reduce preventable deaths
                    linked to power disruptions.
                </p>

                {/* Image Section */}
                <div className="flex justify-center pt-12">
                    <a
                        href="/images/poster.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center space-y-4 cursor-pointer group"
                    >
                        <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                            <img src="/images/poster.png" alt="Poster" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-darkGreen group-hover:text-blue-500 transition">
                            View Poster Presentation
                        </h3>
                    </a>
                </div>

                {/* Back Button */}
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleBack}
                        className="w-full sm:w-48 bg-[#CDE9F5] text-b2 font-light border border-[#C1D6DF] rounded-full hover:bg-b3 hover:text-white transition-all duration-300 py-2 px-4 text-center"
                    >
                        ← Back to Research
                    </button>
                </div>
            </div>
        </motion.section>
    );
}