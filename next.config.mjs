/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GITHUB_APP_CLIENT_ID: 'Iv1.107a99472fa449a7',
        GITHUB_APP_CLIENT_SECRET: '04ee2861ecbfb4c4368adf1d5c0db086a0aa2d3c',
        NEXTAUTH_SECRET: 'TKsyd+vSUjBRFltVQUoblrJn7LtEQTzG1fCIPdmA8Zs=',
    },
    //docker
    output: "standalone",
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
