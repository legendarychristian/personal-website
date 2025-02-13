import Link from "next/link";

export default function ResearchSection() {
    return (
        <section id="research" className="min-h-screen bg-b5 flex flex-col items-center justify-center font-openSans px-4 sm:px-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-[#EEF1FD] font-bold pt-16 sm:pt-24">
                Research
            </h1>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-12 px-4 sm:px-12 md:px-24 py-8">
                <div className="w-full md:w-1/3 bg-transparent rounded-xl flex items-center justify-center">
                    <img src="/images/doe.svg" alt="DOE" className="w-auto h-auto max-w-full max-h-48 sm:max-h-64 md:max-h-96 object-contain" />
                </div>
                <div className="w-full md:w-2/3 bg-transparent">
                    <h2 className="text-2xl sm:text-3xl text-[#EEF1FD] font-bold p-2 sm:p-4">
                        Power Outage Satellite Detection
                    </h2>
                    <p className="text-base sm:text-lg text-[#EEF1FD] font-light px-2 sm:px-4 pb-4">
                        I contributed to developing a custom deep learning model to predict power outages across the U.S. using satellite imagery,
                        a project commissioned by the Department of Energy—combining innovation with real-world impact is what drives me.
                    </p>
                    <Link href="/details/power-outage-detection" prefetch={true}>
                        <button className="w-full sm:w-36 bg-[#5B5E8D] text-[#B2B5DA] font-light border border-[#A1A5CE] rounded-full hover:bg-[#333668] hover:text-white hover:border-[#1A1E48] transition-all duration-300 py-2 px-4 mx-2">
                            Learn More...
                        </button>
                    </Link>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-12 px-4 sm:px-12 md:px-24 py-8">
                <div className="w-full md:w-1/3 bg-transparent rounded-xl flex items-center justify-center">
                    <img src="/images/cw.svg" alt="CW" className="w-auto h-auto max-w-full max-h-48 sm:max-h-64 md:max-h-96 object-contain" />
                </div>
                <div className="w-full md:w-2/3 bg-transparent">
                    <h2 className="text-2xl sm:text-3xl text-[#EEF1FD] font-bold p-2 sm:p-4">
                        Visiting Scholar: Social Vulnerability
                    </h2>
                    <p className="text-base sm:text-lg text-[#EEF1FD] font-light px-2 sm:px-4 pb-4">
                        At Case Western, I integrated CDC mortality data with DOE outage stats (2016-2024) to reveal how social, economic,
                        and climate factors affect mortality—work presented at the Tohoku Symposium. I’m passionate about blending diverse disciplines
                        and cutting-edge technologies to drive meaningful insights.
                    </p>
                    <Link href="/details/visiting-scholar" prefetch={true}>
                        <button className="w-full sm:w-36 bg-[#5B5E8D] text-[#B2B5DA] font-light border border-[#A1A5CE] rounded-full hover:bg-[#333668] hover:text-white hover:border-[#1A1E48] transition-all duration-300 py-2 px-4 mx-2">
                            Learn More...
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
