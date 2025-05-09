import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/ddhmn2yiq/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        pathname: '/account123/**',
      }
    ],
  },
};

export default nextConfig;
