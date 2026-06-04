import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "algebra-1-jumpstart",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
