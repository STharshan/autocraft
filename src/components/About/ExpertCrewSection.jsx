import React from 'react';

const teamMembers = [
  { name: "Alex Smith", role: "Lead Technician", image: "/back.png" },
  { name: "Rachel Lee", role: "Paint Specialist", image: "/back.png" },
  { name: "Marcus Green", role: "Service Advisor", image: "/back.png" },
  { name: "Nina Patel", role: "Engine Expert", image: "/back.png" },
  { name: "Jordan Clark", role: "Wheel Specialist", image: "/back.png" },
];

const ExpertCrewSection = () => {
  return (
    <section className="relative bg-white dark:bg-black py-20 overflow-hidden transition-colors">
      {/* Scrollable Row */}
      <div className="overflow-hidden relative">
        <div className="flex w-[200%] animate-[scroll-left_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...teamMembers, ...teamMembers].map((member, i) => (
            <div
              key={i}
              className="relative w-[200px] sm:w-[250px] h-[250px] mx-2 flex-shrink-0 group overflow-hidden rounded-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition duration-300 group-hover:brightness-50"
              />
              {/* Hover overlay: Name + Role at Top */}
              <div className="
                absolute 
                top-2 left-2 right-2
                pointer-events-none
                ">
                <div className={`
                  bg-black/70 dark:bg-gray-900/80
                  rounded-md p-3 shadow-lg text-white
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-auto
                `}>
                  <div className="text-base font-semibold">{member.name}</div>
                  <div className="text-xs text-yellow-200">{member.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Info Card */}
      <div className="absolute inset-0 flex items-center justify-center z-10 mt-20 px-4">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 shadow-lg p-6 sm:p-8 text-center transition-colors">
          <div className="absolute top-0 right-0 h-full w-[15px] bg-linear-to-b from-transparent to-yellow-400 dark:to-yellow-500"></div>
          {/* Bottom fixed half-border */}
          <div className="absolute bottom-0 left-0 w-full h-[15px] bg-linear-to-r from-transparent to-yellow-400 dark:to-yellow-500"></div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">EXPERT CREW</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
            Meet the professionals behind our
          </p>
          <p className='text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300'>exceptional service.</p>
        </div>
      </div>
    </section>
  );
};

export default ExpertCrewSection;
