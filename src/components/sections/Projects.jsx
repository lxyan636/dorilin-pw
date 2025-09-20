import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-[#D4D3B3]">
        <RevealOnScroll>
            <div className="max-w-5xl max-auto px-4">
                <h2 className="text-5xl mb-10 text-[#8a5128]/80
             text-center 
             hover:-translate-y-1">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-purple-500 bg-white/50 hover:-translate-y-1
                 hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold mb-2 font-sans">
                            Music Wordle
                        </h3>
                        <p>
                            Description....
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {["React", "Javascript", "HTML", "CSS", "Google Sheets", "Procreate"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full
                             text-sm hover:-translate-y-1 transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4 hover:-translate-y-1 transition-all">
                            <a href="https://oasis-2025-mudle.github.io/app/" className="text-purple-800 
                        transition-colors mt-3inline-block">
                                View ➡
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-purple-500 bg-white/50 hover:-translate-y-1
                 hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold mb-2 font-sans">
                            Project 2
                        </h3>
                        <p>
                            Description....
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {["React", "Javascript", "HTML", "CSS", "Google Sheets", "Procreate"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full
                             text-sm hover:-translate-y-1 transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4 hover:-translate-y-1 transition-all">
                            <a href="#" className="text-purple-800 
                        transition-colors mt-3inline-block">
                                View ➡
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-purple-500 bg-white/50 hover:-translate-y-1
                 hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold mb-2 font-sans">
                            Project 3
                        </h3>
                        <p>
                            Description....
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {["React", "Javascript", "HTML", "CSS", "Google Sheets", "Procreate"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full
                             text-sm hover:-translate-y-1 transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4 hover:-translate-y-1 transition-all">
                            <a href="#" className="text-purple-800 
                        transition-colors mt-3inline-block">
                                View ➡
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
};