import Vue from 'vue'
import App from './App.vue'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.use(VueLodash, { lodash: lodash })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
