import { useEffect } from "react";

export const NavBar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[#8D926F] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-[#fbf6e0]"> 
                        {" "}
                        dorilin<span className="text-[#fbf6e0]">.830</span>{" "}
                    </a>
                    <div className="w-7 h-5 text-[#fbf6e0] relative cursor-pointer z-40 md:hidden" 
                    onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776; {/* Hamburger icon */}
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#home" className="text-[#fbf6e0] hover:scale-115 transition-colors">
                            {" "}
                            Home{" "}
                        </a>
                        <a href="#about" className="text-[#fbf6e0] hover:scale-115 transition-colors">
                            {" "}
                            About{" "}
                        </a>
                        <a href="#projects" className="text-[#fbf6e0] hover:scale-115 transition-colors">
                            {" "}
                            Projects{" "}
                        </a>
                        <a href="#contact" className="text-[#fbf6e0] hover:scale-115 transition-colors">
                            {" "}
                            Contact{" "}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};