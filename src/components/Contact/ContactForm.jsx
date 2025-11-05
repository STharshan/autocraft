"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!form.firstName.trim()) tempErrors.firstName = "First name is required";
    if (!form.lastName.trim()) tempErrors.lastName = "Last name is required";
    if (!form.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) tempErrors.email = "Invalid email address";
    if (!form.service.trim() || form.service === "Select...")
      tempErrors.service = "Please select a service";
    if (!form.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const phone = "447930105858"; // UK number for WhatsApp
    const message = `
Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Service Interested: ${form.service}
Message: ${form.message}`;

    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    // ✅ Clear form after submission
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      service: "",
      message: "",
    });

    // ✅ Clear any error messages
    setErrors({});
  };

  return (
    <section className="bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto rounded-xl shadow-md px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Reach out to us for any inquiries or to schedule an appointment today.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 dark:text-gray-300 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                className={`w-full border ${
                  errors.firstName
                    ? "border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                } bg-gray-100 dark:bg-[#23262e] rounded px-3 py-2 text-sm text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400`}
              />
              {errors.firstName && (
                <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-xs text-gray-600 dark:text-gray-300 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                className={`w-full border ${
                  errors.lastName
                    ? "border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                } bg-gray-100 dark:bg-[#23262e] rounded px-3 py-2 text-sm text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400`}
              />
              {errors.lastName && (
                <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-300 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className={`w-full border ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-200 dark:border-gray-700"
              } bg-gray-100 dark:bg-[#23262e] rounded px-3 py-2 text-sm text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Service */}
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-300 mb-1">
              Services Interested In <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`w-full border ${
                errors.service
                  ? "border-red-500"
                  : "border-gray-200 dark:border-gray-700"
              } bg-gray-100 dark:bg-[#23262e] rounded px-3 py-2 text-sm text-gray-500 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400`}
            >
              <option>Select...</option>
              <option>Paint Services</option>
              <option>AC Services</option>
              <option>MOT</option>
              <option>Mechanical Repairs</option>
              <option>Smart Repairs</option>
              <option>Diagnostics</option>
              <option>Dent Repair</option>
            </select>
            {errors.service && (
              <p className="text-xs text-red-500 mt-1">{errors.service}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-300 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="What do you need help with?"
              className={`w-full border ${
                errors.message
                  ? "border-red-500"
                  : "border-gray-200 dark:border-gray-700"
              } bg-gray-100 dark:bg-[#23262e] rounded px-3 py-2 text-sm text-black dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400`}
            ></textarea>
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 dark:bg-yellow-300 rounded-full py-2 text-sm font-bold text-white dark:text-black hover:bg-yellow-300 dark:hover:bg-blue-400 transition"
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
