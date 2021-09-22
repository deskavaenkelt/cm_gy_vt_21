import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()
const port = process.env.PORT

// app.use(cors({
//     origin: '*',
//     methods: ['GET','POST','DELETE','PUT']
// }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

let currentId = 14;

let userDatabase = [
    {
        id: 10,
        name: 'Adam',
        age: 12,
        gender: 'Male',
    },
    {
        id: 11,
        name: 'Bengtina',
        age: 23,
        gender: 'Female',
    },
    {
        id: 12,
        name: 'Cecar',
        age: 1200,
        gender: 'Male',
    },
    {
        id: 13,
        name: 'Dana',
        age: 25,
        gender: 'Female',
    },
]

function returnUserNames() {
    let text = '<br>'

    userDatabase.forEach(item => {
        text += item.name + ' id=' + item.id + ', <br>'
    });

    return text
}

// Tar endast emot nummer!
function getUserById(id) {
    let text = `User with id=${ id } `

    for (const item of userDatabase) {
        if (id === item.id) {
            text += `is ${ item.name } with the age of ${ item.age } ande gender=${ item.gender }`
            return text
        }
    }

    text += ' dont exist in the database'

    return text
}

function changeName(id, newName) {
    let text = `User with id=${ id } `;

    for (const item of userDatabase) {
        if (id === item.id) {
            text += `has changed name from ${ item.name } `
            item.name = newName
            text += `to ${ item.name }`
            return text
        }
    }

    text += 'dont exist in the database'

    return text
}

function deleteUserById(id) {
    let text = `User with id=${ id } `

    for (let i = 0; i < userDatabase.length; i++) {
        if (id === userDatabase[i].id) {
            text += `was deleted from database!`
            userDatabase.splice(i, 1);
            return text
        }
    }

    text += 'dont exist in the database'

    return text
}



app.get('/', function (req, res) {
    res.send('API is alive!')
})

app.get('/users', (req, res) => {
    res.status(200).json(userDatabase)
})

app.post('/users', (req, res) => {
    console.log(req.body)
    let newUser = req.body
    newUser.id = currentId
    currentId += 1
    userDatabase.push(newUser)
    // res.status(200).send(`Successfully created user ${newUser.user}`)
    res.status(200).json(userDatabase)
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    let returnText = getUserById(id)
    res.send(returnText)
})

app.put('/users/:id/:newName', function (req, res) {
    const id = Number(req.params.id)
    const newName = req.params.newName
    const returnText = changeName(id, newName);
    res.send(returnText)
})

app.delete('/users/:id', function (req, res) {
    const id = Number(req.params.id)
    const returnText = deleteUserById(id);
    res.send(returnText)
})

app.listen(port, () => {
    console.log(`The server is live on port: ${ port }`)
})

