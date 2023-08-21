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

<h4>Rewirte</h4>
