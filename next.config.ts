import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// GitHub Pages project site is served from https://brisinger23.github.io/portfolio_code
const basePath = isProd ? "/portfolio_code" : "";

const nextConfig: NextConfig = {
  output: "export", // → ensures pure static HTML/CSS/JS
  images: { unoptimized: true }, // prevents image optimization issues on GitHub Pages
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
