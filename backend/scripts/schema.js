const mongo = require('mongoose');

const ItemSchema = new mongo.Schema({
    ItemName: String,
    ItemAmmount: String,
    ItemSKU: String
})

ItemTable = mongo.model('items', ItemSchema);



module.exports = {
    ItemTable,
    DeleteItem: async function(ItemName, ItemSku){
        try{
            const result = await ItemTable.deleteOne({ItemName, ItemSku})
            console.log(result)


        }catch(err){
            console.log(err)
        }
        
    }
}