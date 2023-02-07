/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		REACT_APP_URL: process.env.REACT_APP_URL,
		REACT_APP_ENV: process.env.REACT_APP_ENV,
		REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://62.217.183.229/api:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `http://62.217.183.229/api/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
