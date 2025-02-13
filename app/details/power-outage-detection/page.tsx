"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PowerOutageDetection() {
    const router = useRouter();

    const handleBack = () => {
        router.push("/"); // Navigate to Home
        setTimeout(() => {
            document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
        }, 100); // Scroll after a small delay
    };

    return (
        <motion.section
            key="detail-page"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="min-h-screen bg-offWhite flex flex-col items-center justify-center px-4 sm:px-8 py-10 font-openSans"
        >
            <div className="max-w-3xl md:max-w-5xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkGreen mb-6 text-center">
                    Power Outage Detection
                </h1>

                <h2 className="text-2xl sm:text-3xl font-bold text-darkGreen mb-4 text-center pt-6">"WHY"</h2>
                <p className="text-base sm:text-lg md:text-xl text-darkGreen font-light mb-6 leading-relaxed">
                    Power outages are increasingly disruptive due to aging infrastructure and extreme weather events,
                    yet most monitoring systems only react after failures occur. Our AI-driven solution predicts outage
                    risks before they happen, helping utilities and emergency responders take proactive measures.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-darkGreen mb-4 text-center pt-6">"WHAT"</h2>
                <p className="text-base sm:text-lg md:text-xl text-darkGreen font-light mb-6 leading-relaxed">
                    We use AI-powered risk mapping to analyze satellite imagery and identify power outage vulnerabilities at
                    a pixel level. Our technology provides real-time, high-precision insights that help strengthen grid
                    resilience and optimize response strategies.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-darkGreen mb-4 text-center pt-6">"HOW"</h2>
                <p className="text-base sm:text-lg md:text-xl text-darkGreen font-light mb-8 leading-relaxed">
                    Our AI model processes high-resolution satellite images, detecting environmental and infrastructure risks that
                    contribute to power failures. By assigning risk scores to each pixel, we generate detailed heatmaps that guide
                    utilities, governments, and emergency teams in preventing outages.
                </p>

                {/* Image Section */}
                <div className="flex justify-center pt-12">
                    <a
                        href="https://arxiv.org/abs/2410.00017"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center space-y-4 cursor-pointer group"
                    >
                        <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                            <img src="/images/paper.svg" alt="Paper" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-darkGreen group-hover:text-blue-500 transition">
                            View Research Paper
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
