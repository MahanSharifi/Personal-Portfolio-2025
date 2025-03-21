/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  basePath: isGithubPages ? '/personal-port' : '',
  assetPrefix: isGithubPages ? '/personal-port/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
