import Vue from 'vue'

import App from './app.vue'
import './styles/styles.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
