const express = require('express');
const cors = require('cors')

let app = express()
app.use(cors())
const HOST = 5000

app.get('/workers', (req, res) => {
    res.json([
    { username: 'Sam', id: 1 }, 
    { username: 'Alex', id: 2 }, 
    { username: 'Benjamin', id: 3 }
])
    res.send('<h1>Hello world</h1>')
})

app.listen(HOST, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('localhost:' + HOST);
})