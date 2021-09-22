import express from "express";
import cors from 'cors';
import morganMiddleware from './config/morganMiddleware'
import { createNewUser, deleteUserById, getAllUsers, getUserById, updateUser } from './controllers/db'
import { CreateUser } from './models/users'
import Logger from './utils/logger'
const app = express();
const port = 3001; // default port to listen

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
// const allowedOrigins = ['http://localhost:3000'];
const allowedOrigins = ['*'];
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: allowedMethods
};

app.use(cors(options))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(morganMiddleware)

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "API is Alive with TypeScript!" );
} );

// API CRUD
app.post('/users', (req, res) => {
    let data: CreateUser
    data = req.body
    createNewUser(data)
    res.json('Successfully created a new user')
})

app.get('/users', (req, res) => {
    res.json(getAllUsers())
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const response = getUserById(id)
    res.status(response.status).json(response.text)
})

app.put('/users', (req, res) => {
    const response = updateUser(req.body)
    res.status(response.status).send(response.text)
})

app.delete('/users/:id', (req, res) => {
    const response = deleteUserById(Number(req.params.id))
    res.status(response.status).send(response.text)
});

// Startar servern
app.listen( port, () => {
    // Logger.error("This is an error log");
    // Logger.warn("This is a warn log");
    // Logger.info("This is a info log");
    // Logger.http("This is a http log");
    // Logger.debug("This is a debug log");
    // tslint:disable-next-line:no-console
    // console.log( `server started at http://localhost:${ port }` );
    Logger.info( `server started at http://localhost:${ port }` );
} );
