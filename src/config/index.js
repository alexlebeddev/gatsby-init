const environment = process.env.NODE_ENV || 'development';

export default {
  BASE_URL: 'http://127.0.0.1:8001',
  isServer: typeof window === 'undefined',
  environment,
};
