import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: createEl => createEl(App)
}).$mount('#app-container');

