const path = require('path')

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@yasp/interface-kit", "@yasp/models"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../")
  },
};
