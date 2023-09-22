const express = require('express');
const { ConnectDB, DBStatus } = require('./scripts/db');
const { Additem } = require('./scripts/additem.js')
const app = express()
const cors = require('cors')
const bodyparser = require("body-parser")
var port = process.env.PORT


require('dotenv').config();
//ConnectDB();

app.use(cors())
app.options("*", cors())
app.use(bodyparser.json())

app.get('/status', (req, res) => {
    res.send(`<p>This the connection status: ${DBStatus()}</p>`)
})

app.post('/api/additem', (req, res) => {
    console.log("Got IT!")

    Additem(req.body)



    res.send(200)
})


app.get('/', (req, res) => {
    res.send(200)
})


app.listen(port, () => { console.log(`listening on http://localhost:${port}`) })