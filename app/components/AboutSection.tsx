export default function AboutSection() {
    return (

        <section id="about" className="min-h-screen bg-[#252456] flex flex-col font-openSans" >
            <div className="flex flex-col w-full pt-24">
                <h1 className="flex items-center justify-center text-7xl text-[#EEF1FD] font-bold mb-8">
                    About Me
                </h1>
                <div className="flex flex-col font-openSans pt-12 px-36">
                    <p className="mt-4 text-3xl text-[#B2B5DA] font-light leading-relaxed">
                        I am a passionate scientist with expertise in developing scalable AI systems, dynamic web applications,
                        and advanced data processing solutions.
                    </p>
                    <p className="mt-4 text-3xl text-[#B2B5DA] font-light leading-relaxed">
                        My work focuses on utilizing AWS services, GPU programming, and fine-tuning foundation models
                        to tackle complex challenges across various domains.
                    </p>
                    <p className="mt-4 text-3xl text-[#B2B5DA] font-light leading-relaxed">
                        I enjoy tackling challenging problems that require me to piece together different technologies in unique ways.
                    </p>
                    <p className="mt-4 text-3xl text-[#B2B5DA] font-light leading-relaxed">
                        My passion for programming stems from a love of technology, and while programming is my specialty,
                        I am constantly seeking knowledge and learning new things about the tech industry simply because I enjoy it.
                    </p>
                    {/* <p className="mt-4 text-3xl text-[#B2B5DA] font-light leading-relaxed">
                        If you'd like to learn more about me, feel free to reach out to me on any of the following platforms:
                    </p>
                    <p className="mt-4 text-xl text-[#B2B5DA] font-light leading-relaxed">
                        I look forward to hearing from you!
                    </p> */}
                </div>
            </div>
        </section>

    );
}
