import { RevealOnScroll } from "../RevealOnScroll";
import homeSelfie from "../../assets/HomeSelfie.png";
// bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent leading-right text-purple-400
export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#D4D3B3]">
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <img
                    src={homeSelfie}
                    className="rounded-full h-70 w-70 sm:h-80 sm:w-80 md:h-90
                     md:w-90 lg:h-96 lg:w-96 mx-auto mb-4 object-cover border-3 border-[#8a5128] hover:scale-102 duration-300
                     "
                />
                <h1 className="text-[#8a5128] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 hover:scale-102 font-serif">
                    Hi, I'm Dori!
                </h1>
                <p className="text-black-400 text-sm sm:text-base md:text-lg mb-8 max-w-lg mx-auto font-sans">
                    I'm a current student at Northeastern University's class of 2028! Explore around to know more about me!
                </p>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <a href="#projects" className="bg-[#8D926F] font-bold text-[#fbf6e0] px-6 py-3 w-50
                transition relative overflow-hidden rounded-full shadow-lg border border-[#4E5138]
                hover:bg-[#fbf6e0] hover:text-[#8a5128] transition-colors font-sans uppercase tracking-wider">
                        View Projects
                    </a>
                    <a href="#contact" className="font-bold bg-[#8a5128]/70 border border-[#8a5128] text-[#fbf6e0] px-6 py-3 w-50
                transition relative overflow-hidden rounded-full shadow-lg
                 hover:text-[#8D926F] hover:bg-[#fbf6e0] transition-colors font-sans uppercase tracking-wider">
                        Contact Me
                    </a>
                </div>
            </div>
        </RevealOnScroll>
    </section>
};