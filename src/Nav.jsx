import { useState } from "react";
import './index.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-300 p-11">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-black text-2xl font-medium font-Space Grotesk">h's Folio<span className="text-red-600">.</span></div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4 font-Space Grotesk ">
          <a href="#projects" className="text-black hover:text-red-600">Playground</a>
          <a href="#contact" className="text-black hover:text-red-600">Connect</a>
        </div>

        {/* Hamburger menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-300 p-10`}>
        <a href="#projects" className="block text-black hover:text-red-600 p-4">Playground</a>
        <a href="#contact" className="block text-black hover:text-red-600 p-4">Connect</a>
      </div>

      {/* Adding a gap between the nav and the line */}
      <hr className="mt-5 pb-5 border-t-5 border-black" />
    </nav>
  );
};

export default Nav;
