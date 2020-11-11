import Vue from 'vue'	//引入vue
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/pages/home/index.vue'
//登录
import Login from '@/pages/login/login.vue'
// 投递
import Delivery from '@/pages/taskCenter/delivery.vue'
// 发布
import Release from '@/pages/taskCenter/release.vue'
// 签约
import Signing from '@/pages/contract/signing.vue'
// 发布
import RepairOrder from '@/pages/trading/repairOrder.vue'
// 签约
import Trading from '@/pages/trading/trading.vue'

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/taskCenter/delivery', name: 'delivery', component: Delivery },
    { path: '/taskCenter/release', name: 'release', component: Release },
    { path: '/contract/signing', name: 'signing', component: Signing },
    { path: '/trading/repairOrder', name: 'repairOrder', component: RepairOrder },
    { path: '/trading/trading', name: 'trading', component: Trading },
    { path: '/login', name: 'Login', meta: { requireAuth: true},component: Login},
  ]
})