export default function AboutSection() {
    return (
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
    );
}
