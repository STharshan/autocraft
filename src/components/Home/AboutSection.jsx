import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="bg-white dark:bg-black px-4 py-16 md:py-24 transition-colors">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Side */}
        <div>
          <p className="text-xs uppercase text-gray-500 dark:text-gray-400 tracking-widest mb-2">
            / About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-300 mb-4 leading-snug">
            FOUR DECADES<br />IN THE GAME
          </h2>
          <p className="text-gray-700 dark:text-gray-200 text-sm mb-6 max-w-md">
            Receive exceptional service and unparalleled skill with every repair.
          </p>

          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-100">
              <FaArrowRight className="bg-yellow-400 text-black rounded-sm p-1 w-5 h-5" />
              Reliable Work
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-100">
              <FaArrowRight className="bg-yellow-400 text-black rounded-sm p-1 w-5 h-5" />
              Trusted Technicians
            </div>
          </div>

          {/* Learn More Button */}
          <button className="bg-black dark:bg-white text-white dark:text-black font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-900 dark:hover:bg-gray-200 transition">
            <FaArrowRight className="text-yellow-400" />
            <span>LEARN MORE</span>
          </button>

          {/* Testimonial */}
          <div className="mt-10 text-md text-gray-700 dark:text-gray-200">
            <p className="italic mb-2">
              "Fast delivery and outstanding results. Thank you!"
            </p>
            <p className="text-black dark:text-white font-medium">Sim B</p>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="relative">
          {/* Main image */}
          <div className="relative z-10 rounded-lg shadow-lg">
            <img
              src="/green.webp"
              alt="Spray Work"
              className="w-full object-cover rounded-sm"
            />

            {/* Right full border */}
            <div className="absolute top-0 right-0 h-full w-[15px] bg-gradient-to-b from-transparent to-yellow-400"></div>

            {/* Bottom fixed half-border */}
            <div className="absolute bottom-0 left-0 w-full h-[15px] bg-gradient-to-r from-transparent to-yellow-400"></div>
          </div>

          {/* Overlapping small image */}
          <img
            src="/carmechanic.avif"
            alt="Detail work"
            className="absolute bottom-5 -left-5 w-32 md:w-30 h-30 z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
