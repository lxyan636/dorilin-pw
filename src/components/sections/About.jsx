import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

import Selfie from "../../assets/Selfie.png";
import Selfie2 from "../../assets/Selfie2.png";
import Selfie3 from "../../assets/Selfie3.JPEG";
import F1 from "../../assets/F1.JPEG";
import F2 from "../../assets/F2.png";
import F3 from "../../assets/F3.JPEG";
import NEULogo from "../../assets/NEULogo.png";
import DCCLogo from "../../assets/DCCLogo.svg";
import DHSLogo from "../../assets/DHSLogo.png";

export const About = () => {
    const images = [F1, Selfie, F2, F3, Selfie2, Selfie3];
    const [startIndex, setStartIndex] = useState(0);

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % images.length);
    };

    // Show 3 images at a time
    const visibleImages = [
        images[startIndex],
        images[(startIndex + 1) % images.length],
        images[(startIndex + 2) % images.length],
    ];

    const programmingLanguages = [
        "Java",
        "Racket",
        "Javascript",
        "CSS",
        "Python",
        "HTML",
        "LaTeX",
    ];

    const toolsIDE = [
        "VSCode",
        "Eclipse",
        "DrRacket",
        "IntelliJ",
        "React",
        "GitHub",
        "RStudio",
        "CapCut",
        "Procreate",
        "Microsoft Word",
        "Microsoft Excel",
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col justify-center items-center py-20 bg-[#D4D3B3] text-black px-4"
        >
            <RevealOnScroll>
                <div className="max-w-80/100 mx-auto px-4 text-center">
                    <h2 className="text-5xl mb-3 text-[#8a5128]
              hover:-translate-y-1"> About Me </h2>

                    <div className="flex items-center justify-center gap-4 mb-6">
                        <button
                            onClick={handlePrev}
                            className="text-[#8a5128] text-xl hover:scale-120 animate-pulse"
                        > ← </button>

                        <div className="flex gap-4">
                            <div className="block md:hidden w-100% h-100% rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={visibleImages[0]}
                                    alt="About Me"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {visibleImages.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="hidden md:block w-100% h-100% md:w-50 md:h-70 lg:w-70 lg:h-90 rounded-lg overflow-hidden shadow-lg"
                                >
                                    <img
                                        src={src}
                                        alt="About Me"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="text-[#8a5128] text-xl hover:scale-120 animate-pulse"
                        >
                            →
                        </button>
                    </div>


                    <p className="text-black mb-6">
                        I'm Dori, a student at Northeastern University pursuing a
                        degree in Computer Science and Business Administration with a concentration
                        in accounting. My expected date of graduation would be in May 2028, and
                        I hope to pursue a CPA licensure in the near future so that I could
                        work as a certified public accountant.

                    </p>
                    <p className="text-black mb-6">
                        I love drawing digitally,
                        playing games, and crafting. Specifically, I love playing
                        dressup, mobile, and architecture building games. However, I am also
                        interested in animation, but have absolutely no experience--I hope to get
                        Procreate Dreams some day. You can also look around in my little photo gallery above.
                        These are some of my favorite memories of my family, friends, and myself! If you see me around,
                        feel free to say hi to me!
                    </p>

                    <div className="flex space-y-4 justify-center">
                        <div className="rounded-xl p-6 bg-transparent">
                            <h4 className="text-3xl text-black/80 mb-4 ml-1">Education</h4>
                            
                            <div className="rounded-3xl  p-3 bg-white/25 flex flex-col sm:flex-row items-center
                             text-black/70 mb-5 max-w-3xl hover:shadow-md hover:scale-102 transition-all">
                                <img
                                    src={NEULogo}
                                    className="w-30 h-30 justify-self self-center sm:w-45 sm:h-45 ml-5
                                    duration-300 hover:scale-105 hover:rotate-2"
                                />
                                <h3 className="text-xl font-semi mb-2 pl-2 mt-2 text-center">
                                    Northeastern University
                                    <ul className="list-disc pl-8 text-left text-sm">
                                        <li className="mb-1">
                                            Candidate of Bachelor of Science: Computer Science and
                                            Business Administration in Accounting
                                        </li>
                                        <li className="mb-1">Expected Graduation: May 2028</li>
                                        <li className="mb-1">
                                            Coursework: Financial Accounting, Managerial
                                            Accounting, Calculus for Business, Fundamentals of Computer
                                            Science I & II, Objected Oriented Design, Algorithms,
                                            Foundations of Data Science
                                        </li>
                                    </ul>
                                </h3>

                            </div>
                            <div className="rounded-3xl p-3 bg-white/25 flex flex-col sm:flex-row 
                            items-center text-black/70 mb-5 max-w-3xl hover:shadow-md hover:scale-102 transition-all">
                                <img
                                    src={DCCLogo}
                                    className="w-30 h-30 justify-self self-center sm:w-45 sm:h-45 ml-5 duration-300 
                                    hover:scale-105 hover:rotate-2"
                                />
                                <h3 className="text-xl font-semi mb-2 pl-2 mt-2 text-center">
                                    Dutchess Community College
                                    <ul className="list-disc pl-8 text-left text-sm">
                                        <li className="mb-1">
                                            Bridge Program
                                        </li>
                                        <li className="mb-1">September 2023 - May 2024</li>
                                        <li className="mb-1">
                                            Coursework: Computer Science I & II, Statistics, Introduction to Data Science,
                                            Economics, American National History
                                        </li>
                                    </ul>
                                </h3>
                            </div>
                            <div className="rounded-3xl p-3 bg-white/25 flex flex-col sm:flex-row
                             items-center text-black/70 mb-5 max-w-3xl duration-300 
                                    hover:scale-102 hover:shadow-md transition-all">
                                <img
                                    src={DHSLogo}
                                    className="w-30 h-18 justify-self self-center sm:w-48 sm:h-36 ml-5 duration-300 
                                    hover:scale-105 hover:rotate-2"
                                />
                                <h3 className="text-xl font-semi mb-2 pl-2 mt-2 text-center">
                                    Dover High School
                                    <ul className="list-disc pl-8 text-left text-sm">
                                        <li className="mb-1">
                                            High School Diploma
                                        </li>
                                        <li className="mb-1">September 2020 - June 2024</li>
                                        <li className="mb-1">
                                            Coursework: AP Chemistry, AP U.S. History, AP World History,
                                            AP Language, Pre-calculus, College Psychology
                                        </li>
                                    </ul>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch max-w-3xl mx-auto">
                        <div className="rounded-xl p-6">
                            <h3 className="text-xl text-black/80 mb-4">
                                Programming Languages
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {programmingLanguages.map((lang, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#8D926F]/50 text-black/50
                                 px-3 py-1 rounded-full text-sm hover:-translate-y-1 transition-all"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 max-w-3xl">
                            <h3 className="text-xl text-black/80 mb-4">Tools & IDE</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {toolsIDE.map((tools, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#8D926F]/50 text-black/50
                                 px-3 py-1 rounded-full text-sm hover:-translate-y-1 transition-all"
                                    >
                                        {tools}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};