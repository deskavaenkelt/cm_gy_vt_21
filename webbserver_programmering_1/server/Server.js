// const express = require('express') old
import express from 'express' // new
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT

// app.listen(3001, () => {
//     console.log('Servern är igång på port 3001')
// })

app.get('/hello', (req, res) => {
    res.send(`Hello`)
})

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
    console.log(`Servern är igång på port ${port}`)
})
