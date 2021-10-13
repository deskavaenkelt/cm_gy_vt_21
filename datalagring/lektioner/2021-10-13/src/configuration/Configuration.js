import Logger from "../utils/Logger.js"
import dotenv from "dotenv"

dotenv.config()
const port = process.env.PORT
const environment = process.env.NODE_ENV

function isServerInDevelopmentMode() {
    const devEnv = 'development'
    const env = environment || devEnv
    const isDevelopment = env === devEnv
    if (isDevelopment) {
        Logger.warn('Server is in development mode!'.toUpperCase())
    }
}

const connectToPort = (app) => {
    app.listen(port, () => {
        isServerInDevelopmentMode()
        Logger.info(`server stated at http://localhost:${ port }`)
    })
}

export default {
    connectToPort
}
