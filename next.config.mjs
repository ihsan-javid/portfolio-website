// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // For GitHub Pages deployment
  basePath: process.env.NODE_ENV === "production" ? "/portfolio-website" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/portfolio-website/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
