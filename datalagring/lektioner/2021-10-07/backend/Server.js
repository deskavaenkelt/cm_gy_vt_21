import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { MongoClient } from 'mongodb'

dotenv.config()
const app = express()
const port = process.env.PORT
let mongodb_url = 'mongodb://localhost:27017/'
let dbName = 'api'
let dbCollection = 'users'

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

function mongodbInsertOne(userObject) {
    MongoClient.connect(mongodb_url, function (err, db) {
        if (err) throw err
        let dbo = db.db(dbName)
        dbo.collection(dbCollection).insertOne(userObject, function (error, res) {
            if (error) throw error
            console.log('1 document inserted')
            db.close().then((message) => {console.log(message)})
        })
    })
}

function mongodbFindAll() {
    let response = []
    MongoClient.connect(mongodb_url, function (err, db) {
        if (err) throw err
        let dbo = db.db(dbName)
        dbo.collection(dbCollection).find({}).toArray(function(error, result) {
            if (error) throw error
            console.log(result)
            response = result
            db.close().then((message) => {console.log(message)})
        })
    })
    console.log(response)
    return response
}

async function mongodbFindAllAlt() {
    const client = await MongoClient.connect(mongodb_url).catch(err => {console.log(err)})
    if (!client) {
        return
    }

    try {
        const db = client.db(dbName)
        let collection = db.collection(dbCollection)
        let query = {}
        let res = await collection.find(query)
        console.log(res)
        return res
    } catch (err){
        console.log(err)
    } finally {
        client.close()
    }
}
// Har finns databas relaterat
let currentId = 14

let inMemoryDatabase = [
    {
        id: 10,
        name: 'Adam',
        age: 12,
        gender: 'Male',
    },
    {
        id: 11,
        name: 'Bengtina',
        age: 24,
        gender: 'Female',
    },
    {
        id: 12,
        name: 'Cecilia',
        age: 36,
        gender: 'Female',
    },
    {
        id: 13,
        name: 'David',
        age: 48,
        gender: 'Male',
    },
]

// Svarskommunikation från API
function messageUserNotFound() {
    return {
        status: 404,
        text: 'User not found!'
    }
}

function messageSuccess(message) {
    return {
        status: 200,
        text: message
    }
}

// Sök i databasen
function getUserIndex(id) {
    for (let i = 0; i < inMemoryDatabase.length; i++) {
        if (inMemoryDatabase[i].id === id) {
            return i
        }
    }
    return -1
}

// CRUD = Create Read Update Delete
function createNewUser(userData) {
    let userObject = {
        id: currentId,
        name: userData.name,
        age: userData.age,
        gender: userData.gender,
    }
    mongodbInsertOne(userObject)
}

function getAllUsers() {
    return mongodbFindAll()
}

function getUserById(id) {
    let index = getUserIndex(id)

    if (index === -1) {
        return messageUserNotFound()
    } else {
        return messageSuccess(inMemoryDatabase[index])
    }
}

function updateUser(userData) {
    const index = getUserIndex(Number(userData.id))

    if (index === -1) {
        return messageUserNotFound()
    } else {
        if (inMemoryDatabase[index].name !== userData.name) {
            inMemoryDatabase[index].name = userData.name;
        }
        if (inMemoryDatabase[index].age !== userData.age) {
            inMemoryDatabase[index].age = userData.age
        }
        if (inMemoryDatabase[index].gender !== userData.gender) {
            inMemoryDatabase[index].gender = userData.gender
        }

        return messageSuccess('User updated!')
    }
}

function deleteUser(index) {
    inMemoryDatabase.splice(index, 1)
}

function deleteUserById(id) {
    let index = getUserIndex(id)

    if (index === -1) {
        return messageUserNotFound()
    } else {
        deleteUser(index)
        return messageSuccess('User deleted!')
    }
}

// Kontrollerar att APIet lever
app.get('/', function (req, res) {
    res.send('API is Alive!')
})

// API CRUD
app.post('/users', function (req, res) {
    createNewUser(req.body)
    res.json('Successfully created a new user')
})

app.get('/users', function (req, res) {
    res.json(mongodbFindAllAlt())
})

app.get('/users/:id', function (req, res) {
    const id = Number(req.params.id)
    let response = getUserById(id)
    res.status(response.status).json(response.text)
})

app.put('/users', function (req, res,) {
    let response = updateUser(req.body)
    res.status(response.status).send(response.text)
})

app.delete('/users/:id', function (req, res) {
    let response = deleteUserById(Number(req.params.id))
    res.status(response.status).send(response.text)
});

// Startar servern
app.listen(port, () => {
    console.log(`The server is running on port ${ port }`)
})


