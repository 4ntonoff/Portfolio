import type { NextConfig } from "next";

const repoName = 'portfolio-main';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: `/${repoName}`,
  trailingSlash: true,
};

export default nextConfig;
