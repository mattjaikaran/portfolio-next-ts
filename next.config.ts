import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'dummyimage.com',
      },
      {
        hostname: 'live.staticflickr.com',
      },
    ],
  },
};

export default nextConfig;
