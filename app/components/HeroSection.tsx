export default function HeroSection() {
    return (
      <section id="home" className="min-h-screen bg-b1 flex items-center font-openSans">
        <div className="w-full flex flex-col lg:flex-row items-center px-6 lg:px-36">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-center lg:text-left py-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-b3 font-light pb-4">
              Hi, my name is
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-b3 font-bold">
              Christian
            </h1>
            <p className="text-lg sm:text-2xl text-b2 py-8 font-light">
              I'm a{" "}
              <span className="font-bold">
                software engineer
              </span>{" "}
              from Orlando, Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <button className="w-full sm:w-40 bg-[#CDE9F5] text-b2 font-light border border-[#C1D6DF] rounded-full hover:bg-b3 hover:text-white transition-all duration-300 py-2 px-4">
                <a href="#projects">View Projects</a>
              </button>
              <button className="w-full sm:w-40 bg-[#CDE9F5] text-b2 font-light border border-[#C1D6DF] rounded-full hover:bg-b3 hover:text-white transition-all duration-300 py-2 px-4">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
              </button>
            </div>
          </div>
  
          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img src="/images/computer.svg" alt="Christian Lopez" className="max-w-xs sm:max-w-md lg:max-w-full max-h-full" />
          </div>
        </div>
      </section>
    );
  }  