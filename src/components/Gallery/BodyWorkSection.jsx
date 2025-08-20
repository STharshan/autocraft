import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BodyWorkSection = () => {
  return (
    <section className="bg-white dark:bg-black py-20 px-4 text-center relative transition-colors">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">BODY WORK</h2>
      <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base mb-8">
        Coming soon – keep an eye out
      </p>

      {/* Contact Button */}
      <div className="mb-12">
        <button className="bg-black dark:bg-gray-200 text-white dark:text-black font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors">
          <span>CONTACT US</span>
          <FaArrowRight className="text-yellow-300" />
        </button>
      </div>

      {/* Scrolling Banner */}
      <div className="overflow-hidden">
        <div className="flex w-max animate-slide-left gap-4 px-2">
          {Array(10)
            .fill('/comesoon.webp') // 👈 your image path
            .map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Coming Soon"
                className="w-[500px] h-auto object-contain flex-shrink-0"
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BodyWorkSection;
