/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },

  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  images: {
    domains: [
      "127.0.0.1",
      "directus-production-1e20.up.railway.app",
      "images.pexels.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
