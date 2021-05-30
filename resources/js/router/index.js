import { createWebHistory, createRouter } from 'vue-router'

// Layouts
import NotAuthenticatedLayout from '../layouts/NotAuthenticatedLayout'
import AuthenticatedLayout from '../layouts/AuthenticatedLayout'

// Pages
import Splash from '../pages/Splash'
import Login from '../pages/Login'
import Home from '../pages/Home'
import User from '../pages/User'

// Misc
import store from '../store/index'

// Middleware
import middlewarePipeline from './middlewarePipeline'
import auth from './middleware/auth.js'

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: Splash,
    meta: {
      layout: NotAuthenticatedLayout
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: NotAuthenticatedLayout
    }
  },

  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      middleware: [
        auth
      ],
      layout: AuthenticatedLayout
    }
  },

  {
    path: '/:username?',
    name: 'User',
    component: User,
    meta: {
      layout: AuthenticatedLayout
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
