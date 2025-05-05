// app/page.tsx
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Portfolio | Kalanithi B";
  }, []);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white text-gray-800">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I’m Kalanithi B 👋
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-600 mb-6">
          Front-End Developer | React, Next.js, TypeScript, Tailwind CSS
        </h2>

        <p className="text-base sm:text-lg mb-8 leading-relaxed">
          Passionate front-end engineer with over 1 year of experience building
          scalable, user-friendly web applications. Currently working at Amwhiz
          Media Pvt. Ltd, where I’ve contributed to projects across e-commerce,
          healthcare, SaaS, and inventory management using modern tech stacks.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/projects" className="cursor-pointer">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-base cursor-pointer">
              View Projects
            </button>
          </Link>

          <Link href="/about" className="cursor-pointer">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg text-base cursor-pointer">
              About Me
            </button>
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
            download="kalanithi-SE-resume.pdf"
          >
            <button className="border border-gray-400 px-6 py-2 rounded-lg text-base hover:bg-gray-100 cursor-pointer">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
