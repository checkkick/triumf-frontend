/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   },
   output: 'standalone',
   images: {
      remotePatterns: [
         {
            hostname: '*',
         },
      ],
   },
}

module.exports = nextConfig
