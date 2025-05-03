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
        title: "Next Travel Connect",
        tech: "Shopify Hydrogen, React, TypeScript, Tailwind CSS",
        description:
          "Built a travel-based e-commerce storefront using Shopify Hydrogen. Focused on reusable UI components, optimized routing, and performance enhancements.",
      },
      {
        title: "Certify",
        tech: "Shopify Hydrogen, React, TypeScript, Tailwind CSS",
        description:
          "Developed an online certification store with fast-loading, SEO-optimized pages and a modular product display architecture.",
      },
    ],
  },
  {
    category: "SaaS / Marketplace",
    icon: <FaClipboardList className="text-purple-600 text-xl" />,
    items: [
      {
        title: "SaaSify",
        tech: "HubSpot UI Extension, React, TypeScript, Tailwind CSS",
        description:
          "Contributed to the Co-sell module integrating cloud marketplaces. Developed UI extensions for listing, managing, and co-selling SaaS offerings with HubSpot’s extension APIs.",
      },
    ],
  },
  {
    category: "Healthcare / Scheduling",
    icon: <FaHospital className="text-emerald-600 text-xl" />,
    items: [
      {
        title: "Padra Clinic",
        tech: "React, Next.js, React Calendar Timeline, TypeScript, Tailwind CSS",
        description:
          "Created a hospital client scheduling system with precise time-slot validation, custom calendar logic, and improved UI for managing appointments and staff schedules.",
      },
    ],
  },
  {
    category: "Reviews / Ratings",
    icon: <FaStar className="text-yellow-500 text-xl" />,
    items: [
      {
        title: "Olive Plus",
        tech: "React, Next.js, PrimeReact, TypeScript, Tailwind CSS",
        description:
          "Developed a company rating platform for the ELT industry with dynamic filtering, responsive design, and robust UI components using PrimeReact.",
      },
    ],
  },
  {
    category: "Inventory / Business Tools",
    icon: <FaChartBar className="text-indigo-600 text-xl" />,
    items: [
      {
        title: "ALM Inventory Management App",
        tech: "React, Next.js, Redux, TypeScript, Tailwind CSS",
        description:
          "Built a multi-location stock management system. Used Redux for state handling and implemented intuitive dashboards for tracking, updating, and analyzing inventory across branches.",
      },
    ],
  },
];
