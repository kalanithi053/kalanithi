import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t max-w-6xl mx-auto px-6 py-12 text-gray-800">
      <section className="text-center flex flex-col items-center mb-12" id="contact">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Me</h2>
        <p className="text-lg text-gray-600">
          Dharmapuri, Tamil Nadu, India - 635111
        </p>
        <a
          className="text-gray-600 flex items-center justify-center mt-2"
          href="https://wa.me/918220076795"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPhoneAlt className="mr-2" /> +91 82200 76795
        </a>
        <a
          className="text-gray-600 flex items-center justify-center mt-2"
          href="mailto:kalanithibala053@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="mr-2" /> kalanithibala053@gmail.com
        </a>
      </section>
    </footer>
  );
};

export default Footer;
