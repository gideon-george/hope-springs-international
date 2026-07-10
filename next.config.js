/** @type {import('next').NextConfig} */

// Deployed to GitHub Pages as a project site:
// https://gideon-george.github.io/hope-springs-international/
// If you later move to a custom domain (or the root user site), set BASE_PATH to ''.
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/hope-springs-international' : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    // REQUIRED for static export / GitHub Pages: the Next.js image optimizer
    // is a server feature and does not run on a static host.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
