const withExportImages = require('next-export-optimize-images')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = withExportImages(nextConfig)
