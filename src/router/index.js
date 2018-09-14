import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Login from '@/components/Login'
import NotFound from '@/components/404'
import menu_header from '@/components/back_base'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      component: Login,
      name: 'Login',
      hidden: true
    },
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },

    {
      path: '/manage',
      component: menu_header,
      name: '导航一',
      iconCls: 'el-icon-message',//图标样式class
      // children: [
      //   { path: '/main', component: Main, name: '主页', hidden: true },
      //   { path: '/table', component: Table, name: 'Table' },
      //   { path: '/form', component: Form, name: 'Form' },
      //   { path: '/user', component: user, name: '列表' },
      // ]
    },


  ],
  mode:"history"
})
