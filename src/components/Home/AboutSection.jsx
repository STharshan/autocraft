"use client";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative w-full bg-white dark:bg-black overflow-hidden font-['Exo_2',sans-serif] py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 px-6 md:px-8">
        {/* ================= Left Section ================= */}
        <div className="space-y-6" data-aos="fade-right">
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
            <span className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="200">
              <span className="bg-[#E4D12E] p-1 flex items-center justify-center">
                <FaArrowRight className="text-black w-3 h-3" />
              </span>
              Reliable Work
            </span>
            <span className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="400">
              <span className="bg-[#E4D12E] p-1 flex items-center justify-center">
                <FaArrowRight className="text-black w-3 h-3" />
              </span>
              Trusted Technicians
            </span>
          </div>

          {/* Custom Button */}
          <button
            data-aos="zoom-in"
            data-aos-delay="600"
            className="relative bg-[#1A1A1A] dark:bg-gray-100 text-white dark:text-black cursor-pointer font-semibold px-8 py-3 rounded-full inline-flex items-center gap-3 transition group overflow-hidden"
          >
            <span className="text-[#D9C814] font-bold text-lg leading-none transition-transform duration-300 group-hover:rotate-75 inline-block">
              /
            </span>
            <span className="tracking-wider text-sm transition-transform  duration-300 transform group-hover:translate-x-2 group-hover:text-[#D9C814]">
              LEARN MORE
            </span>
          </button>

          {/* Testimonial */}
          <div data-aos="fade-up" data-aos-delay="800" className="mt-14">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              “Fast delivery and outstanding results. Thank you!”
            </p>
            <p className="text-sm mt-3 font-medium text-gray-900 dark:text-white">
              Sim B
            </p>
          </div>
        </div>

        {/* ================= Right Image Section ================= */}
        <div data-aos="fade-left" className="relative">
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
          <div className="absolute right-0 bottom-0 w-[14px] h-[80%] bg-gradient-to-b from-[#E4D12E] to-transparent"></div>
          <div className="absolute right-0 bottom-0 h-[15px] w-[80%] bg-[#E4D12E]"></div>

          {/* Inset small mechanic image */}
          <img
            src="/carmechanic.avif"
            alt="Mechanic detail"
            className="absolute bottom-8 -left-10 w-30 h-30 border border-gray-300 dark:border-gray-700 shadow-md z-20"
          />
        </div>
      </div>
    </section>
  );
}
