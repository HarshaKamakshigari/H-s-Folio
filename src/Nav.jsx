import { useState } from "react";
import './index.css';
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-300 p-11">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-black text-2xl font-medium font-Space Grotesk">
          <Link to="/">h's Folio<span className="text-red-600">.</span></Link> {/* Use Link for navigation */}
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4 font-Space Grotesk">
          <Link to="/about" className="text-black hover:text-red-600 hover:font-medium">About</Link> {/* Added About link */}
          <Link to="/playground" className="text-black hover:text-red-600 hover:font-medium">Playground</Link>
          <Link to="/contact" className="text-black hover:text-red-600 hover:font-medium">Connect</Link>
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
        <Link to="/about" className="block text-black hover:text-red-600 p-4">About</Link> {/* Added About link */}
        <Link to="/playground" className="block text-black hover:text-red-600 p-4">Playground</Link>
        <Link to="/contact" className="block text-black hover:text-red-600 p-4">Connect</Link>
      </div>

      {/* Adding a gap between the nav and the line */}
      <hr className="mt-5 pb-5 border-t-2 border-black" />
      
    </nav>
  );
};

export default Nav;
