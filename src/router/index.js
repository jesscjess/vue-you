import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'
import Reviews from '../pages/Reviews'
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
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: Reviews
    },
    // TODO: Create contact page
    // {
    //   path: '/contact',
    //   name: 'Contact',
    //   component: Contact
    // },
    { 
      path: '*',
      name: "NotFound",
      component: NotFound
    }
  ]
})
