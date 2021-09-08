import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

let currentId = 14

function incrementCurrentIdByOne() {
    currentId += 1
}

function createNewUser(userData) {
    let user = {
        id: currentId,
        name: userData.name,
        age: userData.age,
        gender: userData.gender,
    }
    incrementCurrentIdByOne()
    inMemoryDatabase.push(user)
}

function updateUser(userData) {
    // let response = {
    //     status: 404,
    //     text: 'User not found!'
    // }

    for (let i = 0; i < inMemoryDatabase.length; i++) {
        if (inMemoryDatabase[i].id === userData.id) {
            if (inMemoryDatabase[i].name !== userData.name) {
                inMemoryDatabase[i].name = userData.name
            }

            if (inMemoryDatabase[i].age !== userData.age) {
                inMemoryDatabase[i].age = userData.age
            }

            if (inMemoryDatabase[i].gender !== userData.gender) {
                inMemoryDatabase[i].gender = userData.gender
            }
            // response.status = 200
            // response.text = 'User updated!'

            return {
                status: 200,
                text: 'User updated!'
            }
            // return response
        }
    }
    // return 'User not found!'
    return {
        status: 404,
        text: 'User not found!'
    }
    // return response
}

function getUserIndex(id) {
    for (let i = 0; i < inMemoryDatabase.length; i++) {
        if (inMemoryDatabase[i].id === id) {
            return i
        }
    }
    return -1
}

function getUserById(id) {
    let index = getUserIndex(id)

    if (index === -1) {
        return {
            status: 404,
            text: 'User not found!'
        };
    } else {
        return {
            status: 200,
            text: inMemoryDatabase[index]
        }
    }
}

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

app.get('/', function (req, res) {
    res.send('API is Alive!')
})

app.get('/users', function (req, res) {
    res.json(inMemoryDatabase)
})

app.get('/users/:id', function (req, res) {
    const id = Number(req.params.id)
    let response = getUserById(id)
    res.status(response.status).json(response.text)
})

app.post('/users', function (req, res) {
    createNewUser(req.body)
    res.json('Successfully created a new user')
})

app.put('/users', function (req, res,) {
    let response = updateUser(req.body)
    // console.log(response.status, response.text)
    // res.send(response)
    res.status(response.status).send(response.text)
});

app.listen(port, () => {
    console.log(`The server is running on port ${ port }`)
})
