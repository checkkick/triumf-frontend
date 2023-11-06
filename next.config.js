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
            hostname: process.env.NEXT_PUBLIC_DOMAIN,
         },
      ],
   },
}

module.exports = nextConfig
