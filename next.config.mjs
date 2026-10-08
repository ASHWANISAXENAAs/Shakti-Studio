import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/beauty-services",
        permanent: true,
      },
      {
        source: "/occasions",
        destination: "/bridal-mehndi",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/creative-studio",
        permanent: true,
      },
      {
        source: "/how-it-works",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/artist",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
