import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Logger from "./utils/Logger.js";
import helmet from "helmet";
// import morgan from "morgan";
import MorganMiddleware from "./middlewares/MorganMiddleware.js";
import Middlewares from "./middlewares/Middlewares.js"

dotenv.config()
const app = express()
const port = process.env.PORT
const environment = process.env.NODE_ENV
const mongodb_url = process.env.MONGODB_URL
const dbName = process.env.MONGODB_DB_NAME
const dbCollection = process.env.MONGODB_COLLECTION

// Middleware
app.use(helmet())
// app.use(morgan('combined'))
app.use(MorganMiddleware)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(Middlewares.errorHandler)

app.get('/users', (req, res) => {
    res.send('Users api url')
})

// Api alive route
app.get('/', (req, res) => {
    res.send('Api is Alive!')
})

// Place After all valid urls
app.use(Middlewares.notFound)

function isServerInDevelopmentMode() {
    const devEnv = 'development'
    const env = environment || devEnv
    const isDevelopment = env === devEnv
    if (isDevelopment) {
        Logger.warn('Server is in development mode!'.toUpperCase())
    }
}

app.listen(port, () => {
    isServerInDevelopmentMode()
    Logger.info(`server stated at http://localhost:${ port }`)
})
