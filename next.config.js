/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    qualities: [75, 90],
  },
  outputFileTracingIncludes: {
    '/search': ['./src/data/blog/*'],
  },
};
