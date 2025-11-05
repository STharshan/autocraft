"use client";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = ["/gray.avif", "/work.avif", "/paint.webp", "/homepaint.avif"];

export default function GallerySlider() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Slide transition
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  // ✅ Function to redirect to /gallery
  const handleExploreGallery = () => {
    window.location.href = "/gallery";
  };

  return (
    <section className="relative w-full overflow-hidden h-[420px] md:h-[680px] font-['Exo_2',sans-serif]">
      {/* Background Images */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-[1200ms] ease-in-out h-full"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        {/* Title */}
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-6xl uppercase text-[#1B75BB] tracking-wider mb-4"
        >
          GALLERY
        </h2>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          className="text-[#C2C2C2] text-base md:text-lg leading-relaxed mb-8 max-w-md"
        >
          See our impressive work on various vehicles, before and after.
        </p>

        {/* ✅ Button that navigates to /gallery */}
        <button
          onClick={handleExploreGallery}
          data-aos="zoom-in"
          className="relative bg-[#1A1A1A] text-white font-semibold px-8 py-3 rounded-full inline-flex items-center gap-3 transition-all duration-300 group overflow-hidden"
        >
          <span className="text-[#E4D12E] font-bold text-lg leading-none transition-transform duration-300 group-hover:rotate-75 inline-block">
            /
          </span>
          <span className="tracking-wider text-sm group-hover:text-[#E4D12E] transition-colors duration-300">
            EXPLORE GALLERY
          </span>
        </button>
      </div>
    </section>
  );
}
