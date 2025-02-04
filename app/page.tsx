"use client";
import { useState } from "react";
import { Parallax } from 'react-scroll-parallax';

export default function Page() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-[#f5f9fc] text-gray-800">
            <div className="flex flex-col">
                {/* HEADER NAVBAR */}
                <header className="fixed top-0 left-0 w-full bg-transparent flex items-center justify-between px-10 py-4 z-50">
                    <nav className="hidden md:flex gap-8">
                        <a href="#home" className="text-lg text-darkGreen font-nunito hover:text-blue-500 transition">Home</a>
                        <a href="#research" className="text-lg text-darkGreen font-nunito hover:text-blue-500 transition">Research</a>
                        <a href="#projects" className="text-lg text-darkGreen font-nunito hover:text-blue-500 transition">Projects</a>
                        <a href="#about" className="text-lg text-darkGreen font-nunito hover:text-blue-500 transition">About</a>
                    </nav>
                </header>

                {/* Landing Page */}
                <section id="home" className="min-h-[150vh] bg-offWhite flex items-center justify-between md:px-60 pb-96 font-nunito">
                    <Parallax speed={-20}>
                        <div className="max-w-2xl">
                            <h1 className="text-8xl leading-tight text-lightGreen">
                                Hi, my name is <span className="text-darkGreen font-bold ">Christian</span>
                            </h1>
                            <p className="mt-4 text-2xl text-lightGreen">
                                I'm a{" "}
                                <span className="font-semibold text-darkGreen">
                                    software engineer
                                </span>{" "}
                                from Orlando, Florida.
                            </p>

                            {/* Buttons */}
                            <div className="mt-8 flex gap-6">
                                {/* View Projects Button */}
                                <a
                                    href="#projects"
                                    className="border-2 border-lightGreen text-lightGreen text-xl font-bold px-8 py-4 rounded-md hover:bg-lightGreen hover:text-darkGreen transition-all duration-300"
                                >
                                    VIEW PROJECTS
                                </a>

                                {/* View Resume Button */}

                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lightGreen text-xl font-bold px-8 py-4 hover:underline transition-all duration-300"
                                >

                                    VIEW RESUME
                                </a>
                            </div>
                        </div>
                    </Parallax>
                    {/* Right - Circular Image */}
                    <div className="w-[50vh] h-[50vh] overflow-hidden mt-6 md:mt-0">
                        <img src="/images/computer.svg" alt="Christian Lopez" className="w-full h-full object-cover" />
                    </div>
                </section>

                {/* Research */}
                <section id="research" className="min-h-[120vh] bg-offWhite flex flex-col items-center justify-center md:px-20 font-nunito">
                    <Parallax translateY={['-200px', '0px']}>
                        <h1 className="text-7xl font-bold leading-tight text-darkGreen">Research</h1>
                    </Parallax>
                    <div className="grid grid-cols-1 gap-12 w-full max-w-6xl">
                        {/* Research 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-6 pt-12">
                            <div className="w-[450px] h-[225px] flex items-center justify-center">
                                <img
                                    src="/images/doe.png"
                                    alt="DOE Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <a href="/details/visiting-scholar" className="flex-1 p-4 cursor-pointer bg-offWhite rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-darkGreen hover:text-white group">
                                <div className="flex-1 p-6 rounded-lg">
                                    <h2 className="font-bold text-3xl mb-2 text-darkGreen md:pb-4 group-hover:text-offWhite transition">
                                        Power Outage Detection
                                    </h2>
                                    <p className="text-xl text-darkGreen group-hover:text-offWhite transition">
                                        I contributed to developing a custom deep learning model to predict power outages across the U.S. using satellite imagery,
                                        a project commissioned by the Department of Energy—combining innovation with real-world impact is what drives me.
                                    </p>
                                    <p className="text-xl font-bold text-darkGreen group-hover:text-offWhite transition pt-3">Learn more...</p>
                                </div>
                            </a>
                        </div>
                        {/* Research 2 */}
                        <div className="flex flex-col md:flex-row items-center gap-4 pt-6">
                            <div className="w-[450px] h-[225px] flex items-center justify-center">
                                <img
                                    src="/images/cw.svg"
                                    alt="Case Western Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <a href="/details/visiting-scholar" className="flex-1 p-4 cursor-pointer bg-offWhite rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-darkGreen hover:text-white group">

                                <div className="flex-1 p-6 rounded-lg">
                                    {/* Title with Hover Color Change */}
                                    <h2 className="font-bold text-3xl mb-2 text-darkGreen md:pb-4 group-hover:text-offWhite transition">
                                        Visiting Scholar
                                    </h2>

                                    {/* Paragraph with Hover Color Change */}
                                    <p className="text-xl text-darkGreen group-hover:text-offWhite transition">
                                        At Case Western, I integrated CDC mortality data with DOE outage stats (2016-2024) to reveal how social, economic,
                                        and climate factors affect mortality—work presented at the Tohoku Symposium. I’m passionate about blending diverse disciplines
                                        and cutting-edge technologies to drive meaningful insights.
                                    </p>
                                    <p className="text-xl font-bold text-darkGreen group-hover:text-offWhite transition pt-3">Learn more...</p>
                                </div>

                            </a>
                        </div>
                    </div>
                </section>



                {/* Projects */}
                <section id="projects" className="min-h-screen bg-offWhite flex flex-col items-center justify-center md:px-20 font-nunito">
                    <div className="max-w-7xl mx-auto px-20">

                        {/* Section Title */}
                        <h1 className="text-7xl font-bold leading-tight text-center text-darkGreen">Recent Projects</h1>

                        {/* Circular Project Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-48 pt-24 max-w-5xl mx-auto text-center">

                            {/* Project 1 - Transformer from Scratch */}
                            <a href="https://github.com/legendarychristian/Transformer-From-Scratch" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-4 cursor-pointer group">
                                {/* Circular Image Container */}
                                <div className="w-72 h-72 rounded-xl bg-green-300 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                    <img src="/images/ai.png" alt="Transformer Project" className="w-full h-full object-contain" />
                                </div>
                                {/* Project Name */}
                                <h3 className="text-xl font-bold text-darkGreen group-hover:text-blue-500 transition">
                                    Transformer from Scratch
                                </h3>
                            </a>

                            {/* Project 2 - Genetic Algorithm */}
                            {/* <a href="/details/genetic-algorithm" className="flex flex-col items-center space-y-4 cursor-pointer group">
                                <div className="w-32 h-32 rounded-full bg-green-300 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                    <img src="/images/genetic-algorithm.png" alt="Genetic Algorithm Project" className="w-full h-full object-cover" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-darkGreen group-hover:text-blue-500 transition">
                                    Genetic Algorithm
                                </h3>
                            </a> */}

                            {/* Project 3 - Deep Learning Model */}
                            <a href="https://github.com/legendarychristian/SP500-LSTM-Analysis/tree/main" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-4 cursor-pointer group">
                                {/* Circular Image Container */}
                                <div className="w-72 h-72 rounded-xl bg-green-300 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                    <img src="/images/stocks.png" alt="Deep Learning Project" className="w-full h-full object-contain" />
                                </div>
                                {/* Project Name */}
                                <h3 className="text-xl font-bold text-darkGreen group-hover:text-blue-500 transition">
                                    Deep Learning Model
                                </h3>
                            </a>
                        </div>
                        {/* GitHub Button Centered Below All Projects */}
                        <div className="flex justify-center mt-8 py-20">
                            <a href="https://github.com/legendarychristian" target="_blank" className="px-6 py-3 bg-darkGreen text-white font-bold rounded-md hover:bg-blue-500 transition">
                                View All Projects on GitHub
                            </a>
                        </div>
                    </div>
                </section>


                {/* About Me */}
                <section id="about" className="min-h-[80vh] bg-offWhite flex flex-col justify-start pt-24 md:px-72 font-nunito">
                    <div className="max-w-full">
                        <h1 className="text-7xl font-bold leading-tight text-darkGreen">
                            About Me
                        </h1>
                        <p className="mt-4 text-2xl text-darkGreen">
                            I am a passionate scientist with expertise in developing scalable AI systems, dynamic web applications,
                            and advanced data processing solutions.
                        </p>
                        <p className="mt-4 text-2xl text-darkGreen">
                            My work focuses on utilizing {" "}
                            <span className="font-bold text-darkGreen">
                                AWS services, GPU programming, and fine-tuning foundation models
                            </span>
                            {" "} to tackle complex challenges across various domains.
                        </p>
                        <p className="mt-4 text-2xl text-darkGreen">
                            I enjoy tackling challenging problems that require me to piece together different technologies in unique ways.
                        </p>
                        <p className="mt-4 text-2xl text-darkGreen">
                            My passion for programming stems from a love of technology, and while programming is my specialty,
                            I am constantly seeking knowledge and learning new things about the tech industry simply because I enjoy it.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
