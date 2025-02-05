export default function ProjectsSection() {
    return (
        <section id="projects" className="min-h-screen bg-offWhite flex flex-col items-center justify-center md:px-20 font-nunito">
            <div className="max-w-7xl mx-auto px-20">

                {/* Section Title */}
                <h1 className="text-7xl font-bold leading-tight text-center text-darkGreen">Recent Projects</h1>

                {/*Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-48 pt-24 max-w-5xl mx-auto text-center">

                    {/* Project 1 - Transformer from Scratch */}
                    <a href="https://github.com/legendarychristian/Transformer-From-Scratch" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-4 cursor-pointer group">
                        {/* Image Container */}
                        <div className="w-72 h-72 rounded-xl bg-green-300 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                            <img src="/images/ai.png" alt="Transformer Project" className="w-full h-full object-contain" />
                        </div>
                        {/* Project Name */}
                        <h3 className="text-xl font-bold text-darkGreen group-hover:text-blue-500 transition">
                            Transformer from Scratch
                        </h3>
                    </a>

                    {/* Project 3 - Machine Learning: LSTM on Stocks */}
                    <a href="https://github.com/legendarychristian/SP500-LSTM-Analysis/tree/main" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-4 cursor-pointer group">
                        {/* Image Container */}
                        <div className="w-72 h-72 rounded-xl bg-green-300 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                            <img src="/images/stocks.png" alt="Deep Learning Project" className="w-full h-full object-contain" />
                        </div>
                        {/* Project Name */}
                        <h3 className="text-xl font-bold text-darkGreen group-hover:text-blue-500 transition">
                            Machine Learning: LSTM on Stocks
                        </h3>
                    </a>
                </div>
                {/* GitHub Button Centered Below All Projects */}
                <div className="flex justify-center mt-8 py-20 pb-36">
                    <a href="https://github.com/legendarychristian" target="_blank" className="px-6 py-3 bg-lightGreen text-white font-bold font-nunito rounded-md hover:bg-darkGreen transition">
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
