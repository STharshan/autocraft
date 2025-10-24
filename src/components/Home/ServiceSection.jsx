"use client";
import React, { useRef } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    title: "DENTS/SCRATCHES",
    desc: "Restore your car’s perfect finish. Professional dent removal for a flawless vehicle surface.",
    image: "/bule.avif",
  },
  {
    title: "SMART REPAIR",
    desc: "Cost-effective solution for fixing minor damage. Without the need for extensive replacement or repainting.",
    image: "/carpaint.avif",
  },
  {
    title: "DIAGNOSTICS",
    desc: "Consultive diagnostics – address the root cause of the issue for a lasting solution.",
    image: "/gray.avif",
  },
  {
    title: "SERVICE",
    desc: "Dependable and thorough car servicing – we do more than just routine maintenance.",
    image: "/graypaint.avif",
  },
  {
    title: "MECHANICAL",
    desc: "Ensuring your vehicle is in optimal condition. No job is too big for us.",
    image: "/graypaint.avif",
  },
  {
    title: "AC SERVICE",
    desc: "Keep you comfortable all year round. We pride ourselves on our expertise, attention to detail, and commitment to quality.",
    image: "/graypaint.avif",
  },
  {
    title: "MOT",
    desc: "We make your MOT test simple and stress-free.",
    image: "/graypaint.avif",
  },
];

export default function ServiceSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 px-6 bg-white text-[#0B0B0B] font-['Exo_2',sans-serif] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#1B75BB] tracking-wide mb-3">
          Our Services
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          From minor fixes to major repairs, we’ve got you covered.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#E4D12E] text-white hover:text-black p-3 rounded-full z-20 transition"
        >
          <FaChevronLeft size={18} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-4 md:space-x-6 overflow-x-auto scroll-smooth scrollbar-hide px-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[320px] md:w-[380px] lg:w-[420px] h-[520px] rounded-md overflow-hidden shadow-lg group transition-all duration-500"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent transition duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-8 z-10">
                <h3 className="text-lg font-bold uppercase text-[#1B75BB] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                {/* Button */}
                <button className="relative bg-[#1a1a1a] text-white cursor-pointer font-semibold px-8 py-3 rounded-full inline-flex items-center gap-3 transition group overflow-hidden border border-[#E4D12E]">
                  <span className="text-yellow-400 font-bold text-lg leading-none transition-transform duration-300 group-hover:rotate-75 inline-block">
                    /
                  </span>
                  <span className="tracking-wider text-sm group-hover:text-yellow-400 transition-colors duration-300">
                    EXPLORE
                  </span>
                  <FaArrowRight className="text-yellow-400 text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#E4D12E] text-white hover:text-black p-3 rounded-full z-20 transition"
        >
          <FaChevronRight size={18} />
        </button>
      </div>

      {/* Testimonial */}
      <div className="text-center mt-16">
        <p className="italic text-gray-500 max-w-lg mx-auto leading-relaxed">
          “Fast delivery and outstanding results. Thank you!”
        </p>
        <p className="mt-2 text-sm font-medium text-[#0B0B0B]">Sim B</p>
      </div>
    </section>
  );
}
