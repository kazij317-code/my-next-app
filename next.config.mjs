/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // (4)st
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 's3.amazonaws.com',
  //       port: '',
  //       pathname: '/my-bucket/**',
  //       search: '',
  //     },
  //   ],
  // },
  // (4)en
  // (5)st commit (4)https://images.unsplash.com/photo-1773394472792-a3a2f9a85d2e 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },
      // (7)st https://i.ibb.co/Xp3sL2h/1.png
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/Xp3sL2h/**',
        search: '',
      },
      // (7)en then (start: 40_9) in page.jsx file in users folder
    ],
  },
  // (5)en then in page.jsx file in about folder

};

export default nextConfig;
