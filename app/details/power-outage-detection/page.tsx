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
            className="min-h-screen bg-offWhite flex flex-col items-center justify-center px-10 py-20 font-nunito"
        >
            <div className="max-w-5xl">
                <h1 className="text-5xl font-bold font-nunito text-darkGreen mb-6 text-center">Power Outage Detection</h1>

                <h1 className="text-3xl font-bold font-nunito text-darkGreen mb-6 text-center pt-10">"WHY"</h1>
                <p className="text-xl text-darkGreen mb-6">
                    Power outages are increasingly disruptive due to aging infrastructure and extreme weather events, 
                    yet most monitoring systems only react after failures occur. Our AI-driven solution predicts outage 
                    risks before they happen, helping utilities and emergency responders take proactive measures.
                </p>

                <h1 className="text-3xl font-bold font-nunito text-darkGreen mb-6 text-center pt-10">"WHAT"</h1>
                <p className="text-xl text-darkGreen mb-6">
                    We use AI-powered risk mapping to analyze satellite imagery and identify power outage vulnerabilities at 
                    a pixel level. Our technology provides real-time, high-precision insights that help strengthen grid 
                    resilience and optimize response strategies.
                </p>

                <h1 className="text-3xl font-bold font-nunito text-darkGreen mb-6 text-center pt-10">"HOW"</h1>
                <p className="text-xl text-darkGreen mb-8">
                    Our AI model processes high-resolution satellite images, detecting environmental and infrastructure risks that 
                    contribute to power failures. By assigning risk scores to each pixel, we generate detailed heatmaps that guide 
                    utilities, governments, and emergency teams in preventing outages.
                </p>

                {/* Image Section */}

                <div className="flex justify-center pt-20">
                    <a href="https://arxiv.org/abs/2410.00017" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-4 cursor-pointer group">
                        <div className="w-48 h-48 rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                            <img src="/images/paper.svg" alt="Paper" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-darkGreen group-hover:text-blue-500 transition">
                            View Research Paper
                        </h3>
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
