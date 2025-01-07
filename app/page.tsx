"use client";
import { Parallax } from 'react-scroll-parallax';

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f5f9fc] text-gray-800">
            <div className="flex flex-col">

                {/* Landing Page */}
                <section className="min-h-[120vh] bg-offWhite flex items-center justify-between md:px-72 pb-48 font-nunito">
                    <Parallax speed={-10}>
                        <div className="max-w-lg">
                            <h1 className="text-7xl font-bold leading-tight text-lightGreen">
                                Hi, my name is <span className="text-darkGreen">Christian</span>
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
                                    href="#resume"
                                    className="text-lightGreen text-xl font-bold px-8 py-4 hover:underline transition-all duration-300"
                                >
                                    VIEW RESUME
                                </a>
                            </div>
                        </div>
                    </Parallax>
                    <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-blue-100 h-40 w-40 transform rotate-45 opacity-50"></div>
                        <img
                            src="/images/profile_picture.JPG"
                            alt="Christian's Image"
                            className="relative w-80 h-auto z-10"
                        />
                    </div>
                </section>

                {/* Research */}
                <section className="min-h-[120vh] bg-offWhite flex flex-col items-center justify-center md:px-20 font-nunito">
                    <Parallax translateY={['-50px', '0px']}>       
                        <h1 className="text-7xl font-bold leading-tight text-darkGreen">Research</h1>
                    </Parallax>
                    <div className="grid grid-cols-1 gap-10 w-full max-w-6xl">
                        {/* Research 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-4 pt-12">
                            <Parallax translateX={['-75px', '0px']}>
                                <div className="w-[450px] h-[225px] flex items-center justify-center">
                                    <img
                                        src="/images/doe.png"
                                        alt="DOE Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </Parallax>
                            <div className="flex-1 p-6 rounded-lg">
                                <h2 className="text-3xl mb-2 text-darkGreen">Power Outage Detection</h2>
                                <p className="text-xl text-lightGreen">
                                    I contributed to developing a custom deep learning model to predict power outages across the U.S. using satellite imagery,
                                    a project commissioned by the Department of Energy—combining innovation with real-world impact is what drives me.
                                </p>
                            </div>
                        </div>
                        {/* Research 2 */}
                        <div className="flex flex-col md:flex-row items-center gap-4 pt-12">
                            <Parallax translateX={['-75px', '0px']}>
                                <div className="w-[450px] h-[225px] flex items-center justify-center translate-x-[40px]">
                                    <img
                                        src="/images/cw.svg"
                                        alt="Case Western Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </Parallax>
                            <div className="flex-1 p-6 rounded-lg">
                                <h2 className="text-3xl mb-2 text-darkGreen">Visiting Scholar</h2>
                                <p className="text-xl text-lightGreen">
                                    At Case Western, I integrated CDC mortality data with DOE outage stats (2016-2024) to reveal how social, economic,
                                    and climate factors affect mortality—work presented at the Tohoku Symposium. I’m passionate about blending diverse disciplines
                                    and cutting-edge technologies to drive meaningful insights.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Projects */}
                <section className="min-h-screen bg-offWhite flex flex-col items-center justify-center md:px-20 font-nunito">
                    <div className="max-w-7xl mx-auto px-20">

                        {/* Section Title */}
                        <h1 className="text-7xl font-bold leading-tight text-center text-darkGreen">Recent Projects</h1>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-24">

                            {/* Project 1 */}
                            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                                <img
                                    src=""
                                    alt="Project 1"
                                    className="w-full h-72 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-darkGreen mb-2">Transformer from Scratch</h3>
                                    <p className="text-lg text-lightGreen mb-4">
                                        A multi-column, flexbox-based page layout and hero image with a tinted overlay.
                                    </p>
                                    <a
                                        href="#project1"
                                        className="inline-flex items-center gap-2 text-darkGreen font-bold hover:text-lightGreen transition-all duration-300"
                                    >
                                        View project
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                                <img
                                    src="/images/project2.jpg"
                                    alt="Project 2"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-darkGreen mb-2">Market Genetic Algorithms</h3>
                                    <p className="text-lg text-lightGreen mb-4">
                                        A web page for a fashion retailer with a background video that plays in a loop.
                                    </p>
                                    <a
                                        href="#project2"
                                        className="inline-flex items-center gap-2 text-darkGreen font-bold hover:text-lightGreen transition-all duration-300"
                                    >
                                        View project
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                                <img
                                    src="/images/project3.jpg"
                                    alt="Project 3"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-darkGreen mb-2">Stickify</h3>
                                    <p className="text-lg text-lightGreen mb-4">
                                        A gallery of hero block elements with split-screen layouts and duotone images.
                                    </p>
                                    <a
                                        href="#project3"
                                        className="inline-flex items-center gap-2 text-darkGreen font-bold hover:text-lightGreen transition-all duration-300"
                                    >
                                        View project
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Me */}
                <section className="min-h-screen bg-offWhite flex flex-col justify-start pt-48 md:px-72 font-nunito">
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
