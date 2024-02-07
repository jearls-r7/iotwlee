/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/<your_repo_name>",
  images: {
    unoptimized: true,
  },
};
