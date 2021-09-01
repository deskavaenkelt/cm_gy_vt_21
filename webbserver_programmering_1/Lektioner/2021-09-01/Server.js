// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT

// GET = används när vi vill hämta information
app.get('/', function (req, res) {
    res.send(`Välkommen till mitt API`)
})

app.get('/hello', (req, response) => {
    response.send(`Hello There`)
})

// POST = när vi vill skicka information till servern
app.post('/', (req, res) => {
    res.send('Got an POST request')
})

app.post('/name/:input', (req, res) => {
    let input = req.params.input
    res.send(`Your name is: ${input}`)
})

app.post('/addition/:num1/:num2', (req, res) => {
    // Tolkas som strängar
    // let number1 = req.params.num1
    // let number2 = req.params.num2

    // Tolka som nummer istället
    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 + number2
    res.send(`Summan av talen ${number1} + ${number2} = ${sum}`)
})

app.post('/subtraktion/:num1/:num2', (req, res) => {
    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 - number2
    res.send(`Subtraction av talen ${number1} - ${number2} = ${sum}`)
})

app.post('/multiplikation/:num1/:num2', (req, res) => {
    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 * number2
    res.send(`Multiplikation av talen ${number1} * ${number2} = ${sum}`)
})

app.post('/division/:num1/:num2', (req, res) => {
    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)

    if (number2 === 0) {
        res.send(`Division av 0 är inte tillåtet`);
    } else {
        let sum = number1 / number2;
        res.send(`Division av talen ${number1} / ${number2} = ${sum}`)
    }
})

// PUT = Ändra på något som redan finns
app.put('/', (req, res) => {
    res.send('Got an PUT request')
})

// DELETE = Radera något på servern
app.delete('/', (req, res) => {
    res.send('Got an DELETE request')
})

// Alltid sist i dokumentet
app.listen(port, () => {
    console.log(`Servern är igång på port ${port}`)
})


// CRUD
// Create   =>  POST
// Read     =>  GET
// Update   =>  PUT
// Delete   =>  DELETE
