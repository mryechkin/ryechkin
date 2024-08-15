/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    outputFileTracingIncludes: {
      '/search': ['./src/data/blog/*'],
    },
  },
};
