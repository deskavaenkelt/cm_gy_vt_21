const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/mytestdb";
const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close().then(r => console.log(r));
// });

// Creating a Collection
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     let dbo = db.db("mydb");
//     dbo.createCollection("customers", function(error, res) {
//         if (error) throw error;
//         console.log("Collection created!");
//         db.close();
//     });
// });

// Insert
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     let dbo = db.db("mydb");
//     let myobj = { name: "Company Inc", address: "Highway 37" };
//     dbo.collection("customers").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });

// Insert Multiple Documents
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     let dbo = db.db("mydb");
//     let myobj = [
//         { name: 'John', address: 'Highway 71'},
//         { name: 'Peter', address: 'Lowstreet 4'},
//         { name: 'Amy', address: 'Apple st 652'},
//         { name: 'Hannah', address: 'Mountain 21'},
//         { name: 'Michael', address: 'Valley 345'},
//         { name: 'Sandy', address: 'Ocean blvd 2'},
//         { name: 'Betty', address: 'Green Grass 1'},
//         { name: 'Richard', address: 'Sky st 331'},
//         { name: 'Susan', address: 'One way 98'},
//         { name: 'Vicky', address: 'Yellow Garden 2'},
//         { name: 'Ben', address: 'Park Lane 38'},
//         { name: 'William', address: 'Central st 954'},
//         { name: 'Chuck', address: 'Main Road 989'},
//         { name: 'Viola', address: 'Sideway 1633'}
//     ];
//     dbo.collection("customers").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount);
//         db.close();
//     });
// });

// Find one
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     let dbo = db.db("mydb");
//     dbo.collection("customers").findOne({}, function(err, result) {
//         if (err) throw err;
//         console.log(result.name);
//         db.close();
//     });
// });

// Find All

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     let dbo = db.db("mydb");
//     dbo.collection("customers").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

// Find some
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("mydb");
    dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
