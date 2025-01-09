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
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "example.com",
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

