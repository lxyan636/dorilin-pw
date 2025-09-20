import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

import Selfie from "../../assets/Selfie.png";
import Selfie2 from "../../assets/Selfie2.png";
import Selfie3 from "../../assets/Selfie3.JPEG";
import F1 from "../../assets/F1.JPEG";
import F2 from "../../assets/F2.png";
import F3 from "../../assets/F3.JPEG";

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
                    <h2 className="text-5xl mb-3 from-[#8a5128] to-[#8D926F]
             text-center bg-clip-text text-transparent bg-gradient-to-r
              hover:-translate-y-1"> About Me </h2>

                    <div className="flex items-center justify-center gap-4 mb-6">
                        <button
                            onClick={handlePrev}
                            className="px-3 py-2 bg-black/20 hover:bg-black/40 text-white rounded-full"
                        > ← </button>

                        <div className="flex gap-4">
                            <div className="block md:hidden w-60 h-80 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={visibleImages[0]}
                                    alt="About Me"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {visibleImages.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="hidden md:block w-40 h-40 md:w-60 md:h-80 rounded-lg overflow-hidden shadow-lg"
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
                            className="px-3 py-2 bg-black/20 hover:bg-black/40 text-white rounded-full"
                        >
                            →
                        </button>
                    </div>


                    <p className="text-black mb-6">
                        I'm Dori, a passionate student at Northeastern University pursuing a
                        degree in Computer Science and Business Administration.
                    </p>

                    <div className="flex flex-col space-y-4">
                        <div className="rounded-xl p-6 bg-transparent">
                            <h4 className="text-3xl text-black/80 mb-4 ml-1">Education</h4>
                            <div className="rounded-xl p-5 border-[#8D926F] border bg-white/25 flex flex-col items-start text-black/50">
                                <h3 className="text-lg font-semi mb-2">
                                    Northeastern University
                                </h3>
                                <ul className="list-disc pl-8 text-left text-xs">
                                    <li className="mb-1">
                                        Candidate of Bachelor of Science: Computer Science and
                                        Business Administration in Accounting
                                    </li>
                                    <li className="mb-1">Expected Graduation: May 2028</li>
                                    <li className="mb-1">
                                        Relevant Coursework: Financial Accounting, Managerial
                                        Accounting, Calculus for Business, Fundamentals of Computer
                                        Science I & II, Objected Oriented Design, Algorithms,
                                        Foundations of Data Science
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semi mb-2 mt-2">
                                    Dutchess Community College
                                </h3>
                                <ul className="list-disc pl-8 text-left text-xs">
                                    <li className="mb-1">Bridge Program</li>
                                    <li className="mb-1">August 2023 - May 2024</li>
                                    <li className="mb-1">
                                        Relevant Coursework: Computer Science I & II, Statistics,
                                        Introduction to Data Science
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semi mb-2 mt-2">Dover High School</h3>
                                <ul className="list-disc pl-8 text-left text-xs">
                                    <li className="mb-1">High School Diploma</li>
                                    <li className="mb-1">September 2020 - June 2024</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
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

                        <div className="rounded-xl p-6">
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