/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // --- Image Optimization ---
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // --- Compression (Brotli/Gzip handled by Next.js automatically) ---
  compress: true,

  // --- Powered-By header removal for security ---
  poweredByHeader: false,

  async redirects() {
    return [
      {
        source: "/sekilli-yazi/sekilli-nick-yazma",
        destination: "/sekilli-nick-yazma",
        permanent: true,
      },
    ];
  },

  // --- HTTP Security & Cache Headers ---
  async headers() {
    return [
      {
        // HSTS + security headers for all routes
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        // Aggressive caching for static assets (images, fonts, JS, CSS)
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2|ttf|otf|eot|js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
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
