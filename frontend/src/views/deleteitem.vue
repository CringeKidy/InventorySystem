<template>
    <div>
        <div class="form-container">
            <h1 id="form-title">Delete an item</h1>
            <h2 id="form-warning">This can not be undone.</h2>
            <form @submit.prevent>
                <p style="color: red;">All Items marked with * are required</p>
                <label class="form-label">Delete an Item</label>
                <ul class="form-list">
                    <li class="form-feild">
                        <div style="display: inline-flex;">
                            <p style="color: red; padding-right: 5px;">*</p>
                            <p class="field-label">Item Name</p> 
                        </div>

                        <input type="text" class="text-input" v-model="TextInput" v-on:input="FindItem()" placeholder="Please start typing item name.">
                        
                        <div class="form-search">
                            <ul class="form-serach" v-if="filteredItems.length > 0">
                                <li @click="ItemClicked(item)" class="form-Searchfeild" v-for="item in this.filteredItems" :key="item">{{ item }}</li>
                            </ul>

                            <label v-else>No results Found</label>
                        </div>

                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>

<style>
.form-search{
    padding-top: 10px;
}


</style>

<script> 
import axios from "axios"

export default{
    name: "deleteitem",
    async mounted() {
        var DatabaseRequest = await axios.get('http://localhost:3030/api/getallitems')        
        var DatabaseData = DatabaseRequest.data;

        console.log(DatabaseRequest)


        this.ItemList.push(DatabaseData);
        console.log(this.ItemList)

        
    
    },
    methods: {
        FindItem: function(){
            var filter = this.List.filter(item => item.includes(this.TextInput))

            if(filter.length > 0){
                filter.forEach(item =>{
                    this.filteredItems.push(item)
                })
            }
            else{
                this.LabelText = "No Results found. "
            }
        },
        ItemClicked: function(item){
            console.log('item clicked:', item)

            // axios({
            //     uri: "http://localhost:3030/api/searchitem",
            //     data:{
            //         ItemName: Item
            //     }
            // })

        }
    },
    data() {
        return {
            TextInput:"",
            filteredItems: [],
            ItemList:[]
            
        }
    }
}
</script>