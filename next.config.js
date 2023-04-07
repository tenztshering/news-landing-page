/** @type {import('next').NextConfig} */
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  experimental: {
    appDir: false,
  },
};

module.exports = withPlugins([optimizedImages], nextConfig);
