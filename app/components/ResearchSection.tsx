"use client";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

export default function ResearchSection() {
    return (
        <section id="research" className="min-h-[120vh] bg-offWhite flex flex-col items-center justify-center md:px-20 font-nunito">
            <Parallax translateY={["-200px", "0px"]}>
                <h1 className="text-7xl font-bold leading-tight text-darkGreen">Research</h1>
            </Parallax>
            <div className="grid grid-cols-1 gap-12 w-full max-w-6xl">
                {/* Research 1 */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-[450px] h-[225px] flex items-center justify-center">
                        <img
                            src="/images/doe.png"
                            alt="DOE Logo"
                            className="w-[450px] h-[225px] object-contain"
                        />
                    </div>
                    <Link href="/details/power-outage-detection" prefetch={true} className="flex-1">
                        <div className="p-4 cursor-pointer bg-offWhite rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-darkGreen hover:text-white group">
                            <div className="p-6 rounded-lg">
                                <h2 className="font-bold text-3xl mb-2 text-darkGreen md:pb-4 group-hover:text-offWhite transition">
                                    Power Outage Satellite Detection
                                </h2>
                                <p className="text-xl text-darkGreen group-hover:text-offWhite transition">
                                    I contributed to developing a custom deep learning model to predict power outages across the U.S. using satellite imagery,
                                    a project commissioned by the Department of Energy—combining innovation with real-world impact is what drives me.
                                </p>
                                <p className="text-xl font-bold text-darkGreen group-hover:text-offWhite transition pt-3">Learn more...</p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Research 2 */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-[450px] h-[225px] flex items-center justify-center">
                        <img
                            src="/images/cw.svg"
                            alt="Case Western Logo"
                            className="w-[450px] h-[225px] object-contain"
                        />
                    </div>
                    <Link href="/details/visiting-scholar" prefetch={true} className="flex-1">
                        <div className="p-4 cursor-pointer bg-offWhite rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-darkGreen hover:text-white group">
                            <div className="p-6 rounded-lg">
                                <h2 className="font-bold text-3xl mb-2 text-darkGreen md:pb-4 group-hover:text-offWhite transition">
                                    Visiting Scholar
                                </h2>
                                <p className="text-xl text-darkGreen group-hover:text-offWhite transition">
                                    At Case Western, I integrated CDC mortality data with DOE outage stats (2016-2024) to reveal how social, economic,
                                    and climate factors affect mortality—work presented at the Tohoku Symposium. I’m passionate about blending diverse disciplines
                                    and cutting-edge technologies to drive meaningful insights.
                                </p>
                                <p className="text-xl font-bold text-darkGreen group-hover:text-offWhite transition pt-3">Learn more...</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
