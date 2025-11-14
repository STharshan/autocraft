"use client";
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "DENTS/SCRATCHES",
    desc: "Restore your car’s perfect finish. Professional dent removal for a flawless vehicle surface.",
    image: "/bule.jpg",
    link: "/services/dent-repair",
  },
  {
    title: "SMART REPAIR",
    desc: "Cost-effective solution for fixing minor damage. Without the need for extensive replacement or repainting.",
    image: "/carpaint.jpg",
    link: "/services/body-smart-repairs",
  },
  {
    title: "DIAGNOSTICS",
    desc: "Consultive diagnostics – address the root cause of the issue for a lasting solution.",
    image: "/gray.jpg",
    link: "/services/diagnostics",
  },
  {
    title: "SERVICE",
    desc: "Dependable and thorough car servicing – we do more than just routine maintenance.",
    image: "/graypaint.jpg",
    link: "/services/service",
  },
  {
    title: "MECHANICAL",
    desc: "Ensuring your vehicle is in optimal condition. No job is too big for us.",
    image: "/graypaint.jpg",
    link: "/services/mechanical-repairs",
  },
  {
    title: "AC SERVICE",
    desc: "We pride ourselves on our expertise, attention to detail, and commitment to quality.",
    image: "/graypaint.jpg",
    link: "/services/ac-service",
  },
  {
    title: "MOT",
    desc: "We make your MOT test simple and stress-free.",
    image: "/graypaint.jpg",
    link: "/services/mot",
  },
];

export default function ServiceSection() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

const scroll = (direction) => {
  const container = scrollRef.current;
  if (!container) return;

  const card = container.children[0]; // assume all cards same width
  const cardWidth = card.offsetWidth;
  const cardMarginRight = parseInt(
    getComputedStyle(card).marginRight
  );

  const scrollAmount = cardWidth + cardMarginRight;

  container.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
};

  // Scroll clicked card to center
  const scrollToCenter = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.children[index];
    const containerCenter = container.offsetWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const scrollPos = cardCenter - containerCenter;

    container.scrollTo({ left: scrollPos, behavior: "smooth" });
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-white dark:bg-black text-[#0B0B0B] dark:text-gray-100 font-['Exo_2',sans-serif] overflow-hidden transition-colors duration-300">
      {/* Header */}
      <div data-aos="fade-down" className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#1B75BB] dark:text-[#4EA8FF] tracking-wide mb-3">
          Our Services
        </h2>
        <p className="text-gray-500 dark:text-gray-300 text-lg max-w-xs mx-auto">
          From minor fixes to major repairs, we’ve got you covered.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="flex absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 dark:bg-white/20 hover:bg-[#E4D12E] text-white hover:text-black p-3 rounded-full z-20 transition-all"
        >
          <FaChevronLeft size={18} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-4 md:space-x-6 overflow-x-auto scroll-smooth scrollbar-hide px-2 sm:px-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative flex-shrink-0 w-[260px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[420px] h-auto min-h-[420px] sm:min-h-[460px] md:min-h-[500px] rounded-md overflow-hidden shadow-lg group transition-all duration-500 border border-gray-200 dark:border-gray-700"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/90 to-transparent dark:via-black/80 transition duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 sm:p-8 z-10 bg-[#212121]/90 backdrop-blur-sm">
                <h3 className="text-base sm:text-lg font-bold uppercase text-[#1B75BB] dark:text-[#4EA8FF] mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 dark:text-gray-200 mb-6">
                  {service.desc}
                </p>

                {/* Explore Button */}
                <button
                  onClick={() => {
                    scrollToCenter(index); // scroll to center
                    setTimeout(() => navigate(service.link), 400); // navigate after scrolling
                  }}
                  className="relative cursor-pointer font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full inline-flex items-center gap-3 transition group overflow-hidden border border-gray-700"
                >
                  <span className="text-[#D9C814] font-bold text-lg transition-transform duration-300 group-hover:rotate-75 inline-block">
                    /
                  </span>
                  <span className="tracking-wider text-[#D9C814] text-sm">
                    EXPLORE
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="flex absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 dark:bg-white/20 hover:bg-[#E4D12E] text-white hover:text-black p-3 rounded-full z-20 transition-all"
        >
          <FaChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
