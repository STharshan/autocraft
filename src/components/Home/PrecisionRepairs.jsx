import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PrecisionRepairs = () => {
  return (
    <section className="w-full bg-white dark:bg-black py-12 px-4 md:px-8 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT COLUMN: IMAGES */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 relative w-full md:w-1/2 h-115">
          {/* Top Left Image */}
          <img
            src="/graypaint.avif"
            alt="Spraying"
            className="w-full h-full object-cover grayscale"
          />
          {/* Top Right Image */}
          <img
            src="/car.avif"
            alt="Cars"
            className="w-full h-full object-cover grayscale"
          />
          {/* Bottom Left Yellow Box */}
          <div className="bg-gradient-to-br from-yellow-300 to-white dark:from-[#D9C814] dark:to-black relative p-6 flex flex-col justify-end">
            <div className="absolute inset-0">
              <svg className="absolute top-0 left-0 w-full h-full">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="0"
                  stroke="#d2df30"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-[#D9C814] z-10">5+</h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 z-10">Expert Technicians</p>
          </div>
          {/* Bottom Right Image */}
          <img
            src="/carmechanic.avif"
            alt="Tools"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* RIGHT COLUMN: TEXT */}
        <div className="md:text-left md:w-1/2 mx-auto">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400 tracking-widest mb-15">
            <span className="text-yellow-300 font-bold">/</span> NIKITA AUTOCRAFT
          </p>
          <h2 className="text-center text-3xl md:text-5xl font-bold text-blue-500 dark:text-blue-400 mb-4">
            PRIME PRECISION REPAIRS
          </h2>
          <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base mt-10 mb-6 max-w-xs text-center mx-auto">
            Comprehensive car solutions delivered efficiently and reliably.
          </p>

          {/* Icons + Tags */}
          <div className="flex flex-wrap items-center gap-4 mb-12 mt-10 mx-auto md:ml-20 lg:ml-35">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FaArrowRight className="bg-[#D9C814] text-black rounded-sm p-1 w-5 h-5" />
              <span className="text-gray-800 dark:text-gray-100">Reliable Resolutions</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FaArrowRight className="bg-[#D9C814] text-black rounded-sm p-1 w-5 h-5" />
              <span className="text-gray-800 dark:text-gray-100">Long-Term Fixes</span>
            </div>
          </div>

          {/* Button */}
          <button className="bg-black dark:bg-gray-100 gap-5  transition text-white dark:text-black px-6 py-3 rounded-full font-semibold flex items-center mx-auto group">
            <span className="text-[#D9C814] text-xl transition-transform duration-300 group-hover:rotate-75 inline-block">
              /
            </span>
              <span className="tracking-wider  text-sm group-hover:text-[#D9C814] transition-colors duration-300">
                    DISCOVER MORE
                  </span>
            
          </button>

        </div>
      </div>
    </section>
  );
};

export default PrecisionRepairs;
