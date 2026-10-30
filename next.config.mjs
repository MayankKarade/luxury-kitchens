/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "www.caliwoodgh.com" }],
      destination: "https://caliwoodgh.com/:path*",
      permanent: true,
    }];
  },
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
        hostname: "admin.caliwoodgh.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
