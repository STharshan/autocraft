import React, { useState, useEffect, useRef } from "react";

const images = [
  "/gray.avif",
  "/work.avif",
  "/paint.webp",
  "/homepaint.avif",
];

const GallerySlider = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 sec

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  return (
    <section className="w-full overflow-hidden relative h-[400px] md:h-[700px]">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-1000 ease-in-out h-full"
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="text-white">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-4">
            GALLERY
          </h2>
          <p className="text-md md:text-xl mb-6 text-gray-300 max-w-sm mx-auto">
            See our impressive work on various vehicles, before and after.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition ml-22">
            <span className="text-yellow-400 text-xl">/</span> EXPLORE GALLERY
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
