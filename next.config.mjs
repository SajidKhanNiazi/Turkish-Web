/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Prevent Webpack from resolving the physical real path (Turkish-Web)
    // which conflicts with the workspace path (turkish-web)
    config.resolve.symlinks = false;
    return config;
  },
};

export default nextConfig;

