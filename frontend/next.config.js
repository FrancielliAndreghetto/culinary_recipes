/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    filesUrl: process.env.FILES_URL || 'http://localhost:3333/tmp/',
    appUrl: process.env.APP_URL || 'http://localhost:3000/'
  },
  images: {
    domains: ['localhost', 'vercel.app', 'your-production-domain.com'],
  },
  reactStrictMode: true, // Habilitar modo estrito
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 15, // Ajuste do tempo de inatividade para 15 minutos
    pagesBufferLength: 5,
  },
  typescript: {
    ignoreBuildErrors: true, // Desative a ignorância de erros de tipo
  },
}

module.exports = nextConfig
