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
      {
        hostname: 'f4.bcbits.com',
      },
      {
        hostname: '*.bcbits.com',
      },
    ],
  },
};

export default nextConfig;
