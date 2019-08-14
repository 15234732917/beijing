import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import HelloWorld from '@/components/HelloWorld'

const login = resolve => require(['../page/login.vue'], resolve)
const home = resolve => require(['../page/home.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
      redirect:'/login',
      children: [
        {
          path: '/login',
          name: '/login',
          component :login
        },
        {
          path: '/home',
          name: '/home',
          component: home
        }
      ]
    }
  ]
})
