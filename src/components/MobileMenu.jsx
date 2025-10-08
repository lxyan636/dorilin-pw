export const MobileMenu = ({ menuOpen, setMenuOpen, setActiveSection }) => {
    const handleClick = (section) => {
        setActiveSection(section); // change active section
        setMenuOpen(false); // close menu
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full bg-[#8a5128]/90 z-40 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        ${menuOpen
                            ? "h-screen opacity-100 pointer-events-auto"
                            : "h-0 opacity-0 pointer-events-none"
                        }`}
        >
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-[#fbf6e0] text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <div className="flex flex-col items-center space-y-4">
                <button
                    className="text-[#fbf6e0] hover:text-[#e4c291] text-2xl"
                    onClick={() => handleClick("home")}
                >
                    Home
                </button>
                <button
                    className="text-[#fbf6e0] hover:text-[#e4c291] text-2xl"
                    onClick={() => handleClick("about")}
                >
                    About
                </button>
                <button
                    className="text-[#fbf6e0] hover:text-[#e4c291] text-2xl"
                    onClick={() => handleClick("projects")}
                >
                    Projects
                </button>
                <button
                    className="text-[#fbf6e0] hover:text-[#e4c291] text-2xl"
                    onClick={() => handleClick("contact")}
                >
                    Contact
                </button>
            </div>
        </div>
    );
};
