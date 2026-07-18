/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Allows all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "kitchen.netsaarthi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admin.caliwoodgh.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
