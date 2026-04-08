/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/sekilli-yazi/sekilli-nick-yazma",
        destination: "/sekilli-nick-yazma",
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    // Prevent Webpack from resolving the physical real path (Turkish-Web)
    // which conflicts with the workspace path (turkish-web)
    config.resolve.symlinks = false;
    return config;
  },
};

export default nextConfig;

