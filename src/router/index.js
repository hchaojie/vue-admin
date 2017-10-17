import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import Tasks from '@/views/Tasks'
import EmployeeList from '@/views/employee/EmployeeList'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: '主页',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: '仪表盘',
          component: Dashboard
        },
        {
          path: 'views',
          redirect: '/views/tasks',
          name: '任务管理',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'tasks',
              name: '任务列表',
              component: Tasks
            }
          ]
        },
        {
          path: 'views/employee',
          redirect: '/views/employee/list',
          name: '员工管理',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'list',
              name: '员工列表',
              component: EmployeeList
            }
          ]
        }
      ]
    }
  ]
})
