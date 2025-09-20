export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full bg-[#8a5128]/90 z-40 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        ${
                            menuOpen
                                ? "h-screen opacity-100 pointer-events-auto"
                                : "h-0 opacity-0 pointer-events-none"
                        }`}
        >
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-fbf6e0 text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <div className="flex flex-col items-center space-y-4">
                <a
                    href="#home"
                    className={`text-[#fbf6e0] hover:text-[#e4c291] text-2xl transform transition-transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "translate-y-5 opacity-0"}`}
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </a>
                <a
                    href="#about"
                    className={`text-[#fbf6e0] hover:text-[#e4c291] text-2xl transform transition-transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "translate-y-5 opacity-0"}`}
                    onClick={() => setMenuOpen(false)}
                >
                    About
                </a>
                <a
                    href="#projects"
                    className={`text-[#fbf6e0] hover:text-[#e4c291] text-2xl transform transition-transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "translate-y-5 opacity-0"}`}
                    onClick={() => setMenuOpen(false)}
                >
                    Projects
                </a>
                <a
                    href="#contact"
                    className={`text-[#fbf6e0] hover:text-[#e4c2910] text-2xl transform transition-transform duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "translate-y-5 opacity-0"}`}
                    onClick={() => setMenuOpen(false)}
                >
                    Contact
                </a>
            </div>
        </div>
    );
};