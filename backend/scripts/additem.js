const mongo = require('mongoose');

const ItemSchema = new mongo.Schema({
    ItemName: String,
    ItemAmmount: String,
    ItemSKU: String
})

ItemTable = mongo.model('items', ItemSchema);

module.exports = {
    Additem: function (inputData) {
        const ItemData = new ItemTable(inputData)
        ItemData.save().catch((err, data) => {
            if (err) throw err;
            return data
        })
    }
}