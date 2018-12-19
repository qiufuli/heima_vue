import Vue from 'vue'

// 1 导入vue-router
 import VueRouter from 'vue-router'
// 2 手动安装下
Vue.use(VueRouter);

import app from './App.vue'
import account from './main/account.vue'
import goodslist from './main/goodslist.vue'

// 3创建路由对象
var router = new VueRouter({
     routes:[
        //  account goodslist
        {path:'/account',component:account},
        {path:'/goodslist',component:goodslist}
     ]
})
var vm = new Vue({
    el:'#app',
    // render 会把el指定的容器中所有内容都清空覆盖 所以不要把路由的 router-view 和router-link 直接写到el所控制的元素中
    render:c => c(app),
    // 4将路由对象挂载到wm上
    router 
})
// 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
// Account 和 GoodsList 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 <router-view></router-view> 中去；