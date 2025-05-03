import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["url-bice.vercel.app"], // Add your image source here
  },
};

export default nextConfig;
