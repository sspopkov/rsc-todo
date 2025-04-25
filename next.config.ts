import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.watchOptions = {
                ignored: ['**/todos.json'],
            };
        }
        return config;
    },
};

export default nextConfig;
