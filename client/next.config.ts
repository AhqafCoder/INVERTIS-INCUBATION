import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      },
      {
        protocol: 'https',
        hostname: 'jards.in',
      },
      {
        protocol: 'https',
        hostname: 'www.themediaant.com',
      },
      {
        protocol: 'https',
        hostname: 'media.glassdoor.com',
      },
      {
        protocol: 'https',
        hostname: 'www.cesim.com',
      },
      {
        protocol: 'https',
        hostname: 'www.vaave.com',
      },
    ],
  },
};

export default nextConfig;
