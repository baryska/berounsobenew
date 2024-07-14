/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig, 
  optimizeFonts: false,
  images: {
    domains: ['infinite-beyond-27081-4bb7e61c8ac8.herokuapp.com'],
  },
}
