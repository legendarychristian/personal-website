export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen bg-b1 flex items-center font-openSans">
            <div className="w-full flex flex-row items-center">
                <div className="w-1/2 flex flex-col items-start px-36">
                    <h1 className="text-6xl text-b3 font-light pb-8">
                        Hi, my name is {" "}
                    </h1>
                    <h1 className="text-6xl text-b3 font-bold">
                        Christian
                    </h1>
                    <p className="text-3xl text-b2 py-12 font-light">
                        I'm a{" "}
                        <span className="font-bold">
                            software engineer
                        </span>{" "}
                        from Orlando, Florida.
                    </p>
                    <div className="flex flex-row gap-8">
                        <button className="lg:w-40 md:w-32 sm:w-28 bg-[#CDE9F5] text-b2 font-light border border-[#C1D6DF] rounded-full hover:bg-b3 hover:text-white transition-all duration-300 py-2 px-4">
                            <a href="#projects">View Projects</a>
                        </button>
                        <button className="lg:w-40 md:w-32 sm:w-28 bg-[#CDE9F5] text-b2 font-light border border-[#C1D6DF] rounded-full hover:bg-b3 hover:text-white transition-all duration-300 py-2 px-4">
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
                        </button>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center pr-36">
                    <img src="/images/computer.svg" alt="Christian Lopez" className="max-w-full max-h-full" />
                </div>
            </div>
        </section>
    );
}