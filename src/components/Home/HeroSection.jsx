import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="relative w-full h-200 text-black dark:text-white">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/video.MOV"
                autoPlay
                muted
                loop
                playsInline
            />

            {/* Reverse overlay: light = dark, dark = light */}
            <div className="absolute inset-0 z-0 transition-colors"></div>

            {/* Centered Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                {/* Logo Title */}
                <div className="flex items-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest mr-10 text-black dark:text-white">
                        NIKITA
                    </h1>
                    <span className="md:text-xl font-bold uppercase tracking-widest text-black dark:text-white">
                        EST. 1992
                    </span>
                </div>

                {/* AUTOCRAFT */}
                <p className="text-blue-700 dark:text-blue-600 text-5xl md:text-7xl font-extrabold leading-tight tracking-wide mb-7 md:ml-15">
                    AUTOCRAFT
                </p>

                {/* Services */}
                <p className="text-sm md:text-xl uppercase font-bold tracking-widest relative inline-block pb-2 text-black dark:text-white">
                    <span className="absolute -top-2 left-0 w-full h-1 bg-yellow-400 z-0"></span>
                    <span className="relative z-10 max-w-2xl">MOT · SERVICE · BODY REPAIRS · RESPRAY</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 z-0"></span>
                </p>

                {/* Sub Text */}
                <p className="mt-16 text-md sm:text-xl text-gray-700 dark:text-gray-300">
                    Your One-Stop Auto Repair Shop
                </p>

                {/* CTA Button */}
                <button className="mt-6 bg-white dark:bg-black border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition">
                    <FaArrowRight className="text-yellow-400" />
                    <span>GET A QUOTE</span>
                </button>

                {/* Badge Row */}
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2 font-semibold px-3 py-1 rounded">
                        <FaArrowRight className='bg-yellow-400 text-black w-8 h-5' /> Fast Service
                    </div>
                    <div className="flex items-center gap-2 font-semibold px-3 py-1 rounded">
                        <FaArrowRight className='bg-yellow-400 text-black w-7 h-5' /> Quality Care
                    </div>
                </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute left-0 w-full z-10 px-4 bottom-10 border-t border-gray-300 dark:border-gray-700 pt-5">
                <div className="max-w-2xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-6 py-3 text-black dark:text-white text-sm font-semibold">

                    {/* Team Info */}
                    <div className="flex items-center gap-2">
                        <span className="text-white  uppercase">Leicester Team</span>
                        <span className="text-2xl text-black dark:text-white font-bold">5</span>
                    </div>

                    {/* Top Rated */}
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <span className="uppercase text-white">Top Rated</span>
                        {/* Rating Box */}
                        <div className="flex items-center gap-2  border border-gray-300  dark:border-gray-600 px-4 py-3 rounded-full">
                            <div className="flex text-yellow-400 text-xs space-x-1">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <span className="text-black dark:text-white text-sm">4.3/5 from</span>
                            <span className="border border-gray-600 dark:text-white px-3 py-1 rounded-full text-black text-xs">20+ Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
