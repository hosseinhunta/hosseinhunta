const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
	isProd: process.env.NODE_ENV === "production",
});
module.exports = withBundleAnalyzer({
	output : "export",
	images: {
		unoptimized: true,
	},
	basePath: process.env.NODE_ENV ? '/hosseinhunta' : '',
	assetPrefix: process.env.NODE_ENV ? '/hosseinhunta/' : '',
});
