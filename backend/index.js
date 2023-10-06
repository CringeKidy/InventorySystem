const express = require('express');
const { ConnectDB, DBStatus } = require('./scripts/db');
const { TempDBConnect } = require('./scripts/tempdb');

const { Additem, DeleteItem } = require('./scripts/item.js')
const { SearchItem, SearchAllitems } = require('./scripts/serachitem.js')

const app = express()
const cors = require('cors')
const bodyparser = require("body-parser");
var port = process.env.PORT

require('dotenv').config();

if (process.env.DEP === "laptop") {
    TempDBConnect();
}
else{
    ConnectDB();
}



app.use(cors())
app.options("*", cors())
app.use(bodyparser.json())

app.get('/status', (req, res) => {
    res.send(`<p>This the connection status: ${DBStatus()}</p>`)
})

app.post('/api/additem', (req, res) => {
    console.log("Got IT!")

    Additem(req.body)
    res.sendStatus(200)
})

app.post('/api/deleteitem', (req, res) => {
    const data = req.body    
    const ItemName = data.ItemName
    const ItemSKU = data.ItemSKU

    DeleteItem(ItemName, ItemSKU)
    res.sendStatus(200)
})

app.get('/api/getallitems', (req, res) => {
    SearchAllitems().then(data => {
        res.send(data)
    })
})



app.get('/', (req, res) => {
    res.send(200)
})


app.listen(port, () => { console.log(`website listening on http://localhost:${port}`) })