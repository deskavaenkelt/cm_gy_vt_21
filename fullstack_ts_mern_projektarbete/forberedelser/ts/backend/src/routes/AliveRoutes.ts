import express from 'express'
import StatusCode from '../configuration/StatusCode'

const url = '/'
const routes = (app: express.Application) => {
	app.get(url, (req, res) => {
		res.status(StatusCode.OK).send('API is Alive with TypeScript!')
	})
}

export default {
	routes
}
