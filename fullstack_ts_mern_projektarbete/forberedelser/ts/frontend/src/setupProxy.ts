import { createProxyMiddleware } from 'http-proxy-middleware'

const EXPRESS_HOST = process.env.REACT_APP_SERVER_URL || 'http://localhost'
const EXPRESS_PORT = process.env.REACT_APP_SERVER_PORT || 3001

const url = `${ EXPRESS_HOST }:${ EXPRESS_PORT }`

module.exports = function (app: any) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: url
		})
	)
}
