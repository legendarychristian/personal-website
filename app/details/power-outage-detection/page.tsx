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
            <div className="max-w-5xl text-center">
                <h1 className="text-5xl font-bold font-nunito text-darkGreen mb-6">Power Outage Detection</h1>

                <p className="text-xl text-gray-700 mb-6">
                    At Davis Research Group, my role involved using artificial intelligence to analyze
                    satellite imagery and predict power outages across the United States.
                </p>

                <p className="text-xl text-gray-700 mb-6">
                    This challenged my expertise in PyTorch, pushing me to become highly proficient with
                    the library. I experimented with various deep learning models, including graph
                    attention networks and UNET, and became adept at working with high-performance
                    computing systems.
                </p>

                <p className="text-xl text-gray-700 mb-8">
                    I gained valuable experience in training, testing, and validating custom AI models,
                    one of which was presented at IEEE PVSC.
                </p>

                {/* Image Section */}
                <div className="flex justify-center">
                    <a href="https://arxiv.org/abs/2410.00017" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-4 cursor-pointer group">
                        <div className="w-24 h-24 rounded-xl bg-transparent flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                            <img src="/images/paper.svg" alt="Paper" className="w-full h-full object-contain" />
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
