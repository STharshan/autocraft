import React from 'react';

const stats = [
  { value: '99%', label: 'On-Time Delivery' },
  { value: '5+', label: 'Expert Technicians' },
  { value: '4.3/5', label: 'Average Rating' },
];

const ProvenResultsSection = () => {
  return (
    <section className="bg-white dark:bg-black py-20 px-4 text-center transition-colors">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        PROVEN RESULTS
      </h2>
      <p className="text-gray-500 dark:text-gray-300 mb-12 text-sm sm:text-base">
        Discover the stats that highlight<br className="hidden sm:block" />
        our success and dedication
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-72 h-72 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center justify-center"
          >
            <div className="text-4xl sm:text-5xl font-bold text-lime-300">{stat.value}</div>
            <div className="text-sm text-gray-500 dark:text-gray-300 mt-4">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProvenResultsSection;
