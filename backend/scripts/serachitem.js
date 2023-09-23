const mongo = require('mongoose');
const { ItemTable } = require('./schema.js');

console.log(ItemTable)

module.exports = {
    SearchItem: function (ItemName) {
        console.log(ItemName)
    },
    SearchAllitems: function () {
        return ItemTable.find({}).then((data) => {
            return (data)
        }).catch((err) => {
            console.log('there was an error: ', err)
        })
    }
}