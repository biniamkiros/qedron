/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// await import("./src/env.js");

// /** @type {import("next").NextConfig} */
// const config = {};

// export default config;


const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  output: "standalone",
  
  experimental: {
    instrumentationHook: true, 
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
