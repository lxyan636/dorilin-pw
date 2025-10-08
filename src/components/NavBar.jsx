import { useEffect } from "react";

export const NavBar = ({ menuOpen, setMenuOpen, setActiveSection }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#8D926F] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => setActiveSection("home")}
            className="font-mono text-xl font-bold text-[#fbf6e0]"
          >
            dorilin<span className="text-[#fbf6e0]">.830</span>
          </button>

          <div
            className="w-7 h-5 text-[#fbf6e0] relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setActiveSection("home")}
              className="text-[#fbf6e0] hover:scale-115 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => setActiveSection("about")}
              className="text-[#fbf6e0] hover:scale-115 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => setActiveSection("projects")}
              className="text-[#fbf6e0] hover:scale-115 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => setActiveSection("contact")}
              className="text-[#fbf6e0] hover:scale-115 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};