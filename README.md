# NextJS Introduction

<h4>Redirect</h4>
<p>
# next.config.js
<b>redirect를 활용해서 한 페이지에서 다른 페이지로 이동하게 할 수도 있고, 아예 다른 URL의 웹 사이트로 이동 가능</b>
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        1. source: "/contact",    2. source : "/old-blog/:path*",
        1. destination: "/form",  2. destination : "/new-blog/:path*",
        1. permanent: false,      2. permanent: false,
      },
    ];
  },
};
</p>

<h4>Rewrite</h4>
<p>
# next.config.js
<b>rewrite를 활용해서 클라이언트의 요청을 서버에서 다른 경로 또는 파일로 변경하여 처리하는 것</b>
async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, // 입력되는 API Key 같은 리소스들을 숨기거나 네트워크에 표출하고 싶지 않을 때 사용
      },
    ];
  },
</p>

# Server Side Rendering

<h4>getServerSideProps</h4>
<p>
page에서 서버 측 랜더링 함수인 getServerSideProps함수를 export하는 경우 Next.js는 getServerSideProps에서 반환된 데이터를 사용하여 각 request에서 이 페이지를 pre-render합니다. getServerSideProps는 서버 측에서만 실행되며 브라우저에서는 실행되지 않습니다.
https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
</p>
