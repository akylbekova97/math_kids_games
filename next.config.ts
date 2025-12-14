import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '212.112.98.206',
        port: '9000',
        pathname: '/development/**',
      },
    ],
  },
}

export default nextConfig
