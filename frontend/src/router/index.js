import { createRouter, createWebHistory } from 'vue-router'
import additem from '../views/additem.vue'
import database from '../views/database.vue'
import deleteitem from '../views/deleteitem.vue'
import searchitem from '../views/searchitem.vue'


const routes = [
  { path: '/database', component: database },
  { path: '/additem', component: additem },
  { path: '/deleteitem', component: deleteitem },
  { path: '/searchitem', component: searchitem }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
