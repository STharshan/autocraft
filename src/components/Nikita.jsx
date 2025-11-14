import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';

const Nikita = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('/car.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl mt-50">

        {/* Heading */}
        <h2 className="text-4xl md:text-7xl font-semibold text-blue-400 mb-10">NIKITA</h2>

        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg mb-8 font-semibold">
          Quick and easy booking for all <br/> your car repair needs.
        </p>
        
      </div>
    </section>
  );
};

export default Nikita;
