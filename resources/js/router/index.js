import { createWebHistory, createRouter } from 'vue-router'

// Layouts
import NotAuthenticatedLayout from '../layouts/NotAuthenticatedLayout'

// Pages
import Home from '../pages/Home'

// Misc
import store from '../store/index'
import middlewarePipeline from './middlewarePipeline'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: NotAuthenticatedLayout
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
