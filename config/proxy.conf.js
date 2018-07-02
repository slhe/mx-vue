module.exports = {
	'/ccmp': {
		target: 'http://122.113.5.205:8888',
		changeOrigin: true,
		pathRewrite: {
			'^/ccmp': '/ccmp'
		}
	}
}
