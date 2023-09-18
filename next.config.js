const { withNx, composePlugins } = require('@nx/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: false,
  compiler: {
    styledComponents: true,
  },
  env: {
    // FIXME: This is a temporary solution
    CRISP_WEBSITE_ID: '3205626f-702b-4cd4-a6f6-ea775328492a',
  },
  optimizeFonts: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv|pdf)$/,
      use: 'file-loader',
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        experimentalWatchApi: true,
        onlyCompileBundledFiles: true,
      },
    });
    config.externals.push({
      knex: 'commonjs knex',
    });
    return {
      ...config,
    };
  },
  experimental: {
    appDir: true,
    esmExternals: 'loose',
  },
  nx: {
    // This thing will break the existing next Images
    svgr: false,
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
