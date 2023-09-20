<template>
  <div>
    <h1>Invetory System</h1>
    <h2>This is where you can Mange your Invetory</h2>

    <nav>
      <router-link to="/additem">Add Item</router-link>
      <router-link to="/deleteitem">Delete Item</router-link>
      <router-link to="/searchitem">Search for item</router-link>
      <router-link to="/database">View all items</router-link>
    </nav>

    
    <router-view/>
  </div>
</template>

<style>
  buttons{
    display:inline-flex;
    justify-content: space-evenly;
  }
</style>
