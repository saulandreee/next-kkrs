/** @type {import('next').NextConfig} */
const nextConfig = {
  ppr: true,
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
      {
        hostname: "images.ctfassets.net",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
