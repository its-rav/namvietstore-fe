/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thietbinhietnv.com',
        port: '',
        pathname: '/storage/app/uploads/public/**',
      },
    ],
  },
};

module.exports = nextConfig;
