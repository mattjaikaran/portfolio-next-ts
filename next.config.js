/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'live.staticflickr.com',
      'f4.bcbits.com',
      'dummyimage.com',
    ],
  },
};

module.exports = nextConfig;
