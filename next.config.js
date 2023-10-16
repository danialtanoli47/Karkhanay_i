/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },

  env: {
    NEXTAUTH_URL: "http://localhost:3000", // Replace with your Next.js app URL
    SESSION_COOKIE_LIFETIME: 60 * 60 * 24 * 30, // Set the session cookie lifetime to 30 days
  },
};

module.exports = nextConfig;
