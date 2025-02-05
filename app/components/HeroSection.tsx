"use client"
import { Parallax } from 'react-scroll-parallax';

export default function HeroSection() {
    return (
        <section id="home" className="min-h-[120vh] bg-offWhite flex items-center justify-between md:px-48 pb-48 font-nunito">
            <Parallax speed={-20}>
                <div className="max-w-2xl">
                    <h1 className="text-6xl leading-tight text-lightGreen">
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
            <div className="w-[50vh] h-[50vh] mt-6 md:mt-0 flex items-center justify-center">
                <img src="/images/computer.svg" alt="Christian Lopez" className="max-w-full max-h-full" />
            </div>

        </section>
    );
}
