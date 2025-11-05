"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    author: "Sarge Baghra",
    quote:
      "Great customer service and excellent technical ability. Solved issues I had that main dealers could not resolve. Would highly recommend as they ensure all issues are addressed and discuss any additional work first. I’ve also had body work repairs — finish to an extremely high standard. Personally won’t be going anywhere else for all my car needs."
  },
  {
    author: "Dhami Amarjit",
    quote:
      "I’ve been utilising the services of Gags for years and his service, speed, efficiency, and knowledge are top tier. He’s passionate about his work, and my cars always run perfectly. Also had body work done and the results were phenomenal. Great all-around car care — highly recommended. 10/10."
  },
  {
    author: "Sara Roshan Sabur",
    quote:
      "Excellent service all the way. Quick quote for a dent, job completed to an excellent standard within a day, and the car returned spotless. Great customer service — cannot recommend enough!"
  },
  {
    author: "Yousaf Nasim",
    quote:
      "Great guys who helped me with my Mercedes. Feels like a new car now! Would definitely recommend — very competitive prices too."
  },
  {
    author: "Jay Tosar",
    quote:
      "Had a few issues with my BMW and took it to Nikita Autocraft — handled professionally with quick turnaround from drop-off to completion. Highly recommend!"
  },
  {
    author: "Kunal Vegad",
    quote:
      "Brilliant customer service from the team. Added bonus that they do bodywork too! Everything you need in one place — professional, efficient, and trustworthy. Highly recommended!"
  },
  {
    author: "Nick Johnston",
    quote:
      "Nothing is too much trouble. The team is happy to help with all vehicle-related issues. Very fair, honest pricing and quality workmanship with swift service. Highly recommend."
  },
  {
    author: "Max Sieczko",
    quote:
      "Really good customer service and communication — very friendly too. Service was quick, and I got my car back much sooner than expected."
  },
  {
    author: "Tarvinder Basra",
    quote:
      "Fantastic service. Had my Range Rover serviced here — quick turnaround and good pricing. Will definitely be a repeat customer."
  },
  {
    author: "Neil",
    quote:
      "Very professional, excellent communication, and friendly, knowledgeable staff. Definitely recommend for all your vehicle needs."
  },
];


const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="w-full bg-white dark:bg-black py-12 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 items-center">
        {/* Left */}
        <div data-aos="fade-right">
          {/* Small Label */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-3 h-[1.5px] bg-[#E4D12E] rotate-[-45deg]"></span>
            <p className="text-[11px] uppercase tracking-[1px] text-gray-400 font-semibold">
              RAVING REVIEWS
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl uppercase text-[#1B75BB] leading-snug tracking-wider">
            THOUSANDS OF <br /> HAPPY DRIVERS
          </h2>
        </div>

        {/* Right */}
        <div className="relative bg-black dark:bg-gray-900 overflow-hidden p-4 h-180 transition-colors">
          {/* Right vertical linear */}
          <div className="absolute top-0 right-0 h-full w-[15px] bg-linear-to-b from-transparent to-[#D9C814] dark:to-yellow-500"></div>

          {/* Diagonal yellow line */}
          <div className="absolute border border-[#D9C814] dark:border-yellow-500 transform rotate-315 w-full h-0 top-1/2 left-0"></div>

          {/* Testimonials */}
          <div className="flex space-x-4 scrollbar-hide relative z-10 mt-70 slider-track">
            {testimonials.map((t, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150} // staggered animation
                className="relative bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 p-4 min-w-[300px] shadow"
              >
                {/* Left linear */}
                <div className="absolute left-0 top-0 h-full w-4 bg-linear-to-r from-black/70 dark:from-gray-900/80 to-transparent"></div>
                {/* Right linear */}
                <div className="absolute right-0 top-0 h-full w-4 bg-linear-to-l from-black/70 dark:from-gray-900/80 to-transparent"></div>

                <p className="text-sm mb-2">"{t.quote}"</p>
                <p className="text-xs font-bold uppercase text-gray-600 dark:text-gray-400">
                  {t.author}
                </p>
              </div>
            ))}
          </div>

          {/* Yellow bottom border */}
          <div className="absolute bottom-0 left-30 w-[80%] h-5 bg-[#D9C814] dark:bg-yellow-500"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
