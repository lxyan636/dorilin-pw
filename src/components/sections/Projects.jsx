import { RevealOnScroll } from "../RevealOnScroll";
import MudleView from "../../assets/MudleView.png";
import LBW from "../../assets/LBWView.png";
import PW from "../../assets/PersonalWebsite.png";
import CapStone from "../../assets/Final Project.pdf";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 bg-[#D4D3B3]">
            <div className="max-w-6xl max-auto px-4 mt-4">
                <h2 className="text-5xl mt-10 mb-10 text-[#8a5128] text-center hover:-translate-y-1">
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    
                    {/* PERSONAL WEBSITE PROJECT */}
                    <RevealOnScroll>
                        <div className="p-6 rounded-xl pt-8 border-dotted border-3 border-[#8D926F]/70 bg-white/20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col items-center">
                                    <img src={PW} className="w-sm h-auto mt-4 rounded-lg shadow-lg border-[#8D926F]/30" />
                                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                        {["React", "TailwindCSS", "HTML", "CSS", "VSCode", "Procreate"].map((tech, key) => (
                                            <span key={key} className="bg-[#8D926F]/30 text-black/50 px-3 py-1 rounded-full text-sm hover:-translate-y-1 transition-all shadow-lg">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center mt-4 hover:-translate-y-1 transition-all">
                                        <a href="https://lxyan636.github.io/dorilin-pw/" className="text-[#553900] transition-colors mt-3 inline-block">
                                            View ➡
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-2 font-serif text-center animate-[bounce_2s_infinite]">
                                        Personal Website -- You're Right Here!
                                    </h3>
                                    <p className="mb-4 text-center">
                                        This is my personal website built through using React and TailwindCSS! 
                                        I followed a tutorial on Youtube by PedroTech to help me get started,
                                        and then customized it to be respresentational of myself and what I like.
                                        I hope to be able to add more to my personal website in future, maybe an art gallery
                                        section or just anything else that I find interesting.
                                    </p>
                                    <p className="mb-4 text-center">
                                        This would be my second experience in website development, and I learned a lot
                                        about displaying content with a graphical user interface. However, I hope to 
                                        still improve the graphics and interactivity of the website in the future. 
                                        Send me a message if you have any suggestions or ideas :)
                                    </p>
                                    <p className="text-sm mb-4 text-center font-sans italic font-bold">
                                        September 2025 - October 2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* MUSIC WORDLE PROJECT */}
                    <RevealOnScroll>
                        <div className="p-6 rounded-xl pt-8 border-dotted border-3 border-[#8D926F]/70 bg-[#8D926F]/30">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-2 font-serif text-center animate-[bounce_2s_infinite]">
                                        Music Wordle
                                    </h3>
                                    <p className="mb-4 text-center">
                                        This is a hangman/wordle style song recommendation game built with over 175 songs
                                        from various genres. The user has 7 chances to guess the correct song name or
                                        else they will lose the game. There are 3 available hints and a Spotify
                                        soundtrack preview to help the user guess the song.
                                    </p>
                                    <p className="mb-4 text-center">
                                        This was a project built with the help of a mentor, and 4 other team members. I focused mainly on the front-end development of the keyboard, hangcat, hints,
                                        winning/losing page,
                                        and logo, along with some data management using Google Sheets. Please check the
                                        website on a desktop for the best experience.
                                    </p>
                                    <p className="text-sm mb-4 text-center font-sans italic font-bold">
                                        January 2025 - March 2025
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img src={MudleView} className="w-md h-auto mt-4 rounded-xl shadow-lg border-2 border-[#8D926F]/30" />
                                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                        {["React", "Javascript", "HTML", "CSS", "Google Sheets", "Procreate"].map((tech, key) => (
                                            <span key={key} className="bg-[#8D926F]/30 text-black/50 px-3 py-1 rounded-full text-sm hover:-translate-y-1 transition-all shadow-lg">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center mt-4 hover:-translate-y-1 transition-all">
                                        <a href="https://oasis-2025-mudle.github.io/app/" className="text-[#553900] transition-colors mt-3 inline-block">
                                            View ➡
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* CAPSTONE PROJECT */}
                    <RevealOnScroll>
                        <div className="p-6 rounded-xl pt-8 border-dotted border-3 border-[#8D926F]/70  bg-white/20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col items-center">
                                    <img src={LBW} className="w-80 h-auto mt-4 rounded-lg shadow-lg border-2 border-[#8D926F]/30" />
                                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                        {["RStudio", "R", "HTML"].map((tech, key) => (
                                            <span key={key} className="bg-[#8D926F]/30 text-black/50 px-3 py-1 rounded-full text-sm hover:-translate-y-1 transition-all shadow-lg">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center mt-4 hover:-translate-y-1 transition-all">
                                        <a href={CapStone} target="_blank" rel="noopener noreferrer" className="text-[#553900] hover:underline">
                                            View ➡
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-2 font-serif text-center animate-[bounce_2s_infinite]">
                                        Capstone Project Analyzing Low Birth Weight Factors
                                    </h3>
                                    <p className="mb-4 text-center">
                                        This project focuses on analyzing factors contributing to low birth weight in infants...
                                    </p>
                                    <p className="text-sm mb-4 text-center font-sans italic font-bold">
                                        September 2023 - December 2023
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* OTHER COURSEWORK PROJECTS */}
                    <RevealOnScroll>
                        <div className="p-6 rounded-xl transition-all border-t border-padding-2 pt-8 border-dotted bg-[#8D926F]/30">
                            <h3 className="text-2xl font-serif mb-4 font-sans font-bold text-center animate-[bounce_2s_infinite]">
                                Other Coursework Projects... 
                            </h3>
                            <div className="flex flex-col items-center">
                                <p className="text-left w-full text-lg bg-2">
                                    Fundamentals of Computer Science 1:
                                    <p className="pl-5 text-base mt-2">☘︎ Happiness of Neighborhood Index: </p>
                                    <p className="pl-15 mb-4 text-sm">
                                        Simulated the change in happiness levels
                                        of 5 neighborhoods over time.
                                        <p className="text-right mb-2 text-sm italic text-black/50">
                                        Racket, DrRacket
                                        </p>
                                    </p>
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-left w-full text-lg bg-2">
                                    Fundamentals of Computer Science 2:
                                    <p className="pl-5 text-base mt-2">☘︎ Z-type World (Partner Project): </p>
                                    <p className="pl-15 mb-4 text-sm">
                                        Typing game where the user must type out combinations of letters before
                                        having it reach the bottom of the screen.
                                    </p>
                                    <p className="pl-5 text-base mt-2">☘︎ Connections (Partner Project): </p>
                                    <p className="pl-15 mb-4 text-sm">
                                        Similar to the connections game on NY Times, the user must find
                                        connections between 16 different words. The user has 4 chances to find all 4 connections.
                                    </p>
                                    <p className="pl-5 text-base mt-2">☘︎ Light Em All (Partner Project): </p>
                                    <p className="pl-15 mb-4 text-sm">
                                        Maze game where a grid of mixed up wires need to be connected such that
                                        they could be lit up. There is also a radius to the light, so the user
                                        must be strategic in moving the powerhouse.
                                        <p className="text-right mb-2 text-sm italic text-black/50">
                                        Java, Eclipse
                                        </p>
                                    </p>
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-left w-full text-lg bg-2">
                                    Object Oriented Design:
                                    <p className="pl-5 text-base mt-2">☘︎ Calendar App (Partner Project): </p>
                                    <p className="pl-15 mb-4 text-sm">
                                        Created a calendar application with features similar to Google Calendar.
                                        Implemented a command line interface with headless and interactive modes, and also a GUI.
                                        <p className="text-right mb-2 text-sm italic text-black/50">
                                        Java, IntelliJ
                                        </p>
                                    </p>
                                </p>
                            </div>
                            <div className="flex flex-col items-center mb-4">
                                <p className="text-left w-full text-lg bg-2">
                                    Financial Accounting & Profit Analysis:
                                    <p className="pl-5 text-base mt-2">☘︎ Profit Analysis Recommendation Group Project 
                                        <p className="text-right mb-2 text-sm italic text-black/50">
                                        Microsoft Excel, Microsoft Word
                                        </p>
                                    </p>
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-left w-full text-lg bg-2">
                                    Introduction to Marketing:
                                    <p className="pl-5 text-base mt-2">☘︎ Bicycle Company Marketing Simulation 
                                        <p className="text-right mb-2 text-sm italic text-black/50">
                                        Marketplace Simulation
                                        </p>
                                    </p>
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>

                </div>
            </div>
        </section>
    );
};
