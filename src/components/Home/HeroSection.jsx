"use client";

import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true }); // Initialize AOS
  }, []);

  return (
    <section className="relative w-full h-[140vh] overflow-hidden font-sans text-white">
      {/* 🎥 Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video.MOV"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🖤 Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 🌟 Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        {/* Logo */}
        <img
          data-aos="fade-down"
          src="/CSMzTHQbQDMUmXLPQMQxhWyJUs.avif"
          alt="NIKITA AUTOCRAFT"
          className="max-w-[90%] md:max-w-[680px] w-auto mb-6"
        />

        {/* Tagline */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg font-light uppercase mb-6 tracking-widest"
        >
          Your One-Stop Auto Repair Shop
        </p>

        {/* CTA Button */}
        <button
          data-aos="zoom-in"
          data-aos-delay="400"
          className="relative bg-[#1a1a1a] text-white cursor-pointer font-semibold px-8 py-3 rounded-full inline-flex items-center gap-3 transition overflow-hidden group"
        >
          <span className="text-[#D9C814] font-bold text-lg leading-none transition-transform duration-300 group-hover:rotate-[65deg] inline-block">
            /
          </span>
          <span className="tracking-wider text-sm transition-transform duration-300 transform group-hover:translate-x-2 group-hover:text-[#D9C814]">
            GET A QUOTE
          </span>
        </button>

        {/* Sub Info */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 flex flex-wrap justify-center gap-6 text-sm md:text-base font-semibold"
        >
          {["Fast Service", "Quality Care"].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <span className="bg-[#D9C814] w-6 h-6 flex items-center justify-center rounded-sm">
                <FaArrowRight className="text-black text-xs" />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 📊 Bottom Stats Bar */}
      <div className="absolute bottom-0 w-full z-30 border-t border-white/10 py-5 px-4 md:px-8 bg-gradient-to-t from-black/50 to-transparent">
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-8 text-white text-sm md:text-base">
          {/* Leicester Team */}
          <div
            data-aos="fade-right"
            className="flex items-center gap-2 uppercase tracking-wider"
          >
            <span className="opacity-80 font-semibold text-[13px]">
              Leicester Team
            </span>
            <span className="text-2xl font-bold">5</span>
          </div>

          {/* Top Rated */}
          <div
            data-aos="fade-up"
            className="flex items-center gap-2 uppercase tracking-wider"
          >
            <span className="opacity-80 font-semibold text-[13px]">
              Top Rated
            </span>
          </div>

          {/* Rating Section */}
          <div
            data-aos="fade-left"
            className="flex items-center gap-3 border border-white/20 rounded-full px-5 py-2"
          >
            {/* Stars */}
            <div className="flex text-[#D9C814] text-sm space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Rating Text */}
            <span className="text-white text-sm whitespace-nowrap">
              4.3/5 from
            </span>

            {/* Reviews Badge */}
            <span className="text-white text-xs px-4 rounded-full border py-1.5 border-white/20 font-semibold whitespace-nowrap">
              20+ Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
