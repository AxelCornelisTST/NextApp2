/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_SECRET: 'TKsyd+vSUjBRFltVQUoblrJn7LtEQTzG1fCIPdmA8Zs=',
    },
    //docker
    output: "standalone",
    // typescript: {
    //     // !! WARN !!
    //     // Dangerously allow production builds to successfully complete even if
    //     // your project has type errors.
    //     // !! WARN !!
    //     ignoreBuildErrors: true,
    // },
};

export default nextConfig;
