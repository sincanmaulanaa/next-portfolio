/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [process.env.IMAGE_DOMAIN],
  },
};

module.exports = nextConfig;
