/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  // experimental: {
  //   redirects() {
  //     const redirects = [
  //       {
  //         // Redirect root link with trailing slash to non-trailing slash, avoids 404 - See https://github.com/vercel/next.js/discussions/10651#discussioncomment-8270
  //         source: '/:locale/',
  //         destination: '/:locale',
  //         permanent: process.env.NEXT_PUBLIC_APP_STAGE !== 'development', // Do not use permanent redirect locally to avoid browser caching when working on it
  //       },
  //       {
  //         // Redirect link with trailing slash to non-trailing slash (any depth), avoids 404 - See https://github.com/vercel/next.js/discussions/10651#discussioncomment-8270
  //         source: '/:locale/:path*/',
  //         destination: '/:locale/:path*',
  //         permanent: true
  //       },
  //     ];
  //
  //     return redirects;
  //   },
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/",
  //     },
  //     {
  //       source: "/quizzes",
  //       destination: "/quizzes",
  //     },
  //     // {
  //     //   source: "/quizzes/:quizId",
  //     //   destination: "/quizes/:quizId",
  //     // },
  //   ];
  // },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["img.shields.io", "picsum.photos", "avatars.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
        port: "",
        pathname: "/badge/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/400/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: "/_next/image",
    loader: "default",
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: ["image/webp"],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // TEST Deploy
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  distDir: ".next",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `
      @import "./_color.scss";
       @import "./_utils.scss";
      `,
  },
  moduleNameMapper: {
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@api/(.*)$": "<rootDir>/api/$1",
    "^@apis/(.*)$": "<rootDir>/apis/$1",
    "^@constants/(.*)$": "<rootDir>/constants/$1",
    "^@libs/(.*)$": "<rootDir>/libs/$1",
    "^@store/(.*)$": "<rootDir>/store/$1",
    "^@utils/(.*)$": "<rootDir>/utils/$1",
    "^@hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@styles/(.*)$": "<rootDir>/styles/$1",
    "^@interfaces/(.*)$": "<rootDir>/interfaces/$1",
    "^@images/(.*)$": "<rootDir>/images/$1",
    "^@assets/(.*)$": "<rootDir>/assets/$1",
    "^@containers/(.*)$": "<rootDir>/containers/$1",
  },
  trailingSlash: true,
  swcMinify: true,
};
