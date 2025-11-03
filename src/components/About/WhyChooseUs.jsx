import React from 'react';
import { FaStar, FaBolt } from 'react-icons/fa';

const features = [
  {
    icon: <FaStar className="text-black dark:text-yellow-400 text-xl" />,
    title: 'EXPERT TEAM',
    description:
      'Our skilled technicians leverage years of expertise and certified excellence to ensure every repair meets the highest standards.',
    action: 'MEET THE TEAM',
  },
  {
    icon: <FaBolt className="text-black dark:text-yellow-400 text-xl" />,
    title: 'FAST SERVICE',
    description:
      'Experience prompt and efficient service, carefully tailored to ensure exceptional quality and meticulous attention to every detail, every time.',
    action: 'VIEW PRICING',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-black text-center transition-colors">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">WHY CHOOSE US</h2>
      <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base mb-12 max-w-xl mx-auto">
        Discover the top reasons to <br className="sm:hidden" />
        choose our expert services.
      </p>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 p-8 w-full max-w-md mx-auto rounded-sm hover:shadow-lg transition-colors"
          >
            {/* Corner borders */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-yellow-300 dark:border-yellow-500"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-400 dark:border-blue-600"></div>

            {/* Icon */}
            <div className="inline-block bg-linear-to-b from-yellow-100 to-yellow-300 dark:from-yellow-900 dark:to-yellow-700 p-3 rounded mb-6">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg text-black dark:text-yellow-400 mb-3">{feature.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

            {/* Action */}
            <button className="text-sm font-semibold text-black dark:text-yellow-400 border-t border-gray-400 dark:border-gray-700 pt-2 transition-colors">
              {feature.action}
            </button>
          </div>
        ))}
      </div>
      <div className="mb-6 mt-20 inline-flex items-center gap-3 border-1 border-gray-200 dark:border-gray-700 rounded-full px-7 py-3 text-sm font-medium transition-colors">
        <div className="flex text-yellow-400 space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={14} />
          ))}
        </div>
        <span className="text-black dark:text-gray-100">4.3/5 from</span>
        <span className="bg-gray-100 dark:bg-gray-900 rounded-full px-2 py-1 text-gray-400 dark:text-gray-200 font-medium">20+ Reviews</span>
      </div>
    </section>
  );
};

export default WhyChooseUs;
