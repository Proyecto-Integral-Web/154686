import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// Importamos nuevas vistas.
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    // Se le asigna una nueva ruta, sus nombres deben ser únicos.
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      // Se utiliza para controlar el acceso.
      authorization: false
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
