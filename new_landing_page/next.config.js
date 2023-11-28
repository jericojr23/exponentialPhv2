/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
          port: "",
          pathname: "**",
        },
      ],
  },
},
};

module.exports = nextConfig;
