import React from "react";
import { FaInstagram, FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-black text-gray-300 pt-16 pb-10 px-6 md:px-12 lg:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* ========= Left: Address ========= */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white uppercase tracking-widest">
            Find Us
          </h3>
          <a
            href="https://maps.app.goo.gl/SCZ5yiTx4td4c9XD9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D9C814] transition-all duration-300 block"
          >
            <div>
              <p>107 Frisby Rd,</p>
              <p>Leicester LE5 0DQ,</p>
              <p>United Kingdom</p>
            </div>
          </a>
          <div className="pt-4">
            <a
              href="https://www.instagram.com/nikitaautocraft/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#D9C814] transition-all duration-300"
            >
              <div className="p-3 bg-gray-800 hover:bg-[#D9C814] hover:text-black rounded-full transition-all duration-300">
                <FaInstagram className="text-xl" />
              </div>
              Follow us on Instagram
            </a>
          </div>
        </div>

        {/* ========= Center: Navigation ========= */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white uppercase tracking-widest">
            Quick Links
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-sm font-medium">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Gallery", link: "/gallery" },
              { name: "Pricing", link: "/pricing" },
              { name: "Services", link: "/services" },
              { name: "Contact", link: "/contact" },
            ].map((page, i) => (
              <li key={i}>
                <a
                  href={page.link}
                  className="group flex items-center gap-2 hover:text-[#D9C814] transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-3 h-0.5 bg-[#D9C814] transition-all duration-300"></span>
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ========= Right: Contact + Rating ========= */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white uppercase tracking-widest">
            Get In Touch
          </h3>

          <div className="space-y-3">
            {/* Email */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-2 group">
              <a
                href="mailto:Gags@nikitaautocraft.co.uk"
                className="text-sm hover:text-[#D9C814] transition-all duration-300"
              >
                Gags@nikitaautocraft.co.uk
              </a>
              <FaArrowRight className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 text-[#D9C814] transition-all duration-300" />
            </div>

            {/* Phone */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-2 group">
              <a
                href="tel:01162512277"
                className="text-sm hover:text-[#D9C814] transition-all duration-300"
              >
                0116 251 2277
              </a>
              <FaArrowRight className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 text-[#D9C814] transition-all duration-300" />
            </div>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-3 border border-gray-700 rounded-full px-5 py-2 w-fit shadow-[0_0_15px_rgba(217,200,20,0.3)] bg-[#0e0e0e] mx-auto sm:mx-0">
            <div className="flex text-[#D9C814] text-sm">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-100">4.3/5</span>
            <span className="bg-gray-800 text-gray-300 rounded-full px-2 py-0.5 text-xs">
              20+ Reviews
            </span>
          </div>
        </div>
      </div>

      {/* ===== Divider Line ===== */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Nikita Autocraft. All rights reserved.</p>
      </div>

      {/* Bottom Bar */}
      <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
        {/* Left: Terms & Privacy */}
        <div className="flex gap-4 text-sm">
          <Link
            to="/terms"
            className="text-gray-400 hover:text-[#D9C814] transition duration-300"
          >
            Terms & Conditions
          </Link>
          <span className="text-gray-500">|</span>
          <Link
            to="/privacy"
            className="text-gray-400 hover:text-[#D9C814] transition duration-300"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Center: Powered by Ansely (unchanged) */}
        <p className="text-center font-semibold text-gray-400">
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D9C814] hover:underline"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
