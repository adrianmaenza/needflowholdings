import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'


// Pages
import home from './components/pages/Home.vue'
import finance from './components/pages/Finance.vue'
import contact from './components/pages/Contact.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path : '/', component: home},
  {path : '/finance', component: finance},
  {path : '/contact', component: contact},
]

const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
