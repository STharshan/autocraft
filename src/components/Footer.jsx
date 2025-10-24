import React from 'react';
import { FaInstagram, FaArrowRight } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm py-10 px-4 sm:px-8 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Left - Address */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-black dark:text-gray-200 mb-15">Find Us</h3>
          <p>107 frisby road</p>
          <p>Leicester</p>
          <p>le5</p>
          <a href="https://www.instagram.com/knucklebuster_nikita/channel/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl mt-10 hover:text-pink-500 cursor-pointer" />
          </a>
        </div>

        {/* Center - Pages */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-black dark:text-gray-200 mb-10">Pages</h3>
          <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
          <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="/gallery" className="hover:text-blue-600 dark:hover:text-blue-400">Gallery</a>
          <a href="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400">Pricing</a>
          <a href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</a>
          <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </div>

        {/* Right - Contact + Rating */}
        <div className="flex flex-col gap-4">
          {/* Email + Phone */}
          <div className="flex flex-col gap-2">
            {/* Email link */}
            <div className="flex justify-between items-center border-b pb-1 group cursor-pointer hover:border-[#D9C814] transition-all duration-200 dark:border-gray-800">
              <a href="mailto:Gags@nikitaautocraft.co.uk" target='_blank' className="group-hover:translate-x-5.5 transition-transform duration-500">
                Gags@nikitaautocraft.co.uk
              </a>
              <FaArrowRight className="group-hover:-translate-x-5.5 transition-transform duration-500" />
            </div>

            {/* Phone number with WhatsApp link */}
            <div className="flex justify-between items-center border-b pb-1 group cursor-pointer hover:border-[#D9C814] transition-all duration-200 dark:border-gray-800">
              <a
                href="tel:01162512277"
                target='_blank'
                className="group-hover:translate-x-5.5 transition-transform duration-500"
              >
                0116 251 2277
              </a>
              <FaArrowRight className="group-hover:-translate-x-5.5 transition-transform duration-500" />
            </div>
          </div>

          {/* Review */}
          <div className="flex flex-nowrap items-center gap-3 border-gray-300 dark:border-gray-700 border rounded-full px-6 py-2.5 w-fit self-center md:self-start whitespace-nowrap overflow-x-auto">
            <div className="flex text-[#D9C814] text-sm">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">4.3/5 from</span>
            <span className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded-full px-2 py-1 text-xs">20+ Reviews</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm">
        © 2025 Nikita Autocraft. All rights reserved. Partnered with{" "}
        <a
          href="https://www.ansely.co.uk"    // <-- change this to the correct website if different!
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-[#D9C814] font-semibold hover:underline hover:text-yellow-700 dark:hover:text-yellow-300 transition"
        >
          Ansely
        </a>
      </div>
    </footer>
  );
};

export default Footer;
