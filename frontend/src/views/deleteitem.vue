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

                        <input type="text" class="text-input" v-model="TextInput" placeholder="Please start typing item name.">
                        
                        <div class="form-search">
                            <label  @click="test()">No Results Found.</label>
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
export default{
    name: "deleteitem",
    methods: {
        test: function(){
            console.log(this.List, this.TextInput)
        }
    },
    data() {
        return {
            List: ["Apple", "Orange", "Banna", "Osometing", "Bsomething"],
            TextInput:""
            
        }
    }
}
</script>