let path = require("path");

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});
		config.resolve.alias = {
			...config.resolve.alias,
			utils: path.resolve(__dirname, "utils/"),
			components: path.resolve(__dirname, "components/"),
		};

		return config;
	},
	basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
	assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
};

module.exports = nextConfig;
