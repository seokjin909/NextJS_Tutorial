/** @type {import('next').NextConfig} */

// const API_KEY = process.env.API_KEY;
const API_KEY = "04ec89b5a533eb577b68a8dedf4f7c85";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id", // source에 들어가는 변수명과 destination에 들어가는 변수명이 일치해야함!
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
