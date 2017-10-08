import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import projectManager from '@/components/projectManager'
import about from '@/components/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      name: 'day',
      path: '/day/:day',
      component: projectManager
    },
    {
      name: 'about',
      path: '/about',
      component: about
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
