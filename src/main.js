import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/index.js'
import Version from './plugins/version.js'

const update = () => {
  alert(1)
}
const version = new Version('2022', update)
console.log(version)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
