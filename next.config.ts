import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "udyamsarthi.co.in",
      },
    ],
  },
};

export default nextConfig;
