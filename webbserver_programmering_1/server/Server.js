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
    res.send('Got a POST request =)')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

// PUT
app.put('/user/:name', function (req, res) {
    res.send(`Got a PUT request for user ${req.params.name}`)
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user =)')
})

// DELETE
app.delete('/user/:id', function (req, res) {
    res.send(`Got a DELETE request at /user with id=${req.params.id} =)`)
})

app.get('/add/:num1/:num2', (req, res) => {
    // let number1 = req.params.num1
    // let number2 = req.params.num2
    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 + number2
    res.send(`${number1} + ${number2} = ${sum}`)
})

app.listen(port, () => {
    console.log(`Servern är igång på port ${port}`)
})
