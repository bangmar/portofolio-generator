import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	devIndicators: false,
	serverExternalPackages: ["puppeteer-core"],
};

export default nextConfig;
