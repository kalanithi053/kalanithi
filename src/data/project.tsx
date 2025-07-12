import {
  FaStore,
  FaHospital,
  FaChartBar,
  FaClipboardList,
  FaStar,
} from "react-icons/fa";

export const projects = [
  {
    category: "E-Commerce",
    icon: <FaStore className="text-blue-600 text-xl" />,
    items: [
      {
        title: "Travel-Based E-Commerce Platform",
        tech: "Shopify Hydrogen, React, TypeScript, Tailwind CSS",
        id: "tect-1",
        description:
          "Built a travel-focused e-commerce storefront using Shopify Hydrogen. Focused on reusable UI components, optimized routing, and performance enhancements.",
      },
      {
        title: "Online Certification Store",
        tech: "Shopify Hydrogen, React, TypeScript, Tailwind CSS",
        id: "tect-2",
        description:
          "Developed a fast-loading, SEO-optimized storefront for digital certification sales with a modular product display architecture.",
      },
    ],
  },
  {
    category: "SaaS / Marketplace",
    icon: <FaClipboardList className="text-purple-600 text-xl" />,
    items: [
      {
        title: "Cloud Marketplace Co-Sell Module",
        tech: "HubSpot UI Extension, React, TypeScript, Tailwind CSS",
        id: "tect-3",
        description:
          "Contributed to a co-sell enablement module integrated with cloud marketplaces. Developed HubSpot UI extensions for listing, managing, and co-selling SaaS offerings.",
      },
    ],
  },
  {
    category: "Healthcare / Scheduling",
    icon: <FaHospital className="text-emerald-600 text-xl" />,
    items: [
      {
        title: "Clinic Appointment Scheduling System",
        tech: "React, Next.js, React Calendar Timeline, TypeScript, Tailwind CSS",
        id: "tect-4",
        description:
          "Created a scheduling platform for healthcare providers featuring precise time-slot validation, custom calendar logic, and an optimized UI for managing appointments and staff schedules.",
      },
    ],
  },
  {
    category: "Reviews / Ratings",
    icon: <FaStar className="text-yellow-500 text-xl" />,
    items: [
      {
        title: "Company Rating Platform for Education Sector",
        tech: "React, Next.js, PrimeReact, TypeScript, Tailwind CSS",
        id: "tect-5",
        description:
          "Built a responsive platform for user reviews and ratings in the education and learning sector with dynamic filtering and rich UI components using PrimeReact.",
      },
    ],
  },
  {
    category: "Inventory / Business Tools",
    icon: <FaChartBar className="text-indigo-600 text-xl" />,
    items: [
      {
        title: "Multi-Location Inventory Management System",
        tech: "React, Next.js, Redux, TypeScript, Tailwind CSS",
        id: "tect-6",
        description:
          "Designed a stock management system supporting multiple branches. Integrated Redux for state handling and created intuitive dashboards for tracking and analyzing inventory.",
      },
    ],
  },
];
