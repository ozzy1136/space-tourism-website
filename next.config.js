/** @type {import('next').NextConfig} */
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
		config.resolve.alias.utils = path.resolve(__dirname, "utils/");
		config.resolve.alias.components = path.resolve(
			__dirname,
			"components/"
		);

		return config;
	},
};

module.exports = nextConfig;
