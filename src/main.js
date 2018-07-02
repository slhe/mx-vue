import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './interceptors/permission'
import './mock'

Vue.config.productionTip = false

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/iconfont/iconfont.css'
import 'jsoneditor/dist/jsoneditor.min.css'

import '@/styles/index.scss'

import components from './components/common'

Vue.use(Element)

//注册全局自定义组件
components.map(component => {
	Vue.component(component.name, component);
});


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
