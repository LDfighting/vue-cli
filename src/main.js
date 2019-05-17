import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/font/iconfont.css'

import { Tab, TabItem } from 'vux/src/components/tab'
import  Badge  from 'vux/src/components/badge'
import  Alert  from 'vux/src/components/alert'

Vue.component('badge', Badge)
Vue.component('alert', Alert)

Vue.component('tab', Tab)
Vue.component('tabItem', TabItem)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
