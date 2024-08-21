/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
        protocol: "https",
      },
      {
        hostname: "loremflickr.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
