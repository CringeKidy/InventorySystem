const mongo = require('mongoose')
require('dotenv').config();

const ConnectURI = process.env.URI

module.exports = {
    ConnectDB: function () {
        mongo.connect(ConnectURI + '/dev').then(console.log("connected to DB!")).catch((err) => { console.log('Error Connecting to DB', err) })
    }
}