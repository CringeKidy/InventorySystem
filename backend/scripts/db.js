const mongo = require('mongoose')
require('dotenv').config();

var ConnectURI = process.env.URI
ConnectURI = ConnectURI.replace(/\?/, process.env.TYPE + "?")

module.exports = {
    ConnectDB: function () {
        mongo.connect(ConnectURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(console.log("connected to DB!")).catch((err) => { console.log('Error Connecting to DB', err) })
    },
    DBStatus: function () {
        return mongo.connection.readyState
    }
}