const express = require('express');
const cors = require('cors')

let app = express()
app.use(cors())
const HOST = 5000

app.get('/workers', (req, res) => {
    res.json([
    { name: 'Sam', id: 1, age: 27 }, 
    { name: 'Alex', id: 2, age: 32 }, 
    { name: 'Benjamin', id: 3, age: 24 }
])
    res.send('<h1>Hello world</h1>')
})

app.listen(HOST, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('localhost:' + HOST);
})