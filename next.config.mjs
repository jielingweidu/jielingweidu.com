/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "", // Only needed if not using a custom domain
  images: {
    unoptimized: true, // For static export
  },
};

export default nextConfig;
