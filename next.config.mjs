/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "capsule-render.vercel.app" },
      { hostname: "github.com" },
    ],
  },
};

export default nextConfig;
