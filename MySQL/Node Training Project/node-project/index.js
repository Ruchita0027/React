const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('API Called')
})

app.get('/users', (req, res) => {
    const users = {
        name: 'Ruchi',
        age: 21
    }
    res.send(users)
})

app.listen(port, () => {
    console.log(`APP is Running on ${port}`)
})