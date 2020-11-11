import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI)
Vue.config.productionTip = false

// const whiteList = ['/login','/register','/usageseal'] // 免登录白名单

// router.beforeEach((to, from, next) => {
//   console.log(to,from);
//   if (to.name == 'Home' && to.query.taskId) {
//     console.log('储存taskid')
//     sessionStorage.setItem('taskId', to.query.taskId)
//   }
//   if (to.matched.some(res => res.meta.requireAuth)) {
//     if (sessionStorage.getItem('esignmerchantsid')) {
//       next()
//     } else {
//       if (whiteList.indexOf(to.path) !== -1) {
//         next()
//       } else {
//         return next({
//           path: '/login'
//         })
//       }
//     }
//   } else {
//     next()
//   }
// })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
