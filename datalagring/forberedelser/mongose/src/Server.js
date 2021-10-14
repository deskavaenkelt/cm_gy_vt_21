import express from 'express'
import cors from 'cors'
import helmet from "helmet";
import morganMiddleware from "./middlewares/MorganMiddleware.js";
import middlewares from "./middlewares/Middlewares.js"
import Configuration from "./configuration/configuration.js"
import UserRoutes from "./routes/UserRoutes.js";

const app = express();

// Middleware

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(morganMiddleware)
app.use(helmet())
app.use(express.urlencoded({ extended: true })) // Allow nested Objects
app.use(express.json())                         // Allow JSON

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("API is Alive!");
});

UserRoutes.routes(app)

app.use(middlewares.notFound)   // Block ever other route
app.use(middlewares.errorHandler)

Configuration.connectToDatabase().then()
Configuration.connectToPort(app)


