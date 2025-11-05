import React, { useEffect, useState, useRef } from "react";

export default function GallerySection() {
  const [opacity, setOpacity] = useState(1);
  const [brightness, setBrightness] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.min(
        Math.max((0 - rect.top) / (rect.height + windowHeight), 0),
        1
      );

      const newBrightness = 1 - scrollProgress * 0.4;
      setBrightness(newBrightness);

      const newOpacity =
        scrollProgress < 0.7 ? 1 : 1 - (scrollProgress - 0.7) / 0.3;
      setOpacity(Math.max(newOpacity, 0));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll handler
  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Top-right image */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-no-repeat bg-cover bg-right"
        style={{ backgroundImage: "url('/gray.avif')" }}
      ></div>

      {/* Bottom-left image */}
      <div
        className="absolute -bottom-10 left-0 w-1/2 h-1/2 bg-no-repeat bg-cover bg-left"
        style={{ backgroundImage: "url('/paint.webp')" }}
      ></div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-screen bg-black/70 px-4 transition-all duration-500 ease-in-out"
        style={{
          opacity: opacity,
          filter: `brightness(${brightness})`,
        }}
      >
        <div className="mb-4 flex justify-center items-center space-x-2 mt-50">
          <span className="w-6 h-px bg-yellow-200 rotate-135"></span>
          <span className="uppercase text-sm tracking-widest font-bold">
            Gallery
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl mt-5 max-w-3xl">
          Over the years, we've transformed countless vehicles with our expert
          services.
        </h1>

        <p className="max-w-md text-sm sm:text-lg text-gray-300 mt-10">
          From minor touch-ups to major overhauls, see how our skilled team has
          restored and enhanced cars of all makes and models.
        </p>

        {/* ✅ Smooth Scroll Buttons */}
        <div className="mt-32 flex gap-4">
          <button
            onClick={() => handleScrollTo("paint-work")}
            className="cursor-pointer px-4 py-2 hover:text-gray-400 transition"
          >
            Paint Work
          </button>
          <button
            onClick={() => handleScrollTo("body-work")}
            className="cursor-pointer px-4 py-2 hover:text-gray-400 transition"
          >
            Body Work
          </button>
        </div>
      </div>
    </section>
  );
}
