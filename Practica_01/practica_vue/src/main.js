import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Auth from './config/auth'

// librerias del usuario

import 'bootstrap/dist/css/bootstrap.css'
// import fireApp from './config/_firebase'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    console.log('Necesita permisos para entrar')
    let user = Auth.checkUser()

    console.log(user)

    if (user == null) {
      console.log('Angry Session')
      next({
        name: 'Login'
      })

      return null
    }

    next()
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
