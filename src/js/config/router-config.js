import Vue from 'vue'
import VueRouter from 'vue-router'

import page404 from '@/components/error-pages/404'
import appBlank from '@/components/app/app-blank'

const _import = require('@/js/common/_import_' + process.env.NODE_ENV)// 获取组件的方法

let getRouter, router

Vue.use(VueRouter)

const initRouter = () => {
  const routerParam = {
    mode: 'hash',
    routes: [{
      path: '/login',
      name: 'Login',
      component: (resolve) => require(['components/login/index'], resolve)
    }, {
      path: '/',
      redirect: 'Home',
      component: (resolve) => require(['components/app/app-frame'], resolve),
      children: []
    }]
  }

  router = new VueRouter(routerParam)

  router.beforeEach((to, from, next) => {
    HeyUI.$LoadingBar.start()
    if (getRouter) {
      next()
    } else {
      R.user.getMenu().then(res => {
        getRouter = res.body
        routerGo(to, next)
      })
    }
  })

  router.afterEach((to, from) => {
    if (to.meta && to.meta.title) {
      document.title = to.meta.title + ' - 管理应用'
    } else {
      document.title = '管理系统'
    }
    HeyUI.$LoadingBar.success()
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    let layoutContent = document.querySelector('.h-layout-content')
    if (layoutContent) {
      layoutContent.scrollTop = 0
    }
  })
  return router
}

function routerGo(to, next) {
  getRouter = filterAsyncRouter(getRouter) // 过滤路由
  getRouter.push({
    path: '*',
    name: 'CommonNotfoundError',
    component: (resolve) => require(['components/error-pages/404'], resolve),
    meta: { title: '页面找不到' }
  })
  getRouter.filter(route => {
    if (route.name !== undefined) {
      router.options.routes.find((item) => item.path === '/').children.push(route)
    }
  })
  router.addRoutes(router.options.routes)

  if (to.path === '/user/login') {
    next({ path: '/' })
  } else {
    next({ ...to, replace: true })
  }
}

function filterAsyncRouter(asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.children) { // Layout组件特殊处理
        route.component = appBlank
      } else {
        try {
          route.component = _import(route.component)
        } catch (e) {
          route.component = page404
        }
      }
    } else {
      route.component = appBlank
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  return accessedRouters
}

export default initRouter
