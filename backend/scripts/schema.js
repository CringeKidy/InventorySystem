const mongo = require('mongoose');

const ItemSchema = new mongo.Schema({
    ItemName: String,
    ItemAmmount: String,
    ItemSKU: String
})

ItemTable = mongo.model('items', ItemSchema);



module.exports = {
    ItemTable,
    DeleteItem: async function(ItemName, ItemSKU){
        await ItemTable.deleteOne({ItemName, ItemSKU})
    }
}