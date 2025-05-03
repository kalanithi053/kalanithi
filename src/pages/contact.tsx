import React, { useEffect, useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  //   const [formData, setFormData] = useState<Record<string, string>>({});
  const toastRef = useRef<Toast>(null);
  //   const [loader, setLoader] = useState(false);
  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   };

  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     // Basic validation
  //     const { name = "", email = "", message = "" } = formData;
  //     if (!name || !email || !message) {
  //       toastRef?.current?.show({
  //         severity: "error",
  //         summary: "Validation Error",
  //         detail: "Please fill in all fields.",
  //         life: 3000,
  //       });
  //       return;
  //     }

  //     try {
  //       setLoader(true);
  //       const res = await fetch("/api/contact", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(formData),
  //       });

  //       if (res.ok) {
  //         toastRef?.current?.show({
  //           severity: "success",
  //           summary: "Success",
  //           detail: "Message sent successfully!",
  //           life: 3000,
  //         });
  //         setFormData({});
  //       } else {
  //         toastRef?.current?.show({
  //           severity: "error",
  //           summary: "Error",
  //           detail: "Failed to send message. Please try again.",
  //           life: 3000,
  //         });
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       toastRef?.current?.show({
  //         severity: "error",
  //         summary: "Error",
  //         detail: "An error occurred. Please try again.",
  //         life: 3000,
  //       });
  //     } finally {
  //       setLoader(false);
  //     }
  //   };
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

      {/* Contact Form */}
      {/* <section className="bg-gray-50 p-8 rounded-xl shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <InputText
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <InputText
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <InputTextarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <Button
            type="submit"
            label="Send Message"
            className="w-full"
            loading={loader}
          />
        </form>
      </section> */}
    </main>
  );
};

export default Contact;
