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
function creatACollection() {
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
creatACollection()
