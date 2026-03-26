
import React, { useState } from "react";
import { Link } from "react-router-dom";
import width_592 from "../assets/width_592.png";

const NavLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md text-white shadow-md">
      <div className="container mx-auto px-10 py-2.5 flex justify-between items-center">
        {/* Logo Section */}
        {/* <div className="flex items-center gap-3"> */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">

          <img src={width_592} alt="Logo" className="h-10" />
          <p className="text-2xl font-semibold">
            Secure<span className="font-bold text-blue-500">Pi</span>
          </p>
          </Link>
        {/* </div> */}

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id} className="py-2">
                <Link
                  to={link}
                  className="font-semibold text-gray-300 hover:text-primary transition-colors duration-300 border-b-2 border-transparent hover:border-secondary"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns=""
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns=""
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <ul className="flex flex-col items-center gap-4 py-6">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link}
                  className="block font-medium text-gray-300 hover:text-blue-400 transition duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
