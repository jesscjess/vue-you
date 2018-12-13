import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import NotFound from '../pages/404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    { 
      path: '*',
      name: "NotFound",
      component: NotFound
    }
  ]
})
