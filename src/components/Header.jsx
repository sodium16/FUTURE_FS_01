import React from 'react';

// Data for the navigation links
const navLinks = ["About", "Skills", "Projects", "Achievements"];

// A reusable NavLink component with the hover effect
const NavLink = ({ children }) => (
  <a href={`#${children.toString().toLowerCase()}`} className="group relative text-xl text-white transition-colors hover:text-gray-300">
    <span>{children}</span>
    {/* This is the underline element */}
    <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
  </a>
);

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#272629]">
      <div className="container mx-auto flex h-[75px] items-center justify-between px-8">
        {/* Left Side: Logo and Name */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png" // Make sure logo.png is in your /public folder
            alt="Logo"
            className="h-[55px] w-[55px] rounded-full object-cover"
          />
          <span className="font-poppins text-2xl text-white">
            VISHWAS NAVEEN
          </span>
        </div>

        {/* Right Side: Navigation Links and Contact */}
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </nav>
          {/* CORRECTED: Changed <button> to <a> and added href */}
          <a
            href="#contact"
            className="rounded-full bg-[#5c4c43] px-8 py-3 font-poppins text-xl text-white transition-all hover:bg-opacity-90"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;


