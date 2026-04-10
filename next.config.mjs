// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//         domains: ['firebasestorage.googleapis.com']
//     }
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};
export default nextConfig;
