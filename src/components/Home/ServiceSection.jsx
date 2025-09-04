import React, { useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "DENTS/SCRATCHES",
    desc: "Restore your car’s perfect finish. Professional dent removal for a flawless vehicle surface.",
    image: "./bule.avif",
    path: "/services/dent-repair",
  },
  {
    title: "SMART REPAIR",
    desc: "Cost-effective solution for fixing minor damage. Without the need for extensive replacement or repainting.",
    image: "/carpaint.avif",
    path: "/services/body-smart-repairs",
  },
  {
    title: "DIAGNOSTICS",
    desc: "Consultive diagnostics – address the root cause of the issue for a lasting solution.",
    image: "/gray.avif",
    path: "/services/diagnostics",
  },
  {
    title: "SERVICE",
    desc: "Dependable and thorough car servicing - We do more than just routine maintenance",
    image: "/graypaint.avif",
    path: "/services/service",
  },
  {
    title: "MECHANICAL",
    desc: "Ensuring your vehicle is in optimal condition. No job is too big for us.",
    image: "/graypaint.avif",
    path: "/services/mechanical-repairs",
  },
  {
    title: "DENT REPAIR",
    desc: "Professional dent removal for a flawless vehicle surface.",
    image: "/graypaint.avif",
    path: "/services/dent-repair",
  },
  {
    title: "AC SERVICE",
    desc: "Keep you comfortable all year round. We pride our selves on our expertise, attention to detail, and commitment to quality.",
    image: "/graypaint.avif",
    path: "/services/ac-service",
  },
  {
    title: "MOT",
    desc: "We make your MOT test simple and stress-free",
    image: "/graypaint.avif",
    path: "/services/mot",
  },
];

const ServiceSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-white mb-2 uppercase">
          Our Services
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
          From minor fixes to major repairs, we’ve got you covered.
        </p>

        <div className="relative overflow-hidden">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20
              bg-white dark:bg-black/70 hover:bg-yellow-400 dark:hover:bg-yellow-400
              text-black dark:text-white p-2 rounded-full shadow-md border border-gray-300 dark:border-gray-600"
            aria-label="Scroll left"
          >
            <FaArrowLeft />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20
              bg-white dark:bg-black/70 hover:bg-yellow-400 dark:hover:bg-yellow-400
              text-black dark:text-white p-2 rounded-full shadow-md border border-gray-300 dark:border-gray-600"
            aria-label="Scroll right"
          >
            <FaArrowRight />
          </button>

          {/* Scrollable Service Cards */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth px-10 scrollbar-hide"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="relative min-w-[300px] md:min-w-[400px] h-[420px] rounded shadow-md overflow-hidden group flex-shrink-0"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80 group-hover:bg-black/50 dark:group-hover:bg-white/40 transition duration-300"></div>
                <div className="absolute bottom-0 p-5 z-10">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{service.desc}</p>
                  <Link to={service.path}>
                    <button className="mt-auto px-4 py-2 text-xs border border-yellow-400 rounded-full font-semibold cursor-pointer
                        hover:translate-x-1.5 transition-transform duration-500
                        text-white bg-transparent dark:bg-transparent
                        hover:bg-yellow-400 hover:text-black dark:hover:bg-yellow-400 dark:hover:text-black"
                    >
                      <FaArrowRight className="inline mr-2 text-yellow-400" />
                      EXPLORE
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
