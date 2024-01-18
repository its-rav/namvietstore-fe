/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
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
      {
        protocol: 'http',
        hostname: '157.245.145.39',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
