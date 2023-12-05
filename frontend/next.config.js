/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    filesUrl: 'http://localhost:3333/tmp/',
    appUrl: 'http://localhost:3000/'
  },
  images: {
    domains: ['localhost'],
  },
  reactDevOverlay: false,
  suppressDeprecationWarnings: true,
  reactStrictMode: false,
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60,
    pagesBufferLength: 5,
  },
}

module.exports = nextConfig
