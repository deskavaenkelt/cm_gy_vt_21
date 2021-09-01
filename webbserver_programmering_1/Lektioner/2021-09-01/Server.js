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
