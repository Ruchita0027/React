const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const mongodb = require('mongodb');

const { MongoClient, ServerApiVersion } = require('mongodb');

const password = encodeURIComponent('ruchiiiii27@');

const uri =`mongodb+srv://Ruchita:${password}@cluster0.m35oi.mongodb.net/Training?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// const mysql = require('mysql');0

//  var con = mysql.createConnection({
//      host : "127.0.0.1",
//      user : "root",
//      password : "root",
//      database : "training"
//  });

app.use(cors())
//app.use(bodyParser.json())
const port = 3001;

// app.get('/',(req, res) => {
//     res.send('API called')
// }) 

app.get('/users', async (req, res) => {
    const collection = client.db("Training").collection("users");
    //const result = await collection.find({age : {$gt: 21}}).toArray()

    //const result = await collection.find({"$and": [{age : {$gt: 21}}, {age : {$lt: 23}}]}).toArray()
     
    // const user = {username:'Akki', age:22}
     //const result = await collection.insertOne(user);
     //console.log(result)
     //res.send(result)

    // const users = [
    //     {username:'Ruchi', age:22},
    //     {username:'Akki', age:23},
    //     {username:'Ramya', age:24},
    //     {username:'Yogita', age:21}
    // ]
    // const result = await collection.insertMany(users);
    // console.log(result)
    // res.send(result)

    // const query = {username:'kunal'}
    // const result = await collection.deleteOne(query);

    // const query = {age:{$gt:22}}
    // const result = await collection.deleteMany(query);

    const query = {age:{$gte:20}}
    const newValues={$set: {address:'India'}}
    const result = await collection.updateMany(query, newValues);

    console.log(result)
    res.send(result)
}) 

// app.get('/data', (req, res) => {
//     const dt = [
//         { key: '1', value: 'asd' },
//         { key: '2', value: 'asd234' },
//         { key: '3', value: 'as234d' }
//     ]
//     res.send(dt)
// })

async function run() {
    

 }
    
app.listen(port, async ()  => {
    run().catch(console.dir);

    console.log(`App is Running on ${port}`)

    client.connect(async err => {

        console.log(err);
        console.log("Connected")
    });
    
})


    //  client.connect(err => {
    //     console.log("Database Connected");

    //     const collection = client.db("Training").collection("users");

    //     const result = collection.find({});

    //     console.log(result);

    //     // perform actions on the collection object
    //     client.close();
    //   });

    // con.connect(function(err) {
    //     if(err) throw err;
    //     console.log("Connected");
    // });
