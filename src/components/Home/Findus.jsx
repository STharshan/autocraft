import React from "react";

const FindUs = () => {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white">Find Us</h2>

        <div className="rounded-lg overflow-hidden shadow-lg w-full h-[400px]">
          <iframe
            title="Google Map - Nikita Autocraft, 107 Frisby Rd, Leicester LE5 0DQ, United Kingdom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.3623697624!2d-1.1090058840850332!3d52.64417477983956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877616df562c2ef%3A0x21b9cfccb93876d6!2s107%20Frisby%20Rd%2C%20Leicester%20LE5%200DQ%2C%20UK!5e0!3m2!1sen!2suk!4v1692129493014!5m2!1sen!2suk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
