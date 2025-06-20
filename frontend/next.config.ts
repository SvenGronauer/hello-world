import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Recommended: this will reduce output
  // Docker image size by 80%+
  output: 'standalone',
  // Nginx will do gzip compression. We disable
  // compression here so we can prevent buffering
  // streaming responses
  compress: false,
};

export default nextConfig;
