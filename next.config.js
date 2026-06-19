const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
	isProd: process.env.NODE_ENV === "production",
});
const isProd = process.env.NODE_ENV === 'production';
module.exports = withBundleAnalyzer({
	output : "export",
	images: {
		unoptimized: true,
	},
	basePath: isProd ? '/hosseinhunta' : '',
  assetPrefix: isProd ? '/hosseinhunta/' : '',
});
