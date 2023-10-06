const mongo = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');


module.exports = {
    async TempDBConnect() {
        const mongod = await MongoMemoryServer.create({
            instance: {
                port: 3031
            }
        });
        const URI = mongod.getUri();

        console.log('Temp database running on http://localhost:3031')
        mongo.connect(URI, { dbName: "dev", useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log("Connected to DB") }).catch((err) => { console.log("there was an error: ", err) })
    }
}