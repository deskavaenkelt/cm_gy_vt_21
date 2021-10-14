import mongoose from "mongoose";
import Logger from "../utils/Logger.js";
import dotenv from "dotenv";

// .env
dotenv.config()
const port = process.env.PORT
const mongodb_url = process.env.MONGODB_URL
const dbName = process.env.MONGODB_DB_NAME

const connectToDatabase = async () => {
    // mongoose
    const uri = mongodb_url + dbName
    /*const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    }*/

    try {
        // await mongoose.connect(uri, options)
        await mongoose.connect(uri)
        Logger.info('Successfully connected to the Database')
    } catch (error) {
        Logger.error('Error while trying to connect to Database'.toUpperCase(), error)
        process.exit()
    }
}

const connectToPort = (app) => {
    // start the Express server
    app.listen(port, () => {
        Logger.http(`server started at http://localhost:${ port }`);
        if (process.env.NODE_ENV === 'development') {
            Logger.warn('Server running in development mode!'.toUpperCase())
        }
    });
}

export default {
    connectToDatabase,
    connectToPort
}
