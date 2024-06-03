/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const coreConfig = {
  images: {
    remotePatterns: [{ hostname: "utfs.io" }],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

import { withSentryConfig } from "@sentry/nextjs";

const config = withSentryConfig(
  coreConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "ftw-inc",
    project: "t3-gallery",
  },
  //@ts-ignore
  {
    widenClientFileUpload: true,

    transpileClientSDK: true,

    tunnelRoute: "/monitoring",

    hideSourceMaps: true,

    disableLogger: true,

    automaticVercelMonitors: true,
  },
);

export default config;
