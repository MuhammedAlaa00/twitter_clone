/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [],
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "images.pexels.com"]
  }
};

module.exports = nextConfig;
