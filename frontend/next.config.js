/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    filesUrl: 'http://localhost:3333/tmp/'
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
