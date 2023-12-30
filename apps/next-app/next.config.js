/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true
    },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thietbinhietnv.com',
        port: '',
        pathname: '/storage/app/uploads/public/**',
      },
      {
        protocol: 'http',
        hostname: 'online.gov.vn',
        pathname: '/PublicImages/**',
      },
    ],
  },
};

module.exports = nextConfig;
