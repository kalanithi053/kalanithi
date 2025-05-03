import React, { useEffect, useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const toastRef = useRef<Toast>(null);
  useEffect(() => {
    document.title = "Contact | Kalanithi B";
  }, []);
  return (
    <main className="bg-white max-w-4xl mx-auto px-6 py-16 text-gray-800">
      {/* Contact Info */}
      <Toast ref={toastRef} />
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Me</h1>
        <p className="text-lg text-gray-600">
          Dharmapuri, Tamil Nadu, India - 635111
        </p>
        <a
          className="text-gray-600 flex items-center justify-center"
          href="https://wa.me/918220076795"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPhoneAlt className="mr-2" /> +91 82200 76795
        </a>
        <a
          className="text-gray-600 flex items-center justify-center"
          href="mailto:kalanithibala053@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="mr-2" /> kalanithibala053@gmail.com
        </a>
      </section>
    </main>
  );
};

export default Contact;
