<template>
  <div>
    <div class="form-container">
      <h1 id="form-title">Delete an item</h1>
      <h2 id="form-warning">This can not be undone.</h2>
      <form @submit.prevent>
        <p style="color: red">All Items marked with * are required</p>
        <label class="form-label">Delete an Item</label>
        <ul class="form-list">
          <li class="form-feild">
            <div style="display: inline-flex">
              <p style="color: red; padding-right: 5px">*</p>
              <p class="field-label">Item Name</p>
            </div>

            <input
              type="text"
              :readonly="this.ItemNameDisabled"
              :style="{
                backgroundColor: itemIsClicked,
                color: itemIsClickedtext,
              }"
              class="text-input"
              v-model="ItemNameText"
              v-on:input="FindItem()"
              placeholder="Please start typing item name."
            />

            <div class="form-search">
              <ul class="form-serach" v-if="filteredItems.length > 0">
                <li
                  @click="ItemClicked(item)"
                  class="form-Searchfeild"
                  v-for="item in this.filteredItems"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>

              <label v-show="ItemNameClicked" v-if="filteredItems.length < 1"
                >No results Found</label
              >
            </div>
          </li>
          <li class="form-feild">
            <div style="display: inline-flex">
              <p style="color: red; padding-right: 5px">*</p>
              <p class="field-label">Item SKU</p>
            </div>

            <input
              type="text"
              :readonly="this.ItemSKUDisabled"
              :style="{
                backgroundColor: itemIsClicked,
                color: itemIsClickedtext,
              }"
              class="text-input"
              v-model="ItemSKUText"
              v-on:input="FindSKU()"
              placeholder="Please start typing item SKU."
            />

            <div class="form-search">
              <ul class="form-serach" v-if="filteredSKUs.length > 0">
                <li
                  @click="SKUClicked(sku)"
                  class="form-Searchfeild"
                  v-for="sku in this.filteredSKUs"
                  :key="sku"
                >
                  {{ sku }}
                </li>
              </ul>

              <label v-show="ItemSKUClicked" v-else>No results Found</label>
            </div>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<style>
.form-search {
  padding-top: 10px;
}
</style>

<script>
import axios from "axios";

export default {
  name: "deleteitem",
  async mounted() {
    var DatabaseRequest = await axios.get(
      "http://localhost:3030/api/getallitems"
    );
    var DatabaseData = DatabaseRequest.data;
    this.ItemList.push(DatabaseData);
  },
  methods: {
    FindItem: function () {
      this.ItemList.filter((item) => {
        this.ItemNameClicked = true;

        const itemsFiltered = item.filter((data) =>
          data.ItemName.includes(this.ItemNameText)
        );

        if (!this.ItemNameText) return;

        this.filteredItems = [];

        if (itemsFiltered.length === 0) return;

        for (let i = 0; i < itemsFiltered.length; i++) {
          const currentitem = itemsFiltered[i];

          this.filteredItems.push(currentitem.ItemName);
        }
      });
    },
    FindSKU: function () {
      this.ItemList.filter((item) => {
        this.ItemSKUClicked = true;

        const SKUFiltered = item.filter((data) =>
          data.ItemSKU.includes(this.ItemSKUText)
        );

        if (!this.ItemSKUText) return;

        this.filteredSKUs = [];

        if (SKUFiltered.length === 0) return;

        for (let i = 0; i < SKUFiltered.length; i++) {
          const currentitem = SKUFiltered[i];

          this.filteredSKUs.push(
            `Item Name: ${currentitem.ItemName}. Item SKU: ${currentitem.ItemSKU}`
          );
          console.log(this.filteredSKUs.length);
        }
      });
    },
    ItemClicked: function (item) {
      this.ItemNameClicked = false;
      this.ItemNameDisabled = true;
      this.ItemNameText = item;

      this.ItemList.filter((data) => {
        for (let i = 0; i in data; i++) {
          const currentitem = data[i];

          if (currentitem.ItemName === item) {
            this.ItemSKUText = currentitem.ItemSKU;
          }
        }
      });

      this.itemIsClicked = "grey";
      this.itemIsClickedtext = "white";
    },
    SKUClicked: function (part) {
      this.ItemNameDisabled = true;
      this.ItemSKUDisabled = true;
      this.ItemSKUClicked = false;
      this.itemIsClicked = "grey";
      this.itemIsClickedtext = "white";

      part = part.split("Item");

      var ItemName = part[1].split("Name: ").slice(1);
      var ItemSku = part[2].split("SKU: ").slice(1);

      this.ItemNameText = ItemName;
      this.ItemSKUText = ItemSku;
    },
  },
  data() {
    return {
      ItemNameText: "",
      ItemSKUText: "",
      filteredItems: [],
      filteredSKUs: [],
      ItemList: [],
      ItemNameClicked: false,
      ItemNameDisabled: false,
      ItemSKUClicked: false,
      ItemSKUDisabled: false,
      itemIsClicked: "",
      itemIsClickedtext: "",
    };
  },
};
</script>