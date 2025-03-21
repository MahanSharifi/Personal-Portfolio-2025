/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  basePath: '/personal-port',
  assetPrefix: '/personal-port/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
