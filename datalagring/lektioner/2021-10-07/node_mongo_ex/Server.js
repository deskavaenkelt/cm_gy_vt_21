let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/'

// Steg 1
function connectToDb() {
    let url0 = 'mongodb://localhost:27017/mydb'
    MongoClient.connect(url0, function (err, db) {
        if (err) throw err
        console.log('DataBeast created')
    })
}

// connectToDb()

// Steg 2
function createACollection() {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err

        let dbo = db.db("mydb");
        dbo.createCollection('customers', function (error, res) {
            if (error) throw error
            console.log('Collection "customers" Created')
            db.close()
        })
    })
}

// createACollection()

// Steg 3
function insertOne() {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        let dbo = db.db("mydb")
        // let myObject = { name: 'Company Inc.', address: 'Highway 37' }
        let myObject = { name: 'Evil Inc.', address: 'Highway in Hell' }
        dbo.collection('customers').insertOne(myObject, function (error, res) {
            if (error) throw error
            console.log('1 document inserted')
            db.close().then((message) => {console.log(message)})
        })
    })
}
// insertOne()

const collection = 'customers'
const dbName = 'mydb'
function findOne() {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        let dbo = db.db(dbName)
        dbo.collection(collection).findOne({}, function (error, result){
            if (error) throw error
            console.log(result.name)
            db.close()
        })
    })
}
// findOne()

function findAll() {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        let dbo = db.db(dbName)
        dbo.collection(collection).find({}).toArray(function(error, result) {
            if (error) throw error
            console.log(result)
            db.close()
        })
    })
}
findAll()




