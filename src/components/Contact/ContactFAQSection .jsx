import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Do you work with all makes and models?",
    answer:
      "No job is too big or small for us. We have over 4 decades of experience and seen it all.",
  },
  {
    question: "What are your opening times?",
    answer:
      "Monday- Friday 8:30-17:00 Saturday: appointments only  Sunday: closed",
  },
  {
    question: "How quick can you turn my vehicle around?",
    answer:
      "Each job will differ based on complexity and availability of parts. We will quote you a time well in advance. ",
  },
  {
    question: "Do you accept card payments?",
    answer:
      "We accept Cash, Card and Bank transfers. There maybe additional charges depending on the card used.",
  },
  {
    question: "Do you offer a breakdown service?",
    answer:
      "Yes, we provide emergency breakdown services in selected areas.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="dark:bg-black">
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <div className="mb-4 flex justify-center items-center space-x-2">
          <span className="w-5 h-px bg-yellow-400 rotate-135"></span>
          <span className="text-gray-500 dark:text-gray-400 uppercase text-sm tracking-widest font-bold">
            help
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          FAQ'S
        </h2>
        <p className="text-gray-500 dark:text-gray-300 text-sm">
          Find answers to common questions about our
        </p>
        <p className="text-gray-500 dark:text-gray-300 text-sm mb-8">
          services and policies.
        </p>

        <div className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden text-left bg-white dark:bg-[#181b21] shadow">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center bg-gray-50 dark:bg-[#16181d] hover:bg-gray-100 dark:hover:bg-[#23262e] px-5 py-5 text-left cursor-pointer transition-all"
              >
                <span className="text-sm text-gray-800 dark:text-gray-200 font-medium transition-transform duration-500">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-gray-500 dark:text-gray-400 text-sm" />
                ) : (
                  <FaChevronDown className="text-gray-500 dark:text-gray-400 text-sm" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-5 py-3 text-gray-600 dark:text-gray-300 text-sm bg-white dark:bg-[#21242a] border-t border-gray-100 dark:border-gray-800">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
