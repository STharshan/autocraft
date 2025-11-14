import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';

const ContactHeader = () => {
  return (
    <section
      className="relative bg-cover bg-black bg-center h-[80vh] lg:h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl mt-10">
        {/* Rating Badge */}
        <div className="mb-6 inline-flex items-center gap-3 bg-black border-gray-900 border-1 bg-opacity-80 rounded-full px-5 py-2 text-sm font-medium">
          <div className="flex text-yellow-400 space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
          </div>
          <span className="text-white">4.3/5 from</span>
          <span className="bg-black border-1 border-gray-900 rounded-full px-2 py-1">20+ Reviews</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-7xl font-semibold text-blue-400 mb-10">CONTACT US</h2>

        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg mb-8 font-semibold max-w-xs mx-auto">
          We're here to help with all your auto service needs.
        </p>

        {/* Info Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 font-semibold px-4 py-2 rounded-md">
            <BsArrowRightShort size={20} className="bg-yellow-400 text-black rounded" />
            Fast Response
          </div>
          <div className="flex items-center gap-2 font-semibold px-4 py-2 rounded-md">
            <BsArrowRightShort size={20} className="bg-yellow-400 text-black rounded" />
            Same Day Callouts
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
