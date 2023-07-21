/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  env: {
    PROJECT_ID: process.env.PROJECT_ID,
  },
};

module.exports = nextConfig;
