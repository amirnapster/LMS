// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
//const { withSentryConfig } = require('@sentry/nextjs')

const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

/**
 * @type {import('next').next}
 */

const next = {
  output: 'standalone',
  i18n: {
    locales: ['en-US', 'fa-IR'],
    defaultLocale: 'fa-IR',
    localeDetection: false,
  },
  // experimental: {
  //   workerThreads: false,
  //   cpus: 1,
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'namatek.com',
        port: '443',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
  // assetPrefix: isProd ? 'https://scdn.rasm.io' : undefined,
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `
@use "styles/vars" as *;
@use "styles/mixins" as *;`,
  },
  webpack: (
    config
    // { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    const configCopy = { ...config }
    configCopy.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    // configCopy.plugins.push(
    //   new CopyPlugin({
    //     patterns: [
    //       {
    //         from: './page',
    //         to: './page',
    //       },
    //     ],
    //   })
    // )

    return configCopy
  },
}

// module.exports = withBundleAnalyzer({ ...next })
module.exports = { ...next }

// module.exports = withSentryConfig(
//   module.exports,
//   { silent: true },
//   { hideSourcemaps: true }
// )
