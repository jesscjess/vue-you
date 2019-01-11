import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import NewProject from '../pages/NewProject'
import ProjectView from '../pages/ProjectView'
import Resume from '../pages/Resume'
import Reviews from '../pages/Reviews'
import Contact from '../pages/Contact'
import Admin from '../pages/Admin'
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
      path: '/project/:id',
      name: 'ProjectView',
      component: ProjectView
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
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    // Note: not on nav bar
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/new-project',
      name: 'NewProject',
      component: NewProject
    },
    { 
      path: '*',
      name: "NotFound",
      component: NotFound
    }
  ]
})
