"use client";
import Link from "next/link";

export default function ResearchSection() {
    return (
        <section id="research" className="min-h-screen bg-b5 flex flex-col items-center justify-center font-openSans">
            <h1 className="text-7xl text-[#EEF1FD] font-bold pt-24">Research</h1>
            <div className="w-full flex flex-row sm:flex-row items-center justify-center gap-6 sm:gap-12 px-24 pb-8">
                <div className="w-full sm:w-1/3 bg-transparent rounded-xl flex items-center justify-center">
                    <img src="/images/doe.svg" alt="DOE" className="w-auto h-auto max-w-full max-h-96 object-contain" />
                </div>
                <div className="w-full sm:w-2/3 bg-transparent">
                    <h2 className="text-3xl text-[#EEF1FD] font-bold p-4">
                        Power Outage Satellite Detection
                    </h2>
                    <p className="text-lg text-[#EEF1FD] font-light px-4 pb-4">
                        I contributed to developing a custom deep learning model to predict power outages across the U.S. using satellite imagery,
                        a project commissioned by the Department of Energy—combining innovation with real-world impact is what drives me.
                    </p>
                    <Link href="/details/power-outage-detection" prefetch={true} className="flex-1">
                        <button className="md:w-36 sm:w-28 bg-[#5B5E8D] text-[#B2B5DA] font-light border border-[#A1A5CE] rounded-full hover:bg-[#333668] hover:text-white hover:border-[#1A1E48] transition-all duration-300 py-2 px-4 mx-4">
                            Learn More...
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-full flex flex-row sm:flex-row items-center justify-center gap-6 sm:gap-12 px-24 pb-16">
                <div className="w-full sm:w-1/3 h-48 bg-transparent rounded-xl">
                    <img src="/images/cw.svg" alt="CW" className="w-full h-full object-contain" />
                </div>
                <div className="w-full sm:w-2/3 bg-transparent">
                    <h2 className="text-3xl text-[#EEF1FD] font-bold p-4">
                        Visiting Scholar: Social Vulnerability
                    </h2>
                    <p className="text-lg text-[#EEF1FD] font-light px-4 pb-4">
                        At Case Western, I integrated CDC mortality data with DOE outage stats (2016-2024) to reveal how social, economic,
                        and climate factors affect mortality—work presented at the Tohoku Symposium. I’m passionate about blending diverse disciplines
                        and cutting-edge technologies to drive meaningful insights.
                    </p>
                    <Link href="/details/visiting-scholar" prefetch={true} className="flex-1">
                        <button className="md:w-36 sm:w-28 bg-[#5B5E8D] text-[#B2B5DA] font-light border border-[#A1A5CE] rounded-full hover:bg-[#333668] hover:text-white hover:border-[#1A1E48] transition-all duration-300 py-2 px-4 mx-4">
                            Learn More...
                        </button>
                    </Link>
                </div>
            </div>
        </section>

    );
}

// <div className="grid grid-cols-1 gap-12 w-full max-w-6xl">
//                 {/* Research 1 */}
//                 <div className="flex flex-col md:flex-row items-center gap-6">
//                     <div className="w-[450px] h-[225px] flex items-center justify-center">
//                         <img
//                             src="/images/doe.png"
//                             alt="DOE Logo"
//                             className="w-[450px] h-[225px] object-contain"
//                         />
//                     </div>
//                     <Link href="/details/power-outage-detection" prefetch={true} className="flex-1">
//                         <div className="p-4 cursor-pointer bg-offWhite rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-darkGreen hover:text-white group">
//                             <div className="p-6 rounded-lg">
//                                 <h2 className="font-bold text-3xl mb-2 text-darkGreen md:pb-4 group-hover:text-offWhite transition">
//                                     Power Outage Satellite Detection
//                                 </h2>
//                                 <p className="text-xl text-darkGreen group-hover:text-offWhite transition">
//                                     I contributed to developing a custom deep learning model to predict power outages across the U.S. using satellite imagery,
//                                     a project commissioned by the Department of Energy—combining innovation with real-world impact is what drives me.
//                                 </p>
//                                 <p className="text-xl font-bold text-darkGreen group-hover:text-offWhite transition pt-3">Learn more...</p>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>

//                 {/* Research 2 */}
//                 <div className="flex flex-col md:flex-row items-center gap-6">
//                     <div className="w-[450px] h-[225px] flex items-center justify-center">
//                         <img
//                             src="/images/cw.svg"
//                             alt="Case Western Logo"
//                             className="w-[450px] h-[225px] object-contain"
//                         />
//                     </div>
//                     <Link href="/details/visiting-scholar" prefetch={true} className="flex-1">
//                         <div className="p-4 cursor-pointer bg-offWhite rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-darkGreen hover:text-white group">
//                             <div className="p-6 rounded-lg">
//                                 <h2 className="font-bold text-3xl mb-2 text-darkGreen md:pb-4 group-hover:text-offWhite transition">
//                                     Visiting Scholar
//                                 </h2>
//                                 <p className="text-xl text-darkGreen group-hover:text-offWhite transition">
//                                     At Case Western, I integrated CDC mortality data with DOE outage stats (2016-2024) to reveal how social, economic,
//                                     and climate factors affect mortality—work presented at the Tohoku Symposium. I’m passionate about blending diverse disciplines
//                                     and cutting-edge technologies to drive meaningful insights.
//                                 </p>
//                                 <p className="text-xl font-bold text-darkGreen group-hover:text-offWhite transition pt-3">Learn more...</p>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//             </div>