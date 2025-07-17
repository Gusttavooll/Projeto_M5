/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...outras configurações
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
export default nextConfig;
