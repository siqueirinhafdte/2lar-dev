/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bolsaimovel.com.br', 'doislar.s3.us-west-1.wasabisys.com', 'flagcdn.com']
  },
  env: {
    AWS_REGION: process.env.AWS_REGION,
    AWS_POOL_ID: process.env.AWS_POOL_ID,
    AWS_CLIENT_ID: process.env.AWS_CLIENT_ID,
    CRYPTO_SECRET_KEY: process.env.CRYPTO_SECRET_KEY
  }
};

module.exports = nextConfig;
