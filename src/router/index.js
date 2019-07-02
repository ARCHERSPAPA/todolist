import Vue from 'vue'
import Router from 'vue-router'
import wait from '@/pages/waittodo/wait.vue'
import index from '@/pages/index/index.vue'
import done from '@/pages/done/done.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },

    {
      path: '/wait',
      name: 'wait',
      component: wait
    },
    {
      path: '/done',
      name: 'done',
      component: done
    },
    
  ]
})
