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
          A quick look into my background, skills, and experiences.
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
            Hi, I'm <strong>Kalanithi</strong>, a passionate front-end developer
            skilled in React, Next.js, and Shopify React Hydrogen. I’m known for
            quick adaptability, clean code, and contributing to project
            innovation with strong problem-solving skills.
          </p>
          <p>
            I craft responsive, scalable UIs and integrate REST APIs, manage
            complex state with Redux, and build seamless user experiences. I
            helped reduce project delivery times by 30%, boosting team
            efficiency and output.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b pb-12">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-base list-disc list-inside">
          <li>React & Redux</li>
          <li>Next.js</li>
          <li>Shopify Hydrogen</li>
          <li>HubSpot UI Extensions</li>
          <li>RESTful API Integration</li>
          <li>UX Design & Optimization</li>
          <li>Project Prioritization</li>
          <li>Time Management</li>
          <li>Risk Assessment</li>
        </div>
      </section>

      {/* Work Experience */}
      <section className="border-b pb-12">
        <h2 className="text-3xl font-semibold mb-6">Work Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold">Software Engineer</h3>
            <p className="text-sm text-gray-500">
              Amwhiz Media Pvt. Ltd. (Oct 2024 - Present)
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Worked with UI/UX teams to create better user experiences.
              </li>
              <li>
                Reduced delivery time by 30%, improving efficiency across teams.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Associate Software Engineer</h3>
            <p className="text-sm text-gray-500">
              Amwhiz Media Pvt. Ltd. (Jul 2024 - Sept 2024)
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Enhanced project success rates by 10% through collaborative
                development.
              </li>
              <li>
                Debugged and optimized design architecture across multiple
                modules.
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
            <li>Built e-commerce UIs using Shopify React Hydrogen.</li>
            <li>
              Developed modern storefronts with responsive and fast-loading
              designs.
            </li>
          </ul>
        </div>
      </section>

      {/* Awards */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Awards & Recognition</h2>
        <p className="text-lg">
          Honored as <strong>Rising Star of the Year</strong> for key
          contributions to innovative project solutions and on-time delivery.
        </p>
      </section>
    </div>
  );
};

export default About;
