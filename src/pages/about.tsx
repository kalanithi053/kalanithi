import React, { useEffect } from "react";
import NextImage from "next/image";

const About = () => {
  useEffect(() => {
    document.title = "About | Kalanithi B";
  }, []);

  return (
    <div className="bg-white max-w-6xl mx-auto px-6 py-16 space-y-24 text-gray-800">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900">About Me</h1>
        <p className="mt-4 text-lg text-gray-600">
          A snapshot of my background, core skills, and career journey so far.
        </p>
      </div>

      {/* Profile Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b pb-12">
        <div className="flex justify-center">
          <NextImage
            width={208}
            height={208}
            src="https://url-bice.vercel.app/me.jpg"
            alt="Kalanithi"
            className="rounded-full w-52 h-52 object-cover border-4 border-blue-200 shadow-md"
          />
        </div>
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            Hi, I'm <strong>Kalanithi</strong> — a front-end developer with a
            strong foundation in React, Next.js, and Shopify Hydrogen. I thrive
            on crafting clean, maintainable code and delivering elegant user
            interfaces that scale.
          </p>
          <p>
            I'm known for rapid adaptability and problem-solving. I specialize
            in building responsive, high-performance UIs, integrating APIs, and
            managing application state efficiently. My contributions have
            accelerated delivery timelines by 30% and enhanced team velocity
            through reusable architecture.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b pb-12">
        <h2 className="text-3xl font-semibold mb-6">Core Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-base list-disc list-inside">
          <li>React & Redux</li>
          <li>Next.js</li>
          <li>Shopify Hydrogen</li>
          <li>HubSpot UI Extensions</li>
          <li>Microsoft Dynamics 365 (Fluent UI)</li>
          <li>RESTful API Integration</li>
          <li>UI/UX Design & Optimization</li>
          <li>Agile Project Delivery</li>
          <li>Time Management</li>
          <li>Risk Analysis & Mitigation</li>
        </div>
      </section>

      {/* Work Experience */}
      <section className="border-b pb-12">
        <h2 className="text-3xl font-semibold mb-6">Professional Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold">Software Engineer</h3>
            <p className="text-sm text-gray-500">
              Amwhiz Media Pvt. Ltd. (Oct 2024 – Present)
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Collaborated with UI/UX teams to deliver streamlined and
                user-friendly interfaces.
              </li>
              <li>
                Improved project delivery speed by 30% through reusable
                component libraries and efficient workflows.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Associate Software Engineer</h3>
            <p className="text-sm text-gray-500">
              Amwhiz Media Pvt. Ltd. (Jul 2024 – Sept 2024)
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Elevated project success rates by 10% through cross-functional
                collaboration and proactive testing.
              </li>
              <li>
                Diagnosed and refactored key architectural components to improve
                stability and performance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Internship */}
      <section className="border-b pb-12">
        <h2 className="text-3xl font-semibold mb-6">Internship</h2>
        <div>
          <h3 className="text-xl font-bold">Front-end Developer Intern</h3>
          <p className="text-sm text-gray-500">
            Amwhiz Media Pvt. Ltd. (Apr 2024 – Jun 2024)
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Developed responsive e-commerce UIs using Shopify Hydrogen and
              React.
            </li>
            <li>
              Contributed to modern, fast-loading storefronts with component-based
              architecture and clean code practices.
            </li>
          </ul>
        </div>
      </section>

      {/* Awards */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Awards & Recognition</h2>
        <p className="text-lg">
          Recognized as <strong>Rising Star of the Year</strong> for consistently
          delivering high-impact solutions, driving innovation, and ensuring
          on-time project completion.
        </p>
      </section>
    </div>
  );
};

export default About;
