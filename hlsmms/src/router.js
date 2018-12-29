import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//引入登录组件
import login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/login',
      name:'login',
      component:login

    },
    {
      path:'/useradd',
      //添加用户
      //异步加载 栏加载 需要时候才加载  目的节约内存
      component: ()=> import(/* webpackChunkName: "UserAdd" */ './views/UserAdd.vue')   
    },
    {
      path:'/userlist',
      component:()=> import(/* webpackChunkName: "UseeList" */'./views/UserList.vue')
    },
    {
      path:'/pwdedit',
      component:()=> import(/* webpackChunkName: "PwdEdit" */'./views/UserPedEdit.vue')
    },
    //分类管理路由
    {
      path:'/classManagement',
      component:()=> import(/*webpackChunkName: "ClassManagement"*/'./views/ClassManagement.vue')
    },
    // 添加分类路由
      {
        path:'/addmanagement',
        component:()=>import(/*webpackChunkName:"Addmanagement" */'./views/Addmanagement.vue')
      },
      {
        path:'/goodsmanage',
        component:()=>import(/*webpackChunkName:"Goodsmanage" */'./views/Goodsmanage.vue')
      },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
