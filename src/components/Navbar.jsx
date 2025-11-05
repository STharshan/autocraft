import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Theme from './Theme';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside (for desktop dropdown)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black dark:bg-[#242427] px-4 text-white font-semibold shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3">
        
        {/* ✅ Clickable Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.avif"
            alt="Logo"
            className="h-12 object-contain cursor-pointer xl:ml-6 hover:opacity-80 transition-opacity duration-300"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="/about" className="hover:text-[#D9C814] text-sm py-1">ABOUT</a>
          <a href="/gallery" className="hover:text-[#D9C814] text-sm py-1">GALLERY</a>
          <a href="/pricing" className="hover:text-[#D9C814] text-sm py-1">PRICING</a>

          {/* Desktop Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDesktopDropdown(!desktopDropdown)}
              className="hover:text-[#D9C814] flex items-center text-sm py-1"
            >
              SERVICES AND MORE{" "}
              {desktopDropdown ? (
                <FaChevronUp className="ml-1 text-xs" />
              ) : (
                <FaChevronDown className="ml-1 text-xs" />
              )}
            </button>

            {desktopDropdown && (
              <div className="absolute top-full mt-4 right-0 w-[400px] bg-white dark:bg-black text-black dark:text-white px-6 py-4 rounded-lg shadow-xl z-50 border border-gray-200 dark:border-gray-700">
                <div className="flex space-x-6">
                  <div className="space-y-2 pr-20">
                    <a href="/" className="hover:text-[#D9C814] block text-sm">Home</a>
                    <a href="/about" className="hover:text-[#D9C814] block text-sm">About</a>
                    <a href="/services" className="hover:text-[#D9C814] block text-sm">Services</a>
                    <a href="/gallery" className="hover:text-[#D9C814] block text-sm">Gallery</a>
                  </div>
                  <div className="border-l border-gray-300 dark:border-gray-700"></div>
                  <div className="space-y-2 pl-4">
                    <a href="/pricing" className="hover:text-[#D9C814] block text-sm">Pricing</a>
                    <a href="/contact" className="hover:text-[#D9C814] block text-sm">Contact</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="block">
          <Theme />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 border border-white rounded-full"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-1 px-4 pb-6 pt-3 space-y-4 text-black dark:text-white bg-white dark:bg-black">
          <a href="/about" className="block border-b border-gray-300 dark:border-gray-700 pb-2 hover:text-[#D9C814]">ABOUT</a>
          <a href="/gallery" className="block border-b border-gray-300 dark:border-gray-700 pb-2 hover:text-[#D9C814]">GALLERY</a>
          <a href="/pricing" className="block border-b border-gray-300 dark:border-gray-700 pb-2 hover:text-[#D9C814]">PRICING</a>

          {/* Mobile Dropdown */}
          <div className="border-b border-gray-300 dark:border-gray-700 pb-3">
            <div
              onClick={() => setMobileDropdown(!mobileDropdown)}
              className="flex justify-between items-center cursor-pointer uppercase hover:text-[#D9C814]"
            >
              <span>SERVICES AND MORE</span>
              {mobileDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {mobileDropdown && (
              <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
                <a href="/" onClick={() => setMenuOpen(false)} className='hover:text-[#D9C814]'>Home</a>
                <a href="/pricing" onClick={() => setMenuOpen(false)} className='hover:text-[#D9C814]'>Pricing</a>
                <a href="/about" onClick={() => setMenuOpen(false)} className='hover:text-[#D9C814]'>About</a>
                <a href="/contact" onClick={() => setMenuOpen(false)} className='hover:text-[#D9C814]'>Contact</a>
                <a href="/services" onClick={() => setMenuOpen(false)} className='hover:text-[#D9C814]'>Services</a>
                <a href="/gallery" onClick={() => setMenuOpen(false)} className='hover:text-[#D9C814]'>Gallery</a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
