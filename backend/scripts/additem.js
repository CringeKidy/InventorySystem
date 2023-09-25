const mongo = require('mongoose');
const { ItemTable } = require('./schema.js');


module.exports = {
    Additem: function (inputData) {
        const ItemData = new ItemTable(inputData)
        ItemData.save().catch((err, data) => {
            if (err) throw err;
            return data
        })
    },
    DeleteItem: async function(ItemName, ItemSku){
        
        ItemName.find({ItemName, ItemSku}).then((res) => {
            console.log(res)
        })
        
        try{
            const result = await ItemTable.deleteOne({ItemName, ItemSku})
            console.log(result)


        }catch(err){
            console.log(err)
        }
        
    }
}