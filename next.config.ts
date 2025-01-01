import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	// images: {
	// 	dangerouslyAllowSVG: true,
	// 	contentDispositionType: 'attachment',
	// 	contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	// },
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
