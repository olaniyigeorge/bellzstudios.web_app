/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // {
            //     protocol: "https",
            //     hostname: "cloudinary.com./...",
            // },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "http",
                hostname: "127.0.0.1",
            },
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "github.com",
            },
        ],
    },
};

export default nextConfig;



// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/
// })

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'md', 'mdx']
// })
