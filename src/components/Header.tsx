import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const Header = () => {
  const router = useRouter(); // Get the current route
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  // Define the routes in an array of objects
  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo or Name */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Kalanithi.dev
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex text-gray-700 font-medium">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`hover:text-blue-600 transition ${
                router.pathname === route.path
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu (optional toggle in future) */}
        <div className="md:hidden">
          <Button
            className="text-gray-600 focus:outline-none border-none !bg-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
      <Dialog
        onHide={() => setIsMobileMenuOpen(false)}
        visible={isMobileMenuOpen}
        className="fixed top-0 left-0 w-[80%] h-full bg-white z-50 header-dialog"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`hover:text-blue-600 transition ${
                router.pathname === route.path
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              {route.label}
            </Link>
          ))}
          </div>
      </Dialog>
    </header>
  );
};

export default Header;
