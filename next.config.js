const path = require('path')

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@yasp/interface-kit"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../")
  },
};
