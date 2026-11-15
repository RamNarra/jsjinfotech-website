import type { NextConfig } from 'next';

// Static export for Cloudflare Pages. Security headers live in public/_headers
// (headers() does not run on a static export).
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
