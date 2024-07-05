/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
        {
            // matching trpc API routes
            source: "/api/trpc/:path*",
            headers: [
              { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                // { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Request-Method", value: "*" },
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "*" },
            ]
        },
        {
          // matching all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
              // { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Request-Method", value: "*" },
              { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "*" },
          ]
      }
    ]
}
};

export default nextConfig;
