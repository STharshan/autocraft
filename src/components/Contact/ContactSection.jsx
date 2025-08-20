import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import { FaArrowRight, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className=" dark:bg-black px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* FIND US CARD */}
      <div className="relative max-w-7xl mx-auto bg-gray-100 dark:bg-[#12151a] rounded shadow dark:shadow-xl p-8 text-center">
        {/* Top-right corner lines */}
        <div className="absolute top-0 right-0 w-12 h-0.5 bg-yellow-300"></div>
        <div className="absolute top-0 right-0 w-0.5 h-12 bg-blue-500"></div>

        {/* Bottom-left corner lines */}
        <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-300"></div>
        <div className="absolute bottom-0 left-0 w-0.5 h-12 bg-blue-500"></div>

        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded bg-gradient-to-b to-yellow-300 from-white dark:from-[#21242a] flex items-center justify-center">
            <span className="text-black dark:text-yellow-300 text-2xl"><BiLocationPlus /></span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-black dark:text-white mb-6">FIND US</h3>

        <div className="text-sm text-gray-700 dark:text-gray-300">
          <div className="flex justify-between border-b border-gray-300 dark:border-gray-700 py-2">
            <span>Mon-Fri:</span>
            <span>08:30-17:00</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 dark:border-gray-700 py-2">
            <span>Saturday</span>
            <span>Appointments only</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 dark:border-gray-700 py-2">
            <span>Sunday</span>
            <span>Closed</span>
          </div>
        </div>

        <p className="text-gray-500 dark:text-gray-400 mt-6">
          We’re open Monday to Saturday, ready to serve your car repair needs.
        </p>

        <button className="mt-4 text-gray-700 dark:text-yellow-300 cursor-pointer text-sm font-semibold border-b border-gray-300 dark:border-gray-700 pt-2 transition-all">
          VIEW DIRECTIONS
        </button>
      </div>

      {/* LET'S TALK CARD */}
      <div className="relative bg-white dark:bg-[#181b21] rounded shadow dark:shadow-xl p-8 text-center">
        {/* Top-right corner lines */}
        <div className="absolute top-0 right-0 w-12 h-0.5 bg-yellow-300"></div>
        <div className="absolute top-0 right-0 w-0.5 h-12 bg-blue-500"></div>

        {/* Bottom-left corner lines */}
        <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-300"></div>
        <div className="absolute bottom-0 left-0 w-0.5 h-12 bg-blue-500"></div>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/logo.avif"
            alt="Logo"
            className="w-15 h-15 object-contain bg-yellow-300 rounded"
          />
        </div>

        {/* Heading */}
        <h3 className="text-xl font-bold text-black dark:text-white mb-2">LET'S TALK</h3>

        {/* Paragraph */}
        <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
          Reach out to us for any inquiries or to schedule an appointment today.
        </p>

        {/* Contact Info */}
        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
          <div className="group flex justify-between items-center border-b border-gray-300 dark:border-gray-700 hover:border-yellow-300 cursor-pointer py-2 transition-all duration-300 transform hover:translate-x-1">
            <span className="group-hover:translate-x-5.5 transition-transform duration-500 ">Gags@nikitaautocraft.com</span>
            <FaArrowRight className="text-gray-500 group-hover:-translate-x-5.5 transition-transform duration-500" size={12} />
          </div>
          <div className="group flex justify-between items-center border-b border-gray-300 dark:border-gray-700 hover:border-yellow-300 cursor-pointer py-2 transition-all duration-300 transform hover:translate-x-1">
            <span className="group-hover:translate-x-5.5 transition-transform duration-500">0116 251 2277</span>
            <FaArrowRight className="text-gray-500 group-hover:-translate-x-5.5 transition-transform duration-500" size={12} />
          </div>
        </div>

        {/* Socials */}
        <p className="text-gray-500 dark:text-gray-400 mt-6">We’re on socials too!</p>
        <div className="mt-2 flex justify-center">
          <FaInstagram className="text-black dark:text-yellow-300 cursor-pointer" size={18} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
