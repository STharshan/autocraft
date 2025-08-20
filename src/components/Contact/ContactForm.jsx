import React from "react";

const ContactForm = () => {
  return (
    <section className=" bg-gray-50 dark:bg-black ">
      <div className="max-w-7xl mx-auto rounded-xl shadow-md px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE: TEXT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Reach out to us for any inquiries or to schedule an
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">appointment today.</p>
        </div>

        {/* RIGHT SIDE: FORM */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 dark:text-gray-300 mb-1">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#23262e] rounded px-3 py-2 text-sm text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 dark:text-gray-300 mb-1">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#23262e] rounded px-3 py-2 text-sm text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#23262e] rounded px-3 py-2 text-sm text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-300 mb-1">
              Services Interested In
            </label>
            <select className="w-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#23262e] rounded px-3 py-2 text-sm text-gray-500 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400">
              <option>Select...</option>
              <option>Paint Services</option>
              <option>Mechanical</option>
              <option>Diagnostics</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-300 mb-1">Message*</label>
            <textarea
              className="w-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#23262e] rounded px-3 py-2 text-sm text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400"
              rows="4"
              placeholder="What do you need help with?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full dark:bg-yellow-300 bg-blue-500 rounded-full py-2 text-sm font-bold text-black dark:text-white dark:hover:bg-blue-400 hover:bg-yellow-300 transition"
          >
            SUBMIT
          </button>

          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            By submitting this form, you agree to our privacy policy and terms of service.
            Your information is kept confidential.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
