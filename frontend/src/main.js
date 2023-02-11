// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import 'material-icons/iconfont/material-icons.css';
/**does not appear to work */
//import 'material-design-icons-iconfont/dist/material-design-icons.css'
//import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue'
import App from './App'
//import VueRouter from 'vue-router'
// import D3Node from '@/components/D3NodeForm'
import router from './router'
//import VueShortKey from 'vue-shortkey'
import { FocusTrap } from 'focus-trap-vue'
import vuetify from './plugins/vuetify'
import VueCookies from 'vue-cookies'
// import D3Edge from '@/components/D3EdgeForm'
//Vue.use(VueShortKey)
Vue.use(VueCookies)
Vue.component('FocusTrap', FocusTrap)
// Vue.config.productionTip = false

/* eslint-disable no-new */
/*
new Vue({
  el: '#d3vim',
  router,
  components: { D3Vim },
  template: '<Vim/>'
})
*/

/* eslint-disable no-new */
// Vue.use(VueRouter)
// const router = new VueRouter({
//   mode: 'history',
//   routes: [{
//       path: '/test',
//       component: DagreGraphLib,
//       // children: [
//       //   {path: 'login', component: Login},
//       //   {path: 'edgeform', component: D3Edge}
//       // ]
//       components: {
//         default: DagreGraphLib,
//         edgeform: D3Edge,
//         nodeform: Login
//       },
//       props: {
//         edgeform: { name: 'D3Edge'},
//         login: { name: 'login'}
//       }
//     },
//     {
//       path: 'vim',
//       component: D3Vim
//     }]
// })

new Vue({
  el: '#app',
  router,
  // components: { App },
  // mounted () {
  // },
  //template: '<App/>',
  vuetify,
  render: h => h(App)
})
