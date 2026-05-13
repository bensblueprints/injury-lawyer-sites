/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ["@injury/ui", "@injury/schema"],
  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
