<template>
    <div class="form-container">
    <h1 class="form-title">Add a new Item</h1>
    <form @submit.prevent>
        <P style="color: red;">All Items marked with * are required</P>
        <label class="form-label">Add a New Item</label>
        <ul class="form-list">
            <li class="form-field">
                <div style="display: inline-flex;">
                    <p style="color: red; padding-right: 5px;">*</p>
                    <p class="field-label">Item Name</p>
                </div>
                
            <input type="text" class="text-input" v-model="ItemName"   placeholder="Item Name" required/>
            </li>
            <li class="form-field">
                <div style="display: inline-flex;">
                    <p style="color: red; padding-right: 5px;">*</p>
                    <p class="field-label">Item Ammount</p>
                </div>
            <input type="text" class="text-input" v-model="ItemAmmount" placeholder="Item Amount" required/>
            </li>
            <li class="form-field">
            <p class="field-label">Item SKU</p>
            <input type="text" class="text-input" v-model="ItemSKU" placeholder="Item SKU" />
            </li>
        </ul>
        <button class="submit-button" name="SubmitButton" @click="test">Submit</button>
    </form>
  </div>
</template>

<style>
.form-container {
    margin: 0 auto;
    max-width: 400px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f8f8f8;
  }

  .form-title {
    font-size: 28px;
    color: #007BFF;
    margin-bottom: 20px;
  }

  .form-label {
    font-weight: bold;
    color: #28A745;
  }

  .form-list {
    list-style-type: none;
    padding: 0;
  }

  .form-field {
    margin-bottom: 15px;
  }

  .text-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #17A2B8;
    border-radius: 5px;
    background-color: #E2F3F5;
    color: #333;
  }

  .text-input:focus {
    border-color: #007BFF;
  }

  .submit-button {
    background-color: #DC3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 12px 20px;
    cursor: pointer;
    font-size: 16px;
  }

  .submit-button:hover {
    background-color: #C82333;
  }
</style>


<script> 
import axios from 'axios'


export default{
    name: "additem",
    methods: {
        test: function(){

            console.log(this.ItemName, this.ItemAmmount, this.ItemSKU)

            var ItemName = this.ItemName
            var ItemAmmount = this.ItemAmmount
            var ItemSKU = this.ItemSKU

            if(!ItemName || !ItemAmmount){
                alert("Please Fill in All Required Feilds.")
            }

            axios.post(
                'http://localhost:3030/api/additem',{
                    ItemName,
                    ItemAmmount,
                    ItemSKU
                },
                {
                    headers:{
                        'Access-Control-Allow-Origin': "http://localhost:8080/additem"
                    }
                }
            )
            .then((res) => {
                console.log(res)
            })
        
        }
    },
    data() {
        return{
            ItemName: "",
            ItemAmmount: "",
            ItemSKU: ""
        }
    }
}
</script>