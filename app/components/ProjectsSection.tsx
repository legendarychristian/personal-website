export default function ProjectsSection() {
    return (
      <section id="projects" className="min-h-screen bg-b4 flex flex-col items-center justify-center px-6 md:px-20 font-openSans">
        <div className="max-w-7xl mx-auto pt-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-center text-b3">
            Recent Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24 pt-16 max-w-5xl mx-auto text-center">
            {/* Project 1 */}
            <a
              href="https://github.com/legendarychristian/Transformer-From-Scratch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-4 cursor-pointer group"
            >
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-xl bg-[#ACD9EF] flex items-center justify-center overflow-hidden border border-[#8DB5C9] transition-transform duration-300 group-hover:shadow-xl group-hover:scale-105">
                <img src="/images/ai.png" alt="Transformer Project" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-light text-b2 group-hover:text-b3 transition">
                Transformer from Scratch
              </h3>
            </a>
  
            {/* Project 2 */}
            <a
              href="https://github.com/legendarychristian/SP500-LSTM-Analysis/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-4 cursor-pointer group"
            >
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-xl bg-[#ACD9EF] flex items-center justify-center overflow-hidden border border-[#8DB5C9] transition-transform duration-300 group-hover:shadow-xl group-hover:scale-105">
                <img src="/images/stocks.png" alt="Deep Learning Project" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-light text-b2 group-hover:text-b3 transition">
                Machine Learning: LSTM on Stocks
              </h3>
            </a>
          </div>
  
          <div className="flex justify-center mt-8 py-12">
            <button className="w-full sm:w-64 bg-[#ACD9EF] text-b2 font-light border border-[#8DB5C9] rounded-full hover:bg-b3 hover:text-white transition-all duration-300 py-2 px-4">
              <a href="https://github.com/legendarychristian" target="_blank" rel="noopener noreferrer">
                View Projects on GitHub
              </a>
            </button>
          </div>
        </div>
      </section>
    );
  }  