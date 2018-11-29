import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProTools from '@/pages/ProTools';
import KeyWord from '@/pages/KeyWord';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/protools',
      name: 'ProTools',
      component: ProTools
    },
    {
      path:'/keyword',
      name:'KeyWord',
      component:KeyWord
    }
  ]
})
