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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black dark:bg-[#242427] px-4 text-white dark:text-white font-semibold shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.avif"
            alt="Logo"
            className="h-15 object-contain xl:ml-15 cursor-pointer hover:opacity-80 transition-opacity duration-300"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-[#D9C814] dark:hover:text-[#D9C814] text-sm leading-tight py-1">HOME</a>
          <a href="/about" className="hover:text-[#D9C814] dark:hover:text-[#D9C814] text-sm leading-tight py-1">ABOUT</a>
          <a href="/gallery" className="hover:text-[#D9C814] dark:hover:text-[#D9C814] text-sm leading-tight py-1">GALLERY</a>
          <a href="/pricing" className="hover:text-[#D9C814] dark:hover:text-[#D9C814] text-sm leading-tight py-1">PRICING</a>

          {/* Desktop Dropdown (click-based) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDesktopDropdown(!desktopDropdown)}
              className="hover:text-[#D9C814] dark:hover:text-[#D9C814] flex items-center text-sm leading-tight py-1"
            >
              SERVICES {" "}
              {desktopDropdown ? (
                <FaChevronUp className="ml-1 text-xs" />
              ) : (
                <FaChevronDown className="ml-1 text-xs" />
              )}
            </button>

            {desktopDropdown && (
              <div className="absolute top-full mt-4 right-0 w-[400px] bg-white dark:bg-black text-black dark:text-white px-6 py-4 rounded-lg shadow-xl z-50 border border-gray-200 dark:border-gray-700">
                <div className="flex space-x-6">
                  {/* LEFT COLUMN */}
                  <div className="space-y-2 pr-20">
                    <a
                      href="/services/paint-services"
                      className="hover:text-[#D9C814] dark:hover:text-[#D9C814] text-sm leading-tight py-1 block"
                    >
                      Paint Services
                    </a>
                    <a
                      href="/services/ac-service"
                      className="hover:text-[#D9C814] dark:hover:text-[#D9C814] text-sm leading-tight py-1 block"
                    >
                      AC Service
                    </a>
                    <a
                      href="/services/mot"
                      className="hover:text-[#D9C814] dark:hover:text-[#D9C814] text-sm leading-tight py-1 block"
                    >
                      MOT
                    </a>
                    <a
                      href="/services/mechanical-repairs"
                      className="hover:text-[#D9C814] dark:hover:text-[#D9C814] text-sm leading-tight py-1 block"
                    >
                      Mechanical Repairs
                    </a>
                  </div>

                  {/* DIVIDER */}
                  <div className="border-l border-gray-300 dark:border-gray-700"></div>

                  {/* RIGHT COLUMN */}
                  <div className="space-y-2 pl-4">
                    <a
                      href="/services/body-smart-repairs"
                      className="hover:text-[#D9C814] dark:hover:text-[#D9C814] text-sm leading-tight py-1 block"
                    >
                      Smart Repairs
                    </a>
                    <a
                      href="/services/diagnostics"
                      className="hover:text-[#D9C814] dark:hover:text-[#D9C814] text-sm leading-tight py-1 block"
                    >
                      Diagnostics
                    </a>
                    <a
                      href="/services/dent-repair"
                      className="hover:text-[#D9C814] dark:hover:text-[#D9C814] text-sm leading-tight py-1 block"
                    >
                      Dent Repair
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Theme toggle */}
        <div className="block">
          <Theme />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 border border-black dark:border-white rounded-full"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-1 px-4 pb-6 pt-3 space-y-4 text-black dark:text-white bg-white dark:bg-black">
          <a href="/" className="block border-b border-gray-300 dark:border-gray-700 pb-2 hover:text-yellow-500">HOME</a>
          <a href="/about" className="block border-b border-gray-300 dark:border-gray-700 pb-2 hover:text-yellow-500">ABOUT</a>
          <a href="/gallery" className="block border-b border-gray-300 dark:border-gray-700 pb-2 hover:text-yellow-500">GALLERY</a>
          <a href="/pricing" className="block border-b border-gray-300 dark:border-gray-700 pb-2 hover:text-yellow-500">PRICING</a>

          {/* Mobile Dropdown */}
          <div className="border-b border-gray-300 dark:border-gray-700 pb-3">
            <div
              onClick={() => setMobileDropdown(!mobileDropdown)}
              className="flex justify-between items-center cursor-pointer uppercase hover:text-yellow-500"
            >
              <span>SERVICES </span>
              {mobileDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {mobileDropdown && (
              <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
                <a href="/services/paint-services" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">
                  Paint Services
                </a>
                <a href="/services/ac-service" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">
                  AC Service
                </a>
                <a href="/services/mot" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">
                  MOT
                </a>
                <a href="/services/mechanical-repairs" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">
                  Mechanical Repairs
                </a>
                <a href="/services/body-smart-repairs" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">
                  Smart Repairs
                </a>
                <a href="/services/diagnostics" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">
                  Diagnostics
                </a>
                <a href="/services/dent-repair" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500">
                  Dent Repair
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
