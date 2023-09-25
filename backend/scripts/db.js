const mongo = require('mongoose')
require('dotenv').config();

var ConnectURI = process.env.URI
ConnectURI = ConnectURI.replace(/\?/, process.env.TYPE + "?")

module.exports = {
    ConnectDB: function () {
        try{
            mongo.connect(ConnectURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(console.log("connected to DB!"))
       
        }catch(err){
            console.log('there was an error', err)
        }

        },
    DBStatus: function () {
        return mongo.connection.readyState
    }
}