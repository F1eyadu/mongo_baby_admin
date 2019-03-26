import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/admin/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "Index" */ '@/views/index.vue'),
      meta: {
        title: '系统首页'
      },
      children: [
        {
          path: 'admin',
          name: 'admin',
          component: () => import(/* webpackChunkName: "admin" */ '@/views/admin/index.vue'),
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/login.vue'),
      meta: {
        title: '系统登录'
      }
    }
  ]
})
