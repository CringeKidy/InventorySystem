const express = require('express');
const { ConnectDB } = require('./scripts/db');

require('dotenv').config();

ConnectDB();

const app = express()
var port = process.env.PORT

app.get('/', (req, res) => {
    res.send(200)
})


app.listen(port, () => { console.log(`listening on http://localhost:${port}`) })