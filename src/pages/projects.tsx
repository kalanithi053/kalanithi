// pages/projects.tsx
import { projects } from "@port/data/project";
import React, { use, useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Kalanithi B";
  }, []);
  return (
    <div className="bg-white max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Projects
      </h1>
      <div className="space-y-12">
        {projects.map((section) => (
          <div key={section.category}>
            <div className="flex items-center space-x-3 mb-6">
              {section.icon}
              <h2 className="text-2xl font-semibold text-gray-800">
                {section.category}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {section.items.map((project) => (
                <div
                  key={project.title}
                  className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{project.tech}</p>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
