import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		staleTimes: {
			dynamic: 0,
		},
	},
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
