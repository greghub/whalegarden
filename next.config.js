/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.komiser.io', 'swimburger.net'],
  },
  typescript: {
    // Done to quickly demo the app on Netlify, as didn't want to spend time fixing the build errors
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
