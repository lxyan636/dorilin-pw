import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-white text-black`}
      >
        <NavBar 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
          setActiveSection={setActiveSection} 
        />
        <MobileMenu 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen}
          setActiveSection={setActiveSection}
        />

        {/* ✨ Fade animation wrapper */}
        <div className="transition-all duration-700 ease-in-out">
          {activeSection === "home" && <Home setActiveSection={setActiveSection} />}
          {activeSection === "about" && <About setActiveSection={setActiveSection} />}
          {activeSection === "projects" && <Projects setActiveSection={setActiveSection} />}
          {activeSection === "contact" && <Contact setActiveSection={setActiveSection} />}
        </div>
      </div>
    </>
  );
}

export default App;