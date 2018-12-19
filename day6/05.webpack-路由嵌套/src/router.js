// 1 导入vue-router
import VueRouter from 'vue-router'

import account from './main/account.vue'
import goodslist from './main/goodslist.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'

// 3创建路由对象
var router = new VueRouter({
    routes:[
       //  account goodslist
       {path:'/account',component:account,children:[
           {
               path:'login',
               component:login
           },
           {
               path:'register',
               component:register
           }
       ]},
       {path:'/goodslist',component:goodslist}
    ]
})
export default router;