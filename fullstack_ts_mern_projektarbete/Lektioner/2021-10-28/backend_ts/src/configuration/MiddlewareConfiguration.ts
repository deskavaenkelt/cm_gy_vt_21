import cors from 'cors'
import express from 'express'
import MorganMiddleware from '../middlewares/MorganMiddleware'
import ExpressApp from './ExpressApp'

const frontendPort = 3000

const allowedOrigins = [`http://localhost:${ frontendPort }`]
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE']

const options: cors.CorsOptions = {
	origin: allowedOrigins,
	methods: allowedMethods
}

ExpressApp.use(cors(options))
ExpressApp.use(express.urlencoded({extended: true}))
ExpressApp.use(express.json())
ExpressApp.use(MorganMiddleware)
