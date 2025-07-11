import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import "../app.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 bg-white border-t border-gray-200">
      <div className="max-w-[90vw] mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="https://1mdm.com/" target="_blank" rel="noopener noreferrer">
          <img src={Logo} alt="1MDM logo" className="w-36" />
        </a>

        {/* Hamburger Button (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none cursor-pointer active:ring-1 py-2 px-4 rounded-lg border-[2px] border-gray-400"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row gap-4 md:gap-6 text-md font-semibold  md:text-base  text-gray-500 items-start absolute md:static top-[100%] left-0 w-full md:w-auto bg-white px-6 md:px-0 py-4 md:py-0  transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li>
            <a href="index.php" className="hover:text-red-600">
              About Us
            </a>
          </li>
          <li>
            <a href="our-story.php" className="hover:text-red-600">
              Our Story
            </a>
          </li>
          <li>
            <a href="seller.php" className="hover:text-red-600">
              Sell on 1MDM
            </a>
          </li>
          <li>
            <a href="pricing.php" className="hover:text-red-600">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
