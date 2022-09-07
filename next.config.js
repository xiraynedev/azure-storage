/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    storageAccountName: process.env.AZURE_STORAGE_ACCOUNT_NAME,
    storageAccessKey: process.env.AZURE_STORAGE_ACCESS_KEY,
  },
};

module.exports = nextConfig;

