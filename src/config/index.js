export default {
  BASE_URL: process.env.GATSBY_BASE_URL || 'http://127.0.0.1:8001',
  isServer: typeof window === 'undefined',
  environment: process.env.NODE_ENV || 'development',
};
