/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    filesUrl: 'http://localhost:3333/tmp/',
    appUrl: 'http://localhost:3000/'
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
