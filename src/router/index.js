import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Telefonos from '../views/Telefonos.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/telefonos',
    name: 'telefonos',
    component: Telefonos
   
  }
]

const router = new VueRouter({
  routes
})

export default router
