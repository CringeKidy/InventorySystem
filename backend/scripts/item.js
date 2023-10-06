const { connect } = require('mongoose');
const { ItemTable } = require('./schema.js');


module.exports = {
    Additem: function (inputData) {
        const ItemData = new ItemTable(inputData)
        ItemData.save().catch((err, data) => {
            if (err) throw err;
            return data
        })
    },
    DeleteItem: async function(ItemName, ItemSKU){

        await ItemTable.deleteOne({ItemName,ItemSKU})
       
    }
}