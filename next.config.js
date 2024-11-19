/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig, 
  optimizeFonts: false,
  images: {
    domains: ['cdn.sanity.io'], 
  },
}
