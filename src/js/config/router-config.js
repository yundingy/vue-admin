import Vue from 'vue'
import VueRouter from 'vue-router'
import demoComponents from './demo-components'

import page404 from '@/components/error-pages/404'
import appFrame from '@/components/app/app-frame'
import appBlank from '@/components/app/app-blank'

const _import = require('@/js/common/_import_' + process.env.NODE_ENV)// 获取组件的方法

let getRouter, router

Vue.use(VueRouter)

const initRouter = () => {
  const routerParam = {
    mode: 'history',
    routes: [{
      path: '/login',
      name: 'Login',
      component: (resolve) => require(['components/login/index'], resolve)
    }, {
      path: '/',
      component: (resolve) => require(['components/app/app-frame'], resolve),
      children: [{
        path: '',
        name: 'Home',
        component: (resolve) => require(['components/home/index'], resolve),
        meta: { title: '首页', icon: 'icon-monitor' }
      }, {
        path: '/system-error',
        name: 'SystemError',
        component: (resolve) => require(['components/error-pages/500'], resolve),
        meta: { title: '系统错误' }
      }, {
        path: '/permission-error',
        name: 'PermissionError',
        component: (resolve) => require(['components/error-pages/403'], resolve),
        meta: { title: '权限错误' }
      },
        {
          path: '/notfound-error',
          name: 'NotfoundError',
          component: (resolve) => require(['components/error-pages/404'], resolve),
          meta: { title: '页面找不到' }
        }, {
          path: '/authorization',
          name: 'Authorization',
          component: (resolve) => require(['components/management/authorization'], resolve),
          meta: { title: '权限管理' }
        }, {
          path: '/users',
          name: 'Users',
          component: (resolve) => require(['components/management/users'], resolve),
          meta: { title: '用户管理' }
        },
        ...demoComponents]
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
    console.log(router)
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
