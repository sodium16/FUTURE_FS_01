import React, { useState } from 'react';

const navLinks = ["About", "Skills", "Projects", "Achievements"];

// Reusable NavLink for both desktop and mobile
const NavLink = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="group relative py-2 text-xl text-white transition-colors hover:text-gray-300">
    <span>{children}</span>
    <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
  </a>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-[#272629]">
        <div className="container mx-auto flex h-[75px] items-center justify-between px-4 sm:px-8">
          {/* Left Side: Logo and Name */}
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-poppins text-lg sm:text-2xl text-white">VISHWAS NAVEEN</span>
          </div>

          {/* Desktop Navigation (Hidden on small screens) */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink key={link} href={`#${link.toLowerCase()}`}>{link}</NavLink>
              ))}
            </nav>
            <a href="#contact" className="rounded-full bg-[#5c4c43] px-8 py-3 font-poppins text-xl text-white transition-all hover:bg-opacity-90">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> // X icon
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" /> // Hamburger icon
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#272629] bg-opacity-95 md:hidden">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>{link}</NavLink>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4 rounded-full bg-[#5c4c43] px-8 py-3 font-poppins text-xl text-white">
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
