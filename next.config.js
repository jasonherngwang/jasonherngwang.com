const { withPlaiceholder } = require('@plaiceholder/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = withPlaiceholder(nextConfig);
