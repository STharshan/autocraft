import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

const paintImages = [
  '/green.webp',
  '/a1.png',
  '/a2.png',
  '/work.avif',
  '/a3.png',
  '/a4.png',
  '/bule.avif',
  '/a5.png',
  '/gray.avif',
  '/a6.png',
  '/red.avif',
  '/a7.png',
  '/shine.webp',
];

const PaintWorkSection = () => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [scrollAmount, setScrollAmount] = useState(300);

  // Update scroll amount based on screen size
  useEffect(() => {
    const updateScrollAmount = () => {
      if (window.innerWidth < 640) {
        setScrollAmount(280);
      } else if (window.innerWidth < 1024) {
        setScrollAmount(350);
      } else {
        setScrollAmount(450);
      }
    };

    updateScrollAmount();
    window.addEventListener('resize', updateScrollAmount);
    return () => window.removeEventListener('resize', updateScrollAmount);
  }, []);

  // Check scroll position to show/hide buttons
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 10);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => scrollContainer.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-16 sm:py-20 lg:py-24 px-4 relative transition-colors overflow-hidden" id="paint-work">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Restore your vehicle to its original beauty. We pride ourselves on delivering the highest quality paint services with precision and care.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative group">
          {/* Gradient Overlays */}
          <div className={`absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${showLeftButton ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none transition-opacity duration-300 ${showRightButton ? 'opacity-100' : 'opacity-0'}`}></div>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 sm:gap-6 scrollbar-hide scroll-smooth px-4 sm:px-8 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {paintImages.map((src, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 group/item"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                  <img
                    src={src}
                    alt={`Professional paint work example ${index + 1}`}
                    className="w-[280px] sm:w-[350px] lg:w-[420px] h-[200px] sm:h-[280px] lg:h-[320px] object-cover"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  {/* Image Number Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-blue-600 dark:text-blue-400 font-bold px-3 py-1 rounded-full text-sm">
                    {index + 1}/{paintImages.length}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {showLeftButton && (
            <button
              onClick={() => scroll('left')}
              className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {showRightButton && (
            <button
              onClick={() => scroll('right')}
              className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}
        </div>

        {/* Contact Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <a href="/contact">
            <button className="group/btn bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 dark:from-blue-500 dark:to-blue-400 dark:hover:from-blue-600 dark:hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
              <Phone className="w-5 h-5" />
              <span className="text-base sm:text-lg">CONTACT US TODAY</span>
              <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mt-16"></div>
    </section>
  );
};

export default PaintWorkSection;