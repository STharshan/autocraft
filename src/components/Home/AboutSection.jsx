"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-white dark:bg-black overflow-hidden font-['Exo_2',sans-serif] py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 px-6 md:px-8">
        {/* ================= Left Section ================= */}
        <div className="space-y-6">
          {/* Small label */}
          <div className="flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#E4D12E] rotate-135 block"></span>
            <span className="text-xs uppercase tracking-[3px] text-gray-400 dark:text-gray-300 font-medium">
              About
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-[#1B75BB] dark:text-[#4EA8FF] leading-tight">
            FOUR DECADES <br /> IN THE GAME
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed max-w-sm">
            Receive exceptional service and unparalleled skill with every repair.
          </p>

          {/* Feature list */}
          <div className="flex flex-wrap items-center gap-8 text-[15px] text-[#222222] dark:text-gray-100">
            <span className="flex items-center gap-2">
              <span className="bg-[#E4D12E] p-1 flex items-center justify-center">
                <FaArrowRight className="text-black w-3 h-3" />
              </span>
              Reliable Work
            </span>
            <span className="flex items-center gap-2">
              <span className="bg-[#E4D12E] p-1 flex items-center justify-center">
                <FaArrowRight className="text-black w-3 h-3" />
              </span>
              Trusted Technicians
            </span>
          </div>

          {/* Custom Button */}
          <button className="relative bg-[#1A1A1A] dark:bg-gray-100 text-white dark:text-black cursor-pointer font-semibold px-8 py-3 rounded-full inline-flex items-center gap-3 transition group overflow-hidden hover:bg-[#333] dark:hover:bg-gray-300">
            <span className="text-yellow-400 font-bold text-lg leading-none transition-transform duration-300 group-hover:rotate-75 inline-block">
              /
            </span>
            <span className="tracking-wider text-sm group-hover:text-yellow-400 transition-colors duration-300">
              LEARN MORE
            </span>
          </button>

          {/* Testimonial */}
          <div className="mt-14">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              “Fast delivery and outstanding results. Thank you!”
            </p>
            <p className="text-sm mt-3 font-medium text-gray-900 dark:text-white">
              Sim B
            </p>
          </div>
        </div>

        {/* ================= Right Image Section ================= */}
        <div className="relative">
          {/* Main image */}
          <img
            src="/green.webp"
            alt="Car spray work"
            className="w-full rounded-sm object-cover grayscale dark:opacity-90 transition-opacity duration-300"
          />

          {/* Yellow diagonal line */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute top-0 right-0 w-full h-full"
            >
              <line
                x1="100"
                y1="0"
                x2="0"
                y2="100"
                stroke="#E4D12E"
                strokeWidth="0.4"
              />
            </svg>
          </div>

          {/* Yellow borders */}
          <div className="absolute right-0 bottom-0 w-[6px] h-[80%] bg-gradient-to-b from-[#E4D12E] to-transparent"></div>
          <div className="absolute right-0 bottom-0 h-[6px] w-[80%] bg-[#E4D12E]"></div>

          {/* Inset small mechanic image */}
          <img
            src="/carmechanic.avif"
            alt="Mechanic detail"
            className="absolute bottom-8 -left-10 w-36 md:w-40 border border-gray-300 dark:border-gray-700 shadow-md z-20"
          />
        </div>
      </div>
    </section>
  );
}
