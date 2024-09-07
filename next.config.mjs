/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx'],

  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
