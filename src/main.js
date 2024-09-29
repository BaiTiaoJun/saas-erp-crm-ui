import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'; // 引入element-ui组件库
import 'element-ui/lib/theme-chalk/index.css';  //倒入ui样式

//vue配置
Vue.config.productionTip = false
Vue.use(ElementUI) //全局引入element-ui组件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
