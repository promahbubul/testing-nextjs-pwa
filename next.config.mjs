// next.config.mjs
import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your custom Next.js configuration options here

  // For example, you might want to enable React strict mode
  reactStrictMode: true,

  // Other options can be added here
};

export default withPWA({
  dest: "public", // Directory where PWA assets are stored
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
})(nextConfig);
