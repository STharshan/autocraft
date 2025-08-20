import React from 'react';

const OurStorySection = () => {
  return (
    <section className="bg-white dark:bg-black py-20 px-6 md:px-12 lg:px-24 text-center transition-colors">
      {/* Tagline */}
      <div className="mb-4 flex justify-center items-center space-x-2">
        <span className="w-6 h-px bg-lime-400 rotate-135"></span>
        <span className="text-gray-500 dark:text-gray-400 uppercase text-sm tracking-widest font-bold">Our Story</span>
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-200 leading-tight max-w-4xl mx-auto mb-8">
        DELIVERING EXCELLENCE IN AUTO REPAIR FOR OVER FOUR DECADES.
      </h2>

      {/* Paragraph */}
      <p className="max-w-md mx-auto text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
        We’re a family-owned business fueled by two generations of car enthusiasts dedicated to providing exceptional service.
        With a team of highly skilled professionals and state-of-the-art equipment, we ensure your car receives the precision care it deserves.
        When you trust us with your vehicle, you’re not just a customer—you’re part of the family.
      </p>
    </section>
  );
};

export default OurStorySection;
