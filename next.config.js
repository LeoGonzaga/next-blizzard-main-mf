const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        remotes: getRemotes(isServer),
        filename: "static/chunks/remoteEntry.js",
      })
    );

    return config;
  },
};

function getRemotes(isServer) {
  const location = isServer ? "ssr" : "chunks";
  const url = process.env.DEVELOPMENT
    ? "http://localhost:3001"
    : "https://blizzard-components-mf.vercel.app";

  console.log("aaaaaaaaaa", url);
  return {
    components: `components@${url}/_next/static/${location}/remoteEntry.js`,
  };
}

module.exports = nextConfig;
