import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fullrburgers.lk',
      },
      {
        protocol: 'https',
        hostname: 'cdn.trustindex.io',
      },
    ],
  },
};

export default nextConfig;
